import { Ajax } from "../../Common/lib/Ajax.js";
import { UserDTO } from "../model/UserDTO.js";

export class UserApi {
  constructor() {
    this.ajax = new Ajax();
  }

  //화면
  async callHome() {
    console.log("ajax-callhome");
    let result;

    try {
      result = await this.ajax.sendAjaxGet("http://192.168.1.107:8080/hiddenc");
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async callMain() {
    console.log("ajax-callmain");

    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.107:8080/hiddenc/login/main"
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async callAdminPage() {
    console.log("ajax-adminpage");
    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        `http://192.168.1.131:8080/hiddenc/admin`
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  //정보
  async signin(userData) {
    console.log("ajax-signin");
    let result;
    // let userData = {};
    // userData.user_id = userDTO.getUserId;
    // userData.user_pw = userDTO.getUserPw;
    // let str = JSON.stringify();

    try {
      result = await this.ajax.sendAjaxPostFile(
        "http://192.168.1.107:8080/hiddenc/login",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    console.log("value type" + typeof result);
    return result;
  }

  async signup(userData) {
    console.log("ajax-signup");
    let result;
    // let str = JSON.stringify(userData);

    try {
      result = await this.ajax.sendAjaxPostFile(
        "http://192.168.1.107:8080/hiddenc/signup",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async addCafe(userData) {
    console.log("ajax-addCafe");

    let result;

    try {
      result = await this.ajax.sendAjaxPostFile(
        "http://192.168.1.107:8080/hiddenc/addcafe",
        userData
      ); // from here have to check whether the address is correct or nor
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async search(userData) {
    console.log("ajax-search");
    let result;

    try {
      result = await this.ajax.send(
        "http://192.168.1.107:8080/hiddenc/search",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async settings(userData) {
    console.log("ajax-settings");
    let result;

    try {
      result = await this.ajax.sendAjaxPostFile(
        "http://192.168.1.107:8080/hiddenc/setting",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async addReview(userData) {
    console.log("ajax-addReview");
    let result;

    try {
      result = await this.ajax.sendAjaxPostFile(
        "http://192.168.1.107:8080/hiddenc/addreview",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async callDashboard(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost(
        "http://192.168.1.107:8080/hiddenc/",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async callVisitedCafe(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost(
        "http://192.168.1.107:8080/hiddenc/",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async callSubscription(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost(
        "http://192.168.1.107:8080/hiddenc/",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }
}
