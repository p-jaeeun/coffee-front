import { Ajax } from "../../Common/lib/Ajax.js";
import { UserDTO } from "../model/UserDTO.js";

export class UserApi {
  constructor() {
    this.api = new Ajax();
  }

  //화면
  async callHome() {
    console.log("API_data:");
    let result;

    try {
      result = await this.api.sendAjaxGet("http://192.168.1.107:8080/hiddenc");
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async callMain() {
    console.log("API_data:");

    let result;
    try {
      result = await this.api.sendAjaxGet(
        "http://192.168.1.107:8080/hiddenc/login/main"
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  //정보
  async signin(userData) {
    console.log("API_data:");
    let result;
    // let userData = {};
    // userData.user_id = userDTO.getUserId;
    // userData.user_pw = userDTO.getUserPw;
    // let str = JSON.stringify();

    try {
      result = await this.api.sendAjaxPostFile(
        "http://192.168.1.107:8080/hiddenc/login",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    console.log("value type" + typeof result);
    return result;
  }

  async callAdminPage() {
    console.log("API_data:");
    let result;
    try {
      result = await this.api.sendAjaxGet(
        `http://192.168.1.131:8080/hiddenc/admin`
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async signup(userData) {
    console.log("API_data:");
    let result;
    // let str = JSON.stringify(userData);

    try {
      result = await this.api.sendAjaxPostFile(
        "http://192.168.1.107:8080/hiddenc/signup",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }
}
