import { UserApi } from "../api/UserApi.js";
import { UserDTO } from "../model/UserDTO.js";

export class UserService {
  constructor() {
    this.api = new UserApi();
    // this.dto = new UserDTO();
  }
  async signin(userData) {
    console.log("service" + userData.user_id);
    console.log("service" + userData.user_pw);
    var result;
    // let dto = new UserDTO();
    // dto.setUserId(userData.user_id);
    // dto.setUserPw(userData.user_pw);

    try {
      result = await this.api.signin(userData);
    } catch (e) {
      console.log("error: " + e);
    }

    console.log("id" + userData.user_id);
    console.log("type" + typeof result);

    switch (result) {
      case true:
        let result_of_main = await this.api.callMain();
        if (result_of_main !== undefined || result_of_main !== "undefined") {
          return result_of_main;
        } else {
          console.log("Service-result-undefined:" + result_of_main);
          break;
        }
      case "admin_true":
        let result_of_admin = await this.api.callAdminPage();
        if (result_of_admin !== undefined || result_of_admin !== "undefined") {
          console.log("Service-result:" + result_of_admin);
          return result_of_admin;
        } else {
          console.log("Service-result-undefined:" + result_of_admin);
          break;
        }
      case false:
        alert("아이디 혹은 비밀번호를 확인하세요.");
        break;
      default:
        alert("로그인중 문제가 발생했습니다. 다시 시도 하세요.");
        break;
    }
  }

  async signup(userData) {
    let result;
    try {
      result = await this.api.signup(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    console.log("id" + userData.user_id);
    console.log("type" + typeof result);

    if (result !== undefined || result !== "undefined") {
      console.log("Service-result:" + result);
      return result;
    } else {
      console.log("Service-result-undefined:" + result);
      return;
    }
  }
}
