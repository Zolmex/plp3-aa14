// JavaScript simple sin animaciones complejas
document.addEventListener('DOMContentLoaded', function() {
    
    // Contadores básicos
    function iniciarContadores() {
        const contadores = document.querySelectorAll('.stat__number');
        
        contadores.forEach(contador => {
            const target = parseInt(contador.getAttribute('data-target'));
            contador.textContent = target;
        });
    }
    
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    iniciarContadores();
});