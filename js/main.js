// 保存した配列を読み出す
const memoryCode = localStorage.getItem("storage");
const jsonCode = JSON.parse(memoryCode);
console.log(jsonCode);

const loading = () => {
  // 配列の中身があればそれぞれの値を代入
  [
    color1.value,
    position1.value,
    radius1.value,
    angle1.value,
    color2.value,
    position2.value,
    radius2.value,
    angle2.value,
    color3.value,
    position3.value,
    radius3.value,
    angle3.value,
    color4.value,
    position4.value,
    radius4.value,
    angle4.value,
    color5.value,
    position5.value,
    radius5.value,
    angle5.value,
    color6.value,
    position6.value,
    radius6.value,
    angle6.value,
  ] = jsonCode;
};

window.onload = function () {
  loading();
  fanChange1();
  fanChange2();
  fanChange3();
  fanChange4();
  fanChange5();
  fanChange6();
};

// resetボタンを作る
const reset = document.querySelector(".reset");

const resetFans = () => {
  [
    color1.value,
    position1.value,
    radius1.value,
    angle1.value,
    color2.value,
    position2.value,
    radius2.value,
    angle2.value,
    color3.value,
    position3.value,
    radius3.value,
    angle3.value,
    color4.value,
    position4.value,
    radius4.value,
    angle4.value,
    color5.value,
    position5.value,
    radius5.value,
    angle5.value,
    color6.value,
    position6.value,
    radius6.value,
    angle6.value,
  ] = [
    "#005fff",
    270,
    150,
    90,
    "#ff0000",
    270,
    270,
    90,
    "#ffc300",
    180,
    180,
    90,
    "#00aa2d",
    135,
    180,
    45,
    "#005fff",
    90,
    270,
    90,
    "#ffc300",
    0,
    210,
    45,
  ];
};

reset.onclick = function () {
  resetFans();
  fanChange1();
  fanChange2();
  fanChange3();
  fanChange4();
  fanChange5();
  fanChange6();
};

// 背景色変更
const bgButton = document.querySelector(".bgChange");

const bgChange = () => {};

const fanChangeText1 = () => {
  position1.value = positionText1.value;
  radius1.value = radiusText1.value;
  angle1.value = angleText1.value;
  let codeRedText1 = Number(redText1.value);
  codeRedText1 = codeRedText1.toString(16).padStart(2, "0");
  let codeGreenText1 = Number(greenText1.value);
  codeGreenText1 = codeGreenText1.toString(16).padStart(2, "0");
  let codeBlueText1 = Number(blueText1.value);
  codeBlueText1 = codeBlueText1.toString(16).padStart(2, "0");
  color1.value = "#" + codeRedText1 + codeGreenText1 + codeBlueText1;

  svgFan1.style.transformOrigin = "0 0 0";
  svgFan1.querySelector("path").setAttribute("fill", `${color1.value}`);

  svgFan1.style.transform =
    "rotate(" + position1.value + "deg) translate(-50%, -50%)";

  const minX = -radius1.value;
  const minY = -radius1.value;
  const width = radius1.value * 2;
  const height = radius1.value * 2;
  const newViewBox = [minX, minY, width, height];
  const viewBox = newViewBox.join(" ");

  svgFan1.setAttribute("viewBox", viewBox);
  svgFan1.setAttribute("width", radius1.value);
  svgFan1.setAttribute("height", radius1.value);

  dParts1[5] = -radius1.value;
  dParts1[7] = radius1.value;
  dParts1[8] = radius1.value;
  dParts1[12] =
    radius1.value * Math.sin(((-angle1.value + 180) * Math.PI) / 180);
  dParts1[13] =
    radius1.value * Math.cos(((-angle1.value + 180) * Math.PI) / 180);

  const newD = dParts1.join(" ");
  console.log(newD);
  svgFan1.querySelector("path").setAttribute("d", newD);

  svgpreviewFan1.style.transformOrigin = "0 0 0";
  svgpreviewFan1.querySelector("path").setAttribute("fill", `${color1.value}`);

  svgpreviewFan1.style.transform =
    "rotate(" + position1.value + "deg) translate(-50%, -50%)";

  const previewdminX = -radius1.value * 0.2;
  const previewdminY = -radius1.value * 0.2;
  const previewwidth = radius1.value * 2 * 0.2;
  const previewHeight = radius1.value * 2 * 0.2;
  const pNewViewBox = [previewdminX, previewdminY, previewwidth, previewHeight];
  const pViewBox = pNewViewBox.join(" ");

  svgpreviewFan1.setAttribute("viewBox", pViewBox);
  svgpreviewFan1.setAttribute("width", radius1.value * 0.2);
  svgpreviewFan1.setAttribute("height", radius1.value * 0.2);

  previewdParts1[5] = -radius1.value * 0.2;
  previewdParts1[7] = radius1.value * 0.2;
  previewdParts1[8] = radius1.value * 0.2;
  previewdParts1[12] =
    radius1.value * Math.sin(((-angle1.value + 180) * Math.PI) / 180) * 0.2;
  previewdParts1[13] =
    radius1.value * Math.cos(((-angle1.value + 180) * Math.PI) / 180) * 0.2;

  const pNewD = previewdParts1.join(" ");
  svgpreviewFan1.querySelector("path").setAttribute("d", pNewD);
};

