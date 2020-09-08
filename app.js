// window.addEventListener("load", () => {
//   let script = document.createElement("script");
//   script.src = "/client/controller/admin_controller.js";
//   document.head.append(script);

//   let script2 = document.createElement("script");
//   script.src = "/client/view/admin_view.js";
//   document.head.append(script2);

//   let script3 = document.createElement("script");
//   script.src = "/client/admin_service.js";
//   document.head.append(script3);

//   let script4 = document.createElement("script");
//   script.src = "/client/view/Pages.js";
//   document.head.append(script4);
// }); // 모듈이 로컬에서 불가능해서 만든 테스트용

import { AdminCTR } from "../coffee/client/controller/admin_controller.js";
import { AdminService } from "../coffee/client/service/admin_service.js";
import { AdminView } from "../coffee/client/view/admin_view.js";

(function () {
  const app = new AdminCTR(new AdminService(), new AdminView());
});

// import { UserView } from "/view/user_view.js";
// const app = new UserController(new UserService(), new UserView());

// (function () {
//   let newPage = new Pages();
//   let admin_test = newPage.adminTest();
//   window.document.body.innerHTML = admin_test;

//   let dom = document.getElementById("submit");
//   dom.addEventListener("click", callback);
// })(); //테스트용

//Pages에 만든 페이지
//makeMainLogin
//makeDash
//makeHalfList --> 크기가 맞지 않는다.
//makeHalfMap
//makePopup
//makeFooter
//makeHeader
//makeReview
//makeReviewPiece
//makeProfile
//makeProfileHeader
//makeHalfList
//makeCafeInfo
//makeFavorite
//makeAddCafe
//make404
//makeUserList
//makeNotification
//makeDash
//makeLoginMain
