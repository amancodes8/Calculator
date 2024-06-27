const input = document.getElementById('val');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');

        if (value === 'C') {
            input.textContent = '';
        } else if (value === '=') {
            try {
                input.textContent = eval(input.textContent.replace('÷', '/'));
            } catch {
                input.textContent = 'Error';
            }
        } else if (value === '√') {
            input.textContent = Math.sqrt(eval(input.textContent));
        } else if (value === 'π') {
            input.textContent += Math.PI;
        } else if (value === 'log') {
            input.textContent = Math.log10(eval(input.textContent));
        } else if (value === '^') {
            input.textContent += '**';
        } else if (value === '+/-') {
            input.textContent = input.textContent.startsWith('-') ?
                                input.textContent.slice(1) :
                                '-' + input.textContent;
        } else if (value === '×') {
            input.textContent += '*';
        } else if (value === '÷') {
            input.textContent += '/';
        } else {
            input.textContent += value;
        }
    });
});
