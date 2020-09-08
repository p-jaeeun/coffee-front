//  api.js를 호출
import { Ajax } from "../lib/ajax.js";
export function AdminQuery() {}
// window.addEventListener("load", () => {
//   let script = document.createElement("script");
//   script.src = "../lib.ajax.js";
//   document.head.append(script);
// });

AdminQuery.prototype = {
  constructor: AdminQuery,
  adminLogin: async function (UserDTO) {
    let ajax = new Ajax();
    let result;
    let userData = {};

    userData.admin_id = UserDTO.getAdminId();
    userData.admin_pw = UserDTO.getAdminPw();

    let str = JSON.stringify(userData);

    try {
      result = await ajax.sendAjaxPost(
        "http://localhost:8080/api/admin/login",
        str
      );
    } catch (e) {
      console.log("error: " + e);
    }
    return result;
  },
};
