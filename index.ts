/// <reference path="./TypeSquareAPI.d.ts" />

const cssName = "Ryumin Regular KL";

const text = "リュウミン R-KLを読み込むテストです。";

document.getElementById("text").appendChild(document.createTextNode(text));

Ts.loadFontAsync({
  cssName,
  text,
  outputType: "json",
  callback: result => {
    try {
      const fontResultData = JSON.parse(result.data) as FontResultData;
      const fontResultDataObj = JSON.parse(
        fontResultData.res
      ) as FontResultDataObj;
      const styleElement = document.createElement("style");
      styleElement.setAttribute("type", "text/css");
      styleElement.setAttribute("rel", "stylesheet");
      styleElement.innerHTML =
        "@font-face {font-family: '" +
        fontResultDataObj["fontFamily"] +
        "'; font-weight: " +
        fontResultDataObj["font-weight"] +
        ";src: url(data:font/woff;base64," +
        fontResultDataObj["src"] +
        ");}";
      document.head.appendChild(styleElement);
    } catch (e) {
      console.error(e);
    }
  }
});
