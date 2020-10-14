import {
  Ajax
} from "../../Common/lib/Ajax.js";

export class UserApi {
  constructor() {
    this.ajax = new Ajax();
  }

  //화면
  async callHome() {
    console.log("ajax-callhome");
    let result;

    try {
      result = await this.ajax.sendAjaxGet("http://192.168.1.131:8080/hiddenc");
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  } //로그인 실패시, 로그 아웃시

  async callMain() {
    console.log("ajax-callmain");

    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/login/main"
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
        `http://192.168.1.131:8080/hiddenc/login`
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

    try {
      result = await this.ajax.sendAjaxPostFile(
        "http://192.168.1.131:8080/hiddenc/login",
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
        "http://192.168.1.131:8080/hiddenc/signup",
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
        "http://192.168.1.131:8080/hiddenc/user/addcafe",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async search(userData) {
    console.log("ajax-search");
    let result;

    try {
      result = await this.ajax.sendAjaxPostFile(
        "http://192.168.1.131:8080/hiddenc/login/search/result",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async searchCafeInfo(userData) {
    console.log("ajax-cafe-info-search");
    let result;
    let obj = {};
    obj.cafe_id = userData;
    let str = JSON.stringify(obj);
    try {
      result = await this.ajax.sendAjaxPost(
        "http://192.168.1.131:8080/hiddenc/login/search/result/cafeinfo",
        str
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
        "http://192.168.1.131:8080/hiddenc/login/setting",
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
        "http://192.168.1.131:8080/hiddenc/login/addreview",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async deleteReview(userData) {
    console.log("ajax-addReview");
    let result;
    let obj = {};
    obj.cafe_id = userData;

    let str = JSON.stringify(userData);
    try {
      result = await this.ajax.sendAjaxPost(
        "http://192.168.1.131:8080/hiddenc/login/deletereview",
        str
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  } //아직 서버단에서 구현안됨

  async callDashboard() {
    let result;

    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/login/mypage"
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async callVisitedCafe() {
    let result;

    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/login/visited/"
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async callSubscription() {
    let result;

    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/login/Likelist"
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async searchOtherUser(userData) {
    let result;
    let obj = {};
    obj.user_id = userData;
    let str = JSON.stringify(obj);

    try {
      result = await this.ajax.sendAjaxPost(
        "http://192.168.1.131:8080/hiddenc/search/other",
        str
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  } //아직 서버단에서 구현되지 않음
}