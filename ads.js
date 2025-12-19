// ads.js
(function() {
    const PLUGRUSH_DOMAIN_ID = "373794"; // আপনার domain ID

    // Create ad overlay
    function createAdOverlay() {
        let overlay = document.createElement("div");
        overlay.id = "prAdOverlay";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "99999";

        // Cancel button
        let cancelBtn = document.createElement("button");
        cancelBtn.innerText = "✕";
        cancelBtn.style.position = "absolute";
        cancelBtn.style.top = "20px";
        cancelBtn.style.right = "20px";
        cancelBtn.style.fontSize = "24px";
        cancelBtn.style.padding = "8px 12px";
        cancelBtn.style.cursor = "pointer";
        cancelBtn.style.background = "white";
        cancelBtn.style.border = "none";
        cancelBtn.style.borderRadius = "6px";
        cancelBtn.onclick = () => {
            overlay.style.display = "none";
            setTimeout(() => {
                overlay.style.display = "flex";
            }, 5000); // 5 second later show again
        };

        // Ad container
        let adContainer = document.createElement("div");
        adContainer.id = "_prAdContainer";
        adContainer.style.width = "80%";
        adContainer.style.maxWidth = "728px";
        adContainer.style.height = "90%";
        adContainer.style.backgroundColor = "#fff";
        adContainer.style.borderRadius = "12px";
        adContainer.style.overflow = "hidden";
        adContainer.style.display = "flex";
        adContainer.style.justifyContent = "center";
        adContainer.style.alignItems = "center";

        overlay.appendChild(adContainer);
        overlay.appendChild(cancelBtn);
        document.body.appendChild(overlay);

        loadPlugRushAd(adContainer);
    }

    function loadPlugRushAd(container) {
        let script = document.createElement("script");
        script.src = `https://prscripts.com/d/?d=${PLUGRUSH_DOMAIN_ID}`;
        script.async = true;
        container.appendChild(script);
    }

    // Initialize ad overlay on page load
    window.addEventListener("load", () => {
        createAdOverlay();
    });
})();
