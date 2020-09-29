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

    this.header_img = document.getElementsByClassName("js-user-header-img");
    this.my_hidden_cafe_list = document.getElementsByClassName(
      "js-user-myhiddencafe-list"
    );
    this.half_map = document.getElementById("js-map-half");
    this.search_list = document.getElementsByClassName(
      "js-search-result-list"
    )[0];
    this.review_list = document.getElementsByClassName(
      "js-cafe-review-list"
    )[0];

    //이미지 미리보기
    this.thumnail = document.getElementById("js-thumnail");
    this.upload_profile = document.getElementById("js-upload-profile");
    this.background = document.getElementById("js-back-img");
    this.upload_background = document.getElementById("js-upload-back-img");
  }

  //Listener
  signin(callback) {
    console.log("signin-listener");

    document
      .getElementsByClassName("js-signin-btn")[0]
      .addEventListener("click", callback);
  }

  signup(callback) {
    console.log("signup-listener");
    document
      .getElementsByClassName("js-signup-btn")[0]
      .addEventListener("click", callback);
  }
  addCafe(callback) {
    document
      .getElementsByClassName("js-user-addcafe-btn")[0]
      .addEventListener("click", callback);
  }

  search(callback) {
    document
      .getElementsByClassName("js-search-btn")[0]
      .addEventListener("click", callback);
  }

  settings(callback) {
    document
      .getElementsByClassName("js-user-pwchange-btn")[0]
      .addEventListener("click", callback);
  }

  addReview(callback) {
    document
      .getElementsByClassName("js-cafe-review-btn")[0]
      .addEventListener("click", callback);
  }

  headerMenu(callback) {
    console.log("header-delegation");

    let r_header = document.getElementsByClassName("js-user-header-menu")[0];
    let header = document.getElementsByClassName("js-user-header-menu")[1];

    r_header.addEventListener("click", callback);
    header.addEventListener("click", callback);
  }

  userMenu(callback) {
    console.log("user_menu-delegation");
    document
      .getElementsByClassName("js-user-menu")[0]
      .addEventListener("click", callback);
  }

  caffeineList(callback) {
    console.log("caffeine-list");
    document
      .getElementsByClassName("js-caffeine-list")[0]
      .addEventListener("click", callback);
  }

  cafeList(callback) {
    console.log("cafe-list");
    document
      .getElementsByClassName("js-cafe-list")[0]
      .addEventListener("click", callback);
  }

  //Pages
  makeLoginMain(result) {
    //notification도 로그인할때 오나? 그렇다면 이미지랑 같이 저장, 나머지 화면에서는 꺼내서 쓰기
    let user_view = new UserView();
    let common_view = new CommonView();
    this.addScript();

    //user_id, user_img
    localStorage.setItem("user_id", result.user_id);
    localStorage.setItem("user_img", result.user_circle_img);
    localStorage.setItem("user_bg_img", result.user_bg_img);

    //display
    let header = user_view.makeUserHeader(
      result.user_circle_img,
      result.user_id,
      "0"
    );

    let caffeine = user_view.makeMainCaffeineList(
      result.topCaffeines[0].user_id,
      result.topCaffeines[0].user_circle_img,
      result.topCaffeines[0].user_id,
      result.topCaffeines[1].user_id,
      result.topCaffeines[1].user_circle_img,
      result.topCaffeines[1].user_id,
      result.topCaffeines[2].user_id,
      result.topCaffeines[2].user_circle_img,
      result.topCaffeines[2].user_id,
      result.topCaffeines[3].user_id,
      result.topCaffeines[3].user_circle_img,
      result.topCaffeines[3].user_id,
      result.topCaffeines[4].user_id,
      result.topCaffeines[4].user_circle_img,
      result.topCaffeines[4].user_id,
      result.topCaffeines[5].user_id,
      result.topCaffeines[5].user_circle_img,
      result.topCaffeines[5].user_id,
      result.topCaffeines[6].user_id,
      result.topCaffeines[6].user_circle_img,
      result.topCaffeines[6].user_id,
      result.topCaffeines[7].user_id,
      result.topCaffeines[7].user_circle_img,
      result.topCaffeines[7].user_id,
      result.topCaffeines[8].user_id,
      result.topCaffeines[8].user_circle_img,
      result.topCaffeines[8].user_id,
      result.topCaffeines[9].user_id,
      result.topCaffeines[9].user_circle_img,
      result.topCaffeines[9].user_id,
      result.topCaffeines[10].user_id,
      result.topCaffeines[10].user_circle_img,
      result.topCaffeines[10].user_id,
      result.topCaffeines[11].user_id,
      result.topCaffeines[11].user_circle_img,
      result.topCaffeines[11].user_id
    );
    let cafe = user_view.makeMainCafeList(
      result.cafeimg[0].cafe_image,
      result.cafebean[0].cafe_name,
      result.cafebean[0].cafe_rate,
      "0",
      result.cafebean[0].cafe_location,
      result.cafebean[0].cafe_id,
      result.cafeimg[1].cafe_image,
      result.cafebean[1].cafe_name,
      result.cafebean[1].cafe_rate,
      "0",
      result.cafebean[1].cafe_location,
      result.cafebean[1].cafe_id,
      result.cafeimg[2].cafe_image,
      result.cafebean[2].cafe_name,
      result.cafebean[2].cafe_rate,
      "0",
      result.cafebean[2].cafe_location,
      result.cafebean[2].cafe_id
    );
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    // this.addScript();
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;
  }

  makeAdminMain(result) {
    //main -> makeUserHeader + makeMainCaffeineList + makeMainCafeList + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
    let admin_view = new AdminView();
    this.addScript();

    //user_id, user_img
    localStorage.setItem("admin_id", result.user_id);

    //review

    let header = admin_view.makeAdminHeader(result.user_id, "0");
    let caffeine = user_view.makeMainCaffeineList(
      result.topCaffeines[0].user_id,
      result.topCaffeines[0].user_circle_img,
      result.topCaffeines[0].user_id,
      result.topCaffeines[1].user_id,
      result.topCaffeines[1].user_circle_img,
      result.topCaffeines[1].user_id,
      result.topCaffeines[2].user_id,
      result.topCaffeines[2].user_circle_img,
      result.topCaffeines[2].user_id,
      result.topCaffeines[3].user_id,
      result.topCaffeines[3].user_circle_img,
      result.topCaffeines[3].user_id,
      result.topCaffeines[4].user_id,
      result.topCaffeines[4].user_circle_img,
      result.topCaffeines[4].user_id,
      result.topCaffeines[5].user_id,
      result.topCaffeines[5].user_circle_img,
      result.topCaffeines[5].user_id,
      result.topCaffeines[6].user_id,
      result.topCaffeines[6].user_circle_img,
      result.topCaffeines[6].user_id,
      result.topCaffeines[7].user_id,
      result.topCaffeines[7].user_circle_img,
      result.topCaffeines[7].user_id,
      result.topCaffeines[8].user_id,
      result.topCaffeines[8].user_circle_img,
      result.topCaffeines[8].user_id,
      result.topCaffeines[9].user_id,
      result.topCaffeines[9].user_circle_img,
      result.topCaffeines[9].user_id,
      result.topCaffeines[10].user_id,
      result.topCaffeines[10].user_circle_img,
      result.topCaffeines[10].user_id,
      result.topCaffeines[11].user_id,
      result.topCaffeines[11].user_circle_img,
      result.topCaffeines[11].user_id
    );
    let cafe = user_view.makeMainCafeList(
      result.cafeimg[0].cafe_image,
      result.cafebean[0].cafe_name,
      result.cafebean[0].cafe_rate,
      "0",
      result.cafebean[0].cafe_location,
      result.cafebean[0].cafe_id,
      result.cafeimg[1].cafe_image,
      result.cafebean[1].cafe_name,
      result.cafebean[1].cafe_rate,
      "0",
      result.cafebean[1].cafe_location,
      result.cafebean[1].cafe_id,
      result.cafeimg[2].cafe_image,
      result.cafebean[2].cafe_name,
      result.cafebean[2].cafe_rate,
      "0",
      result.cafebean[2].cafe_location,
      result.cafebean[2].cafe_id
    );
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;
  }

  makeDashboard(result) {
    //dashboard -> makeUserHeader + makeUserMenu + makeDashboard + makeFooter(common) + makeSearchPop
    // let result = {
    //   user_id: null,
    //   user_pk: 0,
    //   user_bg_img: null,
    //   user_circle_img: null,
    //   user_like: 0,
    //   total_visited: 0,
    //   total_addcafe: 0,
    //   user_caffeine: 0,
    // };

    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    let user_id = localStorage.getItem("user_id");
    let user_img = localStorage.getItem("user_img");
    localStorage.setItem("total_visited", result.total_visited);
    localStorage.setItem("count_like", result.count_like); //subscription
    localStorage.setItem("caffeine", result.count_like);
    localStorage.setItem("user_bg_img", result.user_bg_img);
    localStorage.setItem("total_cafe", result.total_addcafe);
    localStorage.setItem("user_like", result.user_like);
    //usermenu->
    // user_img_background,
    // user_img_profile,
    // user_id,
    // status,
    // user_caffeine,
    // user_like,
    // total_cafe,
    // subscription,
    // favorite

    let header = user_view.makeUserHeader(user_img, user_id, "0");
    let user_menu = user_view.makeUserMenu(
      result.user_bg_img,
      user_img,
      result.user_id,
      "",
      result.user_caffeine,
      result.user_like,
      result.total_addcafe,
      result.count_like,
      "0"
    );
    let dashboard = user_view.makeDashboard();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + user_menu + dashboard + footer + pop;

    //   {
    //     "user_id": null,
    //     "user_pk": 0,
    //     "user_bg_img": null,
    //     "user_circle_img": null,
    //     "user_like": 0,
    //     "total_visited": 0,
    //     "total_addcafe": 0,
    //     "user_caffeine": 0
    // }
  }

  makeSubscription(result) {
    // var result = {
    //   push_user: 132,
    //   user_id: [
    //     {
    //       user_id: "manje12",
    //       user_pk: 8,
    //     },
    //     {
    //       user_id: "jam",
    //       user_pk: 15,
    //     },
    //     {
    //       user_id: "CK",
    //       user_pk: 16,
    //     },
    //     {
    //       user_id: "jaewoo",
    //       user_pk: 17,
    //     },
    //   ],
    //   cafeList: [
    //     {
    //       cafe_id: 1,
    //       cafe_name: "Starbucks",
    //       cafe_location: "150:150",
    //       cafe_image: "1번카페이미지",
    //       user_pk: 8,
    //     },
    //     {
    //       cafe_id: 4,
    //       cafe_name: "Starcoffee",
    //       cafe_location: "120:50",
    //       cafe_image: "4번카페이미지1",
    //       user_pk: 8,
    //     },
    //     {
    //       cafe_id: 7,
    //       cafe_name: "재은카페2",
    //       cafe_location: "122:337",
    //       cafe_image: null,
    //       user_pk: 15,
    //     },
    //     {
    //       cafe_id: 8,
    //       cafe_name: "재은카페1",
    //       cafe_location: "120:387",
    //       cafe_image: null,
    //       user_pk: 16,
    //     },
    //     {
    //       cafe_id: 9,
    //       cafe_name: "청하카페1",
    //       cafe_location: "120:387",
    //       cafe_image: null,
    //       user_pk: 17,
    //     },
    //     {
    //       cafe_id: 10,
    //       cafe_name: "청하카페2",
    //       cafe_location: "1220:387",
    //       cafe_image: null,
    //       user_pk: 17,
    //     },
    //     {
    //       cafe_id: 12,
    //       cafe_name: "재우카페1",
    //       cafe_location: "220:387",
    //       cafe_image: null,
    //       user_pk: 17,
    //     },
    //     {
    //       cafe_id: 11,
    //       cafe_name: "재우카페2",
    //       cafe_location: "20:387",
    //       cafe_image: null,
    //       user_pk: 15,
    //     },
    //   ],
    // };

    //my subscription -> makeUserHeader + makeUserMenu + makeMySubscription + makeSubscriptionList(한개씩 추가) + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
    this.addScript();
    let user_id = localStorage.getItem("user_id");
    let user_img = localStorage.getItem("user_img");
    let total_visited = localStorage.getItem("total_visited");
    let count_like = localStorage.getItem("count_like");
    let caffeine = localStorage.getItem("caffeine");
    let user_bg_img = localStorage.getItem("user_bg_img");
    let total_cafe = localStorage.getItem("total_cafe");
    let user_like = localStorage.getItem("user_like");

    let header = user_view.makeUserHeader(user_img, user_id, "0");
    let user_menu = user_view.makeUserMenu(
      user_bg_img,
      user_img,
      user_id,
      "",
      caffeine,
      user_like,
      total_cafe,
      count_like,
      "0"
    );
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
          sub_list[i].innerHTML += user_view.makeSubscriptionItem(
            result.cafeList[j].cafe_name,
            result.cafeList[j].cafe_id,
            "3.75",
            result.cafeList[j].cafe_img,
            "4",
            result.cafeList[j].cafe_location
          );
        } else {
          console.log("FALSE");
        }
      }
    }
  }

  makeVisitedCafe(result) {
    // let result = [
    //   {
    //     cafe_id: 1,
    //     cafe_name: "Starbucks",
    //     cafe_location: "150:150",
    //     cafe_image: "1번카페이미지",
    //     user_pk: 132,
    //   },
    //   {
    //     cafe_id: 4,
    //     cafe_name: "Starcoffee",
    //     cafe_location: "120:50",
    //     cafe_image: "4번카페이미지1",
    //     user_pk: 132,
    //   },
    //   {
    //     cafe_id: 7,
    //     cafe_name: "재은카페2",
    //     cafe_location: "122:337",
    //     cafe_image: null,
    //     user_pk: 132,
    //   },
    //   {
    //     cafe_id: 8,
    //     cafe_name: "재은카페1",
    //     cafe_location: "120:387",
    //     cafe_image: null,
    //     user_pk: 132,
    //   },
    // ];

    //my hidden -> makeUserHeader + makeUserMenu + makeListAndMap + makeHalfListItem(한개씩 추가) + makeFooter + makeSearchPop
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    let user_id = localStorage.getItem("user_id");
    let user_img = localStorage.getItem("user_img");
    let total_visited = localStorage.getItem("total_visited");
    let count_like = localStorage.getItem("count_like");
    let caffeine = localStorage.getItem("caffeine");
    let user_bg_img = localStorage.getItem("user_bg_img");
    let total_cafe = localStorage.getItem("total_cafe");
    let user_like = localStorage.getItem("user_like");

    let header = user_view.makeUserHeader(user_img, user_id, "0");
    let user_menu = user_view.makeUserMenu(
      user_bg_img,
      user_img,
      user_id,
      "",
      caffeine,
      user_like,
      total_cafe,
      count_like,
      "0"
    );
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
        dom.innerHTML += user_view.makeHalfListItem(
          result[i].cafe_name,
          result[i].cafe_id,
          "3.75",
          "4",
          result[i].cafe_location
        );
      }
    });
  }

  makeCafeInfo(result) {
    // let result = {
    //   cafe_id: 1,
    //   cafe_name: "Starbucks",
    //   cafe_location: "150:150",
    //   cafe_menu: "Americano",
    //   cafe_information: "스타벅스에요!",
    //   cafe_image: [
    //     {
    //       cafe_image: "1번카페이미지",
    //     },
    //     {
    //       cafe_image: "1번카페이미지2",
    //     },
    //     {
    //       cafe_image: "1번카페이미지3",
    //     },
    //   ],
    //   cafe_rate: 4.3,
    //   cafe_sns: "instagram",
    //   is_enable_bean_choice: true,
    //   cafe_mood: 2,
    //   is_enable_buy_bean: true,
    //   is_enable_handdrip: false,
    //   user_id: "manje12",
    //   reviewList: [
    //     {
    //       review: "현석리뷰",
    //       rate: 5,
    //       image: null,
    //       user_id: "manje12",
    //     },
    //     {
    //       review: "박재은재은리뷰3",
    //       rate: 3,
    //       image: null,
    //       user_id: "박재은",
    //     },
    //     {
    //       review: "맛있어요!",
    //       rate: 5,
    //       image: null,
    //       user_id: "박재은",
    //     },
    //   ],
    // };
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    let user_id = localStorage.getItem("user_id");
    let user_img = localStorage.getItem("user_img");

    let header = user_view.makeUserHeader(user_img, user_id, "0");
    let info = common_view.makeCafeInfo(
      result.cafe_image[0],
      result.cafe_image[1],
      result.cafe_image[2],
      result.cafe_image[0],
      result.cafe_image[1],
      result.cafe_image[2],
      result.cafe_image[0],
      result.cafe_image[1],
      result.cafe_image[0],
      result.cafe_image[1],
      result.cafe_image[2],
      result.cafe_image[0],
      result.cafe_image[1],
      result.cafe_image[2],
      result.cafe_name,
      result.cafe_rate,
      result.reviewList.length,
      result.cafe_location,
      result.cafe_information,
      result.cafe_menu,
      "cafe123@naver.com"
    );
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
          dom.innerHTML += common_view.makeReviewItem(
            result.reviewList[i].image,
            result.reviewList[i].user_id,
            "2020년 09월 15일",
            result.reviewList[i].rate,
            result.reviewList[i].review,
            "like"
          );
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
    let user_id = localStorage.getItem("user_id");
    let user_img = localStorage.getItem("user_img");

    let header = user_view.makeUserHeader(user_img, user_id, "0");
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

    //   [
    //     {
    //         "cafe_id": 1,
    //         "cafe_name": "Starbucks",
    //         "cafe_image": "1번카페이미지",
    //         "cafe_location": "150:150"
    //     },
    //     {
    //         "cafe_id": 4,
    //         "cafe_name": "Starcoffee",
    //         "cafe_image": "4번카페이미지1",
    //         "cafe_location": "120:50"
    //     }
    // ]
  }

  makeAddCafe(result) {
    //add cafe -> makeUserHeader + makeAddCafe + makeFooter(common) + makeSearchPop
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    let user_id = localStorage.getItem("user_id");
    let user_img = localStorage.getItem("user_img");

    let header = user_view.makeUserHeader(user_img, user_id, "0");
    let add_cafe = user_view.makeAddCafe();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + add_cafe + footer + pop;

    //   {
    //     "cafe_name": "zzzzzzzz",
    //     "cafe_location": "555/111",
    //     "cafe_menu": "아이스아메리카노",
    //     "cafe_information": "예쁩니다",
    //     "is_enable_bean_choice": true,
    //     "cafe_mood": 3,
    //     "is_enable_buy_bean": true,
    //     "is_enable_handdrip": true,
    //     "is_checked": false,
    //     "user_id": 3,
    //     "cafe_rate": 0.0,
    //     "cafe_sns": "www.instagram.com/jaewoo"
    // }
  }

  makeSettings(result) {
    //setting ->  makeUserHeader + makeUserMenu + makeSettings + makeFooter(common) + makeSearchPop

    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    let user_id = localStorage.getItem("user_id");
    let user_img = localStorage.getItem("user_img");
    let total_visited = localStorage.getItem("total_visited");
    let count_like = localStorage.getItem("count_like");
    let caffeine = localStorage.getItem("caffeine");

    //usermenu ->
    //user_img_background,
    // user_img_profile,
    // user_id,
    // status,
    // user_caffeine,
    // user_like,
    // total_cafe,
    // subscription,
    // favorite
    //

    let header = user_view.makeUserHeader(user_img, user_id, "0");
    let user_menu = user_view.makeUserMenu();
    let settings = user_view.makeSettings();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + user_menu + settings + footer + pop;
  }

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
    let script15 = document.createElement("script");

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
    script15.src =
      "http://maps.googleapis.com/maps/api/js?key=AIzaSyCYc537bQom7ajFpWE5sQaVyz1SQa9_tuY&sensor=true&libraries=places";

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
    script15.setAttribute = ("async", "false");

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
    document.body.append(script15);
    document.body.append(script14);

    // console.log("script1:" + document.body.append(script1));
    // console.log("script2:" + document.body.append(script2));
    // console.log("script3:" + document.body.append(script3));
    // console.log("script4:" + document.body.append(script4));
    // console.log("script5:" + document.body.append(script5));
    // console.log("script6:" + document.body.append(script6));
    // console.log("script7:" + document.body.append(script7));
    // console.log("script8:" + document.body.append(script8));
    // console.log("script9:" + document.body.append(script9));
    // console.log("script10:" + document.body.append(script10));
    // console.log("script11:" + document.body.append(script11));
    // console.log("script12:" + document.body.append(script12));
    // console.log("script13:" + document.body.append(script13));
    // console.log("script14:" + document.body.append(script14));
  }

  getContextPath() {
    var hostIndex = location.href.indexOf(location.host) + location.host.length;
    return location.href.substring(
      hostIndex,
      location.href.indexOf("/", hostIndex + 1)
    );
  }
}
