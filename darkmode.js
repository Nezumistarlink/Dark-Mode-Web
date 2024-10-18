let body = document.body;
let info = document.getElementById ("info");
let mode = document.getElementById ("mode");
let home = document.getElementById ("home");

const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;

function darkMode() {
    if (darkRemainingLeft == 1){
        info.textContent = "JATAH DARKMODE ANDA SUDAH HABIS"
        home.textContent = "RESTART";
        mode.style.display = "none";
        return;
    }

     else  {
        mode.textContent = "LIGHT MODE"
    }
    

    darkCounter +=1;
    darkRemainingLeft = darkLimit - darkCounter;

    info.textContent = `DARKMODE DIPAKAI ${darkCounter}x, TERSISA ${darkRemainingLeft}`
    body.classList.toggle ('dark');
}

function reRender () {
    location.reload();
}