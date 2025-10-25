const API_BASE_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.getElementById('submitBtn');

    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    const passwordStrength = document.getElementById('passwordStrength');
    const strengthFill = passwordStrength?.querySelector('.strength-fill');
    const strengthText = passwordStrength?.querySelector('.strength-text');

    const customCursor = document.getElementById('customCursor');

    if (customCursor) {
        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, input').forEach(el => {
            el.addEventListener('mouseenter', () => customCursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => customCursor.classList.remove('cursor-hover'));
        });
    }

    document.querySelectorAll('.password-toggle').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const type = input.type === 'password' ? 'text' : 'password';
            input.type = type;
            this.setAttribute('aria-pressed', type === 'text');
        });
    });

    if (passwordInput && strengthFill && strengthText) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const strength = calculatePasswordStrength(password);
            updatePasswordStrength(strength);
        });
    }

    function calculatePasswordStrength(password) {
        let strength = 0;
        
        if (password.length >= 8) strength += 25;
        if (password.length >= 12) strength += 25;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 20;
        if (/\d/.test(password)) strength += 15;
        if (/[^a-zA-Z0-9]/.test(password)) strength += 15;
        
        return strength;
    }

    function updatePasswordStrength(strength) {
        if (!strengthFill || !strengthText) return;

        strengthFill.style.width = strength + '%';
        
        if (strength === 0) {
            strengthFill.style.background = 'transparent';
            strengthText.textContent = '';
        } else if (strength < 40) {
            strengthFill.style.background = '#ef4444';
            strengthText.textContent = 'Weak';
            strengthText.style.color = '#ef4444';
        } else if (strength < 70) {
            strengthFill.style.background = '#f59e0b';
            strengthText.textContent = 'Medium';
            strengthText.style.color = '#f59e0b';
        } else {
            strengthFill.style.background = '#10b981';
            strengthText.textContent = 'Strong';
            strengthText.style.color = '#10b981';
        }
    }

    function validateFullName() {
        const name = fullNameInput.value.trim();
        
        if (name === '') {
            showError(fullNameError, fullNameInput, 'Full name is required');
            return false;
        }
        
        if (name.length < 2) {
            showError(fullNameError, fullNameInput, 'Name must be at least 2 characters');
            return false;
        }
        
        hideError(fullNameError, fullNameInput);
        return true;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            showError(emailError, emailInput, 'Email is required');
            return false;
        }
        
        if (!emailRegex.test(email)) {
            showError(emailError, emailInput, 'Please enter a valid email address');
            return false;
        }
        
        hideError(emailError, emailInput);
        return true;
    }

    function validatePassword() {
        const password = passwordInput.value;
        
        if (password === '') {
            showError(passwordError, passwordInput, 'Password is required');
            return false;
        }
        
        if (password.length < 8) {
            showError(passwordError, passwordInput, 'Password must be at least 8 characters');
            return false;
        }
        
        hideError(passwordError, passwordInput);
        return true;
    }

    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (confirmPassword === '') {
            showError(confirmPasswordError, confirmPasswordInput, 'Please confirm your password');
            return false;
        }
        
        if (password !== confirmPassword) {
            showError(confirmPasswordError, confirmPasswordInput, 'Passwords do not match');
            return false;
        }
        
        hideError(confirmPasswordError, confirmPasswordInput);
        return true;
    }

    function showError(errorElement, inputElement, message) {
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
        if (inputElement) {
            inputElement.classList.add('error');
            inputElement.classList.remove('success');
        }
    }

    function hideError(errorElement, inputElement) {
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }
        if (inputElement) {
            inputElement.classList.remove('error');
        }
    }

    fullNameInput?.addEventListener('blur', validateFullName);
    emailInput?.addEventListener('blur', validateEmail);
    passwordInput?.addEventListener('blur', validatePassword);
    confirmPasswordInput?.addEventListener('blur', validateConfirmPassword);

    signupForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        
        if (!isFullNameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
            return;
        }
        
        const formData = {
            name: fullNameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value
        };
        
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Creating Account...';
        
        try {
            console.log('Sending request to:', `${API_BASE_URL}/auth/signup`);
            console.log('Payload:', { ...formData, password: '***' });
            
            const response = await fetch(`${API_BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            console.log('Response status:', response.status);
            
            let data;
            try {
                data = await response.json();
                console.log('Response data:', data);
            } catch (parseError) {
                console.error('Failed to parse response:', parseError);
                data = {};
            }
            
            if (response.ok) {
                showSuccessMessage('Account created successfully! Redirecting to login...');
                
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            } else if (response.status === 400) {
                const errorMessage = data.message || data.error || data.detail || '';
                
                if (errorMessage.toLowerCase().includes('email already exists') || 
                    errorMessage.toLowerCase().includes('email already registered') ||
                    errorMessage.toLowerCase().includes('user already exists')) {
                    
                    showError(emailError, emailInput, 'This email is already registered. Please use a different email or login.');
                    emailInput.focus();
                } else {
                    showGlobalError(errorMessage || 'Please check your information and try again.');
                }
                
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            } else if (response.status === 500) {
                showGlobalError('Server error. Please try again later.');
                
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            } else {
                const errorMessage = data.message || data.error || data.detail || 'An unexpected error occurred';
                showGlobalError(errorMessage);
                
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        } catch (error) {
            console.error('Signup error:', error);
            showGlobalError('Cannot connect to server. Please check your connection and make sure the backend is running on port 3000.');
            
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    function showSuccessMessage(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            font-family: 'Inter', sans-serif;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }

    function showGlobalError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'global-error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ef4444;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            font-family: 'Inter', sans-serif;
            animation: slideIn 0.3s ease-out;
            cursor: pointer;
        `;
        
        errorDiv.addEventListener('click', () => errorDiv.remove());
        
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
});