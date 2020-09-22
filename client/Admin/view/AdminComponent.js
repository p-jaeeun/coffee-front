import { AdminView } from "./AdminView.js";
import { CommonView } from "../../Common/view/CommonView.js";
import { UserView } from "../../User/view/UserView.js";

export class AdminComponent {
  constructor() {
    this.admin_view = new AdminView();

    this.common_view = new CommonView();

    // form
    this.search_form = document.getElementById("js-search-form");
    this.addcafe_form = document.getElementById("js-admin-addcafe-form");
    this.revisecafe_form = document.getElementById("js-admin-revisecafe-form");

    // button
    this.addcafe_btn = document.getElementsByClassName(
      "js-admin-addcafe-btn"
    )[0];
    this.revisecafe_load_btn = document.getElementsByClassName(
      "js-admin-revisecafe-load-btn"
    )[0];
    this.revisecafe_update_btn = document.getElementsByClassName(
      "js-admin-revisecafe-btn"
    )[0];
    this.search_btn = document.getElementsByClassName("js-search-btn")[0];

    // tag
    // this.header_menu = document.querySelectorAll(".js-admin-header-menu")[1];
    // this.admin_menu = document.querySelectorAll(".js-admin-header-menu")[0];
    this.revisecafe_list = document.getElementsByClassName(
      "js-admin-js-admin-revisecafe-list"
    );
    this.addcafe_img = document.getElementsByClassName("js-admin-addcafe-img");
    this.revisecafe_img = document.getElementsByClassName(
      "js-admin-revisecafe-img"
    );
    this.half_map = document.getElementById("js-map-half");
    this.search_list = document.getElementsByClassName("js-search-result-list");
    // image preview
    // this.thumnail = document.getElementById("js-thumnail");
    // this.upload_cafe = document.getElementById("js-upload");
  }

  //리스너 정의

  addCafe(callback) {
    console.log("add-cafe-listener");

    window.addEventListener("load", () => {
      this.addcafe_btn.addEventListener("click", callback);
    });
  }

  reviseCafe(callback) {
    console.log("revise-cafe-listener");
    window.addEventListener("load", () => {
      this.revisecafe_update_btn.addEventListener("click", callback);
    });
  }

  loadCafeList(callback) {
    console.log("load list of cafe listner");

    window.addEventListener("load", () => {
      this.revisecafe_load_btn.addEventListener("click", callback);
    });
  }
  search(callback) {
    console.log("search-listener");

    window.addEventListener("load", () => {
      this.search_btn.addEventListener("click", callback);
    });
  }

  // event delegation
  headerMenu(callback) {
    console.log("header_menu-delegation");

    window.addEventListener("load", () => {
      let r_header = document.getElementsByClassName("js-admin-header-menu")[0];
      let header = document.getElementsByClassName("js-admin-header-menu")[1];

      r_header.addEventListener("click", callback);
      header.addEventListener("click", callback);
    });
  }

  adminMenu(callback) {
    console.log("admin_menu-delegation");

    window.addEventListener("load", () => {
      let admin_menu = document.getElementsByClassName("js-admin-menu")[0];
      admin_menu.addEventListener("click", callback);
    });
  }
  // previewCafeImg(callback){
  //   this.thumnail.addEventListener("load",callback);  // 이미지 미리보기?
  // }

  // make view of admin page

  makeCafeListPage() {
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let admin_menu = admin_view.makeAdminMenu();
    let saved_cafe_list = admin_view.makeCafeList();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML =
      header + admin_menu + saved_cafe_list + footer + search_pop;

    // let dom = document.getElementsByClassName("js-admin-cafelist")[0];
    // console.log(dom);
    // dom.innerHTML += item;
    // dom.innerHTML += item;
    // dom.innerHTML += item;
    // dom.innerHTML += item;
    // for (let i = 0, max = result.length; i < max; i++) {
    //   dom.innerHTML += item(result[i]);
  }

  makeMemberPage() {
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let admin_menu = admin_view.makeAdminMenu();
    let member_list = admin_view.makeMemberList(); // 아직 view 구현 X
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML =
      header + admin_menu + member_list + footer + search_pop;
  }
  makeAddCafePage() {
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let admin_menu = admin_view.makeAdminMenu();
    let admin_addcafe = admin_view.makeAddCafeForm();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML =
      header + admin_menu + admin_addcafe + footer + search_pop;
  }

  makeReviseCafePage() {
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let admin_menu = admin_view.makeAdminMenu();
    let admin_revisecafe = admin_view.makeReviseCafeForm();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML =
      header + admin_menu + admin_revisecafe + footer + search_pop;
  }

  makeSearchResultPage() {
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let search_result = common_view.makeSearchResult();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML = header + search_result + search_pop;
  }

  makeCafeInfoPage() {
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let cafe_info = common_view.makeCafeInfo();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML = header + cafe_info + footer + search_pop;
  }

  makeAdminMainPage(result) {
    let user_view = new UserView();
    let common_view = new CommonView();
    let admin_view = new AdminView();

    let header = admin_view.makeAdminHeader();
    let caffeine = user_view.makeMainCaffeineList();
    let cafe = user_view.makeMainCafeList();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;
  }
}
