import { UserApi } from "../api/UserApi.js";
import { UserDTO } from "../model/UserDTO.js";

export class UserService {
  constructor() {
    this.api = new UserApi();
  }
  async signin(userData) {
    console.log("service" + userData);
    let dto = new UserDTO();
    let { user_id, user_pw } = userData;

    dto.setUserId(user_id);
    dto.setUserPw(user_pw);

    try {
      result = await this.api.signin(dto);
    } catch (e) {
      console.log("error: " + e);
    }

    switch (result) {
      case "true":
        // this.callMain();
        console.log("hello");
      case "admin_true":
        this.callAdminPage();
      case "false":
        alert("아이디 혹은 비밀번호를 확인하세요.");
    }
  }

  async callMain(user_id) {
    let result;
    let cafe_list = new Array();
    let caffeine = new Array();

    try {
      result = await this.api.callMain(user_id);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

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
