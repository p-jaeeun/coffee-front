import { UserComponent } from "../component/UserComponent.js";
import { UserEvent } from "../service/UserEvent.js";

export class UserCTR {
  constructor() {
    this.comp = new UserComponent();
    this.service = new UserEvent();
    this.self = this;
  }
  //callback functions are to be splited into UserComponent and UserService

  async addCafe(userData) {
    let result;

    for (let value of userData.values()) {
      console.log("value-ctr:" + value);
    }

    try {
      result = await this.event.addCafe(userData);
    } catch (e) {
      console.log("error:" + e);
    }
  }

  async search(userData) {
    let result;

    for (let value of userData.values()) {
      console.log("value-ctr:" + value);
    }

    try {
      result = await this.event.search(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    this.executeMakeSearch(result);
  }

  async settings(userData) {
    for (let value of userData.values()) {
      console.log("value-ctr:" + value);
    }

    try {
      result = await this.event.settings(userData);
    } catch (e) {
      console.log("error:" + e);
    }
  }

  async addReview(userData) {
    for (let value of userData.values()) {
      console.log("value-ctr:" + value);
    }

    try {
      await this.event.addReview(userData);
    } catch (e) {
      console.log("error:" + e);
    }
  }

  async headerMenu(userData) {
    let result;

    try {
      result = await this.event.headerMenu(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    switch (userData) {
      case "Home":
        this.executeMakeLoginMain(result);
      case "Search":
        console.log("Search menu clicked");
      case "User":
        this.executeMakeDashboard(result);
    }
  }

  async userMenu(userData) {
    let result;

    try {
      result = await this.event.userMenu(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    switch (userData) {
      case "Dashboard":
        this.executeMakeDashboard(result);
      case "My Hidden Cafe":
        this.executeVisitedCafe(result);
      case "My Subscription":
        this.executeMakeSubscription(result);
      case "Add New Hidden Cafe":
        this.executeMakeAddCafe();
      case "Bookmark":
        console.log("CTR-Bookmark");
      case "settings":
        this.executeMakeSettings();
    }
  }

  async cafeList(cafe_id) {
    let result;

    try {
      result = await this.event.cafeList(cafe_id);
    } catch (e) {
      console.log("error:" + e);
    }

    this.executeMakeCafeInfo(result);
  }

  async caffeineList(user_id) {
    let result;

    try {
      result = await this.event.caffeineList(user_id);
    } catch (e) {
      console.log("error:" + e);
    }

    this.executeMakeOthersPage(result);
  }

  //구현예정
  executeMakeOthersPage(result) {
    this.comp.makeOthersPage(result);
    // this.comp.headerMenu(this.headerMenu, this, self);
    // this.comp.othersMenu(this.othersMenu, this.self);
    this.comp.cafeList(this.cafeList, this.self);
  }

  executeMakeCafeInfo(result) {
    this.comp.makeCafeInfo(result);
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.addReview(this.addReview, this.self);
  }

  executeMakeSettings() {
    this.comp.makeSettings();
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.userMenu(this.userMenu, this.self);
    this.comp.settings(this.settings, this.self);
  }

  executeMakeSubscription(result) {
    this.comp.makeSubscription(result);
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.userMenu(this.userMenu, this.self);
    this.comp.cafeList(this.cafeList, this.self);
  }

  executeVisitedCafe(result) {
    this.comp.makeVisitedCafe(result);
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.userMenu(this.userMenu, this.self);
    this.comp.cafeList(this.cafeList, this.self);
  }

  executeMakeDashboard(result) {
    this.comp.makeDashboard(result);
    this.headerMenu(this.headerMenu, this.self);
    this.userMenu(this.userMenu, this.self);
  }

  executeMakeLoginMain(result) {
    this.comp.makeLoginMain(result);
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.userMenu(this.userMenu, this.self);
    this.comp.cafeList(this.cafeList, this.self);
    this.comp.caffeineList(this.caffeineList, this.self);
  }

  executeMakeAddCafe() {
    this.comp.makeAddCafe();
    this.comp.addCafe(this.addCafe, this.self);
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.userMenu(this.userMenu, this.self);
  }

  executeMakeSearch(result) {
    this.comp.makeSearchResult(result);
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.cafeList(this.cafeList, this.self);
  }
}
