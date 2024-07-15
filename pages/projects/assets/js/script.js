document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.card-container');
    const scrollbarDots = document.querySelectorAll('.scrollbar-dot');
    const cards = document.querySelectorAll('.card');
    
    cardContainer.addEventListener('scroll', function() {
        const scrollPercentage = cardContainer.scrollLeft / (cardContainer.scrollWidth - cardContainer.clientWidth);
        const activeIndex = Math.round(scrollPercentage * (scrollbarDots.length - 1));
        
        scrollbarDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    });
    
    scrollbarDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            const scrollPosition = index / (scrollbarDots.length - 1) * (cardContainer.scrollWidth - cardContainer.clientWidth);
            cardContainer.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });

            cards.forEach((card, idx) => {
                if (idx === index) {
                    card.classList.add('enlarged');
                } else {
                    card.classList.remove('enlarged');
                }
            });
        });

        dot.addEventListener('mouseenter', function() {
            dot.classList.add('active');
        });

        dot.addEventListener('mouseleave', function() {
            dot.classList.remove('active');
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = card.getAttribute('href');
            window.location.href = targetUrl;
        });
    });
});
