let audio = document.getElementById("prankSound");


window.addEventListener('load', () => {
  audio.play().catch(err => {
    console.log("Нужно взаимодействие пользователя. Ща порешаем...");
  });
});