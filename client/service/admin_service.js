// 데이터 처리하는 서비스
// import { AdminQuery } from "../service/admin_query.js";
// import { AdminDTO } from "../model/AdminDTO.js";

// window.addEventListener("load", () => {
//   let script = document.createElement("script");
//   script.src = "../service/admin_query.js";
//   document.head.append(script);

//   let script2 = document.createElement("script");
//   script.src = "../model.AdminDTO.js";
//   document.head.append(script2);
// });

import { AdminQuery } from "../service/admin_query.js";
import { AdminDTO } from "../model/AdminDTO.js";
export function AdminService() {}

AdminService.prototype = {
  constructor: AdminService,
  adminLogin: async function (userData) {
    let query = new AdminQuery();
    let dto = new AdminDTO();

    let { admin_id, admin_pw } = userData;
    let result;

    dto.setAdminId(admin_id);
    dto.setAdminPw(admin_pw);

    try {
      result = await query.adminLogin(dto);
    } catch (e) {
      console.log("error:" + e);
    }

    console.log("service-result: " + result);

    if (result === "true") {
      alert("관리자님 어서오세요");
    } else {
      alert("오류가 발생했습니다");
    }
  },
};
