import { UserService } from "../service/UserService.js";

export class UserCTR {
  constructor(service, view) {
    this.service = service;
    this.view = view;
    this.self = this;

    this.view.signin(() => {
      this.signin();
    });
    this.view.signup(() => {
      this.signup();
    });
    this.view.addCafe(() => {
      this.addCafe();
    });
    //아직 서비스부터 구현 안됨
    this.view.search(() => {
      this.search();
    });
    this.view.settings(() => {
      this.settings();
    });
  }

  signin = () => {
    console.log("CTR-this:" + this);
    var result;

    this.view.signin_form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let userData = new FormData(this.view.signin_form);
      for (let value of userData.values()) {
        console.log("value:" + value);
      }

      let service = new UserService();
      result = await service.signin(userData);

      if (result === undefined || result === "undefined") {
        console.log("CTR-return-error:" + result);
      } else if (result[0] === "member") {
        console.log("컨트롤러-서비스 결과값:" + result);
        this.view.makeLoginMain(result[1]);
      } else if (result[0] === "admin") {
        console.log("컨트롤러-서비스 결과값:" + result);
        this.view.makeAdminMain(result[1]);
      }
    });
  };

  signup = () => {
    var result;

    this.view.signup_form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let userData = new FormData(this.view.signup_form);
      for (let value of userData.values()) {
        console.log("value:" + value);
      }

      let service = new UserService();
      result = await service.signup(userData);

      if (result === undefined || result === "undefined") {
        console.log("CTR-return-error:" + result);
      } else {
        console.log("컨트롤러-서비스 결과값:" + result); //화면은 만들필요 없음, 서비스에서 통신해서 가져옴
      }
    });
  };

  addCafe = () => {
    var result;

    this.view.add_cafe_form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let userData = new FormData(this.view.signup_form);
      for (let value of userData.values()) {
        console.log("value:" + value);
      }

      let service = new UserService();
      result = await service.signup(userData);

      if (result === undefined || result === "undefined") {
        console.log("CTR-return-error:" + result);
      } else {
        console.log("컨트롤러-서비스 결과값:" + result);
        //화면은 필요하지 않음
      }
    });
  };
}
