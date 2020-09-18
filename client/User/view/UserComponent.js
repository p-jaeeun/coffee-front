import { UserView } from "./UserView.js";
import { CommonView } from "../../Common/view/CommonView.js";

export class UserComponent {
  constructor() {
    this.user_view = new UserView();
    this.common_view = new CommonView();

    //input, select
    this.user_gender = document.getElementById("js-signup-gender");

    //form
    this.signup_form = document.getElementById("js-signup-form");

    //btn
    this.signin_btn = document.getElementById("js-signin-btn");
    this.signup_btn = document.getElementById("js-signup-btn");
    this.cafe_review_btn = document.getElementById("js-cafe-review-btn");
    this.search_btn = document.getElementById("js-search-btn");
    this.add_cafe_btn = document.getElementById("js-user-addcafe-btn");
    this.profile_btn = document.getElementById("js-user-profile-btn");
    this.bgimg_btn = document.getElementById("js-user-bgimg-btn");
    this.status_btn = document.getElementById("js-user-status-btn");
    this.pwchange_btn = document.getElementById("js-user-pwchange-btn");

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
    this.half_map = document.getElementById("js-map-half");

    //이미지 미리보기
    this.thumnail = document.getElementById("js-thumnail");
    this.upload_profile = document.getElementById("js-upload-profile");
    this.background = document.getElementById("js-back-img");
    this.upload_background = document.getElementById("js-upload-back-img");
  }

  //Listener
  signin(callback) {
    console.log("listener");
    this.signin_btn.addEventListener("click", callback);
  }

  signup(callback) {
    this.signup_btn.addEventListener("click", callback);
  }

  prevent() {
    let dom = document.getElementById("js-prevent");
    dom.addEventListener("click", () => {
      alert("컴포넌트의 이벤트를 받을 리스너 ");
    });
  }

  //save input data
  saveSigninData() {
    console.log(this.signin_input);
    console.log(this.signin_btn);
    let userData = new Object();
    let arr = new Array();

    for (let i = 0; i < this.signin_input.length; i++) {
      arr.push(this.signin_input[i].value);
    }

    userData.user_id = arr[0];
    userData.user_pw = arr[1];
    console.log("arr:" + arr);
    console.log("id:" + userData.user_id);
    console.log("pw:" + userData.user_pw);

    return userData;
  }

  saveSignupData() {
    this.signup_form.addEventListener("submit", (e) => {
      e.preventDefault();

      let userData = new FormData(this.signup_form);
      for (let value of userData.values()) {
        console.log("value" + value);
      }
      return userData;
    });
  }

  saveAddCafeData() {
    // let userData = new Object();
    // let arr = new Array();
    // for (let i = 0; i < this.add_cafe_input.length; i++) {
    //   arr.push(this.add_cafe_input[i].value);
    // }
    // userData.cafe_name;
    // userData.cafe_menu;
    // userData.cafe_location;
    // userData.cafe_sns; // db에 없음
    // userData.cafe_img;
  }

  //Pages
  makeLoginMain(result) {
    //main -> makeUserHeader + makeMainCaffeineList + makeMainCafeList + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
    //main -> makeUserHeader + makeMainCaffeineList + makeMainCafeList + makeFooter(common) + makeSearchPop(common)

    let header = user_view.makeUserHeader();
    let caffeine = user_view.makeMainCaffaineList();
    let cafe = user_view.makeMainCafeList();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPopup();

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
    let pop = common_view.makeSearchPopup();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + user_menu + dashboard + footer + pop;
  }

  makeSubscription() {
    //my subscription -> makeUserHeader + makeUserMenu + makeMySubscription + makeSubscriptionList(한개씩 추가) + makeFooter(common) + makeSearchPop
  }

  makeVisitedCafe() {
    //my hidden -> makeUserHeader + makeUserMenu + makeListAndMap + makeHalfListItem(한개씩 추가) + makeFooter + makeSearchPop
  }

  makeCafeInfo() {
    //cafeInfo : userHeader OR makeAdminHeader + makeCafeInfo(common) + makeFooter(common) +makeSearchPop(common)
  }

  makeSearchResult() {
    //
  }

  makeAddCafe() {
    //add cafe -> makeUserHeader + makeAddCafe + makeFooter(common) + makeSearchPop
  }

  makeSettings() {
    //setting ->  makeUserHeader + makeUserMenu + makeSettings + makeFooter(common) + makeSearchPop
  }
}
