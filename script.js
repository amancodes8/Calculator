const input = document.getElementById('val');
const buttons = document.querySelectorAll('.button');
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
       

       

      switch(value){
        case 'C':
            input.textContent = '';
            break;
            case '/':
                input.textContent  += '/';
                break;
                case '√':
                    input.textContent = Math.sqrt(eval(input.textContent));
                    break;
                    case '=' :
                    input.textContent = eval(input.textContent);
                    break;
                    case 'sin':
                        input.textContent = Math.sin(degreesToRadians(eval(input.textContent)));
                        break;
                    case 'cos':
                        input.textContent = Math.cos(degreesToRadians((eval(input.textContent))));
                         break;
                    case 'tan':
                        input.textContent = Math.tan(degreesToRadians((eval(input.textContent))));
                        break;
                    case '%':
                        input.textContent = eval(input.textContent)/100;
                        break;
                        case 'x':
                            input.textContent = input.textContent.slice(0, -1);
                            break;
                        case 'log':
                            input.textContent = Math.log(eval(input.textContent));
                            break;
                    default :
                    input.textContent += value;
      }
    });
});
