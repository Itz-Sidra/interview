/**
 * interview.js — Fixed
 *
 * Changes from original:
 *  - All fetch() calls replaced with authFetch() from authHelper
 *  - Token retrieved via getToken() instead of localStorage.getItem() in each call
 *  - requireAuth() guard at top
 *  - No sessionStorage references
 */

import { API_BASE } from "./config.js";
import { requireAuth, authFetch, getToken } from "./authHelper.js";

requireAuth();

class InterviewBot {
  constructor() {
    this.ttsQueue           = [];
    this.isSpeaking         = false;
    this.isInterviewActive  = false;
    this.interviewStartTime = null;
    this.timerInterval      = null;
    this.selectedTimeLimit  = 0;
    this.chatHistory        = [];
    this.webcamStream       = null;
    this.isMicMuted         = false;
    this.currentInterviewId = localStorage.getItem("currentInterviewId") || null;
    this.lastQuestion       = null;
    this.mediaRecorder      = null;
    this.audioChunks        = [];

    this.initializeElements();
    this.bindEvents();
    this.initializeWebcam();
    this.loadTheme();
    this.addWelcomeMessage();
  }

  /* ── DOM ─────────────────────────────────────────────────── */
  initializeElements() {
    this.timerDisplay  = document.getElementById("timerDisplay");
    this.timerBtns     = document.querySelectorAll(".timer-btn");
    this.webcamPreview = document.getElementById("webcamPreview");
    this.webcamPlaceholder = document.getElementById("webcamPlaceholder");
    this.micToggleBtn  = document.getElementById("micToggleBtn");
    this.chatMessages  = document.getElementById("chatMessages");
    this.chatInputForm = document.getElementById("chatInputForm");
    this.userInput     = document.getElementById("userInput");
    this.startBtn      = document.getElementById("startBtn");
    this.askAgainBtn   = document.getElementById("askAgainBtn");
    this.stopBtn       = document.getElementById("stopBtn");
    this.reportBtn     = document.getElementById("reportBtn");
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
  }

  bindEvents() {
    this.timerBtns.forEach((btn) => btn.addEventListener("click", (e) => this.setTimeLimit(e)));
    this.micToggleBtn?.addEventListener("click",  () => this.toggleRecording());
    this.chatInputForm?.addEventListener("submit", (e) => this.handleChatSubmit(e));
    this.userInput?.addEventListener("input",     () => this.autoResizeTextarea());
    this.startBtn?.addEventListener("click",      () => this.startInterview());
    this.askAgainBtn?.addEventListener("click",   () => this.askAgain());
    this.stopBtn?.addEventListener("click",       () => this.stopInterview());
    this.reportBtn?.addEventListener("click",     () => this.generateReport());
    this.themeToggleBtn?.addEventListener("click",() => this.toggleTheme());
    document.addEventListener("keydown", (e) => this.handleKeyboardShortcuts(e));
  }

  /* ── Timer ───────────────────────────────────────────────── */
  setTimeLimit(e) {
    const minutes = parseInt(e.target.dataset.minutes);
    this.selectedTimeLimit = minutes;
    this.timerBtns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    this.timerDisplay.textContent = minutes === 0 ? "No Limit" : `${minutes}:00`;
  }

