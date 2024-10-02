function setProgress(percent) {
    const circle = document.querySelector('.progress-ring__circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    document.querySelector('.progress-text').textContent = `${percent}%`;
}

// Обработка изменения ползунка
const input = document.getElementById('progressInput');
input.addEventListener('input', function() {
    setProgress(this.value);
});

// Пример начального прогресса (если нужно)
setProgress(0); // Устанавливаем прогресс на 0% при загрузке