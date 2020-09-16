export class Ajax {
  async sendAjaxGet(url) {
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
  }

  async sendAjaxPost(url, data) {
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
  }

  async sendAjaxPostFile(url, data) {
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
      httpRequest.setRequestHeader("Content-Type"); //, "multipart/form-data" form에 붙여야 하나?
      httpRequest.send(data);
    });
  }
}
