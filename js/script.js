// Добавляем переменные для управления элементами
var popupButton = document.querySelector(".popup-form-button");
var popup = document.querySelector(".feedback-form-wrapper");
var popupClose = document.querySelector(".popup-close");
var backdrop = document.querySelector(".backdrop-shadow");

var fieldfocus = popup.querySelector("[name=fullname]");
var form = popup.querySelector(".feedback-form");

var fullName = form.querySelector("[name=fullname]");
var email = form.querySelector("[name=email]");
var storage = localStorage.getItem("feedbackEmail");
//прописываем действия
//Появление попапа по нажатию на кнопку
popupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("visually-hidden");
  popup.classList.add("feedback-form-appear");
  backdrop.classList.toggle("backdrop");
  fieldfocus.focus();
  if(storage) {
    email.value = storage;
  }
});
//Закрытие попапа по клику на кнопку закрытия
popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("visually-hidden");
  backdrop.classList.toggle("backdrop");
  popup.classList.remove("feedback-form-appear");
  popup.classList.remove("wrong-fields");
});
//Закрытие попапа по клику на оверлей
backdrop.addEventListener("click", function (evt) {
  popup.classList.toggle("visually-hidden");
  backdrop.classList.toggle("backdrop");
  popup.classList.remove("feedback-form-appear");
  popup.classList.remove("wrong-fields");
});
//Закрытие попапов эскейпом
document.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27 && !popup.classList.contains("visually-hidden")) {
    popup.classList.toggle("visually-hidden");
    backdrop.classList.toggle("backdrop");
    popup.classList.remove("feedback-form-appear");
    popup.classList.remove("wrong-fields");
  }
});

//проверка валидности формы и добавление данных в локалсторадж
form.addEventListener("submit", function (evt) {
  if(!fullName.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("wrong-fields");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("wrong-fields");
  }else{
    localStorage.setItem("feedbackEmail", email.value);
  }
});
