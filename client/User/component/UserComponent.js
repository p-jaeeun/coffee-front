import { UserView } from "../view/UserView.js";
import { CommonView } from "../../Common/view/CommonView.js";

export class UserComponent {
  constructor() {
    this.user_view = new UserView();
    this.common_view = new CommonView();

    //form
    this.signup_form = document.querySelector("#js-signup-form");
    this.signin_form = document.querySelector("#js-signin-form");
    this.add_cafe_form = document.querySelector("#js-addcafe-user-form");
    this.search_form = document.querySelector("#js-search-form");
    this.settings_form = document.querySelector("#js-user-settings-form");
    this.review_form = document.querySelector("#js-cafe-review-form");

    //btn
    this.signin_btn = document.querySelector(".js-signin-btn");
    this.signup_btn = document.querySelector(".js-signup-btn");
    this.add_review_btn = document.querySelector(".js-cafe-review-btn");
    this.search_btn = document.querySelector(".js-search-btn");
    this.add_cafe_btn = document.querySelector(".js-user-addcafe-btn");
    this.settings_btn = document.querySelector(".js-user-pwchange-btn");

    //preview btn
    this.profile_btn = document.querySelector(".js-user-profile-btn");
    this.bgimg_btn = document.querySelector(".js-user-bgimg-btn");

    //tag
    this.cafe_review_list = document.querySelector(".js-cafe-review-list");
    this.mini_map = document.querySelector("#js-mini-map");

    this.header_img = document.querySelector(".js-user-header-img");
    this.my_hidden_cafe_list = document.querySelector(
      ".js-user-myhiddencafe-list"
    );
    this.half_map = document.querySelector("#js-half-map");
    this.search_list = document.querySelector("js-search-result-list");
    this.review_list = document.querySelector("js-cafe-review-list");

    //event delegation
    this.r_header = document.querySelectorAll(".js-user-header-menu")[0];
    this.header = document.querySelectorAll(".js-user-header-menu")[1];
    this.user_menu = document.querySelectorAll(".js-user-menu")[0];
    this.caffeine_list = document.querySelector(".js-caffeine-list");
    this.cafe_list = document.querySelector(".js-cafe-list");

    //이미지 미리보기
    this.thumnail = document.querySelector("#js-thumnail");
    this.upload_profile = document.querySelector("#js-upload-profile");
    this.background = document.querySelector("#js-back-img");
    this.upload_background = document.querySelector("#js-upload-back-img");
  }
  //Event listener
  addCafe(callback, context) {
    if (document.querySelector(".js-user-addcafe-btn") !== undefined) {
      const add_cafe_btn = document.querySelector(".js-user-addcafe-btn");
      add_cafe_btn.addEventListener("click", (e) => {
        e.preventDefault();
        const add_cafe_form = document.getElementById("js-addcafe-user-form");

        let userData = new FormData(add_cafe_form);

        for (let value of userData.values()) {
          console.log("value:" + value);
        }

        if (typeof callback === "string") {
          callback = context[callback(userData)];
        } else if (typeof callback === "function ") {
          callback.call(context, userData);
        }
      });
    }
  }

  search(callback, context) {
    if (document.querySelector(".js-search-btn") !== undefined) {
      const search_btn = document.querySelector(".js-search-btn");
      search_btn.addEventListener("click", (e) => {
        e.preventDefault();
        const search_form = document.querySelector("#js-search-form");

        let userData = new FormData(search_form);

        for (let value of userData.values()) {
          console.log("value:" + value);
        }

        if (typeof callback === "string") {
          callback = context[callback(userData)];
        } else if (typeof callback === "function ") {
          callback.call(context, userData);
        }
      });
    }
  }

