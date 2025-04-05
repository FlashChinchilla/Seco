// Text Typing Animation
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector('.text-transition');
    const sentences = [
        "Need Secure Network for Your Business?",
        "Looking for Professional IT Support?",
        "Require Advanced Cyber Security Services?",
        "Let Us Help You Stay Protected Online."
    ];
    
    let sentenceIndex = 0;
    let charIndex = 0;
    let currentSentence = sentences[sentenceIndex];
    let isDeleting = false;
    
    function typeText() {
        if (!isDeleting && charIndex < currentSentence.length) {
            textElement.innerHTML = currentSentence.substring(0, charIndex + 1) + '<div class="cursor"></div>';
            charIndex++;
            setTimeout(typeText, 40);
        } else if (!isDeleting) {
            isDeleting = true;
            setTimeout(typeText, 2000);
        } else if (isDeleting && charIndex > 0) {
            textElement.innerHTML = currentSentence.substring(0, charIndex - 1) + '<div class="cursor"></div>';
            charIndex--;
            setTimeout(typeText, 20);
        } else {
            isDeleting = false;
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            currentSentence = sentences[sentenceIndex];
            setTimeout(typeText, 500);
        }
    }
    
    typeText();
});

// Mobile Navbar Toggle
function toggleNavbar() {
    const navbarMobile = document.querySelector('.navbar-mobile');
    const hamburger = document.querySelector('.hamburger');
    navbarMobile.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Mobile Dropdown Toggle
document.querySelectorAll('.mobile-dropdown-toggle').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const menu = button.nextElementSibling;
        menu.classList.toggle('active');
        
        // Toggle arrow
        if (button.textContent.includes('▼')) {
            button.textContent = button.textContent.replace('▼', '▲');
        } else {
            button.textContent = button.textContent.replace('▲', '▼');
        }
    });
});

// Desktop Dropdown Hover Effects
document.querySelectorAll('.dropdown').forEach(dropdown => {
    let hoverTimeout;
    
    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.style.display = 'grid';
        setTimeout(() => {
            menu.style.opacity = '1';
            menu.style.transform = 'translateX(-50%) translateY(5px)';
        }, 10);
    });
    
    dropdown.addEventListener('mouseleave', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        hoverTimeout = setTimeout(() => {
            menu.style.opacity = '0';
            menu.style.transform = 'translateX(-50%) translateY(0)';
            setTimeout(() => menu.style.display = 'none', 300);
        }, 200);
    });
    
    dropdown.querySelector('.dropdown-menu')?.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
    });
    
    dropdown.querySelector('.dropdown-menu')?.addEventListener('mouseleave', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        hoverTimeout = setTimeout(() => {
            menu.style.opacity = '0';
            menu.style.transform = 'translateX(-50%) translateY(0)';
            setTimeout(() => menu.style.display = 'none', 300);
        }, 200);
    });
});


// Guaranteed Working Number Animation
document.addEventListener("DOMContentLoaded", function() {
    const animateValue = (id, start, end, duration, suffix = "") => {
      const element = document.getElementById(id);
      if (!element) return;
      
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        if (id === 'response-time') {
          element.textContent = value + "m";
        } else if (suffix) {
          element.textContent = value + suffix;
        } else {
          element.textContent = value;
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };
  
    // Check if section is in view
    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };
  
    const checkScroll = () => {
      const section = document.querySelector('.cyber-stats');
      if (isInViewport(section)) {
        // Start animations
        animateValue('threat-block', 0, 99, 2000, ".9%");
        animateValue('response-time', 0, 30, 2000);
        animateValue('audit-success', 0, 100, 2000, "%");
        animateValue('years-exp', 0, 7, 2000);
        animateValue('businesses', 0, 834, 2000);
        
        // Remove scroll listener after triggering
        window.removeEventListener('scroll', checkScroll);
      }
    };
  
    // Initial check in case already in view
    checkScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', checkScroll);
  });

  // Animate feature cards on scroll
document.addEventListener("DOMContentLoaded", function() {
  const animateFeatures = () => {
    const features = document.querySelectorAll('.feature-card');
    features.forEach((feature, index) => {
      setTimeout(() => {
        feature.style.opacity = '1';
        feature.style.transform = 'translateY(0)';
      }, 150 * index);
    });
  };

  // Case study card hover effects
  document.querySelectorAll('.case-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.case-content').style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.case-content').style.backgroundColor = '';
    });
  });

  // Check if features are in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateFeatures();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(document.querySelector('.security-features'));
});
