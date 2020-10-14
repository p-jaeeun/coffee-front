import { CommonComponent } from "../component/CommonComponent.js";
import { CommonEvent } from "../service/CommonEvent.js";

export class CommonCTR {
  constructor() {
    this.service = new CommonEvent();
    this.comp = new CommonComponent();
    this.self = this;

    this.comp.signin(this.signin, this.self);
    this.comp.signup(this.signup, this.self);
  }

  async signin(userData) {
    console.log("ctr");
    let event = new CommonEvent();
    let comp = new CommonComponent();
    let result;

    for (let value of userData.values()) {
      console.log("value-ctr:" + value);
    }

    try {
      result = await event.signin(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result[0] === "user") {
      let result_str = JSON.parse(result[1]);
      comp.makeLoginMain(result_str);
    } else if (result[0] === "admin") {
      let result_str = JSON.parse(result[1]);
      comp.makeAdminMain(result_str);
    }
  }

  async signup(userData) {
    let event = new CommonEvent();

    for (let value of userData.values()) {
      console.log("value-ctr:" + value);
    }

    try {
      await event.signup(userData);
    } catch (e) {
      console.log("error:" + e);
    }
    //make display with communication
  }
}
