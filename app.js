import { UserCTR } from "./client/User/controller/UserCTR.js";
import { CommonCTR } from "./client/Common/controller/CommonCTR.js";
import { AdminCTR } from "./client/Admin/controller/AdminCTR.js";

const user_app = new UserCTR();
const common_app = new CommonCTR();
const admin_app = new AdminCTR();
console.log("app.js");
