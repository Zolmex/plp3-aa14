// JavaScript simple para el hero - Solo funcionalidades básicas
document.addEventListener('DOMContentLoaded', function() {
    
    // Contador simple para las estadísticas
    function iniciarContadores() {
        const contadores = document.querySelectorAll('.stat__number');
        
        contadores.forEach(contador => {
            const valorFinal = parseInt(contador.textContent);
            let valorActual = 0;
            const duracion = 2000;
            const incremento = valorFinal / (duracion / 16);
            
            const timer = setInterval(() => {
                valorActual += incremento;
                if (valorActual >= valorFinal) {
                    contador.textContent = valorFinal + (contador.textContent.includes('+') ? '+' : '');
                    clearInterval(timer);
                } else {
                    contador.textContent = Math.floor(valorActual);
                }
            }, 16);
        });
    }
    
    // Iniciar cuando el hero sea visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                iniciarContadores();
                observer.unobserve(entry.target);
            }
        });
    });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        observer.observe(heroSection);
    }
});