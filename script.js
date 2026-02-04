// =======================
// DAY NAVIGATION
// =======================
function openDay(day) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(day).classList.add('active');
}

function goHome() {
  openDay('home');
}

// =======================
// VALENTINE YES / NO LOGIC
// =======================
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

let noClickCount = 0;
let yesScale = 1;

if (noBtn && yesBtn) {
  noBtn.addEventListener('click', () => {
    noClickCount++;

    // YES grows every time NO is clicked
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    if (noClickCount === 1) {
      noBtn.innerText = "Are you sure? 🤔";
    } 
    else if (noClickCount === 2) {
      noBtn.innerText = "Think again 😌";
    } 
    else {
      moveNo(noBtn);
    }
  });

  yesBtn.addEventListener('click', acceptLove);
}

// NO button runs away
function moveNo(btn) {
  btn.style.position = 'absolute';
  btn.style.top = Math.random() * 80 + '%';
  btn.style.left = Math.random() * 80 + '%';
}

// =======================
// YES ACCEPTED + CONFETTI
// =======================
function acceptLove() {
  document.getElementById('choiceButtons').style.display = 'none';
  document.getElementById('question').style.display = 'none';
  document.getElementById('accepted').style.display = 'block';
  confettiEffect();
}

// Emoji confetti
function confettiEffect() {
  for (let i = 0; i < 120; i++) {
    const conf = document.createElement("div");
    conf.innerHTML = "💖";
    conf.style.position = "fixed";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-20px";
    conf.style.fontSize = "24px";
    conf.style.animation = "fall 3s linear";
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 3000);
  }
}

// =======================
// SECRET MESSAGE
// =======================
function revealSecret() {
  document.getElementById("secret").style.display = "block";
}


// DATE LOCK 🔒
// const unlockDates = {
//   rose: 7,
//   propose: 8,
//   chocolate: 9,
//   teddy: 10,
//   promise: 11,
//   hug: 12,
//   kiss: 13,
//   valentine: 14
// };

// const today = new Date().getDate();

// document.querySelectorAll('[data-day]').forEach(btn => {
//   const day = btn.dataset.day;
//   if (today < unlockDates[day]) {
//     btn.disabled = true;
//     btn.innerHTML += " 🔒";
//     btn.style.opacity = "0.5";
//   }
// });

