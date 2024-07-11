// 保存した配列を呼び出す
const memoryCode = localStorage.getItem("storage");
const jsonCode = JSON.parse(memoryCode);
console.log(jsonCode);

//6つの扇形のクラスを取得　配列に
const fan = [
  document.querySelector(".fan1"),
  document.querySelector(".fan2"),
  document.querySelector(".fan3"),
  document.querySelector(".fan4"),
  document.querySelector(".fan5"),
  document.querySelector(".fan6"),
];

// 編集ページへのリンク　戻る時の関数を実行するための引き金
const editPage = document.querySelector(".editPage");

//for文で6回回してロゴのsvgを生成
const makeLogo = () => {
  for (i = 0; i < 6; i++) {
    fan[i].setAttribute("fill", jsonCode[i * 4]);

    //配列の文字列を数字に変換
    let position = Number(jsonCode[i * 4 + 1]);
    let radius = Number(jsonCode[i * 4 + 2]);
    let angle = Number(jsonCode[i * 4 + 3]);

    // pathを描くdを分割　配列にしそれぞれに適切な値を当てはめていく
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

    // 極めて小さい値を0に矯正
    for (j = 0; j < 14; j++) {
      if (Math.abs(dElements[j]) < 0.001) {
        dElements[j] = 0;
      }
    }

    // dに変換した配列を代入
    const dUnion = dElements.join(" ");
    fan[i].setAttribute("d", dUnion);
    console.log(dUnion);
  }
};

// ロード時にsvg変換が行われるようにする
window.addEventListener("load", makeLogo);

// 編集ページに戻るときに配列をもう一度回収する
const saveCode = () => {
  const memoryCode = JSON.stringify(jsonCode);
  localStorage.setItem("storage", memoryCode);
};

editPage.addEventListener("click", saveCode);
