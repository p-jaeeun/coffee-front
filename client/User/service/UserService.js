import { UserApi } from "/Users/김청하/Desktop/coffee-front/coffee/client/User/api/UserApi";
import { UserDTO } from "/Users/김청하/Desktop/coffee-front/coffee/client/User/model/UserDTO";

export class UserService {
  constructor() {
    this.api = new UserApi();
  }
  async userLogin(userData) {
    let dto = new UserDTO();
    let { user_id, user_pw } = userData;

    dto.setUserId(user_id);
    dto.setUserPw(user_pw);

    try {
      await this.api.userLogin(dto).then((result) => {
        if (result === "false") {
          alert("비밀번호 혹은 아이디 오류입니다.");
        } else if (result === "true") {
          this.api.callMain();
        }
      });
    } catch (e) {
      console.log("error: " + e);
    }
  }

  async callMain() {
    let result;
    let cafe_list = new Array();
    let caffeine = new Array();

    try {
      result = await this.api.callMain();
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "false") {
      console.log("Page loading error: " + result);
    } else if (result === "true") {
      for (let i = 0; i < result.length; i++) {
        //카페인 유저, 카페목록을 받음 -> 어떤 형식으로 오나?
      }
    }
    return cafe_list;
  }
}
