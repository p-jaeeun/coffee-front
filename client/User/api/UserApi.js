import { Ajax } from "../../Common/lib/Ajax.js";

export class UserApi {
  constructor() {
    this.api = new Ajax();
  }

  async signin(userDTO) {
    console.log("user_api");
    let result;
    let userData = {};
    userData.user_id = userDTO.getUserId;
    userData.user_pw = userDTO.getUserPw;
    let str = JSON.stringify(userData);

    try {
      result = await this.api.sendAjaxPost("/api/login", str);
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async callMain(user_id) {
    let result;
    try {
      result = await this.api.sendAjaxGet(`/api/${user_id}/main`);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async callAdminPage() {
    let result;
    try {
      result = await this.api.sendAjaxGet(`/api/admin`);
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async signup(userData) {
    let result;
    let str = JSON.stringify(userData);

    try {
      result = await this.api.sendAjaxPost("/api/signup", str);
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }
}
