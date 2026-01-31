let hairIndex = 1;
let clothesIndex = 1;

function changeHair(){
  hairIndex = hairIndex === 1 ? 2 : 1;
  document.getElementById("hair").src = `assets/hair${hairIndex}.png`;
}

function changeClothes(){
  clothesIndex = clothesIndex === 1 ? 2 : 1;
  document.getElementById("clothes").src = `assets/clothes${clothesIndex}.png`;
}

function saveAvatar(){
  alert("Аватар сохранен!");
}
