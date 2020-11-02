import { AdminService } from "../service/AdminService.js";
import { AdminComponent } from "../component/AdminComponent.js";
import { MapApi } from "../../Common/lib/MapApi.js";

export class AdminCTR {
  constructor() {
    this.comp = new AdminComponent();
    this.service = new AdminService();
    this.map = new MapApi();
    this.self = this;
  }
  //callback
  async addCafe(userData) {
    this.map.observer.register(
      "search",
      this.getLocAndAddCafe,
      userData,
      this.self
    );
    this.map.search(".js-search-map-input", ".js-search-map-btn", userData);
  }

  async getLocAndAddCafe(latlng, userData, input) {
    let result;
    userData.append("location", latlng);
    userData.append("input_address", input);

    try {
      result = await this.service.addCafe(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    console.log("Admin-ctr:" + result);
  }

  async reviseCafe(userData) {
    let result;

    try {
      result = await this.service.reviseCafe(userData);
    } catch (e) {
      console.log("error:" + e);
    }
    console.log("Admin-ctr:" + result);
  }

  async loadCafeList() {
    let result;

    try {
      result = await this.service.loadCafeList(userData);
    } catch (e) {
      console.log("error:" + e);
    }
    console.log("Admin-ctr:" + result);

    this.executeReviseCafePage(result);
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

  async callMain() {
    let result;

    try {
      result = await this.service.callMain();
    } catch (e) {
      console.log("error:" + e);
    }

    this.executeAdminLogin(result);
  }

  async callCafeList() {
    let result;

    try {
      result = await this.service.callCafeList();
    } catch (e) {
      console.log("error:" + e);
    }

    this.executeCafeListPage(result);
  }

  async headerMenu(clicked) {
    console.log("clicked:" + clicked);
    switch (clicked) {
      case "Home":
        this.callMain();
        break;
      case "Search":
        console.log("Search");
        break;
      case "Admin":
        this.callCafeList();
        break;
      default:
        console.log("You clicked invalid area!");
        break;
    }
  }

  async reviseCafe() {
    let result;

    try {
      result = await this.service.callReviseCafe();
    } catch (e) {
      console.log("error:" + e);
    }

    console.log("admin-ctr:" + result);
  }

  async callMemberList() {
    let result;

    try {
      result = await this.service.callMemberList();
    } catch (e) {
      console.log("error:" + e);
    }

    this.executeMemberListPage(result);
  }

  async callCafeList() {
    let result;

    try {
      result = await this.service.callCafeList();
    } catch (e) {
      console.log("error:" + e);
    }
    console.log("result:" + result);
    this.executeCafeListPage();
  }

  async adminMenu(clicked) {
    console.log("clicked:" + clicked);
    switch (clicked) {
      case "Hidden Cafe List":
        this.callCafeList();
        break;
      case "Member Management":
        this.callMemberList();
        break;
      case "Add New Hidden":
        this.executeAddCafe();
        break;
      case "Revise Hidden Cafe":
        this.reviseCafe();
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

  //make display
  executeReviseCafePage(result) {
    this.comp.makeReviseCafePage(result);
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.adminMenu(this.adminMenu, this.self);
    this.comp.reviseCafe(this.reviseCafe, this.self);
  }

  executeCafeListPage(result) {
    this.comp.makeCafeListPage(result);
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.adminMenu(this.adminMenu, this.self);
  }

  executeMakeOthersPage(reuslt) {
    //서비스 준비중
  }

  executeMakeCafeInfo(result) {
    this.comp.makeCafeInfoPage(result);
    this.comp.headerMenu(this.headerMenu, this.self);
    //review listener
  }

  executeMemberListPage(result) {
    this.comp.makeMemberPage(result);
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.adminMenu(this.adminMenu, this.self);
  }

  executeAddCafe() {
    this.comp.makeAddCafePage();
    this.comp.addCafe(this.addCafe, this.self);
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.adminMenu(this.adminMenu, this.self);
  }

  executeAdminLogin(result) {
    this.comp.makeMainPage(result);
    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.cafeList(this.cafeList, this.self);
    this.comp.caffeineList(this.caffeineList, this.self);
  }
}
