import { Ajax } from "../../Common/lib/Ajax.js";
import { AdminDTO } from "../model/AdminDTO.js";

export class AdminApi {
  constructor() {
    this.ajax = new Ajax();
  }

  // 화면
  async callMain() {
    console.log("ajax-callmain");

    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.107:8080/hiddenc/login/main"
      );
    } catch (e) {
      console.log("error: " + e);
    }
    return result;
  }

  async callAdminPage() {
    console.log("ajax-adminpage");
    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/admin/cafe"
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  // callCafeList() {
  //   let result;
  //   try {
  //     result = await this.ajax.sendAjaxGet("http://192.168.1.131:8080/hiddenc/admin/cafe")
  //   } catch (e) {
  //     console.log("error:" + e);
  //   }
  //   return result;
  // }

  async callMemberPage() {
    console.log("ajax-adminpage-member");
    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/admin/user"
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async callAddCafePage() {
    console.log("ajax-adminpage-addcafe");
    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/admin/addcafe"
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async callReviseCafePage() {
    console.log("ajax-adminpage-revisecafe");
    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/admin/addcafe/byuser"
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  // post
  async addCafe(cafeData) {
    console.log("ajax-admin-addcafe");

    let result;
    try {
      result = await this.ajax.sendAjaxPostFile(
        "http://192.168.1.107:8080/hiddenc/addcafe",
        cafeData
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }
}
