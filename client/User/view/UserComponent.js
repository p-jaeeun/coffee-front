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
    this.review_form = document.getElementById("js-cafe-review-form");

    //btn
    this.signin_btn = document.getElementsByClassName("js-signin-btn")[0];
    this.signup_btn = document.getElementsByClassName("js-signup-btn")[0];
    this.cafe_review_btn = document.getElementsByClassName(
      "js-cafe-review-btn"
    )[0];
    this.search_btn = document.getElementsByClassName("js-search-btn")[0];
    this.add_cafe_btn = document.getElementsByClassName(
      "js-user-addcafe-btn"
    )[0];
    this.settings_btn = document.getElementsByClassName(
      "js-user-pwchange-btn"
    )[0];

    //preview btn
    this.profile_btn = document.getElementsByClassName(
      "js-user-profile-btn"
    )[0];
    this.bgimg_btn = document.getElementsByClassName("js-user-bgimg-btn")[0];

    //tag
    this.cafe_review_list = document.getElementsByClassName(
      "js-cafe-review-list"
    );
    this.mini_map = document.getElementById("js-map-mini");
    this.header_menu = document.querySelectorAll(".js-user-header-menu")[1]; //evnet delegation 에서 읽히지 않는 문제가 발생
    this.header_img = document.getElementsByClassName("js-user-header-img");
    this.user_menu = document.querySelectorAll(".js-user-menu")[0];
    this.my_hidden_cafe_list = document.getElementsByClassName(
      "js-user-myhiddencafe-list"
    );
    this.half_map = document.getElementById("js-map-half");
    this.search_list = document.getElementById("js-search-result-list");

    //이미지 미리보기
    this.thumnail = document.getElementById("js-thumnail");
    this.upload_profile = document.getElementById("js-upload-profile");
    this.background = document.getElementById("js-back-img");
    this.upload_background = document.getElementById("js-upload-back-img");
  }

  //Listener
  signin(callback) {
    console.log("signin-listener");

    window.addEventListener("load", () => {
      this.signin_btn.addEventListener("click", callback);
    });
  }

  signup(callback) {
    console.log("signup-listener");
    window.addEventListener("load", () => {
      this.signup_btn.addEventListener("click", callback);
    });
  }

  addCafe(callback) {
    console.log("add-cafe-listener");
    window.addEventListener("load", () => {
      this.add_cafe_btn.addEventListener("click", callback);
    });
  }

  search(callback) {
    console.log("search-listener");
    window.addEventListener("load", () => {
      this.search_btn.addEventListener("click", callback);
    });
  }

  settings(callback) {
    console.log("settings-listener");
    window.addEventListener("load", () => {
      this.settings_btn.addEventListener("click", callback);
    });
  }

  addReview(callback) {
    console.log("addReview-listener");
    window.addEventListener("load", () => {
      this.cafe_review_btn.addEventListener("click", callback);
    });
  }

  prevent() {
    let dom = document.getElementById("js-prevent");
    dom.addEventListener("click", () => {
      alert("컴포넌트의 이벤트를 받을 리스너 ");
    });
  }

  //evnet delegation
  headerMenu(callback) {
    console.log("header-delegation");
    window.addEventListener("load", () => {
      this.header_menu.addEventListener("click", callback);
    });
  }

  userMenu(callback) {
    console.log("user_menu-delegation");
    window.addEventListener("load", () => {
      this.user_menu.addEventListener("click", callback);
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

  makeSubscription(result) {
    //my subscription -> makeUserHeader + makeUserMenu + makeMySubscription + makeSubscriptionList(한개씩 추가) + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();
    var subscription = user_view.makeMySubscription();
    let list_item = user_view.makeSubscriptionList(); //is it really need?
    let footer = user_view.makeFooter();
    let pop = common_view.makeSearchPop();

    for (let i = 0; i < result.length; i++) {
      subscription += user_view.makeSubscriptionList(result[i]); //결과에서 길이와 데이터를 받아서 넣자, append????
    }

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + user_menu + subscription + footer + pop;
  }

  makeVisitedCafe(result) {
    //my hidden -> makeUserHeader + makeUserMenu + makeListAndMap + makeHalfListItem(한개씩 추가) + makeFooter + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();
    var half_list = user_view.makeListAndMap();
    let list_item = user_view.makeHalfListItem();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + user_menu + half_list + footer + pop;

    let dom = document.getElementById("js-user-myhiddencafe-list");
    for (let i = 0, max = result.length; i < max; i++) {
      dom += item(result[i]); //result는 나중에 데이터 받아서 구체적으로 바꿔줘야함
    }
  }

  makeCafeInfo(result) {
    //cafeInfo : userHeader OR makeAdminHeader + makeCafeInfo(common) + makeFooter(common) +makeSearchPop(common)
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    let info = common_view.makeCafeInfo();
    let footer = common_view.makeFooter();
    let pop = common_view.make.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + info + footer + pop;
  }

  makeSearchResult(result) {
    console.log("!!!");
    //search_result : makeUserHeader OR makeAdminHeader + makeSearchResult + makeFooter(common) + makeSearchPop(common)
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    var search_result = common_view.makeSearchResult();
    let item = common_view.makeSearchItem();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + search_result + pop;

    let dom = document.getElementById("js-search-result-list");
    for (let i = 0, max = result.length; i < max; i++) {
      dom += item(result[i]); //result는 나중에 데이터 받아서 구체적으로 바꿔줘야함
    }
  }

  makeAddCafe(result) {
    //add cafe -> makeUserHeader + makeAddCafe + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    let add_cafe = user_view.makeAddCafe();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + add_cafe + footer + pop;
  }

  makeSettings(result) {
    //setting ->  makeUserHeader + makeUserMenu + makeSettings + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();
    let settings = user_view.makeSettings();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + user_menu + settings + footer + pop;
  }
}
