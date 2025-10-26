const API_BASE_URL = 'http://localhost:3000';

const getAuthToken = () => {
    return localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
};

const checkAuth = () => {
    const token = getAuthToken();
    if (!token) {
        alert('Please login first');
        window.location.href = 'login.html';
        return false;
    }
    return true;
};

const apiCall = async (endpoint, method = 'GET', data = null, isFormData = false) => {
    const token = getAuthToken();
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    if (!isFormData) {
        headers['Content-Type'] = 'application/json';
    }

    const options = {
        method,
        headers
    };

    if (data) {
        options.body = isFormData ? data : JSON.stringify(data);
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        
        if (response.status === 401 || response.status === 403) {
            alert('Session expired. Please login again.');
            localStorage.removeItem('accessToken');
            sessionStorage.removeItem('accessToken');
            window.location.href = 'login.html';
            return;
        }

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.error || result.message || 'API request failed');
        }
        
        return result;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'toast-message success';
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
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => successDiv.remove(), 300);
    }, 3000);
}

function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'toast-message error';
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
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        animation: slideIn 0.3s ease-out;
        cursor: pointer;
    `;
    
    errorDiv.addEventListener('click', () => errorDiv.remove());
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => errorDiv.remove(), 300);
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
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    .loading-spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255,255,255,0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 0.6s linear infinite;
    }
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    });
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
}

// ============ preview1.html - BASICS ============
const durationSlider = document.getElementById('duration');
const durationValue = document.getElementById('durationValue');
const summaryDuration = document.getElementById('summaryDuration');
const difficultySelect = document.getElementById('difficulty');
const summaryDifficulty = document.getElementById('summaryDifficulty');
const interviewTypeSelect = document.getElementById('interviewType');
const summaryType = document.getElementById('summaryType');

if (durationSlider) {
    durationSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        if (durationValue) {
            durationValue.textContent = `${value} minutes`;
        }
        if (summaryDuration) {
            summaryDuration.textContent = `${value} minutes`;
        }
    });
}

if (difficultySelect) {
    difficultySelect.addEventListener('change', (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const difficultyText = selectedOption.text.split(' - ')[0];
        if (summaryDifficulty) {
            summaryDifficulty.textContent = difficultyText;
        }
    });
}

if (interviewTypeSelect) {
    interviewTypeSelect.addEventListener('change', (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const typeText = selectedOption.text.split(' - ')[0];
        if (summaryType) {
            summaryType.textContent = typeText;
        }
    });
}

function saveConfigToLocalStorage() {
    const config = {
        duration: durationSlider ? durationSlider.value : 45,
        difficulty: difficultySelect ? difficultySelect.value : 'intermediate',
        interviewType: interviewTypeSelect ? interviewTypeSelect.value : 'technical',
        configId: localStorage.getItem('currentConfigId') || null
    };
    localStorage.setItem('interviewConfig', JSON.stringify(config));
    
    updateSummaryPanel();
}

function loadConfigFromLocalStorage() {
    const savedConfig = localStorage.getItem('interviewConfig');
    if (savedConfig) {
        const config = JSON.parse(savedConfig);
        if (durationSlider) {
            durationSlider.value = config.duration;
            durationSlider.dispatchEvent(new Event('input'));
        }
        if (difficultySelect) {
            difficultySelect.value = config.difficulty;
            difficultySelect.dispatchEvent(new Event('change'));
        }
        if (interviewTypeSelect) {
            interviewTypeSelect.value = config.interviewType;
            interviewTypeSelect.dispatchEvent(new Event('change'));
        }
    }
}

async function handleBasicsContinue() {
    if (!checkAuth()) return;

    const duration = parseInt(durationSlider.value);
    const difficulty = difficultySelect.value;
    const type = interviewTypeSelect.value;

    const continueBtn = event.target;
    const originalText = continueBtn.innerHTML;
    continueBtn.disabled = true;
    continueBtn.innerHTML = '<span class="loading-spinner"></span> Saving...';

    try {
        const difficultyMap = {
            'beginner': 'BEGINNER',
            'intermediate': 'INTERMEDIATE',
            'advanced': 'ADVANCED'
        };
        
        const typeMap = {
            'technical': 'TECHNICAL',
            'behavioral': 'BEHAVIORAL',
            'system-design': 'SYSTEM_DESIGN'
        };

        const result = await apiCall('/interview-config/basics', 'POST', {
            durationMinutes: duration,
            difficulty: difficultyMap[difficulty] || 'INTERMEDIATE',
            type: typeMap[type] || 'TECHNICAL'
        });

        localStorage.setItem('currentConfigId', result.configId);
        saveConfigToLocalStorage();
        
        console.log('Basics saved:', result);
        showSuccessMessage('Settings saved successfully!');
        
        setTimeout(() => {
            window.location.href = 'preview2.html';
        }, 500);
    } catch (error) {
        console.error('Error saving basics:', error);
        showErrorMessage(error.message || 'Failed to save settings. Please try again.');
        continueBtn.disabled = false;
        continueBtn.innerHTML = originalText;
    }
}

// ============ preview2.html - SKILLS ============
const addSkillBtn = document.getElementById('addSkillBtn');
const keySkillsInput = document.getElementById('keySkills');
const skillsList = document.getElementById('skillsList');
const targetRoleInput = document.getElementById('targetRole');

if (addSkillBtn && keySkillsInput && skillsList) {
    addSkillBtn.addEventListener('click', addSkill);
    keySkillsInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkill();
        }
    });

    function addSkill() {
        const skillValue = keySkillsInput.value.trim();
        if (skillValue) {
            const existingSkills = Array.from(skillsList.querySelectorAll('.skill-tag'))
                .map(tag => tag.textContent.trim().toLowerCase());
            
            if (existingSkills.includes(skillValue.toLowerCase())) {
                showErrorMessage('This skill has already been added');
                return;
            }

            const skillTag = document.createElement('div');
            skillTag.className = 'skill-tag';
            skillTag.innerHTML = `
                ${skillValue}
                <button class="skill-remove" onclick="removeSkill(this)">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                        <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </button>
            `;
            skillsList.appendChild(skillTag);
            keySkillsInput.value = '';
            saveSkillsToLocalStorage();
        }
    }
}

function removeSkill(button) {
    button.parentElement.remove();
    saveSkillsToLocalStorage();
}

function saveSkillsToLocalStorage() {
    if (!skillsList) return;
    const skills = Array.from(skillsList.querySelectorAll('.skill-tag'))
        .map(tag => tag.firstChild.textContent.trim());
    const role = targetRoleInput ? targetRoleInput.value : '';
    
    const skillsData = { role, skills };
    localStorage.setItem('interviewSkills', JSON.stringify(skillsData));
}

function loadSkillsFromLocalStorage() {
    const savedSkills = localStorage.getItem('interviewSkills');
    if (savedSkills && skillsList) {
        const { role, skills } = JSON.parse(savedSkills);
        
        if (targetRoleInput) {
            targetRoleInput.value = role || '';
        }
        
        skillsList.innerHTML = ''; 
        skills.forEach(skill => {
            const skillTag = document.createElement('div');
            skillTag.className = 'skill-tag';
            skillTag.innerHTML = `
                ${skill}
                <button class="skill-remove" onclick="removeSkill(this)">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                        <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </button>
            `;
            skillsList.appendChild(skillTag);
        });
    }
}

async function handleSkillsContinue() {
    if (!checkAuth()) return;

    const configId = localStorage.getItem('currentConfigId');
    if (!configId) {
        showErrorMessage('No configuration found. Redirecting to start...');
        setTimeout(() => {
            window.location.href = 'preview1.html';
        }, 2000);
        return;
    }

    const role = targetRoleInput ? targetRoleInput.value.trim() : '';
    const skills = skillsList ? 
        Array.from(skillsList.querySelectorAll('.skill-tag'))
            .map(tag => tag.firstChild.textContent.trim()) : [];

    if (!role) {
        showErrorMessage('Please enter a target role');
        targetRoleInput?.focus();
        return;
    }

    if (skills.length === 0) {
        showErrorMessage('Please add at least one skill');
        keySkillsInput?.focus();
        return;
    }

    const continueBtn = event.target;
    const originalText = continueBtn.innerHTML;
    continueBtn.disabled = true;
    continueBtn.innerHTML = '<span class="loading-spinner"></span> Saving...';

    try {
        const result = await apiCall('/interview-config/skills', 'POST', {
            configId: configId,
            role: role,
            skills: skills
        });

        saveSkillsToLocalStorage();
        console.log('Skills saved:', result);
        showSuccessMessage('Skills saved successfully!');
        
        setTimeout(() => {
            window.location.href = 'preview3.html';
        }, 500);
    } catch (error) {
        console.error('Error saving skills:', error);
        showErrorMessage(error.message || 'Failed to save skills. Please try again.');
        continueBtn.disabled = false;
        continueBtn.innerHTML = originalText;
    }
}

// ============ preview3.html - RESUME UPLOAD ============
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const uploadedFile = document.getElementById('uploadedFile');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const removeFile = document.getElementById('removeFile');

if (uploadArea && fileInput) {
    uploadArea.addEventListener('click', () => fileInput.click());

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('drag-over');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('drag-over');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileSelect(files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFileSelect(e.target.files[0]);
        }
    });

    if (removeFile) {
        removeFile.addEventListener('click', (e) => {
            e.stopPropagation();
            fileInput.value = '';
            uploadArea.style.display = 'block';
            uploadedFile.style.display = 'none';
            localStorage.removeItem('uploadedResume');
        });
    }
}

function handleFileSelect(file) {
    const validTypes = ['application/pdf', 'application/msword', 
                       'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 10 * 1024 * 1024; 

    if (!validTypes.includes(file.type)) {
        showErrorMessage('Please upload a PDF, DOC, or DOCX file');
        return;
    }

    if (file.size > maxSize) {
        showErrorMessage('File size must be less than 10MB');
        return;
    }

    if (fileName) fileName.textContent = file.name;
    if (fileSize) fileSize.textContent = formatFileSize(file.size);
    if (uploadArea) uploadArea.style.display = 'none';
    if (uploadedFile) uploadedFile.style.display = 'flex';

    localStorage.setItem('uploadedResume', JSON.stringify({
        name: file.name,
        size: file.size
    }));
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

async function handleResumeUploadContinue() {
    if (!checkAuth()) return;

    const configId = localStorage.getItem('currentConfigId');
    if (!configId) {
        showErrorMessage('No configuration found. Redirecting to start...');
        setTimeout(() => {
            window.location.href = 'preview1.html';
        }, 2000);
        return;
    }

    const file = fileInput?.files[0];
    
    if (!file) {
        console.log('No resume uploaded, continuing to review');
        window.location.href = 'preview4.html';
        return;
    }

    const continueBtn = event.target;
    const originalText = continueBtn.innerHTML;
    continueBtn.disabled = true;
    continueBtn.innerHTML = '<span class="loading-spinner"></span> Uploading...';

    try {
        const formData = new FormData();
        formData.append('configId', configId);
        formData.append('resume', file);

        const result = await apiCall('/interview-config/resume', 'POST', formData, true);
        
        console.log('Resume uploaded:', result);
        localStorage.setItem('resumeId', result.resumeId);
        showSuccessMessage('Resume uploaded successfully!');
        
        setTimeout(() => {
            window.location.href = 'preview4.html';
        }, 500);
    } catch (error) {
        console.error('Error uploading resume:', error);
        showErrorMessage(error.message || 'Failed to upload resume. Please try again.');
        continueBtn.disabled = false;
        continueBtn.innerHTML = originalText;
    }
}

// ============ preview4.html FINAL REVIEW ============
const consentCheckbox = document.getElementById('consentCheckbox');

function loadSummaryData() {
    const config = JSON.parse(localStorage.getItem('interviewConfig') || '{}');
    const skills = JSON.parse(localStorage.getItem('interviewSkills') || '{}');
    
    const configDuration = document.querySelector('.config-grid .config-item:nth-child(1) .config-value');
    const configDifficulty = document.querySelector('.config-grid .config-item:nth-child(2) .config-value');
    const configType = document.querySelector('.config-grid .config-item:nth-child(3) .config-value');
    
    if (configDuration) configDuration.textContent = `${config.duration || 45} min`;
    if (configDifficulty) configDifficulty.textContent = capitalizeFirst(config.difficulty || 'Intermediate');
    if (configType) configType.textContent = capitalizeFirst(config.interviewType || 'Technical');
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function handleStartInterview() {
    if (!checkAuth()) return;

    const configId = localStorage.getItem('currentConfigId');
    if (!configId) {
        showErrorMessage('No configuration found. Redirecting to start...');
        setTimeout(() => {
            window.location.href = 'preview1.html';
        }, 2000);
        return;
    }

    if (!consentCheckbox?.checked) {
        showErrorMessage('Please provide your consent to continue');
        consentCheckbox?.focus();
        return;
    }

    const startBtn = event.target;
    const originalText = startBtn.innerHTML;
    startBtn.disabled = true;
    startBtn.innerHTML = '<span class="loading-spinner"></span> Creating Interview...';

    try {
        const result = await apiCall('/interview-config/review', 'POST', {
            configId: configId,
            consentRecording: consentCheckbox.checked
        });

        console.log('Interview created:', result);
        localStorage.setItem('currentInterviewId', result.interviewId);
        
        showSuccessMessage('Interview created successfully!');
        
        setTimeout(() => {
            localStorage.removeItem('currentConfigId');
            localStorage.removeItem('interviewConfig');
            localStorage.removeItem('interviewSkills');
            localStorage.removeItem('uploadedResume');
            
            window.location.href = 'interview.html';
        }, 1000);
    } catch (error) {
        console.error('Error creating interview:', error);
        showErrorMessage(error.message || 'Failed to create interview. Please try again.');
        startBtn.disabled = false;
        startBtn.innerHTML = originalText;
    }
}

function loadSavedResumeInfo() {
    const savedResume = localStorage.getItem('uploadedResume');
    if (savedResume && fileName && fileSize) {
        const resume = JSON.parse(savedResume);
        fileName.textContent = resume.name;
        fileSize.textContent = formatFileSize(resume.size);
        if (uploadArea) uploadArea.style.display = 'none';
        if (uploadedFile) uploadedFile.style.display = 'flex';
    }
}

function updateSummaryPanel() {
    const config = JSON.parse(localStorage.getItem('interviewConfig') || '{}');
    
    const summaryDurationEl = document.getElementById('summaryDuration');
    if (summaryDurationEl) {
        summaryDurationEl.textContent = `${config.duration || 45} minutes`;
    }
    
    const summaryDifficultyEl = document.getElementById('summaryDifficulty');
    if (summaryDifficultyEl) {
        const difficultyMap = {
            'beginner': 'Beginner',
            'intermediate': 'Intermediate',
            'advanced': 'Advanced'
        };
        summaryDifficultyEl.textContent = difficultyMap[config.difficulty] || 'Intermediate';
    }
    
    const summaryTypeEl = document.getElementById('summaryType');
    if (summaryTypeEl) {
        const typeMap = {
            'technical': 'Technical',
            'behavioral': 'Behavioral',
            'system-design': 'System Design'
        };
        summaryTypeEl.textContent = typeMap[config.interviewType] || 'Technical';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    loadConfigFromLocalStorage();
    
    updateSummaryPanel();
    
    if (window.location.pathname.includes('preview2')) {
        loadSkillsFromLocalStorage();
    }
    
    if (window.location.pathname.includes('preview3')) {
        loadSavedResumeInfo();
    }
    
    if (window.location.pathname.includes('preview4')) {
        loadSummaryData();
    }
});

if (durationSlider) durationSlider.addEventListener('change', saveConfigToLocalStorage);
if (difficultySelect) difficultySelect.addEventListener('change', saveConfigToLocalStorage);
if (interviewTypeSelect) interviewTypeSelect.addEventListener('change', saveConfigToLocalStorage);
if (targetRoleInput) targetRoleInput.addEventListener('input', saveSkillsToLocalStorage);