const fanChange1 = () => {
  svgFan1.style.transformOrigin = "0 0 0";
  svgFan1.querySelector("path").setAttribute("fill", `${color1.value}`);

  svgFan1.style.transform =
    "rotate(" + position1.value + "deg) translate(-50%, -50%)";

  const minX = -radius1.value;
  const minY = -radius1.value;
  const width = radius1.value * 2;
  const height = radius1.value * 2;
  const newViewBox = [minX, minY, width, height];
  const viewBox = newViewBox.join(" ");

  svgFan1.setAttribute("viewBox", viewBox);
  svgFan1.setAttribute("width", radius1.value);
  svgFan1.setAttribute("height", radius1.value);

  dParts1[5] = -radius1.value;
  dParts1[7] = radius1.value;
  dParts1[8] = radius1.value;
  dParts1[12] =
    radius1.value * Math.sin(((-angle1.value + 180) * Math.PI) / 180);
  dParts1[13] =
    radius1.value * Math.cos(((-angle1.value + 180) * Math.PI) / 180);

  const newD = dParts1.join(" ");
  svgFan1.querySelector("path").setAttribute("d", newD);

  svgpreviewFan1.style.transformOrigin = "0 0 0";
  svgpreviewFan1.querySelector("path").setAttribute("fill", `${color1.value}`);

  svgpreviewFan1.style.transform =
    "rotate(" + position1.value + "deg) translate(-50%, -50%)";

  const previewdminX = -radius1.value * 0.2;
  const previewdminY = -radius1.value * 0.2;
  const previewwidth = radius1.value * 2 * 0.2;
  const previewHeight = radius1.value * 2 * 0.2;
  const pNewViewBox = [previewdminX, previewdminY, previewwidth, previewHeight];
  const pViewBox = pNewViewBox.join(" ");

  svgpreviewFan1.setAttribute("viewBox", pViewBox);
  svgpreviewFan1.setAttribute("width", radius1.value * 0.2);
  svgpreviewFan1.setAttribute("height", radius1.value * 0.2);

  previewdParts1[5] = -radius1.value * 0.2;
  previewdParts1[7] = radius1.value * 0.2;
  previewdParts1[8] = radius1.value * 0.2;
  previewdParts1[12] =
    radius1.value * Math.sin(((-angle1.value + 180) * Math.PI) / 180) * 0.2;
  previewdParts1[13] =
    radius1.value * Math.cos(((-angle1.value + 180) * Math.PI) / 180) * 0.2;

  const pNewD = previewdParts1.join(" ");
  svgpreviewFan1.querySelector("path").setAttribute("d", pNewD);

  positionText1.value = position1.value;
  radiusText1.value = radius1.value;
  angleText1.value = angle1.value;
  redText1.value = parseInt(color1.value.substring(1, 3), 16);
  greenText1.value = parseInt(color1.value.substring(3, 5), 16);
  blueText1.value = parseInt(color1.value.substring(5, 7), 16);
};

color1.addEventListener("input", fanChange1);
position1.addEventListener("input", fanChange1);
radius1.addEventListener("input", fanChange1);
angle1.addEventListener("input", fanChange1);
redText1.addEventListener("input", fanChangeText1);
greenText1.addEventListener("input", fanChangeText1);
blueText1.addEventListener("input", fanChangeText1);
positionText1.addEventListener("input", fanChangeText1);
radiusText1.addEventListener("input", fanChangeText1);
angleText1.addEventListener("input", fanChangeText1);

const fanChangeText2 = () => {
  position2.value = positionText2.value;
  radius2.value = radiusText2.value;
  angle2.value = angleText2.value;
  let codeRedText2 = Number(redText2.value);
  codeRedText2 = codeRedText2.toString(16).padStart(2, "0");
  let codeGreenText2 = Number(greenText2.value);
  codeGreenText2 = codeGreenText2.toString(16).padStart(2, "0");
  let codeBlueText2 = Number(blueText2.value);
  codeBlueText2 = codeBlueText2.toString(16).padStart(2, "0");
  color2.value = "#" + codeRedText2 + codeGreenText2 + codeBlueText2;

  svgFan2.style.transformOrigin = "0 0 0";
  svgFan2.querySelector("path").setAttribute("fill", `${color2.value}`);

  svgFan2.style.transform =
    "rotate(" + position2.value + "deg) translate(-50%, -50%)";

  const minX2 = -radius2.value;
  const minY2 = -radius2.value;
  const width2 = radius2.value * 2;
  const height2 = radius2.value * 2;
  const newViewBox2 = [minX2, minY2, width2, height2];
  const viewBox2 = newViewBox2.join(" ");

  svgFan2.setAttribute("viewBox", viewBox2);
  svgFan2.setAttribute("width", radius2.value);
  svgFan2.setAttribute("height", radius2.value);

  dParts2[5] = -radius2.value;
  dParts2[7] = radius2.value;
  dParts2[8] = radius2.value;
  dParts2[12] =
    radius2.value * Math.sin(((-angle2.value + 180) * Math.PI) / 180);
  dParts2[13] =
    radius2.value * Math.cos(((-angle2.value + 180) * Math.PI) / 180);

  const newD2 = dParts2.join(" ");
  console.log(newD2);
  svgFan2.querySelector("path").setAttribute("d", newD2);

  svgpreviewFan2.style.transformOrigin = "0 0 0";
  svgpreviewFan2.querySelector("path").setAttribute("fill", `${color2.value}`);

  svgpreviewFan2.style.transform =
    "rotate(" + position2.value + "deg) translate(-50%, -50%)";

  const previewdminX = -radius2.value * 0.2;
  const previewdminY = -radius2.value * 0.2;
  const previewwidth = radius2.value * 2 * 0.2;
  const previewHeight = radius2.value * 2 * 0.2;
  const pNewViewBox = [previewdminX, previewdminY, previewwidth, previewHeight];
  const pViewBox = pNewViewBox.join(" ");

  svgpreviewFan2.setAttribute("viewBox", pViewBox);
  svgpreviewFan2.setAttribute("width", radius2.value * 0.2);
  svgpreviewFan2.setAttribute("height", radius2.value * 0.2);

  previewdParts2[5] = -radius2.value * 0.2;
  previewdParts2[7] = radius2.value * 0.2;
  previewdParts2[8] = radius2.value * 0.2;
  previewdParts2[12] =
    radius2.value * Math.sin(((-angle2.value + 180) * Math.PI) / 180) * 0.2;
  previewdParts2[13] =
    radius2.value * Math.cos(((-angle2.value + 180) * Math.PI) / 180) * 0.2;

  const pNewD2 = previewdParts2.join(" ");
  svgpreviewFan2.querySelector("path").setAttribute("d", pNewD2);
};

