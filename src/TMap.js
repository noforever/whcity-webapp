export function TMap() {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      resolve(qq)//注意这里
    }
    var script = document.createElement("script");
    script.charset = "utf-8";
    script.src = "https://map.qq.com/api/js?v=2.exp&callback=init&key=FLEBZ-7UZKK-PQBJJ-AVXSS-A4OOS-FSBXI";
    //FLEBZ-7UZKK-PQBJJ-AVXSS-A4OOS-FSBXI
    script.onerror = reject;
    document.head.appendChild(script);
  })
}

export function TMaps() {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      resolve(TMap)//注意这里
    }
    var script = document.createElement("script");
    script.charset = "utf-8";
    script.src = "https://map.qq.com/api/gljs?v=1.exp&key=FLEBZ-7UZKK-PQBJJ-AVXSS-A4OOS-FSBXI";
    //FLEBZ-7UZKK-PQBJJ-AVXSS-A4OOS-FSBXI
    script.onerror = reject;
    document.head.appendChild(script);
  })
}
