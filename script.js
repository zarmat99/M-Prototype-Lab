// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, a.cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only process internal links
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar color change on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(6, 10, 18, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.backgroundColor = 'rgba(6, 10, 18, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
        }
    });

    // Form submission
    const contactForm = document.getElementById('project-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const idea = document.getElementById('idea').value;
            
            // Basic validation
            if (!name || !email || !idea) {
                alert('Please fill in all form fields.');
                return;
            }
            
            // Simulate form submission
            const submitButton = document.querySelector('.submit-button');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitButton.disabled = true;
            
            // Simulate an API call with timeout
            setTimeout(function() {
                // Reset form
                contactForm.reset();
                
                // Show success message
                submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
                submitButton.style.backgroundColor = '#00ff9d';
                
                // Reset button after 3 seconds
                setTimeout(function() {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    submitButton.style.backgroundColor = '';
                    
                }, 3000);
            }, 1500);
        });
    }

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
            if (navItem.getAttribute('href') === `#${current}`) {
                navItem.classList.add('active');
            }
        });
    });

    // Add neon color variation
    const toggleNeonColor = () => {
        const root = document.documentElement;
        const currentAccent = getComputedStyle(root).getPropertyValue('--accent-color');
        
        // Toggle between blue and green
        if (currentAccent.includes('--neon-blue')) {
            root.style.setProperty('--accent-color', 'var(--neon-green)');
        } else {
            root.style.setProperty('--accent-color', 'var(--neon-blue)');
        }
    };
    
    // Subtle color change on logo click
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', toggleNeonColor);
    }

    // Add hover animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon i');
            icon.style.transform = 'scale(1.2)';
            icon.style.textShadow = '0 0 10px var(--accent-color)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon i');
            icon.style.transform = '';
            icon.style.textShadow = '';
        });
    });

    // Initialize intersection observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    const animatedElements = document.querySelectorAll('.step, .service-card, .stat-item, .pricing-card, .custom-package');
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
    
    // Add CSS for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        nav ul li a.active {
            color: var(--accent-color);
            font-weight: 600;
        }
    `;
    document.head.appendChild(style);

    // Highlight selected pricing card 
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Rimuovi la selezione da tutte le card
            pricingCards.forEach(c => c.classList.remove('selected'));
            
            // Aggiungi la classe selected alla card cliccata
            this.classList.add('selected');
            
            // Ottieni il nome del piano
            const planName = this.querySelector('h3').textContent;
            
            // Aggiorna il campo nascosto del form di contatto (se esiste)
            const planField = document.getElementById('selected-plan');
            if (planField) {
                planField.value = planName;
            }
            
            // Scroll verso la sezione contatti è gestito dal link href
        });
    });
}); 