const fanChange2 = () => {
  svgFan2.style.transformOrigin = "0 0 0";
  svgFan2.querySelector("path").setAttribute("fill", `${color2.value}`);

  svgFan2.style.transform =
    "rotate(" + position2.value + "deg) translate(-50%, -50%)";

  const minX2 = -radius2.value;
  const minY2 = -radius2.value;
  const width2 = radius2.value * 2;
  const height2 = radius2.value * 2;
  const newViewBox2 = [minX2, minY2, width2, height2];
  const viewBox2 = newViewBox2.join(" ");

  svgFan2.setAttribute("viewBox", viewBox2);
  svgFan2.setAttribute("width", radius2.value);
  svgFan2.setAttribute("height", radius2.value);

  dParts2[5] = -radius2.value;
  dParts2[7] = radius2.value;
  dParts2[8] = radius2.value;
  dParts2[12] =
    radius2.value * Math.sin(((-angle2.value + 180) * Math.PI) / 180);
  dParts2[13] =
    radius2.value * Math.cos(((-angle2.value + 180) * Math.PI) / 180);

  const newD2 = dParts2.join(" ");
  console.log(newD2);
  svgFan2.querySelector("path").setAttribute("d", newD2);

  svgpreviewFan2.style.transformOrigin = "0 0 0";
  svgpreviewFan2.querySelector("path").setAttribute("fill", `${color2.value}`);

  svgpreviewFan2.style.transform =
    "rotate(" + position2.value + "deg) translate(-50%, -50%)";

  const previewdminX = -radius2.value * 0.2;
  const previewdminY = -radius2.value * 0.2;
  const previewwidth = radius2.value * 2 * 0.2;
  const previewHeight = radius2.value * 2 * 0.2;
  const pNewViewBox = [previewdminX, previewdminY, previewwidth, previewHeight];
  const pViewBox = pNewViewBox.join(" ");

  svgpreviewFan2.setAttribute("viewBox", pViewBox);
  svgpreviewFan2.setAttribute("width", radius2.value * 0.2);
  svgpreviewFan2.setAttribute("height", radius2.value * 0.2);

  previewdParts2[5] = -radius2.value * 0.2;
  previewdParts2[7] = radius2.value * 0.2;
  previewdParts2[8] = radius2.value * 0.2;
  previewdParts2[12] =
    radius2.value * Math.sin(((-angle2.value + 180) * Math.PI) / 180) * 0.2;
  previewdParts2[13] =
    radius2.value * Math.cos(((-angle2.value + 180) * Math.PI) / 180) * 0.2;

  const pNewD2 = previewdParts2.join(" ");
  console.log(pNewD2);
  svgpreviewFan2.querySelector("path").setAttribute("d", pNewD2);

  positionText2.value = position2.value;
  radiusText2.value = radius2.value;
  angleText2.value = angle2.value;
  redText2.value = parseInt(color2.value.substring(1, 3), 16);
  greenText2.value = parseInt(color2.value.substring(3, 5), 16);
  blueText2.value = parseInt(color2.value.substring(5, 7), 16);
};

color2.addEventListener("input", fanChange2);
position2.addEventListener("input", fanChange2);
radius2.addEventListener("input", fanChange2);
angle2.addEventListener("input", fanChange2);
redText2.addEventListener("input", fanChangeText2);
greenText2.addEventListener("input", fanChangeText2);
blueText2.addEventListener("input", fanChangeText2);
positionText2.addEventListener("input", fanChangeText2);
radiusText2.addEventListener("input", fanChangeText2);
angleText2.addEventListener("input", fanChangeText2);

const fanChangeText3 = () => {
  position3.value = positionText3.value;
  radius3.value = radiusText3.value;
  angle3.value = angleText3.value;
  let codeRedText3 = Number(redText3.value);
  codeRedText3 = codeRedText3.toString(16).padStart(2, "0");
  let codeGreenText3 = Number(greenText3.value);
  codeGreenText3 = codeGreenText3.toString(16).padStart(2, "0");
  let codeBlueText3 = Number(blueText3.value);
  codeBlueText3 = codeBlueText3.toString(16).padStart(2, "0");
  color3.value = "#" + codeRedText3 + codeGreenText3 + codeBlueText3;

  svgFan3.style.transformOrigin = "0 0 0";
  svgFan3.querySelector("path").setAttribute("fill", `${color3.value}`);

  svgFan3.style.transform =
    "rotate(" + position3.value + "deg) translate(-50%, -50%)";

  const minX3 = -radius3.value;
  const minY3 = -radius3.value;
  const width3 = radius3.value * 2;
  const height3 = radius3.value * 2;
  const newViewBox3 = [minX3, minY3, width3, height3];
  const viewBox3 = newViewBox3.join(" ");

  svgFan3.setAttribute("viewBox", viewBox3);
  svgFan3.setAttribute("width", radius3.value);
  svgFan3.setAttribute("height", radius3.value);

  dParts3[5] = -radius3.value;
  dParts3[7] = radius3.value;
  dParts3[8] = radius3.value;
  dParts3[12] =
    radius3.value * Math.sin(((-angle3.value + 180) * Math.PI) / 180);
  dParts3[13] =
    radius3.value * Math.cos(((-angle3.value + 180) * Math.PI) / 180);

  const newD3 = dParts3.join(" ");
  console.log(newD3);
  svgFan3.querySelector("path").setAttribute("d", newD3);

  svgpreviewFan3.style.transformOrigin = "0 0 0";
  svgpreviewFan3.querySelector("path").setAttribute("fill", `${color3.value}`);

  svgpreviewFan3.style.transform =
    "rotate(" + position3.value + "deg) translate(-50%, -50%)";

  const previewdminX3 = -radius3.value;
  const previewdminY3 = -radius3.value;
  const previewwidth3 = radius3.value * 2;
  const previewHeight3 = radius3.value * 2;
  const pNewViewBox3 = [
    previewdminX3,
    previewdminY3,
    previewwidth3,
    previewHeight3,
  ];
  const pViewBox3 = pNewViewBox3.join(" ");

  svgpreviewFan3.setAttribute("viewBox", pViewBox3);
  svgpreviewFan3.setAttribute("width", radius3.value * 0.2);
  svgpreviewFan3.setAttribute("height", radius3.value * 0.2);

  previewdParts3[5] = -radius3.value;
  previewdParts3[7] = radius3.value;
  previewdParts3[8] = radius3.value;
  previewdParts3[12] =
    radius3.value * Math.sin(((-angle3.value + 180) * Math.PI) / 180);
  previewdParts3[13] =
    radius3.value * Math.cos(((-angle3.value + 180) * Math.PI) / 180);

  const pNewD3 = previewdParts3.join(" ");
  console.log(pNewD3);
  svgpreviewFan3.querySelector("path").setAttribute("d", pNewD3);
};

