import { CommonComponent } from "../component/CommonComponent.js";
import { CommonEvent } from "../service/CommonEvent.js";
import { UserCTR } from "../../User/controller/UserCTR.js";
import { AdminCTR } from "../../Admin/controller/AdminCTR.js";

export class CommonCTR {
  constructor() {
    this.event = new CommonEvent();
    this.comp = new CommonComponent();
    this.user = new UserCTR();
    this.admin = new AdminCTR();
    this.self = this;

    this.comp.signin(this.signin, this.self);
    this.comp.signup(this.signup, this.self);
    // this.comp.pushState();
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
      this.user.executeMakeLoginMain(result[1]);
    } else if (result[0] === "admin") {
      this.admin.executeAdminLogin(result[1]);
    } else {
      console.log("unexpected result");
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
