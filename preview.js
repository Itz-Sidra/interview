import { API_BASE } from "./config.js";

// ============ Authentication ============
const getAuthToken = () => {
    return localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
};

const checkAuth = () => {
    const token = getAuthToken();
    if (!token) {
        showErrorMessage('Please login first');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return false;
    }
    return true;
};

// ============ API Helper ============
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
        const response = await fetch(`${API_BASE}${endpoint}`, options);
        
        if (response.status === 401 || response.status === 403) {
            showErrorMessage('Session expired. Please login again.');
            localStorage.removeItem('accessToken');
            sessionStorage.removeItem('accessToken');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
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

// ============ Toast Notifications ============
function showSuccessMessage(message) {
    removeExistingToasts();
    const toast = createToast(message, 'success');
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function showErrorMessage(message) {
    removeExistingToasts();
    const toast = createToast(message, 'error');
    toast.addEventListener('click', () => toast.remove());
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

function createToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast-message ${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        font-family: 'Inter', system-ui, sans-serif;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
        cursor: ${type === 'error' ? 'pointer' : 'default'};
        max-width: 350px;
    `;
    return toast;
}

function removeExistingToasts() {
    document.querySelectorAll('.toast-message').forEach(t => t.remove());
}

// Add toast animations
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .loading-spinner {
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 2px solid rgba(255,255,255,0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 0.6s linear infinite;
    }
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(toastStyle);

// ============ Preview 1: Basic Settings ============
const durationSlider = document.getElementById('duration');
const durationValue = document.getElementById('durationValue');
const summaryDuration = document.getElementById('summaryDuration');
const difficultySelect = document.getElementById('difficulty');
const summaryDifficulty = document.getElementById('summaryDifficulty');
const interviewTypeSelect = document.getElementById('interviewType');
const summaryType = document.getElementById('summaryType');

// Duration slider handler
if (durationSlider) {
    durationSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        if (durationValue) durationValue.textContent = `${value} minutes`;
        if (summaryDuration) summaryDuration.textContent = `${value} minutes`;
        saveConfigToLocalStorage();
    });
}

// Difficulty select handler
if (difficultySelect) {
    difficultySelect.addEventListener('change', (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const difficultyText = selectedOption.text.split(' - ')[0];
        if (summaryDifficulty) summaryDifficulty.textContent = difficultyText;
        saveConfigToLocalStorage();
    });
}

// Interview type select handler
if (interviewTypeSelect) {
    interviewTypeSelect.addEventListener('change', (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const typeText = selectedOption.text.split(' - ')[0];
        if (summaryType) summaryType.textContent = typeText;
        saveConfigToLocalStorage();
    });
}

// Save config to localStorage
function saveConfigToLocalStorage() {
    const purposeInput = document.querySelector('input[name="purpose"]:checked');
    const config = {
        duration: durationSlider?.value || 30,
        difficulty: difficultySelect?.value || 'intermediate',
        interviewType: interviewTypeSelect?.value || 'technical',
        purpose: purposeInput?.value || 'job',
        configId: localStorage.getItem('currentConfigId') || null
    };
    localStorage.setItem('interviewConfig', JSON.stringify(config));
    updateSummaryPanel();
}

// Load config from localStorage
function loadConfigFromLocalStorage() {
    const savedConfig = localStorage.getItem('interviewConfig');
    if (savedConfig) {
        const config = JSON.parse(savedConfig);
        
        if (durationSlider) {
            durationSlider.value = config.duration || 30;
            if (durationValue) durationValue.textContent = `${config.duration || 30} minutes`;
        }
        if (difficultySelect) {
            difficultySelect.value = config.difficulty || 'intermediate';
        }
        if (interviewTypeSelect) {
            interviewTypeSelect.value = config.interviewType || 'technical';
        }
        
        // Purpose
        const purposeInput = document.querySelector(`input[name="purpose"][value="${config.purpose || 'job'}"]`);
        if (purposeInput) {
            purposeInput.checked = true;
            const purposeCard = purposeInput.closest('.purpose-card');
            if (purposeCard) {
                document.querySelectorAll('.purpose-card').forEach(c => c.classList.remove('active'));
                purposeCard.classList.add('active');
            }
        }
    }
    updateSummaryPanel();
}

// Update summary panel
function updateSummaryPanel() {
    const config = JSON.parse(localStorage.getItem('interviewConfig') || '{}');
    
    const summaryDurationEl = document.getElementById('summaryDuration');
    if (summaryDurationEl) {
        summaryDurationEl.textContent = `${config.duration || 30} minutes`;
    }
    
    const summaryDifficultyEl = document.getElementById('summaryDifficulty');
    if (summaryDifficultyEl) {
        const difficultyMap = { 'beginner': 'Beginner', 'intermediate': 'Intermediate', 'advanced': 'Advanced' };
        summaryDifficultyEl.textContent = difficultyMap[config.difficulty] || 'Intermediate';
    }
    
    const summaryTypeEl = document.getElementById('summaryType');
    if (summaryTypeEl) {
        const typeMap = { 'technical': 'Technical', 'behavioral': 'Behavioral', 'system-design': 'System Design', 'mixed': 'Mixed' };
        summaryTypeEl.textContent = typeMap[config.interviewType] || 'Technical';
    }
    
    const summaryPurposeEl = document.getElementById('summaryPurpose');
    if (summaryPurposeEl) {
        summaryPurposeEl.textContent = config.purpose === 'exam' ? 'Exam / Viva' : 'Job Interview';
    }
}

// Handle basics continue
async function handleBasicsContinue(event) {
    if (!checkAuth()) return;

    const duration = parseInt(durationSlider?.value || 30);
    const difficulty = difficultySelect?.value || 'intermediate';
    const type = interviewTypeSelect?.value || 'technical';
    const purposeInput = document.querySelector('input[name="purpose"]:checked');
    const purpose = purposeInput?.value || 'job';

    const continueBtn = event.target.closest('button');
    const originalText = continueBtn.innerHTML;
    continueBtn.disabled = true;
    continueBtn.innerHTML = '<span class="loading-spinner"></span> Saving...';

    try {
        const difficultyMap = { 'beginner': 'BEGINNER', 'intermediate': 'INTERMEDIATE', 'advanced': 'ADVANCED' };
        const typeMap = { 'technical': 'TECHNICAL', 'behavioral': 'BEHAVIORAL', 'system-design': 'SYSTEM_DESIGN', 'mixed': 'MIXED' };

        const result = await apiCall('/interview-config/basics', 'POST', {
            durationMinutes: duration,
            difficulty: difficultyMap[difficulty] || 'INTERMEDIATE',
            type: typeMap[type] || 'TECHNICAL',
            purpose: purpose.toUpperCase()
        });

        localStorage.setItem('currentConfigId', result.configId);
        saveConfigToLocalStorage();
        
        showSuccessMessage('Settings saved!');
        
        setTimeout(() => {
            window.location.href = 'preview2.html';
        }, 500);
    } catch (error) {
        console.error('Error saving basics:', error);
        showErrorMessage(error.message || 'Failed to save settings');
        continueBtn.disabled = false;
        continueBtn.innerHTML = originalText;
    }
}

// ============ Preview 2: Skills & Role ============
const addSkillBtn = document.getElementById('addSkillBtn');
const keySkillsInput = document.getElementById('keySkills');
const skillsList = document.getElementById('skillsList');
const targetRoleInput = document.getElementById('targetRole');

// Add skill functionality
if (addSkillBtn && keySkillsInput && skillsList) {
    addSkillBtn.addEventListener('click', addSkill);
    keySkillsInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkill();
        }
    });
}

function addSkill() {
    const skillValue = keySkillsInput?.value.trim();
    if (skillValue && skillsList) {
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

function removeSkill(button) {
    button.parentElement.remove();
    saveSkillsToLocalStorage();
}

function saveSkillsToLocalStorage() {
    if (!skillsList) return;
    const skills = Array.from(skillsList.querySelectorAll('.skill-tag'))
        .map(tag => tag.firstChild.textContent.trim());
    const role = targetRoleInput?.value || '';
    const companyType = document.getElementById('companyType')?.value || '';
    
    localStorage.setItem('interviewSkills', JSON.stringify({ role, skills, companyType }));
}

function loadSkillsFromLocalStorage() {
    const savedSkills = localStorage.getItem('interviewSkills');
    if (savedSkills && skillsList) {
        const { role, skills, companyType } = JSON.parse(savedSkills);
        
        if (targetRoleInput) targetRoleInput.value = role || '';
        if (document.getElementById('companyType')) {
            document.getElementById('companyType').value = companyType || '';
        }
        
        const summaryRole = document.getElementById('summaryRole');
        if (summaryRole) summaryRole.textContent = role || 'Not set';
        
        skillsList.innerHTML = ''; 
        (skills || []).forEach(skill => {
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

async function handleSkillsContinue(event) {
    if (!checkAuth()) return;

    const configId = localStorage.getItem('currentConfigId');
    if (!configId) {
        showErrorMessage('No configuration found. Redirecting...');
        setTimeout(() => window.location.href = 'preview1.html', 2000);
        return;
    }

    const role = targetRoleInput?.value.trim();
    const skills = skillsList ? 
        Array.from(skillsList.querySelectorAll('.skill-tag'))
            .map(tag => tag.firstChild.textContent.trim()) : [];
    const companyType = document.getElementById('companyType')?.value || '';

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

    const continueBtn = event.target.closest('button');
    const originalText = continueBtn.innerHTML;
    continueBtn.disabled = true;
    continueBtn.innerHTML = '<span class="loading-spinner"></span> Saving...';

    try {
        const result = await apiCall('/interview-config/skills', 'POST', {
            configId: configId,
            role: role,
            skills: skills,
            companyType: companyType
        });

        saveSkillsToLocalStorage();
        showSuccessMessage('Skills saved!');
        
        setTimeout(() => {
            window.location.href = 'preview3.html';
        }, 500);
    } catch (error) {
        console.error('Error saving skills:', error);
        showErrorMessage(error.message || 'Failed to save skills');
        continueBtn.disabled = false;
        continueBtn.innerHTML = originalText;
    }
}

async function handleDetailsContinue(event) {
    if (!checkAuth()) return;

    const configId = localStorage.getItem('currentConfigId');
    if (!configId) {
        showErrorMessage('No configuration found. Redirecting...');
        setTimeout(() => window.location.href = 'preview1.html', 2000);
        return;
    }

    // Check which purpose is selected
    const config = JSON.parse(localStorage.getItem('interviewConfig') || '{}');
    const purpose = config.purpose || 'job';

    if (purpose === 'job') {
        // Handle job interview flow
        await handleJobInterviewDetails(event);
    } else if (purpose === 'exam') {
        // Handle exam flow
        await handleExamDetails(event);
    }
}

// ============ Job Interview Details Handler ============
async function handleJobInterviewDetails(event) {
    const configId = localStorage.getItem('currentConfigId');
    const role = targetRoleInput?.value.trim();
    const skills = skillsList ? Array.from(skillsList.querySelectorAll('.skill-tag'))
        .map(tag => tag.firstChild.textContent.trim()) : [];
    const companyType = document.getElementById('companyType')?.value || '';

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

    const continueBtn = event.target.closest('button');
    const originalText = continueBtn.innerHTML;
    continueBtn.disabled = true;
    continueBtn.innerHTML = '<span class="loading-spinner"></span> Saving...';

    try {
        const result = await apiCall('/interview-config/skills', 'POST', {
            configId: configId,
            role: role,
            skills: skills,
            companyType: companyType
        });

        saveSkillsToLocalStorage();
        showSuccessMessage('Skills saved!');
        
        setTimeout(() => {
            window.location.href = 'preview3.html';
        }, 500);
    } catch (error) {
        console.error('Error saving skills:', error);
        showErrorMessage(error.message || 'Failed to save skills');
        continueBtn.disabled = false;
        continueBtn.innerHTML = originalText;
    }
}

// ============ Exam Details Handler ============
async function handleExamDetails(event) {
    const configId = localStorage.getItem('currentConfigId');
    
    // Use the CORRECT IDs from preview2.html
    const subjectInput = document.getElementById('examSubject'); // ✓ Correct ID
    const examTypeSelect = document.getElementById('examType'); // ✓ Correct ID
    const descriptionInput = document.getElementById('examDescription'); // ✓ Correct ID
    const topicsList = document.getElementById('topicsList'); // ✓ Get topics from list
    const questionsInput = document.getElementById('questionsCount'); // ✓ Correct ID

    const subject = subjectInput?.value.trim();
    const examType = examTypeSelect?.value || 'viva';
    const description = descriptionInput?.value.trim();
    
    // Get topics from the skill tags (not from a single input)
    const topics = topicsList ? 
        Array.from(topicsList.querySelectorAll('.skill-tag'))
            .map(tag => tag.firstChild.textContent.trim()) : [];
    
    const questionsCount = parseInt(questionsInput?.value || '10');

    // Validation
    if (!subject) {
        showErrorMessage('Please enter the subject name');
        subjectInput?.focus();
        return;
    }

    if (!description || description.length < 50) {
        showErrorMessage('Please provide at least 50 characters describing your exam requirements');
        descriptionInput?.focus();
        return;
    }

    const continueBtn = event.target.closest('button');
    const originalText = continueBtn.innerHTML;
    continueBtn.disabled = true;
    continueBtn.innerHTML = '<span class="loading-spinner"></span> Saving...';

    try {
        const result = await apiCall('/interview-config/exam', 'POST', {
            configId: configId,
            subject: subject,
            examType: examType,
            description: description,
            topics: topics, // Already an array
            questionsCount: questionsCount
        });

        // Save to localStorage as well
        const examData = {
            subject,
            examType,
            description,
            topics,
            questionsCount
        };
        localStorage.setItem('interviewExamData', JSON.stringify(examData));

        showSuccessMessage('Exam details saved!');
        
        setTimeout(() => {
            window.location.href = 'preview3.html';
        }, 500);
    } catch (error) {
        console.error('Error saving exam details:', error);
        showErrorMessage(error.message || 'Failed to save exam details');
        continueBtn.disabled = false;
        continueBtn.innerHTML = originalText;
    }
}

// Make the function globally available
window.handleDetailsContinue = handleDetailsContinue;

// ============ File Upload ============
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
        if (files.length > 0) handleFileSelect(files[0]);
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) handleFileSelect(e.target.files[0]);
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

async function handleResumeUploadContinue(event) {
    if (!checkAuth()) return;

    const configId = localStorage.getItem('currentConfigId');
    if (!configId) {
        showErrorMessage('No configuration found. Redirecting...');
        setTimeout(() => window.location.href = 'preview1.html', 2000);
        return;
    }

    const file = fileInput?.files[0];
    
    if (!file) {
        // No resume, just continue
        window.location.href = 'preview3.html';
        return;
    }

    const continueBtn = event.target.closest('button');
    const originalText = continueBtn.innerHTML;
    continueBtn.disabled = true;
    continueBtn.innerHTML = '<span class="loading-spinner"></span> Uploading...';

    try {
        const formData = new FormData();
        formData.append('configId', configId);
        formData.append('resume', file);

        const result = await apiCall('/interview-config/resume', 'POST', formData, true);
        
        localStorage.setItem('resumeId', result.resumeId);
        showSuccessMessage('Resume uploaded!');
        
        setTimeout(() => {
            window.location.href = 'preview3.html';
        }, 500);
    } catch (error) {
        console.error('Error uploading resume:', error);
        showErrorMessage(error.message || 'Failed to upload resume');
        continueBtn.disabled = false;
        continueBtn.innerHTML = originalText;
    }
}

// ============ Utility Functions ============
function capitalizeFirst(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

// ============ Initialization ============
window.addEventListener('DOMContentLoaded', () => {
    // Check auth for all preview pages
    if (window.location.pathname.includes('preview')) {
        checkAuth();
    }
    
    // Load saved config
    loadConfigFromLocalStorage();
    updateSummaryPanel();
    
    // Page-specific initialization
    if (window.location.pathname.includes('preview2')) {
        loadSkillsFromLocalStorage();
        loadSavedResumeInfo();
    }
    
    if (window.location.pathname.includes('preview3')) {
        loadSavedResumeInfo();
    }
});

// Save config on input changes
if (targetRoleInput) {
    targetRoleInput.addEventListener('input', saveSkillsToLocalStorage);
}

window.handleSkillsContinue = handleSkillsContinue;
window.handleExamDetails = handleExamDetails;
window.handleDetailsContinue = handleDetailsContinue;
window.handleBasicsContinue = handleBasicsContinue;
window.removeSkill = removeSkill;
window.checkAuth = checkAuth;
window.apiCall = apiCall;
window.showSuccessMessage = showSuccessMessage;
window.showErrorMessage = showErrorMessage;

console.log('preview.js loaded - functions exposed globally');