  startTimer() {
    if (this.selectedTimeLimit === 0) {
      this.timerDisplay.textContent = "00:00";
      this.timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - this.interviewStartTime) / 1000);
        const m = Math.floor(elapsed / 60), s = elapsed % 60;
        this.timerDisplay.textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
      }, 1000);
    } else {
      let remaining = this.selectedTimeLimit * 60;
      this.timerInterval = setInterval(() => {
        remaining--;
        const m = Math.floor(remaining / 60), s = remaining % 60;
        this.timerDisplay.textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
        if (remaining <= 0) {
          this.stopInterview();
          this.addMessage("bot", "Time's up! The interview has ended. You can now generate your performance report.");
        }
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }

  /* ── Webcam ──────────────────────────────────────────────── */
  async initializeWebcam() {
    try {
      this.webcamStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      this.webcamPreview.srcObject = this.webcamStream;
      this.webcamPreview.style.display = "block";
      this.webcamPlaceholder.style.display = "none";
    } catch {
      this.webcamPlaceholder.innerHTML = '<i class="fas fa-video-slash"></i><br><small>Camera not available</small>';
    }
  }

  /* ── Microphone / recording ──────────────────────────────── */
  async toggleRecording() {
    if (this.mediaRecorder && this.mediaRecorder.state === "recording") {
      this.mediaRecorder.stop();
      this.micToggleBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    } else {
      this.audioChunks = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      this.mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) this.audioChunks.push(e.data); };
      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.audioChunks, { type: "audio/webm" });
        this.sendAudioToTranscribe(blob);
      };
      this.mediaRecorder.start();
      this.micToggleBtn.innerHTML = '<i class="fas fa-stop"></i>';
    }
  }

  async sendAudioToTranscribe(blob) {
    const formData = new FormData();
    formData.append("audio", blob, "recording.webm");
    try {
      const res = await authFetch(`${API_BASE}/interview/transcribe`, {
        method: "POST",
        body:   formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "STT failed");
      this.userInput.value = data.transcript;
      this.userInput.focus();
      this.autoResizeTextarea();
    } catch (err) {
      console.error("Transcription error:", err);
      this.addMessage("bot", "Sorry, I couldn't understand your voice.");
    }
  }

  /* ── TTS ─────────────────────────────────────────────────── */
  enqueueTTS(text) {
    this.ttsQueue.push(text);
    if (!this.isSpeaking) this.playNextInQueue();
  }

  async playNextInQueue() {
    if (!this.ttsQueue.length) { this.isSpeaking = false; return; }
    this.isSpeaking = true;
    const text = this.ttsQueue.shift();
    try {
      if (text.length > 300) {
        for (const s of (text.match(/[^.!?]+[.!?]+/g) || [text])) {
          await this.playTTSWithPromise(s.trim());
        }
      } else {
        await this.playTTSWithPromise(text);
      }
    } catch (err) { console.error("TTS error:", err); }
    this.playNextInQueue();
  }

  playTTSWithPromise(text) {
    return new Promise((resolve) => {
      authFetch(`${API_BASE}/interview/speak`, {
        method: "POST",
        body:   JSON.stringify({ text }),
      })
        .then((r) => { if (!r.ok) throw new Error("TTS failed"); return r.blob(); })
        .then((blob) => {
          const audio = new Audio(URL.createObjectURL(blob));
          audio.onended = resolve;
          audio.onerror = resolve;
          audio.play();
        })
        .catch(() => resolve());
    });
  }

  /* ── Chat ────────────────────────────────────────────────── */
  addWelcomeMessage() {
    this.addMessage("bot", "<strong>Welcome to AI Interview Bot!</strong><br><br>I'm here to help you practice for your upcoming interview. Ready when you are!");
  }

  handleChatSubmit(e) {
    e.preventDefault();
    const msg = this.userInput.value.trim();
    if (!msg) return;
    this.addMessage("user", msg);
    this.userInput.value = "";
    this.autoResizeTextarea();
    this.processUserMessage(msg);
  }

  processUserMessage(message) {
    this.chatHistory.push({ role: "user", content: message });
    if (!this.isInterviewActive && this.isInterviewStartCommand(message)) {
      this.prepareInterview(message);
    } else if (this.isInterviewActive) {
      this.handleInterviewResponse(message);
    } else {
      this.handleGeneralResponse(message);
    }
  }

  isInterviewStartCommand(msg) {
    const l = msg.toLowerCase();
    return l.includes("interview") && (l.includes("practice") || l.includes("want to") || l.includes("apply") || l.includes("role"));
  }

  prepareInterview(message) {
    const role    = this.extractRole(message);
    const company = this.extractCompany(message);
    let reply = `Excellent! I understand you want to practice for `;
    if (role && company) reply += `a ${role} position at ${company}.`;
    else if (role)       reply += `a ${role} position.`;
    else if (company)    reply += `an interview at ${company}.`;
    else                 reply += `your upcoming interview.`;
    reply += `\n\nI'm ready to conduct a mock interview with you. Click "Start Interview" when you're ready!`;
    this.addMessage("bot", reply);
  }

  extractCompany(msg) {
    const companies = ["google","amazon","microsoft","apple","facebook","meta","netflix","tesla","uber","airbnb"];
    const l = msg.toLowerCase();
    for (const c of companies) if (l.includes(c)) return c.charAt(0).toUpperCase() + c.slice(1);
    return null;
  }

  extractRole(msg) {
    const roles = ["software engineer","software developer","frontend developer","backend developer","full stack developer","data scientist","product manager","designer","devops engineer"];
    const l = msg.toLowerCase();
    for (const r of roles) if (l.includes(r)) return r;
    return null;
  }

  handleGeneralResponse(message) {
    this.showTypingIndicator();
    setTimeout(() => {
      this.hideTypingIndicator();
      const reply = message.toLowerCase().includes("help")
        ? "I can help you practice for job interviews. Just tell me about the position you're applying for!"
        : "To get started, please tell me about the position you're interviewing for.";
      this.addMessage("bot", reply);
    }, 800);
  }

  addMessage(sender, content) {
    if (typeof content !== "string") content = "Something went wrong. Please try again.";
    const msgDiv    = document.createElement("div");
    msgDiv.className = `message ${sender}-message`;
    const bubbleDiv  = document.createElement("div");
    bubbleDiv.className = "message-bubble";
    bubbleDiv.innerHTML = content;
    msgDiv.appendChild(bubbleDiv);
    this.chatMessages.appendChild(msgDiv);
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    if (sender === "bot" && this.isInterviewActive) {
      this.enqueueTTS(content.replace(/<[^>]*>?/gm, ""));
    }
  }

  showTypingIndicator() {
    const d = document.createElement("div");
    d.className = "message bot-message typing-indicator";
    d.id = "typingIndicator";
    d.innerHTML = `<div class="message-bubble"><div class="loading-indicator">AI is thinking<div class="dot"></div><div class="dot"></div><div class="dot"></div></div></div>`;
    this.chatMessages.appendChild(d);
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
  }

  hideTypingIndicator() {
    document.getElementById("typingIndicator")?.remove();
  }

  autoResizeTextarea() {
    this.userInput.style.height = "auto";
    this.userInput.style.height = Math.min(this.userInput.scrollHeight, 120) + "px";
  }

  /* ── Interview flow ──────────────────────────────────────── */
  async ensureConfigExists() {
    let configId = localStorage.getItem("currentConfigId");
    if (configId) return configId;

    const res = await authFetch(`${API_BASE}/interview-config/basics`, {
      method: "POST",
      body:   JSON.stringify({
        durationMinutes: this.selectedTimeLimit || 10,
        difficulty:      "intermediate",
        type:            "technical",
      }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to create interview config");
    localStorage.setItem("currentConfigId", data.configId);
    return data.configId;
  }

  async startInterview() {
    try {
      this.currentInterviewId = this.currentInterviewId || localStorage.getItem("currentInterviewId");
      if (!this.currentInterviewId) throw new Error("Interview not initialized. Please go back and set up a new interview.");

      await authFetch(`${API_BASE}/interview/status`, {
        method: "POST",
        body:   JSON.stringify({ interviewId: this.currentInterviewId, status: "IN_PROGRESS" }),
      });

      this.isInterviewActive  = true;
      this.interviewStartTime = Date.now();
      this.startBtn.disabled  = true;
      this.stopBtn.disabled   = false;
      this.askAgainBtn.disabled = false;
      this.startTimer();

      setTimeout(async () => {
        const q = await this.fetchFirstQuestion();
        if (q) this.lastQuestion = q;
      }, 500);
    } catch (err) {
      console.error("Start interview failed:", err);
      this.addMessage("bot", `Failed to start interview: ${err.message}`);
    }
  }

  async fetchFirstQuestion() {
    const lastMsg = this.chatHistory.find((m) => m.role === "user" && this.isInterviewStartCommand(m.content));
    const message = lastMsg?.content || "I want to practice for a Software Engineer role";
    const role    = this.extractRole(message) || "Software Engineer";
    const company = this.extractCompany(message) || "";

    const res  = await authFetch(`${API_BASE}/interview/start`, {
      method: "POST",
      body:   JSON.stringify({ interviewId: this.currentInterviewId, role, company }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    this.currentInterviewId = data.interviewId;
    localStorage.setItem("currentInterviewId", data.interviewId);
    this.addMessage("bot", data.question);
    return data.question;
  }

  async handleInterviewResponse(userAnswer) {
    this.showTypingIndicator();
    try {
      const res  = await authFetch(`${API_BASE}/interview/answer`, {
        method: "POST",
        body:   JSON.stringify({ interviewId: this.currentInterviewId, answer: userAnswer }),
      });
      const data = await res.json();
      this.hideTypingIndicator();
      if (!res.ok) throw new Error(data.error || "Failed to get next question");

      if (data.done) {
        this.stopInterview();
        this.addMessage("bot", data.message || "Interview complete! Click 'Generate Report' to see your analysis.");
        return;
      }
      const nextQ = data.nextQuestion || "Could you elaborate on that?";
      this.addMessage("bot", nextQ);
      this.lastQuestion = nextQ;
    } catch (err) {
      console.error("Interview follow-up failed:", err);
      this.hideTypingIndicator();
      this.addMessage("bot", "Hmm, I ran into an issue. Could you please try again?");
    }
  }

  stopInterview() {
    this.isInterviewActive = false;
    this.stopTimer();

    const interviewId = this.currentInterviewId || localStorage.getItem("currentInterviewId");
    if (interviewId) {
      authFetch(`${API_BASE}/interview/status`, {
        method: "POST",
        body:   JSON.stringify({ interviewId, status: "COMPLETED" }),
      }).catch((e) => console.warn("Status update (non-fatal):", e.message));
    }

    this.startBtn.disabled    = false;
    this.stopBtn.disabled     = true;
    this.askAgainBtn.disabled = true;
    if (this.reportBtn) this.reportBtn.style.display = "inline-flex";

    const duration = Math.floor((Date.now() - this.interviewStartTime) / 1000);
    const m = Math.floor(duration / 60), s = duration % 60;
    this.addMessage("bot", `Interview completed! Duration: ${m}m ${s}s. Click "Generate Report" to see your performance analysis.`);
  }

  async askAgain() {
    if (!this.lastQuestion) return;
    this.addMessage("bot", "Please answer the previous question before asking for another.");
  }

  async generateReport() {
    const interviewId = this.currentInterviewId || localStorage.getItem("currentInterviewId");
    if (!interviewId) {
      this.addMessage("bot", "No interview ID found. Please complete an interview first.");
      return;
    }

    this.addMessage("bot", "Generating your interview performance report…");

    try {
      await authFetch(`${API_BASE}/interview/status`, {
        method: "POST",
        body:   JSON.stringify({ interviewId, status: "COMPLETED" }),
      }).catch(() => {});

      const res = await authFetch(`${API_BASE}/interview/report/${interviewId}`);
      const raw = await res.text();
      if (!res.ok) throw new Error(`Server ${res.status}: ${raw}`);

      const reportData = JSON.parse(raw);
      localStorage.setItem("latestReport", JSON.stringify(reportData));

      this.addMessage("bot", `
        <strong>Report ready!</strong><br><br>
        Overall Score: <strong>${reportData.ratings?.overall ?? "—"}</strong>/100<br>
        Redirecting to your dashboard in 3 seconds…
      `);
      setTimeout(() => { window.location.href = `dashboard1.html?id=${interviewId}`; }, 3000);
    } catch (err) {
      console.error("[generateReport] FAILED:", err);
      this.addMessage("bot", `Report generation failed: <strong>${err.message}</strong><br>
        <a href="dashboard1.html?id=${interviewId}" style="color:#60a5fa">Open the report page directly</a>.`);
    }
  }

  /* ── Theme ───────────────────────────────────────────────── */
  loadTheme() {
    if (localStorage.getItem("interview-bot-theme") === "dark") {
      document.body.classList.add("dark-mode");
      if (this.themeToggleBtn) this.themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }

  toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    if (this.themeToggleBtn) this.themeToggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem("interview-bot-theme", isDark ? "dark" : "light");
  }

  handleKeyboardShortcuts(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && document.activeElement === this.userInput) {
      this.chatInputForm.dispatchEvent(new Event("submit"));
    }
  }
}

document.addEventListener("DOMContentLoaded", () => { new InterviewBot(); });