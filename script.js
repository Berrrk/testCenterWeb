function checkOrientation() {
    if (window.innerWidth > window.innerHeight) {
      // Ekran yatayda (landscape)
      document.getElementById("content").className = "horizontal";
      document.getElementById("content").innerText = "Hoşgeldiniz";
    } else {
      // Ekran dikeyde (portrait)
      document.getElementById("content").className = "vertical";
      document.getElementById("content").innerText = "Lütfen telefonunuzu/tabletinizi yatay yapın.";
    }
  }
  
  // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde ekran yönetimini kontrol et
  window.addEventListener("load", checkOrientation);
  window.addEventListener("resize", checkOrientation);