/**
 * login.js — Fixed authentication
 *
 * Changes from original:
 *  - Token ALWAYS stored in localStorage (no remember-me split)
 *  - Uses authHelper for consistent token/user storage
 *  - Removed sessionStorage dependency
 *  - Cleaner error display (no more setTimeout-only removal)
 */

import { API_BASE } from "./config.js";
import { setToken, setUser, setCredits } from "./authHelper.js";

document.addEventListener("DOMContentLoaded", () => {
  /* ── DOM refs ───────────────────────────────────────────── */
  const form          = document.getElementById("loginForm");
  const emailInput    = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitBtn     = document.getElementById("submitBtn");
  const emailError    = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  /* ── Password toggle ────────────────────────────────────── */
  document.querySelectorAll(".password-toggle").forEach((btn) => {
    btn.addEventListener("click", function () {
      const input = this.parentElement.querySelector("input");
      input.type = input.type === "password" ? "text" : "password";
    });
  });

  /* ── Validation ─────────────────────────────────────────── */
  function validateEmail() {
    const v = emailInput.value.trim();
    if (!v) return showFieldError(emailError, emailInput, "Email is required"), false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
      return showFieldError(emailError, emailInput, "Enter a valid email"), false;
    clearFieldError(emailError, emailInput);
    return true;
  }

  function validatePassword() {
    if (!passwordInput.value)
      return showFieldError(passwordError, passwordInput, "Password is required"), false;
    clearFieldError(passwordError, passwordInput);
    return true;
  }

  emailInput?.addEventListener("blur", validateEmail);
  passwordInput?.addEventListener("blur", validatePassword);
  emailInput?.addEventListener("input", () => clearFieldError(emailError, emailInput));
  passwordInput?.addEventListener("input", () => clearFieldError(passwordError, passwordInput));

  /* ── Submit ─────────────────────────────────────────────── */
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validateEmail() || !validatePassword()) return;

    submitBtn.disabled = true;
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = "Logging in…";

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          email:    emailInput.value.trim(),
          password: passwordInput.value,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        /* ── Persist everything to localStorage ── */
        setToken(data.accessToken);
        setUser({
          id:    data.user?.id    || "",
          name:  data.user?.name  || emailInput.value.split("@")[0],
          email: data.user?.email || emailInput.value.trim(),
        });
        setCredits(data.user?.credits ?? data.credits ?? 0);

        // Also keep refreshToken if the backend provides it
        if (data.refreshToken) {
          localStorage.setItem("refreshToken", data.refreshToken);
        }

        showToast("Login successful! Redirecting…", "success");
        setTimeout(() => { window.location.href = "dashboard-home.html"; }, 900);
        return;
      }

      /* ── Error handling ── */
      const msg = data.message || data.error || "Invalid credentials";
      if (res.status === 400 && msg.toLowerCase().includes("invalid")) {
        showFieldError(emailError,    emailInput,    "Invalid email or password");
        showFieldError(passwordError, passwordInput, "");
      } else {
        showToast(msg, "error");
      }
    } catch (err) {
      console.error("Login error:", err);
      showToast("Cannot connect to server. Check your connection.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHTML;
    }
  });

  /* ── Google OAuth placeholder ───────────────────────────── */
  document.getElementById("googleLogin")?.addEventListener("click", () => {
    showToast("Google login coming soon.", "info");
  });
});

/* ── UI helpers ─────────────────────────────────────────────── */

function showFieldError(el, input, msg) {
  if (el)    { el.textContent = msg; el.classList.add("show"); }
  if (input) { input.classList.add("error"); }
}

function clearFieldError(el, input) {
  if (el)    { el.textContent = ""; el.classList.remove("show"); }
  if (input) { input.classList.remove("error"); }
}

function showToast(message, type = "info") {
  const colors = { success: "#10b981", error: "#ef4444", info: "#3b82f6" };
  const div = Object.assign(document.createElement("div"), { textContent: message });
  Object.assign(div.style, {
    position:   "fixed",
    top:        "20px",
    right:      "20px",
    background: colors[type] || colors.info,
    color:      "#fff",
    padding:    "14px 22px",
    borderRadius: "8px",
    boxShadow:  "0 4px 12px rgba(0,0,0,.15)",
    zIndex:     "10000",
    fontFamily: "'Inter', sans-serif",
    fontSize:   "14px",
    cursor:     "pointer",
  });
  div.addEventListener("click", () => div.remove());
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 4000);
}