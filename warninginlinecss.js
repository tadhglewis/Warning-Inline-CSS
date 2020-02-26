(function() {
    const inlineCss = document.querySelectorAll('[style]');
    
    if (inlineCss.length > 0) {
        for (var i = 0; i < inlineCss.length; i++) {
            console.error('Warning-Inline-CSS: Inline CSS detected... %c' + inlineCss[i].outerHTML, "color: grey;")
        }
    }
})();