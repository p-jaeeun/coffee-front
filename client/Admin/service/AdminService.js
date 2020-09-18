import { AdminDTO } from "../model/AdminDTO.js";
import { AdminApi } from "../api/AdminApi.js";

class AdminService {
  constructor() {

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
