import { UserCTR } from "/Users/김청하/Desktop/coffee-front/coffee/client/User/controller/UserCTR";
import { UserService } from "/Users/김청하/Desktop/coffee-front/coffee/client/User/service/UserService";
import { UserComponent } from "/Users/김청하/Desktop/coffee-front/coffee/client/User/view/UserComponent";

import { AdminCTR } from "/Users/김청하/Desktop/coffee-front/coffee/client/Admin/controller/AdminCTR";
import { AdminService } from "/Users/김청하/Desktop/coffee-front/coffee/client/Admin/service/AdminService";
import { AdminComponent } from "/Users/김청하/Desktop/coffee-front/coffee/client/Admin/view/AdminComponent";

(function () {
  const admin_app = new AdminCTR(new AdminService(), new AdminComponent());
  const user_app = new UserCTR(new UserService(), new UserComponent());
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
