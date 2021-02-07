import { Ajax } from "../lib/Ajax.js";
import { env } from "../../../router.js";

export class CommonApi {
  constructor() {
    this.ajax = new Ajax();
  }
  async callHome() {
    console.log("ajax-callhome");
    let result;

    try {
      result = await this.ajax.sendAjaxGet(`${env}/hiddenc`);
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  } //로그인 실패시, 로그 아웃시

  async callMain() {
    console.log("ajax-callmain");

    let result;
    try {
      result = await this.ajax.sendAjaxGet(`${env}/hiddenc/login/main`);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async callAdminPage() {
    console.log("ajax-adminpage");
    let result;
    try {
      result = await this.ajax.sendAjaxGet(`${env}/hiddenc/login`);
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  //정보
  async signin(userData) {
    console.log("ajax-signin");
    let result;

    try {
      result = await this.ajax.sendAjaxPostFile(
        `${env}/hiddenc/login`,
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

    try {
      result = await this.ajax.sendAjaxPostFile(
        `${env}/hiddenc/signup`,
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }
}
