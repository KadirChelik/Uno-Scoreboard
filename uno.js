


var body = document.querySelector("body");
var silmeButonu = document.getElementById("silme-butonu");
var silmeButonuDefault = silmeButonu.innerHTML;
var kisiButonu = document.getElementById("kisi-butonu");
var kisiButonuDefault = kisiButonu.innerHTML;
var ilkTiklamasilme = true;
var ilkTiklamakisi = true;

var lap = document.getElementById("lap");
var user1Score = document.getElementById("user1score");
var user2Score = document.getElementById("user2score");
const user1ButtonPlus = document.getElementById("user1buttonplus");
const user1ButtonMinus = document.getElementById("user1buttonminus"); 
const user2ButtonPlus = document.getElementById("user2buttonplus");
const user2ButtonMinus = document.getElementById("user2buttonminus");
let sirakimde = "Kadir Başlıyor";

function changeturn() {
  if (sirakimde === "Kadir Başlıyor") {
    sirakimde = "Nur Başlıyor";
  } else {
    sirakimde = "Kadir Başlıyor";
  }
  if (ilkTiklamakisi === false) {
    kisiButonu.innerHTML = sirakimde;
  }
  
  localStorage.setItem("sirakimde", sirakimde);
}

// Local Storage'dan değerleri al ve lap, user1score ve user2score değerlerini güncelle
function updateScoresAndLap() {
  // Local Storage'dan değerleri al
  var savedLap = localStorage.getItem('lap');
  var savedUser1Score = localStorage.getItem('user1score');
  var savedUser2Score = localStorage.getItem('user2score');

  // Eğer değerler daha önce kaydedilmemişse, varsayılan değerleri ayarla
  if (!savedLap || !savedUser1Score || !savedUser2Score) {
    savedLap = "1";
    savedUser1Score = "0";
    savedUser2Score = "0";
  }

  // Değerleri lap, user1score ve user2score elementlerine aktar
  lap.innerHTML = savedLap;
  user1Score.innerHTML = savedUser1Score;
  user2Score.innerHTML = savedUser2Score;
}

// Skorları ve lap değerlerini Local Storage'a kaydet
function saveScoresAndLap() {
  var lapValue = lap.innerHTML;
  var user1ScoreValue = user1Score.innerHTML;
  var user2ScoreValue = user2Score.innerHTML;

  // Değerleri Local Storage'a kaydet
  localStorage.setItem('lap', lapValue);
  localStorage.setItem('user1score', user1ScoreValue);
  localStorage.setItem('user2score', user2ScoreValue);
}

silmeButonu.addEventListener("click", function(event) {
  event.stopPropagation();
  if (ilkTiklamasilme) {
    silmeButonu.innerHTML = "Silmeyi Onayla";
    silmeButonu.classList.add("onay-metni");
    silmeButonu.style.width = "200px";
    ilkTiklamasilme = false;
  } else {
    silmeButonu.innerHTML = silmeButonuDefault;
    silmeButonu.classList.remove("onay-metni");
    silmeButonu.style.width = "90px";
    ilkTiklamasilme = true;
    lap.innerHTML = "1";
    user1Score.innerHTML = "0";
    user2Score.innerHTML = "0";
  }

  // Skorları ve lap değerlerini kaydet
  saveScoresAndLap();
});

kisiButonu.addEventListener("click", function(event) {
  event.stopPropagation();
  if (ilkTiklamakisi) {
    kisiButonu.innerHTML = sirakimde;
    kisiButonu.classList.add("kisi-metni");
    kisiButonu.style.transition = "0.5s";
    kisiButonu.style.width = "200px";
    ilkTiklamakisi = false;
  } else {
    kisiButonu.innerHTML = kisiButonuDefault;
    kisiButonu.classList.remove("kisi-metni");
    kisiButonu.style.transition = "0.5s";
    kisiButonu.style.width = "90px";
    ilkTiklamakisi = true;
  }

  // Skorları ve lap değerlerini kaydet
  saveScoresAndLap();
});

body.addEventListener("click", function() {
  silmeButonu.style.width = "90px";
  silmeButonu.style.transition = "0.5s";
  silmeButonu.innerHTML = silmeButonuDefault;
  silmeButonu.classList.remove("onay-metni");
  ilkTiklamasilme = true;

  kisiButonu.style.width = "90px";
  kisiButonu.style.transition = "0.5s";
  kisiButonu.innerHTML = kisiButonuDefault;
  kisiButonu.classList.remove("kisi-metni");
  ilkTiklamakisi = true;

  // Skorları ve lap değerlerini kaydet
  saveScoresAndLap();
});

user1ButtonPlus.addEventListener("click", function(event) {
  event.stopPropagation();
  user1Score.innerHTML = ++user1Score.innerHTML;
  lap.innerHTML = ++lap.innerHTML;
  changeturn();

  // Skorları ve lap değerlerini kaydet
  saveScoresAndLap();
});

user1ButtonMinus.addEventListener("click", function(event) {
  event.stopPropagation();
  if (parseInt(user1Score.innerHTML) === 0) {
    user1Score.innerHTML = "0";
  } else {
    user1Score.innerHTML = --user1Score.innerHTML;
    lap.innerHTML = --lap.innerHTML;
    changeturn();
  }

  // Skorları ve lap değerlerini kaydet
  saveScoresAndLap();
});

user2ButtonPlus.addEventListener("click", function(event) {
  event.stopPropagation();
  user2Score.innerHTML = ++user2Score.innerHTML;
  lap.innerHTML = ++lap.innerHTML;
  changeturn();

  // Skorları ve lap değerlerini kaydet
  saveScoresAndLap();
});

user2ButtonMinus.addEventListener("click", function(event) {
  event.stopPropagation();
  if (parseInt(user2Score.innerHTML) === 0) {
    user2Score.innerHTML = "0";
  } else {
    user2Score.innerHTML = --user2Score.innerHTML;
    lap.innerHTML = --lap.innerHTML;
    changeturn();
  }

  // Skorları ve lap değerlerini kaydet
  saveScoresAndLap();
});

function updateTurn() {
  const storedSirakimde = localStorage.getItem("sirakimde");
  if (storedSirakimde) {
    sirakimde = storedSirakimde;
  }
}
// Sayfa yüklendiğinde skorları ve lap değerini güncelle
updateScoresAndLap();
updateTurn();