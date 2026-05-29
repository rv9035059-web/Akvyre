// Vercel Speed Insights initialization for vanilla JavaScript
// This script loads and initializes Vercel Speed Insights for the website

(function() {
  // Inject the Speed Insights script
  function injectSpeedInsights() {
    // Initialize the queue for speed insights before the library loads
    if (window.si) return;
    
    window.si = function(...params) {
      window.siq = window.siq || [];
      window.siq.push(params);
    };

    // Create and inject the script tag
    const script = document.createElement('script');
    script.src = 'https://va.vercel-scripts.com/v1/speed-insights/script.js';
    script.defer = true;
    
    // Set up PROD mode script source (development uses script.debug.js automatically)
    const isProduction = window.location.hostname !== 'localhost' && 
                        window.location.hostname !== '127.0.0.1';
    
    if (!isProduction) {
      script.src = 'https://va.vercel-scripts.com/v1/speed-insights/script.debug.js';
    }
    
    // Add to document head
    document.head.appendChild(script);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSpeedInsights);
  } else {
    injectSpeedInsights();
  }
})();
