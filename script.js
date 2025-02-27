const timerElement = document.querySelector(".timer");

let num = 6;

const count = setInterval(() => {
    num -= 1;
    timerElement.textContent = `Зміни збережуться через ${num} сек.`;

    if (num === 0) {
    clearInterval(count);
    timerElement.textContent = "Зміни збережені";
    }
}, 1000);


        const box = document.querySelector(".box");
        let position = 0;
        let direction = 1; 

        setInterval(() => {
            position += 5 * direction;
            box.style.left = position + "px";

            if (position >= 275 || position <= 0) {
            direction *= -1; 
            }
        }, 25);

const text = document.querySelector(".text");
const btn = document.querySelector(".button");
const inp = document.querySelector(".second");

btn.addEventListener("click", () => {
let second = Number(inp.value); 
    if (!isNaN(second) && second > 0) {
    
    setTimeout(() => {
        text.textContent = `після того як ви нажали на кнопку пройшло ${second} секунд`;
    }, second * 1000);
    } else {
        text.textContent = "Будь ласка, введіть правильне число.";
    }
});