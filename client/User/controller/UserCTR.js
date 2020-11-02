import { UserComponent } from "../component/UserComponent.js";
import { UserEvent } from "../service/UserEvent.js";

export class UserCTR {
  constructor() {
    this.comp = new UserComponent();
    this.event = new UserEvent();
    this.self = this;
  }
  //callback
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
    // console.log("result:" + result);
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
    switch (userData) {
      case "Home":
        this.callMain();
        break;
      case "Search":
        console.log("Search menu clicked");
        break;
      case "User":
        this.getUserPage();
        break;
    }
  }

  async getUserPage() {
    let result;
    let user_id = localStorage.getItem("user_id");

    try {
      result = await this.event.getUserPage(user_id);
    } catch (e) {
      console.log("error:" + e);
    }

    this.executeMakeDashboard(result);
  }

  async callMain() {
    let result;

    try {
      result = await this.event.callMain();
    } catch (e) {
      console.log("error:" + e);
    }

    this.executeMakeLoginMain(result);
  }

  async getSubscriptionPage() {
    let result;
    let user_id = localStorage.getItem("user_id");

    try {
      result = await this.event.getSubscriptionPage(user_id);
    } catch (e) {
      console.log("error:" + e);
    }

    this.executeMakeSubscription(result);
  }

  async getVisitedCafePage() {
    let result;
    let user_id = localStorage.getItem("user_id");

    try {
      result = await this.event.getVisitedCafePage(user_id);
    } catch (e) {
      console.log("error:" + e);
    }

    this.executeVisitedCafe(result);
  }

  //callbacks of the event delegation
  async userMenu(userData) {
    console.log(userData);
    switch (userData) {
      case "Dashboard":
        this.getUserPage();
        break;
      case "My Hidden Cafe":
        this.getVisitedCafePage();
        break;
      case "My Subscription":
        this.getSubscriptionPage();
        break;
      case "Add New Hidden Cafe":
        this.executeMakeAddCafe();
        break;
      case "Bookmark":
        console.log("CTR-Bookmark");
        break;
      case "Settings":
        this.executeMakeSettings();
        break;
      default:
        console.log("You clicked invalid area!");
        break;
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
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.userMenu(this.userMenu, this.self);
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
  }

  executeMakeSearch(result) {
    this.comp.makeSearchResult(result);
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.cafeList(this.cafeList, this.self);
  }
}
