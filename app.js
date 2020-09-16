import { UserCTR } from "./client/User/controller/UserCTR.js";
import { UserService } from "./client/User/service/UserService.js";
import { UserComponent } from "./client/User/view/UserComponent.js";

import { AdminCTR } from "./client/Admin/controller/AdminCTR.js";
import { AdminService } from "./client/Admin/service/AdminService.js";
import { AdminComponent } from "./client/Admin/view/AdminComponent.js";

(function () {
  const admin_app = new AdminCTR(new AdminService(), new AdminComponent());
  const user_app = new UserCTR(new UserService(), new UserComponent());
});
