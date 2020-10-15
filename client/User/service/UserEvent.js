import { UserService } from "../service/UserService.js";

export class UserEvent {
  constructor() {
    this.service = new UserService();
  }

  async getVisitedCafePage(userData) {
    let result;

    try {
      result = await this.service.getVisitedCafePage(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result !== undefined) {
      return result;
    } else {
      console.log("Result is undefined");
    }
  }

  async getSubscriptionPage(userData) {
    let result;

    try {
      result = await this.service.getSubscriptionPage(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result !== undefined) {
      return result;
    } else {
      console.log("Result is undefined");
    }
  }

  async getUserPage(userData) {
    let result;

    try {
      result = await this.service.getUserPage(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result !== undefined) {
      return result;
    } else {
      console.log("Result is undefined");
    }
  }

  async search(userData) {
    let result;

    try {
      result = await this.service.search(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "undefined" || result === undefined) {
      console.log("Result is undefined:" + result);
    } else {
      return result;
    }
  }

  async addReview(userData) {
    let result;

    try {
      result = await this.service.addReview(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "undefined" || result === undefined) {
      console.log("Result is undefined:" + result);
    } else {
      return result;
    }
  }

  async settings(userData) {
    let reuslt;

    try {
      result = await this.service.settings(userData);
    } catch (e) {
      console.log("error: " + e);
    }

    if (result === "undefined" || result === undefined) {
      console.log("Result is undefined:" + result);
    } else {
      alert("성공적으로 변경되었습니다.");
      return result;
    }
  }

  async cafeList(cafe_id) {
    let result;

    try {
      result = await this.service.searchCafeInfo(cafe_id);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "undefined" || result === undefined) {
      console.log("Result is undefined:" + result);
    } else {
      return result;
    }
  }

  async caffeineList(user_id) {
    let result;

    try {
      result = await this.service.searchOtherUser(user_id);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "undefined" || result === undefined) {
      console.log("Result is undefined:" + result);
    } else {
      return result;
    }
  }
}
