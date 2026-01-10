class InterviewBot {
    constructor() {
        this.interviewActive = false;
        this.currentInterviewId = null;
        this.lastQuestion = null;
        this.uploadedResume = null;
        this.mockQuestionIndex = 0;

        this.mockQuestions = [
            "Tell me about yourself.",
            "Why do you want this role?",
            "What are your biggest strengths?",
            "Describe a challenging project you worked on.",
            "Where do you see yourself in 5 years?"
        ];

        this.mockFollowUps = [
            "That’s interesting. Can you elaborate?",
            "How would you approach a difficult team conflict?",
            "What motivates you to perform at your best?",
            "How do you stay updated with industry trends?",
            "Can you give me an example from your past experience?"
        ];

        this.mockReports = [
            {
                overall: 82,
                content: 78,
                confidence: 85,
                grammar: 90,
                emotions: ["calm", "confident"]
            },
            {
                overall: 70,
                content: 65,
                confidence: 75,
                grammar: 88,
                emotions: ["nervous", "thoughtful"]
            },
            {
                overall: 92,
                content: 90,
                confidence: 95,
                grammar: 93,
                emotions: ["confident", "engaging"]
            }
        ];
    }

    addMessage(sender, text) {
        const chat = document.getElementById("chatMessages");
        const msg = document.createElement("div");
        msg.className = sender === "bot" ? "bot-msg" : "user-msg";
        msg.innerText = text;
        chat.appendChild(msg);
        chat.scrollTop = chat.scrollHeight;
    }

    showTypingIndicator() {
        const chat = document.getElementById("chat-box");
        this.typingDiv = document.createElement("div");
        this.typingDiv.className = "typing";
        this.typingDiv.innerText = "InterviewBot is typing...";
        chat.appendChild(this.typingDiv);
        chat.scrollTop = chat.scrollHeight;
    }

    hideTypingIndicator() {
        if (this.typingDiv) {
            this.typingDiv.remove();
            this.typingDiv = null;
        }
    }

    startInterview() {
        this.interviewActive = true;
        this.currentInterviewId = "fake123"; // mock id
        this.mockQuestionIndex = 0;
        this.addMessage("bot", "Welcome to your mock interview! Let's get started.");
        this.fetchFirstQuestion();
    }

    stopInterview() {
        this.interviewActive = false;
        this.addMessage("bot", "Your interview has ended. Generating report...");
        setTimeout(() => this.generateReport(), 1500);
    }

    fetchFirstQuestion() {
        const q = this.mockQuestions[this.mockQuestionIndex % this.mockQuestions.length];
        this.addMessage("bot", q);
        this.lastQuestion = q;
    }

    handleUserAnswer(userAnswer) {
        if (!this.interviewActive) return;

        this.addMessage("user", userAnswer);
        this.showTypingIndicator();

        setTimeout(() => {
            this.hideTypingIndicator();

            this.mockQuestionIndex++;
            let nextQ;
            if (this.mockQuestionIndex < this.mockQuestions.length) {
                nextQ = this.mockQuestions[this.mockQuestionIndex];
            } else {
                nextQ = this.mockFollowUps[
                    Math.floor(Math.random() * this.mockFollowUps.length)
                ];
            }

            this.addMessage("bot", nextQ);
            this.lastQuestion = nextQ;
        }, 1000);
    }

    processUploadedFile(file) {
        this.uploadedResume = file;
        document.getElementById("uploadArea").style.display = "none";
        document.getElementById("fileInfo").style.display = "block";
        document.getElementById("fileName").innerText = `${file.name} uploaded successfully!`;
        this.addMessage("bot", "Great! I’ve scanned your resume and will ask questions relevant to your experience.");
    }

    generateReport() {
        const report = this.mockReports[
            Math.floor(Math.random() * this.mockReports.length)
        ];

        this.addMessage("bot", `
📊 **Interview Analysis Complete!**

• Overall Score: ${report.overall}%
• Grammar Score: ${report.grammar}%
• Content Relevance: ${report.content}%
• Confidence Level: ${report.confidence}%
• Emotions Detected: ${report.emotions.join(", ")}

👉 [Click here to view your detailed dashboard →](dashboard.html)
        `);
    }
}

const bot = new InterviewBot();

document.getElementById("startBtn").addEventListener("click", () => {
    bot.startInterview();
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;
});

document.getElementById("stopBtn").addEventListener("click", () => {
    bot.stopInterview();
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("reportBtn").style.display = "inline-block";
});

document.getElementById("chatInputForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (text) {
        bot.handleUserAnswer(text);
        input.value = "";
    }
});

document.getElementById("uploadBtn").addEventListener("click", () => {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
        bot.processUploadedFile(e.target.files[0]);
    }
});

document.getElementById("reportBtn").addEventListener("click", () => {
    bot.generateReport();
});


async function initWebcam() {
    const video = document.getElementById("webcamPreview");
    const placeholder = document.getElementById("webcamPlaceholder");

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
        video.style.display = "block";    
        placeholder.style.display = "none"; 
    } catch (err) {
        console.error("Webcam access denied:", err);
        bot.addMessage("bot", "⚠️ I couldn’t access your webcam. Please allow camera permissions.");
    }
}

initWebcam();
