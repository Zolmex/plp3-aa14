// JavaScript simple para el hero - Solo funcionalidades básicas
document.addEventListener('DOMContentLoaded', function() {
    
    // Contador simple para las estadísticas
    function iniciarContadores() {
        const contadores = document.querySelectorAll('.stat__number');
        
        contadores.forEach(contador => {
            const valorFinal = parseInt(contador.textContent); //número al que queremos llegar.
            let valorActual = 0; // arranca en 0.
            const duracion = 2000; // cuánto tarda la animación (2 segundos).
            const incremento = valorFinal / (duracion / 16); // cuánto sube el valor en cada paso (calculado según la duración).
            
            const timer = setInterval(() => { // Cuando se llega al valor final, se detiene clearInterval
                valorActual += incremento;
                if (valorActual >= valorFinal) {
                    contador.textContent = valorFinal + (contador.textContent.includes('+') ? '+' : '');
                    clearInterval(timer);
                } else {
                    contador.textContent = Math.floor(valorActual);
                }
            }, 16); // Cada 16 ms se actualiza el valor (≈ 60 actualizaciones por segundo).
        });
    }
    
    // Iniciar cuando el hero sea visible
    const observer = new IntersectionObserver((entries) => {  // Revisa si el hero entra en pantalla
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                iniciarContadores(); //Cuando es visible, ejecuta iniciarContadores().
                observer.unobserve(entry.target); // Luego deja de observar (unobserve) para que no se repita la animación cada vez que scrolleamos.
            }
        });                // Esto ahorra recursos y hace que la animación solo pase una vez, cuando realmente lo ve el usuario.
    });
    
    const heroSection = document.querySelector('.hero'); 
    if (heroSection) {
        observer.observe(heroSection);
    }
}); // Selecciona la sección hero y la pone bajo observación.

//Si no existe en el HTML, no hace nada (previene errores).