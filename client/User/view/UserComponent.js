import { UserView } from "./UserView.js";
import { CommonView } from "../../Common/view/CommonView.js";
import { AdminView } from "../../Admin/view/AdminView.js";

export class UserComponent {
  constructor() {
    this.user_view = new UserView();
    this.common_view = new CommonView();

    //form
    this.signup_form = document.getElementById("js-signup-form");
    this.signin_form = document.getElementById("js-signin-form");
    this.add_cafe_form = document.getElementById("js-addcafe-user-form");
    this.search_form = document.getElementById("js-search-form");
    this.settings_form = document.getElementById("js-user-settings-form");

    //btn
    this.this.signin_btn = document.getElementsByClassName("js-signin-btn")[0];
    this.signup_btn = document.getElementsByClassName("js-signup-btn")[0];
    this.cafe_review_btn = document.getElementById("js-cafe-review-btn");
    this.search_btn = document.getElementById("js-search-btn");
    this.add_cafe_btn = document.getElementById("js-user-addcafe-btn");
    this.profile_btn = document.getElementById("js-user-profile-btn");
    this.bgimg_btn = document.getElementById("js-user-bgimg-btn");
    this.status_btn = document.getElementById("js-user-status-btn");
    this.settings_btn = document.getElementById("js-user-pwchange-btn");

    //tag
    this.cafe_review_list = document.getElementsByClassName(
      "js-cafe-review-list"
    );
    this.mini_map = document.getElementById("js-map-mini");
    this.header_menu = document.getElementsByClassName("js-user-header-menu");
    this.header_img = document.getElementsByClassName("js-user-header-img");
    this.user_menu = document.getElementById("js-user-menu");
    this.my_hidden_cafe_list = document.getElementsByClassName(
      "js-user-myhiddencafe-list"
    );
    this.half_map = document.getElementById("js-map-ha");

    //이미지 미리보기
    this.thumnail = document.getElementById("js-thumnail");
    this.upload_profile = document.getElementById("js-upload-profile");
    this.background = document.getElementById("js-back-img");
    this.upload_background = document.getElementById("js-upload-back-img");
  }

  //Listener
  signin(callback) {
    console.log("signin-listener");
    this.signin_btn.addEventListener("click", callback);
  }

  signup(callback) {
    console.log("signup-listener");
    this.signup_btn.addEventListener("click", callback);
  }

  addCafe(callback) {
    console.log("add-cafe-listener");
    this.add_cafe_btn.addEventListener("click", callback);
  }

  search(callback) {
    console.log("search-listener");
    this.search_btn.addEventListener("click", callback);
  }

  settings(callback) {
    console.log("settings-listener");
    this.settings_btn.addEventListener("click", callback);
  }

  prevent() {
    let dom = document.getElementById("js-prevent");
    dom.addEventListener("click", () => {
      alert("컴포넌트의 이벤트를 받을 리스너 ");
    });
  }

  //Pages
  makeLoginMain(result) {
    //main -> makeUserHeader + makeMainCaffeineList + makeMainCafeList + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    let caffeine = user_view.makeMainCaffaineList();
    let cafe = user_view.makeMainCafeList();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;
  }

  makeAdminMain(result) {
    //main -> makeUserHeader + makeMainCaffeineList + makeMainCafeList + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
    let admin_view = new AdminView();

    let header = admin_view.makeAdminHeader();
    let caffeine = user_view.makeMainCaffaineList();
    let cafe = user_view.makeMainCafeList();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;
  }

  makeDashboard(result) {
    //dashboard -> makeUserHeader + makeUserMenu + makeDashboard + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();
    let dashboard = user_view.makeDashboard();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + user_menu + dashboard + footer + pop;
  }

  makeSubscription() {
    //my subscription -> makeUserHeader + makeUserMenu + makeMySubscription + makeSubscriptionList(한개씩 추가) + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();
    let subscription = user_view.makeMySubscription();
    subscription.append(); //여기 해야함
  }

  makeVisitedCafe() {
    //my hidden -> makeUserHeader + makeUserMenu + makeListAndMap + makeHalfListItem(한개씩 추가) + makeFooter + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
  }

  makeCafeInfo() {
    //cafeInfo : userHeader OR makeAdminHeader + makeCafeInfo(common) + makeFooter(common) +makeSearchPop(common)
    let user_view = new UserView();
    let common_view = new CommonView();
  }

  makeSearchResult() {
    //search_result : makeUserHeader OR makeAdminHeader + makeSearchResult + makeFooter(common) + makeSearchPop(common)
    let user_view = new UserView();
    let common_view = new CommonView();
  }

  makeAddCafe() {
    //add cafe -> makeUserHeader + makeAddCafe + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
  }

  makeSettings() {
    //setting ->  makeUserHeader + makeUserMenu + makeSettings + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
  }
}
