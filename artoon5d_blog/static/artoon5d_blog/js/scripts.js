document.addEventListener("DOMContentLoaded", () => { 
  /* ========================= 
  CAROUSEL (SAFE) ========================= */ 
  const track = document.querySelector('.carousel-track'); 
  const nextBtn = document.querySelector('.carousel-btn.next'); 
  const prevBtn = document.querySelector('.carousel-btn.prev'); 
  if (track && nextBtn && prevBtn) { 
    const slides = Array.from(track.children); 
    let currentIndex = 0; 
    function updateCarousel() { 
      if (!slides.length) return; 
      const slideWidth = slides[0].getBoundingClientRect().width; 
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`; 
    } 
    
    nextBtn.addEventListener('click', () => { 
      currentIndex = (currentIndex + 1) % slides.length; 
      updateCarousel(); 
    }); 
    
    prevBtn.addEventListener('click', () => { 
      currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
      updateCarousel(); 
    }); 
    
    // Auto-play // 
    setInterval(() => { 
      currentIndex = (currentIndex + 1) % slides.length; 
      updateCarousel(); }, 5000); 
    }

  /* =========================
     SCROLL TO TOP BUTTON 
  ========================= */

  window.onscroll = function() {
    const btn = document.getElementById("scrollTopBtn");
    if (!btn) return;
  
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block"; 
    } else { 
      btn.style.display = "none"; 
    } 
  };
  
    window.scrollToTop = function() { 
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };
  
      
  /* =========================
     SHARE FUNCTIONS
  ========================= */
  
  window.MastodonShare = function(event) {
    const button = event.currentTarget;
    const shareText = button.getAttribute("data-src") || "Check this out!";
    const domain = "mastodon.social";
    const shareURL = `https://${domain}/share?text=${encodeURIComponent(shareText)}`; 
    window.open(shareURL, '_blank'); 
  };
  
  window.PixelfeldShare = function(event) {
    const button = event.currentTarget;
    const shareText = button.getAttribute("data-src") || "Check this out!";
    const domain = "pixelfeld.social";
    const shareURL = `https://${domain}/share?text=${encodeURIComponent(shareText)}`; 
    window.open(shareURL, '_blank');
  };
  
  window.FriendicaShare = function(event) {
    const button = event.currentTarget;
    const shareTitle = button.getAttribute("data-title") || "Check this out!";
    const shareURL = button.getAttribute("data-url") || window.location.href;
    const domain = "friendica.eu";
    const fullShareURL = `https://${domain}/share?title=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareURL)}`; 
    window.open(fullShareURL, '_blank'); 
  }; 
});

