// ===== PlugRush Ads Integration =====
(function() {
    const DOMAIN_ID = "373794"; // আপনার ডোমেইন আইডি
    const SECRET_KEY = "cff19732e305fdd65a288b7399285cfad3e4efbf9d04e96269d3f321da4db747";
    const INTEGRATION_URL = "https://prscripts.com/d/?resource=pubJS";

    let adOverlay = null;
    let adTimer = null;

    function loadAdScript() {
        const script = document.createElement('script');
        script.src = `${INTEGRATION_URL}&did=${DOMAIN_ID}`;
        script.async = true;
        document.body.appendChild(script);
    }

    function createAdBox() {
        adOverlay = document.createElement('div');
        adOverlay.id = 'plugrushAdOverlay';
        adOverlay.style.position = 'fixed';
        adOverlay.style.inset = '0';
        adOverlay.style.background = 'rgba(0,0,0,0.6)';
        adOverlay.style.display = 'flex';
        adOverlay.style.justifyContent = 'center';
        adOverlay.style.alignItems = 'center';
        adOverlay.style.zIndex = '99999';

        // Ad container
        const adBox = document.createElement('div');
        adBox.id = 'plugrushAdBox';
        adBox.style.position = 'relative';
        adBox.style.width = '90%';
        adBox.style.maxWidth = '600px';
        adBox.style.background = '#fff';
        adBox.style.borderRadius = '12px';
        adBox.style.overflow = 'hidden';
        adBox.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';

        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.innerText = '×';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '10px';
        closeBtn.style.right = '10px';
        closeBtn.style.fontSize = '20px';
        closeBtn.style.background = 'transparent';
        closeBtn.style.border = 'none';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = () => {
            adOverlay.style.display = 'none';
            if (adTimer) clearTimeout(adTimer);
            adTimer = setTimeout(() => {
                adOverlay.style.display = 'flex';
            }, 5000); // 5 সেকেন্ড পর আবার দেখাবে
        };

        // Ad content iframe
        const iframe = document.createElement('iframe');
        iframe.src = `${INTEGRATION_URL}&did=${DOMAIN_ID}`;
        iframe.style.width = '100%';
        iframe.style.height = '300px';
        iframe.style.border = 'none';

        adBox.appendChild(closeBtn);
        adBox.appendChild(iframe);
        adOverlay.appendChild(adBox);
        document.body.appendChild(adOverlay);
    }

    // Initialize
    window.addEventListener('load', () => {
        createAdBox();
        loadAdScript();
    });
})();