const fanChange3 = () => {
  svgFan3.style.transformOrigin = "0 0 0";
  svgFan3.querySelector("path").setAttribute("fill", `${color3.value}`);

  svgFan3.style.transform =
    "rotate(" + position3.value + "deg) translate(-50%, -50%)";

  const minX3 = -radius3.value;
  const minY3 = -radius3.value;
  const width3 = radius3.value * 2;
  const height3 = radius3.value * 2;
  const newViewBox3 = [minX3, minY3, width3, height3];
  const viewBox3 = newViewBox3.join(" ");

  svgFan3.setAttribute("viewBox", viewBox3);
  svgFan3.setAttribute("width", radius3.value);
  svgFan3.setAttribute("height", radius3.value);

  dParts3[5] = -radius3.value;
  dParts3[7] = radius3.value;
  dParts3[8] = radius3.value;
  dParts3[12] =
    radius3.value * Math.sin(((-angle3.value + 180) * Math.PI) / 180);
  dParts3[13] =
    radius3.value * Math.cos(((-angle3.value + 180) * Math.PI) / 180);

  const newD3 = dParts3.join(" ");
  console.log(newD3);
  svgFan3.querySelector("path").setAttribute("d", newD3);

  svgpreviewFan3.style.transformOrigin = "0 0 0";
  svgpreviewFan3.querySelector("path").setAttribute("fill", `${color3.value}`);

  svgpreviewFan3.style.transform =
    "rotate(" + position3.value + "deg) translate(-50%, -50%)";

  const previewdminX3 = -radius3.value;
  const previewdminY3 = -radius3.value;
  const previewwidth3 = radius3.value * 2;
  const previewHeight3 = radius3.value * 2;
  const pNewViewBox3 = [
    previewdminX3,
    previewdminY3,
    previewwidth3,
    previewHeight3,
  ];
  const pViewBox3 = pNewViewBox3.join(" ");

  svgpreviewFan3.setAttribute("viewBox", pViewBox3);
  svgpreviewFan3.setAttribute("width", radius3.value * 0.2);
  svgpreviewFan3.setAttribute("height", radius3.value * 0.2);

  previewdParts3[5] = -radius3.value;
  previewdParts3[7] = radius3.value;
  previewdParts3[8] = radius3.value;
  previewdParts3[12] =
    radius3.value * Math.sin(((-angle3.value + 180) * Math.PI) / 180);
  previewdParts3[13] =
    radius3.value * Math.cos(((-angle3.value + 180) * Math.PI) / 180);

  const pNewD3 = previewdParts3.join(" ");
  svgpreviewFan3.querySelector("path").setAttribute("d", pNewD3);

  positionText3.value = position3.value;
  radiusText3.value = radius3.value;
  angleText3.value = angle3.value;
  redText3.value = parseInt(color3.value.substring(1, 3), 16);
  greenText3.value = parseInt(color3.value.substring(3, 5), 16);
  blueText3.value = parseInt(color3.value.substring(5, 7), 16);
};

color3.addEventListener("input", fanChange3);
position3.addEventListener("input", fanChange3);
radius3.addEventListener("input", fanChange3);
angle3.addEventListener("input", fanChange3);
redText3.addEventListener("input", fanChangeText3);
greenText3.addEventListener("input", fanChangeText3);
blueText3.addEventListener("input", fanChangeText3);
positionText3.addEventListener("input", fanChangeText3);
radiusText3.addEventListener("input", fanChangeText3);
angleText3.addEventListener("input", fanChangeText3);