  settings(callback, context) {
    if (document.querySelector(".js-user-pwchange-btn") !== undefined) {
      const settings_btn = document.querySelector(".js-user-pwchange-btn");
      settings_btn.addEventListener("click", (e) => {
        e.preventDefault();
        const settings_form = document.querySelector("#js-user-settings-form");
        let userData = new FormData(settings_form);

        for (let value of userData.values()) {
          console.log("value:" + value);
        }

        let input_1 = userData.get("user_changed_pw1");
        let input_2 = userData.get("user_changed_pw2");

        if (
          input_1 !== input_2 ||
          input_1 === "" ||
          input_2 === "" ||
          input_1.length < 8 ||
          input_2.length < 8
        ) {
          alert("입력값이 다릅니다.");
          return;
        }

        if (typeof callback === "string") {
          callback = context[callback(userData)];
        } else if (typeof callback === "function ") {
          callback.call(context, userData);
        }
      });
    }
  }

  addReview(callback, context) {
    if (document.querySelector(".js-cafe-review-btn") !== undefined) {
      const add_review_btn = document.querySelector(".js-cafe-review-btn");
      add_review_btn.addEventListener("click", (e) => {
        e.preventDefault();
        const add_review_form = document.querySelector("#js-cafe-review-form");

        let userData = new FormData(add_review_form);

        for (let value of userData.values()) {
          console.log("value:" + value);
        }

        if (typeof callback === "string") {
          callback = context[callback(userData)];
        } else if (typeof callback === "function ") {
          callback.call(context, userData);
        }
      });
    }
  }

