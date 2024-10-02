const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

document.getElementById('updateButton').addEventListener('click', function() {
    const percentInput = document.getElementById('percentInput').value;
    if (percentInput >= 0 && percentInput <= 100) {
        setProgress(percentInput);
    } else {
        alert('Please enter a value between 0 and 100.');
    }
});