const fanChangeText4 = () => {
  position4.value = positionText4.value;
  radius4.value = radiusText4.value;
  angle4.value = angleText4.value;
  let codeRedText4 = Number(redText4.value);
  codeRedText4 = codeRedText4.toString(16).padStart(2, "0");
  let codeGreenText4 = Number(greenText4.value);
  codeGreenText4 = codeGreenText4.toString(16).padStart(2, "0");
  let codeBlueText4 = Number(blueText4.value);
  codeBlueText4 = codeBlueText4.toString(16).padStart(2, "0");
  color4.value = "#" + codeRedText4 + codeGreenText4 + codeBlueText4;

  svgFan4.style.transformOrigin = "0 0 0";
  svgFan4.querySelector("path").setAttribute("fill", `${color4.value}`);

  svgFan4.style.transform =
    "rotate(" + position4.value + "deg) translate(-50%, -50%)";

  const minX4 = -radius4.value;
  const minY4 = -radius4.value;
  const width4 = radius4.value * 2;
  const height4 = radius4.value * 2;
  const newViewBox4 = [minX4, minY4, width4, height4];
  const viewBox4 = newViewBox4.join(" ");

  svgFan4.setAttribute("viewBox", viewBox4);
  svgFan4.setAttribute("width", radius4.value);
  svgFan4.setAttribute("height", radius4.value);

  dParts4[5] = -radius4.value;
  dParts4[7] = radius4.value;
  dParts4[8] = radius4.value;
  dParts4[12] =
    radius4.value * Math.sin(((-angle4.value + 180) * Math.PI) / 180);
  dParts4[13] =
    radius4.value * Math.cos(((-angle4.value + 180) * Math.PI) / 180);

  const newD4 = dParts4.join(" ");
  console.log(newD4);
  svgFan4.querySelector("path").setAttribute("d", newD4);

  svgpreviewFan4.style.transformOrigin = "0 0 0";
  svgpreviewFan4.querySelector("path").setAttribute("fill", `${color4.value}`);

  svgpreviewFan4.style.transform =
    "rotate(" + position4.value + "deg) translate(-50%, -50%)";

  const previewdminX4 = -radius4.value;
  const previewdminY4 = -radius4.value;
  const previewwidth4 = radius4.value * 2;
  const previewHeight4 = radius4.value * 2;
  const pNewViewBox4 = [
    previewdminX4,
    previewdminY4,
    previewwidth4,
    previewHeight4,
  ];
  const pViewBox4 = pNewViewBox4.join(" ");

  svgpreviewFan4.setAttribute("viewBox", pViewBox4);
  svgpreviewFan4.setAttribute("width", radius4.value * 0.2);
  svgpreviewFan4.setAttribute("height", radius4.value * 0.2);

  previewdParts4[5] = -radius4.value;
  previewdParts4[7] = radius4.value;
  previewdParts4[8] = radius4.value;
  previewdParts4[12] =
    radius4.value * Math.sin(((-angle4.value + 180) * Math.PI) / 180);
  previewdParts4[13] =
    radius4.value * Math.cos(((-angle4.value + 180) * Math.PI) / 180);

  const pNewD4 = previewdParts4.join(" ");
  console.log(pNewD4);
  svgpreviewFan4.querySelector("path").setAttribute("d", pNewD4);
};

const fanChange4 = () => {
  svgFan4.style.transformOrigin = "0 0 0";
  svgFan4.querySelector("path").setAttribute("fill", `${color4.value}`);

  svgFan4.style.transform =
    "rotate(" + position4.value + "deg) translate(-50%, -50%)";

  const minX4 = -radius4.value;
  const minY4 = -radius4.value;
  const width4 = radius4.value * 2;
  const height4 = radius4.value * 2;
  const newViewBox4 = [minX4, minY4, width4, height4];
  const viewBox4 = newViewBox4.join(" ");

  svgFan4.setAttribute("viewBox", viewBox4);
  svgFan4.setAttribute("width", radius4.value);
  svgFan4.setAttribute("height", radius4.value);

  dParts4[5] = -radius4.value;
  dParts4[7] = radius4.value;
  dParts4[8] = radius4.value;
  dParts4[12] =
    radius4.value * Math.sin(((-angle4.value + 180) * Math.PI) / 180);
  dParts4[13] =
    radius4.value * Math.cos(((-angle4.value + 180) * Math.PI) / 180);

  const newD4 = dParts4.join(" ");
  console.log(newD4);
  svgFan4.querySelector("path").setAttribute("d", newD4);

  svgpreviewFan4.style.transformOrigin = "0 0 0";
  svgpreviewFan4.querySelector("path").setAttribute("fill", `${color4.value}`);

  svgpreviewFan4.style.transform =
    "rotate(" + position4.value + "deg) translate(-50%, -50%)";

  const previewdminX4 = -radius4.value;
  const previewdminY4 = -radius4.value;
  const previewwidth4 = radius4.value * 2;
  const previewHeight4 = radius4.value * 2;
  const pNewViewBox4 = [
    previewdminX4,
    previewdminY4,
    previewwidth4,
    previewHeight4,
  ];
  const pViewBox4 = pNewViewBox4.join(" ");

  svgpreviewFan4.setAttribute("viewBox", pViewBox4);
  svgpreviewFan4.setAttribute("width", radius4.value * 0.2);
  svgpreviewFan4.setAttribute("height", radius4.value * 0.2);

  previewdParts4[5] = -radius4.value;
  previewdParts4[7] = radius4.value;
  previewdParts4[8] = radius4.value;
  previewdParts4[12] =
    radius4.value * Math.sin(((-angle4.value + 180) * Math.PI) / 180);
  previewdParts4[13] =
    radius4.value * Math.cos(((-angle4.value + 180) * Math.PI) / 180);

  const pNewD4 = previewdParts4.join(" ");
  svgpreviewFan4.querySelector("path").setAttribute("d", pNewD4);

  positionText4.value = position4.value;
  radiusText4.value = radius4.value;
  angleText4.value = angle4.value;
  redText4.value = parseInt(color4.value.substring(1, 3), 16);
  greenText4.value = parseInt(color4.value.substring(3, 5), 16);
  blueText4.value = parseInt(color4.value.substring(5, 7), 16);
};

