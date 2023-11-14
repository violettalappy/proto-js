const localizationTexts = {
    'en': {
        'welcome': 'Welcome',
        'goodbye': 'Goodbye'
    },
    'vi': {
        'welcome': 'Chào mừng',
        'goodbye': 'Tạm biệt'
    }
};

function getLocalizedText(language, key) {
    return localizationTexts[language][key];
}

console.log(getLocalizedText('en', 'welcome')); // Outputs: Welcome
console.log(getLocalizedText('vi', 'goodbye')); // Outputs: Tạm biệt
