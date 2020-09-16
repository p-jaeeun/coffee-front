import { AdminDTO } from "../model/AdminDTO.js";
import { AdminApi } from "../api/AdminApi.js";

class AdminService {
  constructor() {
    // this.like_list = new Array();

    this.api = new AdminApi();
  }
  async adminLogin(userData) {
    

    await this.api.adminLogin(userData).then((result) => {
      if (result === "false") {
        alert("아이디 혹은 비밀번호 오류입니다.")
      } else if (result === "true") {
        await this.callCafeList()
      }
    });
  }

  //로그인하면 앞단에서 다시 통신해야하나? //맞으면 이거 맞음, dto사용방식 손봐야함

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
