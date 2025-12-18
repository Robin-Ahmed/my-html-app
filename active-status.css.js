<style>
/* ===== ACTIVE STATUS STYLE ===== */

.online-status{
    display:flex;
    align-items:center;
    gap:6px;
    color:#fff;
    font-size:13px;
    font-weight:600;
}

.green-dot{
    width:10px;
    height:10px;
    background:#00ff3c;
    border-radius:50%;
    display:inline-block;
    box-shadow:0 0 0 rgba(0,255,60,0.7);
    animation:livePulse 1.5s infinite;
}

@keyframes livePulse{
    0%{
        transform:scale(0.9);
        box-shadow:0 0 0 0 rgba(0,255,60,0.7);
    }
    70%{
        transform:scale(1.1);
        box-shadow:0 0 0 8px rgba(0,255,60,0);
    }
    100%{
        transform:scale(0.9);
        box-shadow:0 0 0 0 rgba(0,255,60,0);
    }
}
</style>

<script>
/* ===== ACTIVE STATUS LOGIC ===== */

(function(){
    const activeNumbers = [9, 10, 11, 14, 7, 16];

    function updateActiveStatus(){
        const el = document.getElementById("onlineCount");
        if(!el) return;

        const random =
            activeNumbers[Math.floor(Math.random() * activeNumbers.length)];

        el.textContent = random;
    }

    updateActiveStatus();
    setInterval(updateActiveStatus, 4000);
})();
</script>
