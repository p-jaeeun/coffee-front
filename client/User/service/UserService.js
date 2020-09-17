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
    // let dto = new UserDTO();
    let result;
    let result2;
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
        result2 = await this.api.callMain();
        if (result2 !== undefined || result2 !== "undefined") {
          return result2;
        } else {
          console.log("result is undefined:" + result2);
          break;
        }
      case "admin_true":
        // this.callAdminPage();
        console.log("admin");
        break;
      case false:
        alert("아이디 혹은 비밀번호를 확인하세요.");
        break;
    }
  }

  // async callMain(user_id) {
  //   let result;
  //   let cafe_list = new Array();
  //   let caffeine = new Array();

  //   try {
  //     result = await this.api.callMain(user_id);
  //   } catch (e) {
  //     console.log("error:" + e);
  //   }

  //   return result;
  // }

  async callAdminPage() {
    let result;

    try {
      result = await this.api.callAdminPage();
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async signup() {}
}
