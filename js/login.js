const API_BASE_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const googleLoginBtn = document.getElementById('googleLogin');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const customCursor = document.getElementById('customCursor');

    if (customCursor) {
        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
            customCursor.classList.add('visible');
        });

        document.addEventListener('mouseleave', () => {
            customCursor.classList.remove('visible');
        });

        document.querySelectorAll('a, button, input, .checkbox-wrapper').forEach(el => {
            el.addEventListener('mouseenter', () => customCursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => customCursor.classList.remove('hover'));
            el.addEventListener('mousedown', () => customCursor.classList.add('click'));
            el.addEventListener('mouseup', () => customCursor.classList.remove('click'));
        });
    }

    document.querySelectorAll('.password-toggle').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const type = input.type === 'password' ? 'text' : 'password';
            input.type = type;
            this.setAttribute('aria-pressed', type === 'text');
            
            const eyeIcon = this.querySelector('.eye-icon');
            if (type === 'text') {
                eyeIcon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;
            } else {
                eyeIcon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />`;
            }
        });
    });

    const elements = document.querySelectorAll('.form-group, .form-options, .btn, .divider, .auth-footer');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 100}ms`;
    });

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
        
        hideError(passwordError, passwordInput);
        return true;
    }

    function showError(errorElement, inputElement, message) {
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
        if (inputElement) {
            inputElement.classList.add('error');
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

    emailInput?.addEventListener('blur', validateEmail);
    passwordInput?.addEventListener('blur', validatePassword);

    emailInput?.addEventListener('input', () => {
        if (emailError.classList.contains('show')) {
            hideError(emailError, emailInput);
        }
    });
    passwordInput?.addEventListener('input', () => {
        if (passwordError.classList.contains('show')) {
            hideError(passwordError, passwordInput);
        }
    });

    loginForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        if (!isEmailValid || !isPasswordValid) {
            return;
        }

        const formData = {
            email: emailInput.value.trim(),
            password: passwordInput.value
        };
        
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="loading-spinner"></span> Signing In...';
        
        try {
            console.log('Sending request to:', `${API_BASE_URL}/auth/login`);
            console.log('Payload:', { ...formData, password: '***' });
            
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
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
                const { accessToken, refreshToken } = data;
                
                const storage = rememberMeCheckbox.checked ? localStorage : sessionStorage;
                storage.setItem('accessToken', accessToken);
                storage.setItem('refreshToken', refreshToken);
               
                showSuccessMessage('Login successful! Redirecting...');
                
                setTimeout(() => {
                    window.location.href = 'preview1.html';
                }, 1000);
            } else if (response.status === 400) {
                const errorMessage = data.message || data.error || data.detail || '';
                
                if (errorMessage.toLowerCase().includes('invalid credentials')) {
                    showError(emailError, emailInput, 'Invalid email or password. Please try again.');
                    showError(passwordError, passwordInput, '');
                    emailInput.focus();
                } else {
                    showGlobalError(errorMessage || 'Login failed. Please check your credentials.');
                }
                
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            } else if (response.status === 500) {
                showGlobalError('Server error. Please try again later.');
                
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            } else {
                const errorMessage = data.message || data.error || data.detail || 'An unexpected error occurred';
                showGlobalError(errorMessage);
                
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        } catch (error) {
            console.error('Login error:', error);
            showGlobalError('Cannot connect to server. Please check your connection and make sure the backend is running on port 3000.');
            
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });

    forgotPasswordLink?.addEventListener('click', (e) => {
        e.preventDefault();
        showGlobalError('Password reset functionality will be available soon.');
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