color4.addEventListener("input", fanChange4);
position4.addEventListener("input", fanChange4);
radius4.addEventListener("input", fanChange4);
angle4.addEventListener("input", fanChange4);
redText4.addEventListener("input", fanChangeText4);
greenText4.addEventListener("input", fanChangeText4);
blueText4.addEventListener("input", fanChangeText4);
positionText4.addEventListener("input", fanChangeText4);
radiusText4.addEventListener("input", fanChangeText4);
angleText4.addEventListener("input", fanChangeText4);

const fanChangeText5 = () => {
  position5.value = positionText5.value;
  radius5.value = radiusText5.value;
  angle5.value = angleText5.value;
  let codeRedText5 = Number(redText5.value);
  codeRedText5 = codeRedText5.toString(16).padStart(2, "0");
  let codeGreenText5 = Number(greenText5.value);
  codeGreenText5 = codeGreenText5.toString(16).padStart(2, "0");
  let codeBlueText5 = Number(blueText5.value);
  codeBlueText5 = codeBlueText5.toString(16).padStart(2, "0");
  color5.value = "#" + codeRedText5 + codeGreenText5 + codeBlueText5;

  svgFan5.style.transformOrigin = "0 0 0";
  svgFan5.querySelector("path").setAttribute("fill", `${color5.value}`);

  svgFan5.style.transform =
    "rotate(" + position5.value + "deg) translate(-50%, -50%)";

  const minX5 = -radius5.value;
  const minY5 = -radius5.value;
  const width5 = radius5.value * 2;
  const height5 = radius5.value * 2;
  const newViewBox5 = [minX5, minY5, width5, height5];
  const viewBox5 = newViewBox5.join(" ");

  svgFan5.setAttribute("viewBox", viewBox5);
  svgFan5.setAttribute("width", radius5.value);
  svgFan5.setAttribute("height", radius5.value);

  dParts5[5] = -radius5.value;
  dParts5[7] = radius5.value;
  dParts5[8] = radius5.value;
  dParts5[12] =
    radius5.value * Math.sin(((-angle5.value + 180) * Math.PI) / 180);
  dParts5[13] =
    radius5.value * Math.cos(((-angle5.value + 180) * Math.PI) / 180);

  const newD5 = dParts5.join(" ");
  console.log(newD5);
  svgFan5.querySelector("path").setAttribute("d", newD5);

  svgpreviewFan5.style.transformOrigin = "0 0 0";
  svgpreviewFan5.querySelector("path").setAttribute("fill", `${color5.value}`);

  svgpreviewFan5.style.transform =
    "rotate(" + position5.value + "deg) translate(-50%, -50%)";

  const previewdminX5 = -radius5.value;
  const previewdminY5 = -radius5.value;
  const previewwidth5 = radius5.value * 2;
  const previewHeight5 = radius5.value * 2;
  const pNewViewBox5 = [
    previewdminX5,
    previewdminY5,
    previewwidth5,
    previewHeight5,
  ];
  const pViewBox5 = pNewViewBox5.join(" ");

  svgpreviewFan5.setAttribute("viewBox", pViewBox5);
  svgpreviewFan5.setAttribute("width", radius5.value * 0.2);
  svgpreviewFan5.setAttribute("height", radius5.value * 0.2);

  previewdParts5[5] = -radius5.value;
  previewdParts5[7] = radius5.value;
  previewdParts5[8] = radius5.value;
  previewdParts5[12] =
    radius5.value * Math.sin(((-angle5.value + 180) * Math.PI) / 180);
  previewdParts5[13] =
    radius5.value * Math.cos(((-angle5.value + 180) * Math.PI) / 180);

  const pNewD5 = previewdParts5.join(" ");
  console.log(pNewD5);
  svgpreviewFan5.querySelector("path").setAttribute("d", pNewD5);
};

const fanChange5 = () => {
  svgFan5.style.transformOrigin = "0 0 0";
  svgFan5.querySelector("path").setAttribute("fill", `${color5.value}`);

  svgFan5.style.transform =
    "rotate(" + position5.value + "deg) translate(-50%, -50%)";

  const minX5 = -radius5.value;
  const minY5 = -radius5.value;
  const width5 = radius5.value * 2;
  const height5 = radius5.value * 2;
  const newViewBox5 = [minX5, minY5, width5, height5];
  const viewBox5 = newViewBox5.join(" ");

  svgFan5.setAttribute("viewBox", viewBox5);
  svgFan5.setAttribute("width", radius5.value);
  svgFan5.setAttribute("height", radius5.value);

  dParts5[5] = -radius5.value;
  dParts5[7] = radius5.value;
  dParts5[8] = radius5.value;
  dParts5[12] =
    radius5.value * Math.sin(((-angle5.value + 180) * Math.PI) / 180);
  dParts5[13] =
    radius5.value * Math.cos(((-angle5.value + 180) * Math.PI) / 180);

  const newD5 = dParts5.join(" ");
  console.log(newD5);
  svgFan5.querySelector("path").setAttribute("d", newD5);

  svgpreviewFan5.style.transformOrigin = "0 0 0";
  svgpreviewFan5.querySelector("path").setAttribute("fill", `${color5.value}`);

  svgpreviewFan5.style.transform =
    "rotate(" + position5.value + "deg) translate(-50%, -50%)";

  const previewdminX5 = -radius5.value;
  const previewdminY5 = -radius5.value;
  const previewwidth5 = radius5.value * 2;
  const previewHeight5 = radius5.value * 2;
  const pNewViewBox5 = [
    previewdminX5,
    previewdminY5,
    previewwidth5,
    previewHeight5,
  ];
  const pViewBox5 = pNewViewBox5.join(" ");

  svgpreviewFan5.setAttribute("viewBox", pViewBox5);
  svgpreviewFan5.setAttribute("width", radius5.value * 0.2);
  svgpreviewFan5.setAttribute("height", radius5.value * 0.2);

  previewdParts5[5] = -radius5.value;
  previewdParts5[7] = radius5.value;
  previewdParts5[8] = radius5.value;
  previewdParts5[12] =
    radius5.value * Math.sin(((-angle5.value + 180) * Math.PI) / 180);
  previewdParts5[13] =
    radius5.value * Math.cos(((-angle5.value + 180) * Math.PI) / 180);

  const pNewD5 = previewdParts5.join(" ");
  console.log(pNewD5);
  svgpreviewFan5.querySelector("path").setAttribute("d", pNewD5);

  positionText5.value = position5.value;
  radiusText5.value = radius5.value;
  angleText5.value = angle5.value;
  redText5.value = parseInt(color5.value.substring(1, 3), 16);
  greenText5.value = parseInt(color5.value.substring(3, 5), 16);
  blueText5.value = parseInt(color5.value.substring(5, 7), 16);
};

