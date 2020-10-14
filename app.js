import {
  UserCTR
} from "./client/User/controller/UserCTR.js";
import {
  CommonCTR
} from "./client/Common/controller/CommonCTR.js";

import {
  AdminCTR
} from "./client/Admin/controller/AdminCTR.js";
import {
  AdminService
} from "./client/Admin/service/AdminService.js";
import {
  AdminComponent
} from "./client/Admin/view/AdminComponent.js";

const user_app = new UserCTR();
const common_app = new CommonCTR();
const admin_app = new AdminCTR(
  new AdminService(),
  new AdminComponent(),
  new UserCTR()
);
console.log("app.js");