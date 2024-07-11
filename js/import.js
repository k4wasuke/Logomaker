const color1 = document.querySelector("#colorPicker1");
const color2 = document.querySelector("#colorPicker2");
const color3 = document.querySelector("#colorPicker3");
const color4 = document.querySelector("#colorPicker4");
const color5 = document.querySelector("#colorPicker5");
const color6 = document.querySelector("#colorPicker6");
const redText1 = document.querySelector("#rText1");
const greenText1 = document.querySelector("#gText1");
const blueText1 = document.querySelector("#bText1");
const redText2 = document.querySelector("#rText2");
const greenText2 = document.querySelector("#gText2");
const blueText2 = document.querySelector("#bText2");
const redText3 = document.querySelector("#rText3");
const greenText3 = document.querySelector("#gText3");
const blueText3 = document.querySelector("#bText3");
const redText4 = document.querySelector("#rText4");
const greenText4 = document.querySelector("#gText4");
const blueText4 = document.querySelector("#bText4");
const redText5 = document.querySelector("#rText5");
const greenText5 = document.querySelector("#gText5");
const blueText5 = document.querySelector("#bText5");
const redText6 = document.querySelector("#rText6");
const greenText6 = document.querySelector("#gText6");
const blueText6 = document.querySelector("#bText6");

const position1 = document.querySelector("#positionSlider1");
const position2 = document.querySelector("#positionSlider2");
const position3 = document.querySelector("#positionSlider3");
const position4 = document.querySelector("#positionSlider4");
const position5 = document.querySelector("#positionSlider5");
const position6 = document.querySelector("#positionSlider6");
const positionText1 = document.querySelector("#positionText1");
const positionText2 = document.querySelector("#positionText2");
const positionText3 = document.querySelector("#positionText3");
const positionText4 = document.querySelector("#positionText4");
const positionText5 = document.querySelector("#positionText5");
const positionText6 = document.querySelector("#positionText6");

const radius1 = document.querySelector("#radiusSlider1");
const radius2 = document.querySelector("#radiusSlider2");
const radius3 = document.querySelector("#radiusSlider3");
const radius4 = document.querySelector("#radiusSlider4");
const radius5 = document.querySelector("#radiusSlider5");
const radius6 = document.querySelector("#radiusSlider6");
const radiusText1 = document.querySelector("#radiusText1");
const radiusText2 = document.querySelector("#radiusText2");
const radiusText3 = document.querySelector("#radiusText3");
const radiusText4 = document.querySelector("#radiusText4");
const radiusText5 = document.querySelector("#radiusText5");
const radiusText6 = document.querySelector("#radiusText6");

const angle1 = document.querySelector("#angleSlider1");
const angle2 = document.querySelector("#angleSlider2");
const angle3 = document.querySelector("#angleSlider3");
const angle4 = document.querySelector("#angleSlider4");
const angle5 = document.querySelector("#angleSlider5");
const angle6 = document.querySelector("#angleSlider6");
const angleText1 = document.querySelector("#angleText1");
const angleText2 = document.querySelector("#angleText2");
const angleText3 = document.querySelector("#angleText3");
const angleText4 = document.querySelector("#angleText4");
const angleText5 = document.querySelector("#angleText5");
const angleText6 = document.querySelector("#angleText6");

const svgFan1 = document.querySelector("#Fan1");
const svgFan2 = document.querySelector("#Fan2");
const svgFan3 = document.querySelector("#Fan3");
const svgFan4 = document.querySelector("#Fan4");
const svgFan5 = document.querySelector("#Fan5");
const svgFan6 = document.querySelector("#Fan6");

const currentD1 = svgFan1.querySelector("path").getAttribute("d");
const dParts1 = currentD1.split(" ");

const currentD2 = svgFan2.querySelector("path").getAttribute("d");
const dParts2 = currentD2.split(" ");

const currentD3 = svgFan3.querySelector("path").getAttribute("d");
const dParts3 = currentD3.split(" ");

const currentD4 = svgFan4.querySelector("path").getAttribute("d");
const dParts4 = currentD4.split(" ");

const currentD5 = svgFan5.querySelector("path").getAttribute("d");
const dParts5 = currentD5.split(" ");

const currentD6 = svgFan6.querySelector("path").getAttribute("d");
const dParts6 = currentD6.split(" ");

const previewCurrentD1 = svgpreviewFan1.querySelector("path").getAttribute("d");
const previewdParts1 = previewCurrentD1.split(" ");

const previewCurrentD2 = svgpreviewFan2.querySelector("path").getAttribute("d");
const previewdParts2 = previewCurrentD2.split(" ");

const previewCurrentD3 = svgpreviewFan3.querySelector("path").getAttribute("d");
const previewdParts3 = previewCurrentD3.split(" ");

const previewCurrentD4 = svgpreviewFan4.querySelector("path").getAttribute("d");
const previewdParts4 = previewCurrentD4.split(" ");

const previewCurrentD5 = svgpreviewFan5.querySelector("path").getAttribute("d");
const previewdParts5 = previewCurrentD5.split(" ");

const previewCurrentD6 = svgpreviewFan6.querySelector("path").getAttribute("d");
const previewdParts6 = previewCurrentD6.split(" ");

const randomGene = document.querySelector("#randomGene");
const codeInput = document.querySelector("#codeInput");
const download = document.querySelector("#download");

const array = [
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
