const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        if (boton.id == 'c') {
            pantalla.textContent = '0';
            return;
        }

        if (boton.id == 'igual') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = 'error';
            }
            return;
        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'error') {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});