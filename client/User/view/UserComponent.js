import { UserView } from "./UserView.js";
import { CommonView } from "../../Common/view/CommonView.js";

export class UserComponent {
  constructor() {
    this.user_view = new UserView();
    this.common_view = new CommonView();

    //input
    this.signin_input = document.getElementsByClassName("js-signin-input");
    this.signup_input = document.getElementsByClassName("js-signup-input");
    this.cafe_review_input = document.getElementsByClassName(
      "js-cafe-review-input"
    );
    this.search_input = document.getElementsByClassName("js-search-input");
    this.add_cafe_input = document.getElementsByClassName(
      "js-user-addcafe-input"
    );
    this.add_cafe_img = document.getElementsByClassName("js-user-addcafe-img");
    this.status_input = document.getElementsByClassName("js-user-status-input");
    this.pwchange_input = document.getElementsByClassName(
      "js-user-pwchange-input"
    );

    //btn
    this.signin_btn = document.getElementsByClassName("js-signin-btn");
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

  makeTest() {
    document.body.innerHTML = this.user_view.makeMainTest();
  }

  //Listener
  signin(callback) {
    console.log("listener");

    this.signin_btn[0].addEventListener("click", callback);
  }

  signup(callback) {
    this.signup_btn.addEventListener("click", callback);
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

    userData.user_id = arr[1];
    userData.user_pw = arr[2];
    console.log("arr:" + arr);
    console.log("id:" + userData.user_id);
    console.log("pw:" + userData.user_pw);

    return userData;
  }

  saveSignupData() {
    let userData = new Object();
    let arr = new Array();

    for (let i = 0; i < this.signup_input.length; i++) {
      arr.push(this.signin_input[i].value);
    }

    userData.user_id = arr[0];
    userData.user_pw = arr[1];
    userData.user_name = arr[2];
    userData.user_email = arr[3];
    userData.user_birth = arr[4];
    userData.user_gender = arr[5];

    return userData;
  }

  saveAddCafeData() {
    let userData = new Object();
    let arr = new Array();

    for (let i = 0; i < this.add_cafe_input.length; i++) {
      arr.push(this.add_cafe_input[i].value);
    }

    userData.cafe_name;
    userData.cafe_menu;
    userData.cafe_location;
    userData.cafe_sns; // db에 없음
    userData.cafe_img;
  }

  makeLoginMain(result) {
    let user_view = new UserView();
    let common_view = new CommonView();
    //main -> makeUserHeader + makeMainCaffeineList + makeMainCafeList + makeFooter(common) + makeSearchPop
    let header = user_view.makeUserHeader();
    let caffeine = user_view.makeMainCaffaineList();
    let cafe = user_view.makeMainCafeList();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPopup();

    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;
    this.user_view.makeConsole();
  }
}
