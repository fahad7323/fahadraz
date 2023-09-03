document.addEventListener("DOMContentLoaded", function () {
    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll(".btn");

    let expression = "";

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const buttonText = e.target.getAttribute("data-num");

            if (buttonText === "=") {
                try {
                    const result = eval(expression);
                    screen.value = result;
                    expression = result;
                } catch (error) {
                    screen.value = "Error";
                    expression = "";
                }
            } else if (buttonText === "AC") {
                screen.value = "";
                expression = "";
            } else {
                expression += buttonText;
                screen.value = expression;
            }
        });
    });
});
