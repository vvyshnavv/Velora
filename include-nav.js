// include-nav.js - load the shared nav fragment into #site-nav
(function() {
    function loadNav() {
        fetch('nav.html')
            .then(function(res) { return res.text(); })
            .then(function(html) {
                var container = document.getElementById('site-nav');
                if (container) container.innerHTML = html;

                // after inserting nav, re-run sticky nav script by loading script.js
                var s = document.createElement('script');
                s.src = 'script.js';
                // once the sticky script loads, trigger a one-time scroll event
                // so the script can evaluate the current scroll position and
                // add/remove the "scrolled" class immediately.
                s.onload = function() { window.dispatchEvent(new Event('scroll')); };
                document.body.appendChild(s);
            })
            .catch(function(err) { console.error('Failed to load nav:', err); });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadNav);
    } else {
        loadNav();
    }
})();
