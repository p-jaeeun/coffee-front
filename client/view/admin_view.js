import { Pages } from "../view/Pages";
// window.addEventListener("load", () => {
//   let script = document.createElement("script");
//   script.src = "/Pages.js";
//   document.head.append(script);
// });

export function AdminView() {
  this.submit = document.getElementById("submit");
  this.admin_id = document.getElementById("admin-id").value;
  this.admin_pw = document.getElementById("admin-pw").value;
}

AdminView.prototype = {
  constructor: AdminView,
  adminLoginPage: function () {
    let page = new Pages();
    window.document.body.innerHTML = page.adminLogin();
  },
  adminLoginCheck: function (callback) {
    this.submit.addEventListener("click", callback);
  },
};
