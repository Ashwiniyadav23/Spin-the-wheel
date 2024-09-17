let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let rotationValue = 0;

spinBtn.onclick = function () {
    let randomDegree = Math.floor(Math.random() * 3600) + 360;  

    rotationValue += randomDegree;

    wheel.style.transform = `rotate(${rotationValue}deg)`;
}
