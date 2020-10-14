import { CommonView } from "../view/CommonView.js";

export class CommonComponent {
  constructor() {
    this.view = new CommonView();
    //btn
    this.signin_btn = document.getElementsByClassName("js-signin-btn")[0];
    this.signup_btn = document.getElementsByClassName("js-signup-btn")[0];
    this.search_btn = document.getElementsByClassName("js-search-btn")[0];
    //form
    this.signin_form = document.getElementById("js-signin-form");
    this.signup_form = document.getElementById("js-signup-form");
    this.search_form = document.getElementById("js-search-form");
  }

  signin(callback, context) {
    if (this.signin_btn !== undefined) {
      this.signin_btn.addEventListener("click", (e) => {
        console.log("component");
        e.preventDefault();

        let userData = new FormData(this.signin_form);

        for (let value of userData.values()) {
          console.log("value:" + value);
        }

        if (typeof callback === "string") {
          callback = context[callback(userData)];
        } else if (typeof callback === "function") {
          callback.call(context, userData);
        }
      });
    }
  }

  signup(callback, context) {
    if (this.signup_btn !== undefined) {
      this.signup_btn.addEventListener("click", (e) => {
        e.preventDefault();

        let userData = new FormData(this.signup_form);

        for (let value of userData.values()) {
          console.log("value:" + value);
        }

        if (typeof callback === "string") {
          callback = context[callback(userData)];
        } else if (typeof callback === "function") {
          callback.call(context, userData);
        }
      });
    }
  }

  search(callback, context) {
    this.search_btn.addEventListener("click", (e) => {
      e.preventDefault();

      let userData = new FormData(this.search_form);

      for (let value of userData.values()) {
        console.log("value:" + value);
      }

      if (typeof callback === "string") {
        callback = context[callback(userData)];
      } else if (typeof callback === "function") {
        callback.call(context, userData);
      }
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

    let caffeine = user_view.makeMainCaffeineList();
    let cafe = user_view.makeMainCafeList();
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
    let caffeine = user_view.makeMainCaffeineList();
    let cafe = user_view.makeMainCafeList();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;
  }
}
