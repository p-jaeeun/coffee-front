import { AdminDTO } from "../model/AdminDTO.js";
import { AdminApi } from "../api/AdminApi.js";

export class AdminService {
  constructor() {
    this.api = new AdminApi();
  }

  // view
  async callMain() {
    let result;

    try {
      result = await this.api.callMain();
    } catch {
      console.log("Service-error: " + e);
    }
    return result;
  }

  async callMemberList() {
    let result;

    try {
      result = await this.api.callMemberPage();
    } catch {
      console.log("Service-error: " + e);
    }
    return result;
  }

  async callAdminPage(adminData) {
    let result;

    try {
      result = await this.api.callAdminPage(adminData);
    } catch {
      console.log("Service-error: " + e);
    }
    return result;
  }

  async callAddCafe(adminData) {
    let result;

    try {
      result = await this.api.callAddCafe(adminData);
    } catch (e) {
      console.log("error: " + e);
    }
    return result;
  }

  async addCafe(cafeData) {
    let result;

    try {
      result = await this.api.addCafe(cafeData);
    } catch (e) {
      console.log("service-error: " + e);
    }

    if (result === undefined || result === "undefined") {
      console.log("Service-result-undefined:" + result);
      this.view.makeAddcafePage();
      return;
    } else {
      console.log("Service-result:" + result);
      alert("신규 카페가 성공적으로 등록되었습니다.");
      return result;
    }
  }

  async callCafeList() {
    let result;
    let dto = new AdminDTO();
    let cafe_array = new Array();

    try {
      result = await this.api.callCafeList();
    } catch (e) {
      console.log("error:" + e);
    }
    for (let i = 0; i < result.length; i++) {
      cafe_array[i].cafe_name = result[0].cafe_name;
    }
    return cafe_list; //저장한 정보를 컨트롤러의 콜백함수에서 받아서 뷰가 가진 메소드의 매개변수로 넘긴다.
  }
}