color5.addEventListener("input", fanChange5);
position5.addEventListener("input", fanChange5);
radius5.addEventListener("input", fanChange5);
angle5.addEventListener("input", fanChange5);
redText5.addEventListener("input", fanChangeText5);
greenText5.addEventListener("input", fanChangeText5);
blueText5.addEventListener("input", fanChangeText5);
positionText5.addEventListener("input", fanChangeText5);
radiusText5.addEventListener("input", fanChangeText5);
angleText5.addEventListener("input", fanChangeText5);

const fanChangeText6 = () => {
  position6.value = positionText6.value;
  radius6.value = radiusText6.value;
  angle6.value = angleText6.value;
  let codeRedText6 = Number(redText6.value);
  codeRedText6 = codeRedText6.toString(16).padStart(2, "0");
  let codeGreenText6 = Number(greenText6.value);
  codeGreenText6 = codeGreenText6.toString(16).padStart(2, "0");
  let codeBlueText6 = Number(blueText6.value);
  codeBlueText6 = codeBlueText6.toString(16).padStart(2, "0");
  color6.value = "#" + codeRedText6 + codeGreenText6 + codeBlueText6;

  svgFan6.style.transformOrigin = "0 0 0";
  svgFan6.querySelector("path").setAttribute("fill", `${color6.value}`);

  svgFan6.style.transform =
    "rotate(" + position6.value + "deg) translate(-50%, -50%)";

  const minX6 = -radius6.value;
  const minY6 = -radius6.value;
  const width6 = radius6.value * 2;
  const height6 = radius6.value * 2;
  const newViewBox6 = [minX6, minY6, width6, height6];
  const viewBox6 = newViewBox6.join(" ");

  svgFan6.setAttribute("viewBox", viewBox6);
  svgFan6.setAttribute("width", radius6.value);
  svgFan6.setAttribute("height", radius6.value);

  dParts6[5] = -radius6.value;
  dParts6[7] = radius6.value;
  dParts6[8] = radius6.value;
  dParts6[12] =
    radius6.value * Math.sin(((-angle6.value + 180) * Math.PI) / 180);
  dParts6[13] =
    radius6.value * Math.cos(((-angle6.value + 180) * Math.PI) / 180);

  const newD6 = dParts6.join(" ");
  console.log(newD6);
  svgFan6.querySelector("path").setAttribute("d", newD6);

  svgpreviewFan6.style.transformOrigin = "0 0 0";
  svgpreviewFan6.querySelector("path").setAttribute("fill", `${color6.value}`);

  svgpreviewFan6.style.transform =
    "rotate(" + position6.value + "deg) translate(-50%, -50%)";

  const previewdminX6 = -radius6.value;
  const previewdminY6 = -radius6.value;
  const previewwidth6 = radius6.value * 2;
  const previewHeight6 = radius6.value * 2;
  const pNewViewBox6 = [
    previewdminX6,
    previewdminY6,
    previewwidth6,
    previewHeight6,
  ];
  const pViewBox6 = pNewViewBox6.join(" ");

  svgpreviewFan6.setAttribute("viewBox", pViewBox6);
  svgpreviewFan6.setAttribute("width", radius6.value * 0.2);
  svgpreviewFan6.setAttribute("height", radius6.value * 0.2);

  previewdParts6[5] = -radius6.value;
  previewdParts6[7] = radius6.value;
  previewdParts6[8] = radius6.value;
  previewdParts6[12] =
    radius6.value * Math.sin(((-angle6.value + 180) * Math.PI) / 180);
  previewdParts6[13] =
    radius6.value * Math.cos(((-angle6.value + 180) * Math.PI) / 180);

  const pNewD6 = previewdParts6.join(" ");
  svgpreviewFan6.querySelector("path").setAttribute("d", pNewD6);
};

