import { AdminCTR } from "../coffee/client/controller/admin_controller.js";
import { AdminService } from "../coffee/client/service/admin_service.js";
import { AdminView } from "../coffee/client/view/admin_view.js";

(function () {
  const app = new AdminCTR(new AdminService(), new AdminView());
});

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
