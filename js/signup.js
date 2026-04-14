/**
 * signup.js — Fixed
 *
 * Changes from original:
 *  - Uses authHelper (setToken, setUser, setCredits) instead of EvalvateAuth
 *  - Token always stored in localStorage
 *  - No sessionStorage references
 */

import { API_BASE } from "./config.js";
import { setToken, setUser, setCredits } from "./authHelper.js";

document.addEventListener("DOMContentLoaded", () => {
  const form               = document.getElementById("signupForm");
  const fullNameInput      = document.getElementById("fullName");
  const emailInput         = document.getElementById("email");
  const passwordInput      = document.getElementById("password");
  const confirmPassInput   = document.getElementById("confirmPassword");
  const submitBtn          = document.getElementById("submitBtn");

  const fullNameError      = document.getElementById("fullNameError");
  const emailError         = document.getElementById("emailError");
  const passwordError      = document.getElementById("passwordError");
  const confirmPassError   = document.getElementById("confirmPasswordError");

  /* ── Password strength ──────────────────────────────────── */
  const strengthFill = document.querySelector("#passwordStrength .strength-fill");
  const strengthText = document.querySelector(".strength-text");

  passwordInput?.addEventListener("input", function () {
    const p = this.value;
    let score = 0;
    if (p.length >= 8)  score += 25;
    if (p.length >= 12) score += 25;
    if (/[a-z]/.test(p) && /[A-Z]/.test(p)) score += 20;
    if (/\d/.test(p))   score += 15;
    if (/[^a-zA-Z0-9]/.test(p)) score += 15;

    if (strengthFill) strengthFill.style.width = score + "%";
    if (strengthText) {
      const { label, color } =
        score < 40  ? { label: "Weak",   color: "#ef4444" } :
        score < 70  ? { label: "Medium", color: "#f59e0b" } :
                      { label: "Strong", color: "#10b981" };
      strengthText.textContent  = label;
      strengthText.style.color  = color;
      if (strengthFill) strengthFill.style.background = color;
    }
  });

  /* ── Password toggle ────────────────────────────────────── */
  document.querySelectorAll(".password-toggle").forEach((btn) => {
    btn.addEventListener("click", function () {
      const input = this.parentElement.querySelector("input");
      input.type = input.type === "password" ? "text" : "password";
    });
  });

  /* ── Validation ─────────────────────────────────────────── */
  function validateFullName() {
    const v = fullNameInput.value.trim();
    if (!v)        return showErr(fullNameError, fullNameInput, "Full name is required"), false;
    if (v.length < 2) return showErr(fullNameError, fullNameInput, "Name must be at least 2 characters"), false;
    clearErr(fullNameError, fullNameInput); return true;
  }
  function validateEmail() {
    const v = emailInput.value.trim();
    if (!v) return showErr(emailError, emailInput, "Email is required"), false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return showErr(emailError, emailInput, "Enter a valid email"), false;
    clearErr(emailError, emailInput); return true;
  }
  function validatePassword() {
    if (!passwordInput.value) return showErr(passwordError, passwordInput, "Password is required"), false;
    if (passwordInput.value.length < 8) return showErr(passwordError, passwordInput, "Min 8 characters"), false;
    clearErr(passwordError, passwordInput); return true;
  }
  function validateConfirm() {
    if (!confirmPassInput.value) return showErr(confirmPassError, confirmPassInput, "Please confirm password"), false;
    if (passwordInput.value !== confirmPassInput.value)
      return showErr(confirmPassError, confirmPassInput, "Passwords do not match"), false;
    clearErr(confirmPassError, confirmPassInput); return true;
  }

  fullNameInput?.addEventListener("blur", validateFullName);
  emailInput?.addEventListener("blur",    validateEmail);
  passwordInput?.addEventListener("blur", validatePassword);
  confirmPassInput?.addEventListener("blur", validateConfirm);

  /* ── Submit ─────────────────────────────────────────────── */
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (![validateFullName(), validateEmail(), validatePassword(), validateConfirm()].every(Boolean)) return;

    submitBtn.disabled = true;
    const origText = submitBtn.textContent;
    submitBtn.textContent = "Creating Account…";

    try {
      const res = await fetch(`${API_BASE}/auth/signup`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          name:     fullNameInput.value.trim(),
          email:    emailInput.value.trim(),
          password: passwordInput.value,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        /* Signup returns userId, not a token — redirect to login */
        showToast("Account created! Please log in.", "success");
        setTimeout(() => { window.location.href = "login.html"; }, 1500);
        return;
      }

      const msg = data.message || data.error || "";
      if (res.status === 400 && /email already/i.test(msg)) {
        showErr(emailError, emailInput, "This email is already registered.");
      } else {
        showToast(msg || "Signup failed. Please try again.", "error");
      }
    } catch (err) {
      showToast("Cannot connect to server.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = origText;
    }
  });
});

/* ── Helpers ────────────────────────────────────────────────── */
function showErr(el, input, msg) {
  if (el)    { el.textContent = msg; el.classList.add("show"); }
  if (input) input.classList.add("error");
}
function clearErr(el, input) {
  if (el)    { el.textContent = ""; el.classList.remove("show"); }
  if (input) input.classList.remove("error");
}
function showToast(msg, type = "info") {
  const colors = { success: "#10b981", error: "#ef4444", info: "#3b82f6" };
  const div = Object.assign(document.createElement("div"), { textContent: msg });
  Object.assign(div.style, {
    position: "fixed", top: "20px", right: "20px",
    background: colors[type], color: "#fff",
    padding: "14px 22px", borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,.15)",
    zIndex: "10000", cursor: "pointer", fontSize: "14px",
  });
  div.addEventListener("click", () => div.remove());
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 4000);
}