const fanChange6 = () => {
  svgFan6.style.transformOrigin = "0 0 0";
  svgFan6.querySelector("path").setAttribute("fill", `${color6.value}`);

  svgFan6.style.transform =
    "rotate(" + position6.value + "deg) translate(-50%, -50%)";

  const minX6 = -radius6.value;
  const minY6 = -radius6.value;
  const width6 = radius6.value * 2;
  const height6 = radius6.value * 2;
  const newViewBox6 = [minX6, minY6, width6, height6];
  const viewBox6 = newViewBox6.join(" ");

  svgFan6.setAttribute("viewBox", viewBox6);
  svgFan6.setAttribute("width", radius6.value);
  svgFan6.setAttribute("height", radius6.value);

  dParts6[5] = -radius6.value;
  dParts6[7] = radius6.value;
  dParts6[8] = radius6.value;
  dParts6[12] =
    radius6.value * Math.sin(((-angle6.value + 180) * Math.PI) / 180);
  dParts6[13] =
    radius6.value * Math.cos(((-angle6.value + 180) * Math.PI) / 180);

  const newD6 = dParts6.join(" ");
  console.log(newD6);
  svgFan6.querySelector("path").setAttribute("d", newD6);

  svgpreviewFan6.style.transformOrigin = "0 0 0";
  svgpreviewFan6.querySelector("path").setAttribute("fill", `${color6.value}`);

  svgpreviewFan6.style.transform =
    "rotate(" + position6.value + "deg) translate(-50%, -50%)";

  const previewdminX6 = -radius6.value;
  const previewdminY6 = -radius6.value;
  const previewwidth6 = radius6.value * 2;
  const previewHeight6 = radius6.value * 2;
  const pNewViewBox6 = [
    previewdminX6,
    previewdminY6,
    previewwidth6,
    previewHeight6,
  ];
  const pViewBox6 = pNewViewBox6.join(" ");

  svgpreviewFan6.setAttribute("viewBox", pViewBox6);
  svgpreviewFan6.setAttribute("width", radius6.value * 0.2);
  svgpreviewFan6.setAttribute("height", radius6.value * 0.2);

  previewdParts6[5] = -radius6.value;
  previewdParts6[7] = radius6.value;
  previewdParts6[8] = radius6.value;
  previewdParts6[12] =
    radius6.value * Math.sin(((-angle6.value + 180) * Math.PI) / 180);
  previewdParts6[13] =
    radius6.value * Math.cos(((-angle6.value + 180) * Math.PI) / 180);

  const pNewD6 = previewdParts6.join(" ");
  console.log(pNewD6);
  svgpreviewFan6.querySelector("path").setAttribute("d", pNewD6);

  positionText6.value = position6.value;
  radiusText6.value = radius6.value;
  angleText6.value = angle6.value;
  redText6.value = parseInt(color6.value.substring(1, 3), 16);
  greenText6.value = parseInt(color6.value.substring(3, 5), 16);
  blueText6.value = parseInt(color6.value.substring(5, 7), 16);
};

color6.addEventListener("input", fanChange6);
position6.addEventListener("input", fanChange6);
radius6.addEventListener("input", fanChange6);
angle6.addEventListener("input", fanChange6);
redText6.addEventListener("input", fanChangeText6);
greenText6.addEventListener("input", fanChangeText6);
blueText6.addEventListener("input", fanChangeText6);
positionText6.addEventListener("input", fanChangeText6);
radiusText6.addEventListener("input", fanChangeText6);
angleText6.addEventListener("input", fanChangeText6);

const arrayChange = () => {
  const inputCode = document.querySelector("#code").value;
  const dinputCode = inputCode.split(",");
  [
    color1.value,
    position1.value,
    radius1.value,
    angle1.value,
    color2.value,
    position2.value,
    radius2.value,
    angle2.value,
    color3.value,
    position3.value,
    radius3.value,
    angle3.value,
    color4.value,
    position4.value,
    radius4.value,
    angle4.value,
    color5.value,
    position5.value,
    radius5.value,
    angle5.value,
    color6.value,
    position6.value,
    radius6.value,
    angle6.value,
  ] = dinputCode;
  console.log(inputCode);
};

codeInput.onclick = function () {
  arrayChange();
  fanChange1();
  fanChange2();
  fanChange3();
  fanChange4();
  fanChange5();
  fanChange6();
};

const randomGenerate = () => {
  for (i = 0; i < 6; i++) {
    var color = Math.floor(Math.random() * 16777215).toString(16);
    for (count = color.length; count < 6; count++) {
      color = "0" + color;
    }
    var randomColor = "#" + color;
    array[0 + i * 4] = randomColor;
    array[1 + i * 4] = Math.floor(Math.random() * 9) * 45;
    array[2 + i * 4] = Math.floor(Math.random() * 26) * 10 + 50;
    array[3 + i * 4] = Math.floor(Math.random() * 3) * 45 + 45;
  }
  [
    color1.value,
    position1.value,
    radius1.value,
    angle1.value,
    color2.value,
    position2.value,
    radius2.value,
    angle2.value,
    color3.value,
    position3.value,
    radius3.value,
    angle3.value,
    color4.value,
    position4.value,
    radius4.value,
    angle4.value,
    color5.value,
    position5.value,
    radius5.value,
    angle5.value,
    color6.value,
    position6.value,
    radius6.value,
    angle6.value,
  ] = array;
};

randomGene.onclick = function () {
  randomGenerate();
  fanChange1();
  fanChange2();
  fanChange3();
  fanChange4();
  fanChange5();
  fanChange6();
};

const copyBtn = document.querySelector("#codeCopy");

const copyCode = () => {
  const codeInfo = [
    color1.value,
    position1.value,
    radius1.value,
    angle1.value,
    color2.value,
    position2.value,
    radius2.value,
    angle2.value,
    color3.value,
    position3.value,
    radius3.value,
    angle3.value,
    color4.value,
    position4.value,
    radius4.value,
    angle4.value,
    color5.value,
    position5.value,
    radius5.value,
    angle5.value,
    color6.value,
    position6.value,
    radius6.value,
    angle6.value,
  ];
  navigator.clipboard.writeText(codeInfo).then(() => {
    window.alert("クリップボードにコピーしました。");
  });
};

copyBtn.addEventListener("click", copyCode);

const saveCode = () => {
  const codeInfoSaved = [
    color1.value,
    position1.value,
    radius1.value,
    angle1.value,
    color2.value,
    position2.value,
    radius2.value,
    angle2.value,
    color3.value,
    position3.value,
    radius3.value,
    angle3.value,
    color4.value,
    position4.value,
    radius4.value,
    angle4.value,
    color5.value,
    position5.value,
    radius5.value,
    angle5.value,
    color6.value,
    position6.value,
    radius6.value,
    angle6.value,
  ];
  const jsonCode = JSON.stringify(codeInfoSaved);
  localStorage.setItem("storage", jsonCode);
};

download.addEventListener("click", saveCode);
