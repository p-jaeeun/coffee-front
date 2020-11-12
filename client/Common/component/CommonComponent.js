import { CommonView } from "../view/CommonView.js";
import { UserView } from "../../User/view/UserView.js";
import { AdminView } from "../../Admin/view/AdminView.js";

export class CommonComponent {
  constructor() {
    this.view = new CommonView();
    //btn
    this.signin_btn = document.querySelector(".js-signin-btn");
    this.signup_btn = document.querySelector(".js-signup-btn");
    this.search_btn = document.querySelector(".js-search-btn");
    //form
    this.signin_form = document.querySelector(".js-signin-form");
    this.signup_form = document.querySelector(".js-signup-form");
    this.search_form = document.querySelector(".js-search-form");
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

  //event delegation
  headerMenu(callback, self) {
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
              callback = self[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(self, clicked);
            }
          } else if (e.target.innerHTML.includes("User")) {
            console.log("user");
            clicked = "User";
            if (typeof callback === "string") {
              callback = self[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(self, clicked);
            }
          } else if (e.target.innerHTML.includes("Search")) {
            console.log("search");
            clicked = "Search";
            if (typeof callback === "string") {
              callback = self[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(self, clicked);
            }
          }
        } else {
          console.log("you clicked invalid area" + e.target.tagName);
        }
      });

      header_menu[1].addEventListener("click", (e) => {
        e.preventDefault();
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
              callback = self[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(self, clicked);
            }

            //should i add something on here?
          } else if (e.target.innerHTML.includes("User")) {
            console.log("user");
            clicked = "User";
            if (typeof callback === "string") {
              callback = self[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(self, clicked);
            }
          } else if (e.target.innerHTML.includes("Search")) {
            console.log("search");
            clicked = "Search";
            if (typeof callback === "string") {
              callback = self[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(self, clicked);
            }
          }
        } else {
          console.log("you clicked invalid area" + e.target.tagName);
        }
      });
    }
  }

  caffeineList(callback, self) {
    console.log("caffeine-list");
    if (document.querySelector(".js-caffeine-list") !== undefined) {
      const caffeine_list = document.querySelector(".js-caffeine-list");
      caffeine_list.addEventListener("click", (e) => {
        e.preventDefault();

        //event delegation
        if (e.target.tagName === "H3" || e.target.tagName === "A") {
          let str = String(e.target.innerHTML);
          let pattern = /(?!value=")\d{0,99999}(?<!\")/;
          let found = str.match(pattern);

          let clear_arr = found.filter(function (item) {
            return item !== null && item !== undefined && item !== "";
          });
          let user_id = clear_arr.join();

          if (typeof callback === "string") {
            callback = self[callback(user_id)];
          } else if (typeof callback === "function") {
            callback.call(self, user_id);
          }
        }
      });
    }
  }

  cafeList(callback, self) {
    console.log("cafe-list");
    if (document.querySelector(".js-cafe-list") !== undefined) {
      const cafe_list = document.querySelector(".js-cafe-list");
      cafe_list.addEventListener("click", (e) => {
        e.preventDefault();

        if (e.target.tagName === "H3" || e.target.tagName === "A") {
          let str = String(e.target.innerHTML);
          let pattern = /(?!value=")\d{0,99999}(?<!\")/g;
          let found = str.match(pattern);

          let clear_arr = found.filter(function (item) {
            return item !== null && item !== undefined && item !== "";
          });
          let cafe_id = clear_arr.join();

          if (typeof callback === "string") {
            callback = self[callback(cafe_id)];
          } else if (typeof callback === "function") {
            callback.call(self, cafe_id);
          }
        }
      });
    }
  }

  //make the display
  makeSearchResult(result) {
    //search_result : makeUserHeader OR makeAdminHeader + makeSearchResult + makeFooter(common) + makeSearchPop(common)
    let user_view = new UserView();
    let common_view = new CommonView();

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
        dom.innerHTML += item();
        // result[i].cafe_name,
        // result[i].cafe_id,
        // "3.75",
        // result[i].cafe_img,
        // "4",
        // result[i].cafe_location //result는 나중에 데이터 받아서 구체적으로 바꿔줘야함
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

    // ;
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;
  }

  makeAdminMain(result) {
    //main -> makeUserHeader + makeMainCaffeineList + makeMainCafeList + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
    let admin_view = new AdminView();

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

  pushState() {
    const main = "/hiddenc";
    const data = { pre_page: main };
    window.history.pushState(data, "main", main);
  }
}
