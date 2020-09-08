// ajax객체를 저장.
export function Ajax() { }

Ajax.prototype = {
    constructor = Ajax,
    sendAjaxGet: async function (url) {
        console.log("sendAjaxGet");
        httpRequest = new XMLHttpRequest();
    
        httpRequest.onreadystatechange = function () {
          if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            if (typeof callback === "function") {
              let obj = JSON.parse(httpRequest.responseText);
              console.log("ajax: " + obj);
              resolve(obj);
            }
          }
        };
    
        httpRequest.open("GET", url);
        httpRequest.send();
      },
    
      sendAjaxPost:async function (url, data) {
        httpRequest = new XMLHttpRequest();
        return new Promise((resolve, reject) => {
          httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
              let obj = JSON.parse(httpRequest.responseText);
              console.log("ajax: " + obj);
              resolve(obj);
            }
          };
    
          httpRequest.open("POST", url, true);
          httpRequest.setRequestHeader("Content-Type", "application/json");
          httpRequest.send(data);
        });
      },
      sendAjaxPostFile:async function (url, data) {
        httpRequest = new XMLHttpRequest();
        return new Promise((resolve, reject) => {
          httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
              let obj = JSON.parse(httpRequest.responseText);
              console.log("ajax: " + obj);
              resolve(obj);
            }
          };
    
          httpRequest.open("POST", url, true);
          httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          httpRequest.send(data);
        });
      },
      makeObject: function (data) {
        let obj = JSON.parse(data);
        return obj;
      },
    
      makeString: function (data) {
        let str = JSON.stringify(data);
        return str;
      },
}