  //Event delegation
  headerMenu(callback, context) {
    console.log("header-delegation");
    if (document.querySelectorAll(".js-user-header-menu") !== undefined) {
      const header_menu = document.querySelectorAll(".js-user-header-menu");
      header_menu[0].addEventListener("click", (e) => {
        e.preventDefault();
        console.log("headermenu-this");
        let clicked;

        if (
          e.target.tagname === "UL" ||
          e.target.tagName === "LI" ||
          e.target.tagName === "A"
        ) {
          if (e.target.innerHTML.includes("Home")) {
            console.log("Home");
            clicked = "Home";

            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.innerHTML.includes("User")) {
            console.log("user");
            clicked = "User";

            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.innerHTML.includes("Search")) {
            console.log("search");
            clicked = "Search";

            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          }
        } else {
          console.log("you clicked invalid area" + e.target.tagName);
        }
      });

      header_menu[1].addEventListener("click", (e) => {
        e.preventDefault();
        let clicked;
        console.log("headermenu-this");
        if (
          e.target.tagname === "UL" ||
          e.target.tagName === "LI" ||
          e.target.tagName === "A"
        ) {
          // console.log('taget' + e.target.tagName)
          if (e.target.innerHTML.includes("Home")) {
            console.log("Home");
            clicked = "Home";

            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }

            //should i add something on here?
          } else if (e.target.innerHTML.includes("User")) {
            console.log("user");
            clicked = "User";

            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.innerHTML.includes("Search")) {
            console.log("search");
            clicked = "Search";

            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          }
        } else {
          console.log("you clicked invalid area" + e.target.tagName);
        }
      });
    }
  }

  userMenu(callback, context) {
    console.log("user_menu-delegation");

    if (document.querySelector(".js-user-menu") !== undefined) {
      const user_menu = document.querySelector(".js-user-menu");
      user_menu.addEventListener("click", (e) => {
        e.preventDefault();
        let clicked;
        if (e.target.tagName === "A" || e.target.tagName === "I") {
          if (e.target.innerHTML.includes("Dashboard")) {
            console.log("clicked Dashboard");
            clicked = "Dashboard";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.innerHTML.includes("My Hidden Cafe")) {
            console.log("clicked My Hidden Cafe");
            clicked = "My Hidden Cafe";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.innerHTML.includes("My Subscription")) {
            console.log("clicked My subscription");
            clicked = "My Subscription";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.innerHTML.includes("Add New Hidden Cafe")) {
            console.log("clicked Add new hidden cafe");
            clicked = "Add New Hidden Cafe";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.innerHTML.includes("Bookmark")) {
            console.log("clicked Bookmark");
            //
          } else if (e.target.innerHTML.includes("Settings")) {
            console.log("clicked Settings");
            clicked = "Settings";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          }
        } else {
          console.log("you clicked invalid area: " + e.target.tagName);
        }
      });
    }
  }

  caffeineList(callback, context) {
    console.log("caffeine-list");
    if (document.querySelector(".js-caffeine-list") !== undefined) {
      const caffeine_list = document.querySelector(".js-caffeine-list");
      caffeine_list.addEventListener("click", (e) => {
        e.preventDefault();
        let clicked = "user_info";

        //event delegation
        if (e.target.tagName === "H3" || e.target.tagName === "A") {
          let str = String(e.target.innerHTML);
          let pattern = /(?!value=")\d{0,99999}(?<!\")/;
          let found = str.match(pattern);

          let clear_arr = found.filter(function (item) {
            return item !== null && item !== undefined && item !== "";
          });
          let user_id = clear_arr.join();
          this.pushState(clicked, user_id);

          if (typeof callback === "string") {
            callback = context[callback(user_id)];
          } else if (typeof callback === "function") {
            callback.call(context, user_id);
          }
        }
      });
    }
  }

  cafeList(callback, context) {
    console.log("cafe-list");
    if (document.querySelector(".js-cafe-list") !== undefined) {
      const cafe_list = document.querySelector(".js-cafe-list");
      cafe_list.addEventListener("click", (e) => {
        e.preventDefault();
        let clicked = "cafe_info";

        if (e.target.tagName === "H3" || e.target.tagName === "A") {
          let str = String(e.target.innerHTML);
          let pattern = /(?!value=")\d{0,99999}(?<!\")/g;
          let found = str.match(pattern);

          let clear_arr = found.filter(function (item) {
            return item !== null && item !== undefined && item !== "";
          });
          let cafe_id = clear_arr.join();
          this.pushState(clicked, cafe_id);

          if (typeof callback === "string") {
            callback = context[callback(cafe_id)];
          } else if (typeof callback === "function") {
            callback.call(context, cafe_id);
          }
        }
      });
    }
  }

  //Render view
  makeLoginMain(result) {
    //notification도 로그인할때 오나? 그렇다면 이미지랑 같이 저장, 나머지 화면에서는 꺼내서 쓰기
    let user_view = new UserView();
    let common_view = new CommonView();
    this.addScript();

    //user_id, user_img
    // localStorage.setItem("user_id", result.user_id);
    // localStorage.setItem("user_img", result.user_circle_img);
    // localStorage.setItem("user_bg_img", result.user_bg_img);

    //display
    let header = user_view.makeUserHeader();

    let caffeine = user_view.makeMainCaffeineList();
    let cafe = user_view.makeMainCafeList();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    // this.addScript();
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;
    this.pushState("Home");
  }

  makeDashboard(result) {
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    // let user_id = localStorage.getItem("user_id");
    // let user_img = localStorage.getItem("user_img");
    // localStorage.setItem("total_visited", result.total_visited);
    // localStorage.setItem("count_like", result.count_like); //subscription
    // localStorage.setItem("caffeine", result.count_like);
    // localStorage.setItem("user_bg_img", result.user_bg_img);
    // localStorage.setItem("total_cafe", result.total_addcafe);
    // localStorage.setItem("user_like", result.user_like);

    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();
    let dashboard = user_view.makeDashboard();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + user_menu + dashboard + footer + pop;
    this.pushState("Dashboard");
  }

  makeSubscription(result) {
    //my subscription -> makeUserHeader + makeUserMenu + makeMySubscription + makeSubscriptionList(한개씩 추가) + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
    this.addScript();
    // let user_id = localStorage.getItem("user_id");
    // let user_img = localStorage.getItem("user_img");
    // let total_visited = localStorage.getItem("total_visited");
    // let count_like = localStorage.getItem("count_like");
    // let caffeine = localStorage.getItem("caffeine");
    // let user_bg_img = localStorage.getItem("user_bg_img");
    // let total_cafe = localStorage.getItem("total_cafe");
    // let user_like = localStorage.getItem("user_like");

    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();

    var subscription = user_view.makeMySubscription();
    // var subscription_user = user_view.makeSubcriptionUser();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + user_menu + subscription + footer + pop;

    // cafe_name, cafe_id, cafe_rate, cafe_img, cafe_rate_count, cafe_location;

    var list = document.getElementsByClassName("js-subscription-list")[0];

    for (let i = 0; i < result.user_id.length; i++) {
      list.innerHTML += user_view.makeSubcriptionUser(
        result.user_id[i].user_id,
        "http://placehold.it/50x50"
      );

      for (let j = 0, max = result.cafeList.length; j < max; j++) {
        if (result.user_id[i].user_pk === result.cafeList[j].user_pk) {
          var sub_list = document.getElementsByClassName(
            "js-user-myhiddencafe-list"
          );
          sub_list[i].innerHTML += user_view
            .makeSubscriptionItem
            // result.cafeList[j].cafe_name,
            // result.cafeList[j].cafe_id,
            // "3.75",
            // result.cafeList[j].cafe_img,
            // "4",
            // result.cafeList[j].cafe_location
            ();
        } else {
          console.log("FALSE");
        }
      }
    }
    this.pushState("My Subscription");
  }

  makeVisitedCafe(result) {
    //my hidden -> makeUserHeader + makeUserMenu + makeListAndMap + makeHalfListItem(한개씩 추가) + makeFooter + makeSearchPop
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    // let user_id = localStorage.getItem("user_id");
    // let user_img = localStorage.getItem("user_img");
    // let total_visited = localStorage.getItem("total_visited");
    // let count_like = localStorage.getItem("count_like");
    // let caffeine = localStorage.getItem("caffeine");
    // let user_bg_img = localStorage.getItem("user_bg_img");
    // let total_cafe = localStorage.getItem("total_cafe");
    // let user_like = localStorage.getItem("user_like");

    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();
    var half_list = user_view.makeListAndMap(result.length);
    let item = user_view.makeHalfListItem();
    let pop = common_view.makeSearchPop();

    //display --> cafe_name, cafe_rate, cafe_rate_count, cafe_location
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + user_menu + half_list + pop;
    window.addEventListener("load", () => {
      for (let i = 0, max = result.length; i < max; i++) {
        let dom = document.getElementsByClassName(
          "js-user-myhiddencafe-list"
        )[0];
        dom.innerHTML += user_view
          .makeHalfListItem
          // result[i].cafe_name,
          // result[i].cafe_id,
          // "3.75",
          // "4",
          // result[i].cafe_location
          ();
      }
    });
    this.pushState("My Hidden Cafe");
  }

  makeCafeInfo(result) {
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    // let user_id = localStorage.getItem("user_id");
    // let user_img = localStorage.getItem("user_img");

    let header = user_view.makeUserHeader(user_img, user_id, "0");
    let info = common_view.makeCafeInfo();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();
    var no_item = common_view.makeNoReviewItem();
    var item = common_view.makeReviewItem();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + info + footer + pop;

    //profile, review_user_id, write_date, cafe_rate, cafe_rate_count, comment, cafe_like
    window.addEventListener("load", () => {
      let dom = document.getElementsByClassName("js-cafe-review-list")[0];
      console.log("cafe-review-list-tag: " + dom);
      if (result.reviewList.length === 0) {
        dom.innerHTML += no_item;
      } else {
        for (let i = 0, max = result.reviewList.length; i < max; i++) {
          dom.innerHTML += common_view
            .makeReviewItem
            // result.reviewList[i].image,
            // result.reviewList[i].user_id,
            // "2020년 09월 15일",
            // result.reviewList[i].rate,
            // result.reviewList[i].review,
            // "like"
            ();
        }
      }

      dom.innerHTML += item();
    });
  }

  makeSearchResult(result) {
    //search_result : makeUserHeader OR makeAdminHeader + makeSearchResult + makeFooter(common) + makeSearchPop(common)
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    // let user_id = localStorage.getItem("user_id");
    // let user_img = localStorage.getItem("user_img");

    let header = user_view.makeUserHeader();
    var search_result = common_view.makeSearchResult();
    let item = common_view.makeSearchItem();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + search_result + pop;

    //cafe_name, cafe_id, cafe_rate,cafe_img, cafe_rate_count, cafe_location
    window.addEventListener("load", () => {
      let dom = document.getElementsByClassName("js-search-result-list")[0];
      console.log("list-tag: " + dom);
      dom.innerHTML += item;
      for (let i = 0, max = result.length; i < max; i++) {
        dom.innerHTML += item(
          result[i].cafe_name,
          result[i].cafe_id,
          "3.75",
          result[i].cafe_img,
          "4",
          result[i].cafe_location
        ); //result는 나중에 데이터 받아서 구체적으로 바꿔줘야함
      }
    });
    this.pushState("Search");
  }

  makeAddCafe() {
    //add cafe -> makeUserHeader + makeAddCafe + makeFooter(common) + makeSearchPop
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    // let user_id = localStorage.getItem("user_id");
    // let user_img = localStorage.getItem("user_img");

    let header = user_view.makeUserHeader();
    let add_cafe = user_view.makeAddCafe();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + add_cafe + footer + pop;
    this.pushState("Add New Hidden Cafe");
    console.log("ASDASD");
  }

  makeSettings() {
    //setting ->  makeUserHeader + makeUserMenu + makeSettings + makeFooter(common) + makeSearchPop

    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    // let user_id = localStorage.getItem("user_id");
    // let user_img = localStorage.getItem("user_img");
    // let total_visited = localStorage.getItem("total_visited");
    // let count_like = localStorage.getItem("count_like");
    // let caffeine = localStorage.getItem("caffeine");
    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();
    let settings = user_view.makeSettings();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + user_menu + settings + footer + pop;
    this.pushState("Settings");
  }

  //additional functions
  addScript() {
    let path = this.getContextPath();
    //create
    let script1 = document.createElement("script");
    let script2 = document.createElement("script");
    let script3 = document.createElement("script");
    let script4 = document.createElement("script");
    let script5 = document.createElement("script");
    let script6 = document.createElement("script");
    let script7 = document.createElement("script");
    let script8 = document.createElement("script");
    let script9 = document.createElement("script");
    let script10 = document.createElement("script");
    let script11 = document.createElement("script");
    let script12 = document.createElement("script");
    let script13 = document.createElement("script");
    let script14 = document.createElement("script");

    //set path
    script1.src = `${path}/resources/js/jquery.min.js`;
    script2.src = `${path}/resources/js/modernizr.js`;
    script3.src = `${path}/resources/js/script.js`;
    script4.src = `${path}/resources/js/bootstrap.min.js`;
    script5.src = `${path}/resources/js/wow.min.js`;
    script6.src = `${path}/resources/js/slick.min.js`;
    script7.src = `${path}/resources/js/sumoselect.js`;
    script8.src = `${path}/resources/js/isotop.js`;
    script9.src = `${path}/resources/js/jquery.nicescroll.min.js`;
    script10.src = `${path}/resources/js/map1.js`;
    script11.src = `${path}/resources/js/jq.aminoSlider.js`;
    script12.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f6ac04217d0213217c7208829defdafb";
    script13.src = `${path}/resources/img_upload.js`;
    script14.src = `${path}/resources/app.js`;

    //type
    script1.setAttribute = ("type", "text/javascript");
    script2.setAttribute = ("type", "text/javascript");
    script3.setAttribute = ("type", "text/javascript");
    script4.setAttribute = ("type", "text/javascript");
    script5.setAttribute = ("type", "text/javascript");
    script6.setAttribute = ("type", "text/javascript");
    script7.setAttribute = ("type", "text/javascript");
    script8.setAttribute = ("type", "text/javascript");
    script9.setAttribute = ("type", "text/javascript");
    script10.setAttribute = ("type", "text/javascript");
    script11.setAttribute = ("type", "text/javascript");
    script12.setAttribute = ("type", "text/javascript");
    script13.setAttribute = ("type", "text/javascript");
    script14.setAttribute = ("type", "module");

    script1.setAttribute = ("async", "false");
    script2.setAttribute = ("async", "false");
    script3.setAttribute = ("async", "false");
    script4.setAttribute = ("async", "false");
    script5.setAttribute = ("async", "false");
    script6.setAttribute = ("async", "false");
    script7.setAttribute = ("async", "false");
    script8.setAttribute = ("async", "false");
    script9.setAttribute = ("async", "false");
    script10.setAttribute = ("async", "false");
    script11.setAttribute = ("async", "false");
    script12.setAttribute = ("async", "false");
    script13.setAttribute = ("async", "false");
    script14.setAttribute = ("async", "false");

    //append
    document.body.append(script1);
    document.body.append(script2);
    document.body.append(script3);
    document.body.append(script4);
    document.body.append(script5);
    document.body.append(script6);
    document.body.append(script7);
    document.body.append(script8);
    document.body.append(script9);
    document.body.append(script10);
    document.body.append(script11);
    document.body.append(script12);
    document.body.append(script13);
    document.body.append(script14);
  }

  getContextPath() {
    var hostIndex = location.href.indexOf(location.host) + location.host.length;
    return location.href.substring(
      hostIndex,
      location.href.indexOf("/", hostIndex + 1)
    );
  }

  pushState(clicked, dynamic_id) {
    let data;
    const main = "/hiddenc";
    const user_login = "/hiddenc/login";
    const dashboard = "/hiddenc/login/mypage";
    const visited_cafe = "/hiddenc/login/visited";
    const settings = "/hiddenc/login/setting";
    const subscription = "/hiddenc/login/subscription";
    const add_cafe = "/hiddenc/user/addcafe";
    const user_info = "/hiddenc/search/other";
    const cafe_info = "/hiddenc/login/search/result/cafeinfo";
    const search_result = "/hiddenc/login/search/result";
    const pre_page = window.history.state.pre_page;

    switch (clicked) {
      case "User":
        data = { pre_page: pre_page };
        window.history.pushState(data, "dashboard", dashboard);
        break;
      case "Home":
        data = { pre_page: pre_page };
        window.history.pushState(data, "home", user_login);
        break;
      case "before_login_main":
        data = { pre_page: pre_page };
        window.history.pushState(data, "before_login_main", main);
        break;
      case "Dashboard":
        data = { pre_page: pre_page };
        window.history.pushState(data, "dashboard", dashboard);
        break;
      case "My Subscription":
        data = { pre_page: pre_page };
        window.history.pushState(data, "subscription", subscription);
      case "My Hidden Cafe":
        data = { pre_page: pre_page };
        window.history.pushState(data, "visited_cafe", visited_cafe);
        break;
      case "Settings":
        data = { pre_page: pre_page };
        window.history.pushState(data, "settings", settings);
        break;
      case "Add New Hidden Cafe":
        data = { pre_page: pre_page };
        window.history.pushState(data, "add_cafe", add_cafe);
        break;
      case "user_info":
        data = { pre_page: pre_page };
        window.history.pushState(data, "user_info", user_info + dynamic_id);
        break;
      case "cafe_info":
        data = { pre_page: pre_page };
        window.history.pushState(data, "cafe_info", cafe_info + dynamic_id);
        break;
      case "Search":
        data = { pre_page: pre_page };
        window.history.pushState(data, "search_result", search_result);
        break;
      default:
        console.log("Unexpected url");
        break;
    }
  }
}
