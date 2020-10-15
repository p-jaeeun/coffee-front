import { CommonComponent } from "../component/CommonComponent.js";
import { CommonEvent } from "../service/CommonEvent.js";
import { UserCTR } from "../../User/controller/UserCTR.js";

export class CommonCTR {
  constructor() {
    this.event = new CommonEvent();
    this.comp = new CommonComponent();
    this.user = new UserCTR();
    this.self = this;

    this.comp.signin(this.signin, this.self);
    this.comp.signup(this.signup, this.self);
  }

  async signin(userData) {
    console.log("ctr");
    let result;

    for (let value of userData.values()) {
      console.log("value-ctr:" + value);
    }

    try {
      result = await this.event.signin(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result[0] === "member") {
      let result_str = JSON.parse(result[1]);
      this.user.executeMakeLoginMain();
    } else if (result[0] === "admin") {
      let result_str = JSON.parse(result[1]);
      this.comp.makeAdminMain();
    }
  }

  async signup(userData) {
    for (let value of userData.values()) {
      console.log("value-ctr:" + value);
    }

    try {
      await this.event.signup(userData);
    } catch (e) {
      console.log("error:" + e);
    }
    //make display with communication
  }
}
