const numeroSecreto = 50;
        let intentos = [];
        const grid = document.getElementById('grid');
        for (let i = 1; i <= 100; i++) {
            const cuadrado = document.createElement('div');
            cuadrado.classList.add('cuadrado');
            cuadrado.innerText = i;
            cuadrado.addEventListener('click', () => adivinarNumero(i)); 
            grid.appendChild(cuadrado);
        }

        function adivinarNumero(numeroUsuario) {
            const resultadoDiv = document.getElementById('resultado');
            const intentosDiv = document.getElementById('intentos');
            intentos.push(numeroUsuario);

            if (numeroUsuario === numeroSecreto) {
                resultadoDiv.innerText = "¡Felicidades, adivinaste el número secreto!";
                intentosDiv.innerText = "Números introducidos: " + intentos.join(", ");
            } else {
                resultadoDiv.innerText = "Ups, el número secreto es incorrecto. Vuelve a intentarlo.";
                intentosDiv.innerText = "Números introducidos hasta ahora: " + intentos.join(", ");
            }
        }