const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        console.log('Theme toggle clicked');
    });
}

const durationSlider = document.getElementById('duration');
const durationValue = document.getElementById('durationValue');
const summaryDuration = document.getElementById('summaryDuration');

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

const difficultySelect = document.getElementById('difficulty');
const summaryDifficulty = document.getElementById('summaryDifficulty');

if (difficultySelect) {
    difficultySelect.addEventListener('change', (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const difficultyText = selectedOption.text.split(' - ')[0];
        if (summaryDifficulty) {
            summaryDifficulty.textContent = difficultyText;
        }
    });
}

const interviewTypeSelect = document.getElementById('interviewType');
const summaryType = document.getElementById('summaryType');

if (interviewTypeSelect) {
    interviewTypeSelect.addEventListener('change', (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const typeText = selectedOption.text.split(' - ')[0];
        if (summaryType) {
            summaryType.textContent = typeText;
        }
    });
}

function saveConfig() {
    const config = {
        duration: durationSlider ? durationSlider.value : 45,
        difficulty: difficultySelect ? difficultySelect.value : 'intermediate',
        interviewType: interviewTypeSelect ? interviewTypeSelect.value : 'technical'
    };
    localStorage.setItem('interviewConfig', JSON.stringify(config));
}

function loadConfig() {
    const savedConfig = localStorage.getItem('interviewConfig');
    if (savedConfig) {
        const config = JSON.parse(savedConfig);
        if (durationSlider) durationSlider.value = config.duration;
        if (difficultySelect) difficultySelect.value = config.difficulty;
        if (interviewTypeSelect) interviewTypeSelect.value = config.interviewType;
        
        if (durationSlider) durationSlider.dispatchEvent(new Event('input'));
        if (difficultySelect) difficultySelect.dispatchEvent(new Event('change'));
        if (interviewTypeSelect) interviewTypeSelect.dispatchEvent(new Event('change'));
    }
}

window.addEventListener('beforeunload', saveConfig);

window.addEventListener('DOMContentLoaded', loadConfig);