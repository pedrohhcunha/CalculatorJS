const buttons = document.querySelectorAll('button')
const prev = document.querySelector('.prev')
const result = document.querySelector('.result')
finish = 0
var signal = 0
buttons.forEach(element => {
    element.addEventListener('click', () => {   
        if (finish) {
            prev.innerHTML = ""
            result.innerHTML = ""
            finish = 0
        }
        switch (element.innerHTML) {
            case "=":
                result.innerHTML = eval(prev.innerHTML.replace("x", "*"))
                finish = 1
                break;
            case "x":
                if (signal == 0) {
                    prev.innerHTML += element.innerHTML
                    signal = 1
                }
                break;
            case "/":
                if (signal == 0) {
                    prev.innerHTML += element.innerHTML
                    signal = 1
                }
                break;
            case "+":
                if (signal == 0) {
                    prev.innerHTML += element.innerHTML
                    signal = 1
                }
                break;
            case "-":
                if (signal == 0) {
                    prev.innerHTML += element.innerHTML
                    signal = 1
                }
                break;
            case "apagar":
                prev.innerHTML = ""
                finish = 0
                break;
            default:
                prev.innerHTML += element.innerHTML
                signal = 0
                break;
        }
    })
});