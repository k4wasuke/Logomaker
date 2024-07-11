const memoryCode = localStorage.getItem("storage");
const jsonCode = JSON.parse(memoryCode);
console.log(jsonCode);

const fan = [
  document.querySelector(".fan1"),
  document.querySelector(".fan2"),
  document.querySelector(".fan3"),
  document.querySelector(".fan4"),
  document.querySelector(".fan5"),
  document.querySelector(".fan6"),
];

const makeLogo = () => {
  for (i = 0; i < 6; i++) {
    fan[i].setAttribute("fill", jsonCode[i * 4]);

    let position = Number(jsonCode[i * 4 + 1]);
    let radius = Number(jsonCode[i * 4 + 2]);
    let angle = Number(jsonCode[i * 4 + 3]);

    const dElements = fan[i].getAttribute("d").split(" ");
    dElements[4] = (radius / 2) * Math.sin((position * Math.PI) / 180);
    dElements[5] = (radius / 2) * -Math.cos((position * Math.PI) / 180);
    dElements[7] = radius / 2;
    dElements[8] = radius / 2;
    dElements[12] =
      (radius / 2) * Math.sin(((position + angle) * Math.PI) / 180);
    dElements[13] =
      (radius / 2) * -Math.cos(((position + angle) * Math.PI) / 180);
    console.log(position + angle);

    for (j = 0; j < 14; j++) {
      if (Math.abs(dElements[j]) < 0.001) {
        dElements[j] = 0;
      }
    }
    const dUnion = dElements.join(" ");
    fan[i].setAttribute("d", dUnion);
    console.log(dUnion);
  }
};

window.addEventListener("load", makeLogo);
