import { AdminView } from "../view/admin_view.js";
import { AdminService } from "../service/admin_service.js";

// window.addEventListener("load", () => {
//   let script = document.createElement("script");
//   script.src = "../view/admin_view.js";
//   document.head.append(script);

//   let script2 = document.createElement("script");
//   script.src = "../service/admin_service.js";
//   document.head.append(script2);
// });
export function AdminCTR() {}

AdminCTR.prototype = {
  constructor: AdminCTR,
  adminLogin: () => {
    let view = new AdminView();
    let service = new AdminService();

    let userData = {};
    userData.admin_id = view.admin_id;
    userData.admin_pw = view.admin_pw;
    console.log("CTR:" + userData.admin_id);

    view.adminLoginCheck(service.adminLogin(userData)); //await 써야하나?
  },
};
