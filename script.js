
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("keydown", function(event) { // Klavyeden herhangi bir tuşa basıldığında "keydown" olayını dinler
  
    if (event.key === "Escape") { // Eğer basılan tuşun değeri "Escape" ise devam et
  
      modal.style.display = "none"; // "modal" adlı elementin "style.display" özelliğini "none" olarak ayarlar ve bu modalın görünürlüğünü kapatır
    }
  });

window.key