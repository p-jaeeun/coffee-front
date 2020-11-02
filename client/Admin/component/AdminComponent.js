import { AdminView } from "../view/AdminView.js";
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
      "js-admin-revisecafe-btn"
    )[0];
    this.revisecafe_update_btn = document.getElementsByClassName(
      "js-admin-revisecafe-btn"
    )[1];
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
    this.thumnail = document.getElementById("js-thumnail");
    this.upload_cafe = document.getElementById("js-upload");
  }

  //Listener
  addCafe(callback, context) {
    console.log("add-cafe-listener");
    if (document.querySelector(".js-admin-addcafe-btn") !== null) {
      const add_cafe_btn = document.querySelector(".js-addcafe-admin-btn");
      add_cafe_btn.addEventListener("click", (e) => {
        e.preventDefault();
        const add_cafe_form = document.querySelector(".js-admin-addcafe-form");
        let userData = new FormData(add_cafe_btn);

        for (let value of userData.values) {
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

  reviseCafe(callback, context) {
    console.log("revise-cafe-listener");

    if (document.querySelector(".js-admin-revisecafe-btn") !== null) {
      const revise_btn = document.querySelector(".js-admin-revisecafe-btn");
      revise_btn.addEventListener("click", (e) => {
        e.preventDefault();
        const revise_form = document.querySelector("js-admin-revisecafe-form");

        let userData = new FormData(revise_form);

        for (let value of userData.values()) {
          console.log("value: " + value);
        }

        if (typeof callback === "string") {
          callback = context[callback(userData)];
        } else if (typeof callback === "function") {
          callback.call(context, userData);
        }
      });
    }
  }

  loadCafeList(callback, context) {
    console.log("load list of cafe listner");
    if (document.querySelector(".js-admin-revisecafe-load-btn") !== null) {
      const revise_load_btn = document.querySelector(
        ".js-admin-revisecafe-load-btn"
      );
      revise_load_btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (typeof callback === "string") {
          callback = context[callback()];
        } else if (typeof callback === "function") {
          callback.call(context);
        }
      });
    }
  }

  search(callback) {
    console.log("search-listener");
    if (document.querySelector(".js-search-btn") !== null) {
      const search_btn = document.querySelector(".js-search-btn");
      search_btn.addEventListener("click", (e) => {
        e.preventDefault();
        const search_form = document.querySelector(".js-search-form");

        let userData = new FormData(search_form);

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

  // event delegation
  headerMenu(callback, context) {
    console.log("header_menu-delegation");
    if (document.querySelectorAll(".js-admin-header-menu") !== null) {
      const admin_header = document.querySelectorAll(".js-admin-header-menu");

      admin_header[0].addEventListener("click", (e) => {
        e.preventDefault();
        let clicked;
        if (
          e.target.tagName === "UL" ||
          e.target.tagName === "LI" ||
          e.target.tagName === "A"
        ) {
          if (e.target.includes("Home")) {
            console.log("Home");
            clicked = "Home";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.includes("Search")) {
            console.log("Search");
            clicked = "Search";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.includes("Admin")) {
            console.log("Admin");
            clicked = "Admin";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          }
        }
      });
      admin_header[1].addEventListener("click", (e) => {
        e.preventDefault();
        let clicked;
        if (
          e.target.tagName === "UL" ||
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
          } else if (e.target.innerHTML.includes("Search")) {
            console.log("Search");
            clicked = "Search";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.innerHTML.includes("Admin")) {
            console.log("Admin");
            clicked = "Admin";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          }
        }
      });
    }
  }

  adminMenu(callback, context) {
    console.log("admin_menu-delegation");
    if (document.querySelector(".js-admin-menu") !== null) {
      const admin_menu = document.querySelector(".js-admin-menu");
      admin_menu.addEventListener("click", (e) => {
        e.preventDefault();
        let clicked;

        if (e.target.tagName === "A" || e.target.tagName === "I") {
          if (e.target.innerHTML.includes("Hidden Cafe List")) {
            console.log("clicked Hidden Cafe List");
            clicked = "Hidden Cafe List";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.innerHTML.includes("Member Management")) {
            console.log("clicked Member Management");
            clicked = "Member Management";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.innerHTML.includes("Add New Hidden")) {
            console.log("clicked Add New Hidden");
            clicked = "Add New Hidden";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          } else if (e.target.innerHTML.includes("Revise Hidden Cafe")) {
            console.log("clicked Revise Hidden Cafe");
            clicked = "Revise Hidden Cafe";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          }
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
        let clicked;

        //event delegation
        if (e.target.tagName === "H3" || e.target.tagName === "A") {
          clicked = "user_info";

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
          clicked = "cafe_info";
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

  //render view
  makeMainPage(result) {
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    let admin_view = new AdminView();
    let header = admin_view.makeAdminHeader();
    let caffeine = user_view.makeMainCaffeineList();
    let cafe = user_view.makeMainCafeList();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;
    this.pushState("Home");
  }

  makeCafeListPage(result) {
    console.log("데이터" + result);
    this.addScript();
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let admin_menu = admin_view.makeAdminMenu();
    let saved_cafe_list = admin_view.makeCafeList();
    let cafe_item = admin_view.makeCafeListItem();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + admin_menu + saved_cafe_list + footer + search_pop;
    // window.addEventListener("load", () => {
    let dom = document.getElementsByClassName("js-admin-cafelist")[0];
    console.log("test data" + result);
    // for (let i = 0; i < result.length; i++) {
    //   dom.innerHTML += admin_view.makeCafeListItem(
    //     result[i]["cafe_name"],
    //     result[i]["cafe_location"]
    //   );
    // }
    this.pushState("Hidden Cafe List");
  }

  makeMemberPage(result) {
    this.addScript();
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let admin_menu = admin_view.makeAdminMenu();
    let member_list = admin_view.makeMemberList();
    let member_item = admin_view.makeMemberItem();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + admin_menu + member_list + footer + search_pop;
    // window.addEventListener("load", () => {
    let dom = document.getElementsByClassName("js-admin-memberlist")[0];
    // for (let i = 0, max = result.length; i < max; i++) {
    //   dom.innerHTML += admin_view.makeMemberItem(
    //     result[i].user_id,
    //     result[i].user_name,
    //     result[i].user_caffeine
    //   );
    // }
    // });
    this.pushState("Member Management");
  }

  makeAddCafePage() {
    this.addScript();
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
    this.pushState("Add New Hidden");
  }

  makeReviseCafePage(result) {
    this.addScript();
    let admin_view = new AdminView();
    let common_view = new CommonView();
    let header = admin_view.makeAdminHeader();
    let admin_menu = admin_view.makeAdminMenu();
    let admin_revisecafe = admin_view.makeReviseCafeForm();
    let revise_cafe = admin_view.makeReviseCafeList();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    let loadcafe_btn = document.getElementsByClassName(
      "js-admin-revisecafe-load-btn"
    )[0];
    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
      header + admin_menu + admin_revisecafe + footer + search_pop;

    // for (let i = 0; i < result.byuser.length; i++) {
    //   var dom = document.getElementsByClassName("js-admin-revisecafe-list")[0];

    //   var opt = document.createElement("option");
    //   opt.innerText = result.byuser[i].cafe_name;
    //   opt.setAttribute("value", result.byuser[i].cafe_id);
    //   dom.append(opt);
    // }
    document
      .getElementsByClassName("js-admin-revisecafe-btn")[0]
      .addEventListener("click", () => {
        var selected = dom.options[dom.selectedIndex].text;

        // for (let i = 0; i < result.byuser.length; i++) {
        //   if (JSON.stringify(result.byuser[i]).includes(selected)) {
        //     var cafe_id = result.byuser[i].cafe_id;
        //     var cafe_location = result.byuser[i].cafe_location;
        //     var cafe_menu = result.byuser[i].cafe_menu;
        //     var cafe_sns = result.byuser[i].cafe_sns;
        //     var cafe_information = result.byuser[i].cafe_information;
        //     // console.log(cafe_id);
        //     if (JSON.stringify(result.cafeImgList[i].cafe_id === cafe_id)) {
        //       var cafe_image = result.cafeImgList[i].cafe_image;
        //       // console.log(result.cafeImgList[i].cafe_image);
        //     }
        //   }
        // }

        document.getElementById("cafe_name").value = selected;
        document.getElementById("cafe_location").value = cafe_location;
        document.getElementById("cafe_menu").value = cafe_menu;
        document.getElementById("cafe_sns").value = cafe_sns;
        document.getElementById("cafe_information").value = cafe_information;
        // document.getElementById("js-thumnail").value = cafe_image;
      });

    this.pushState("Revise Hidden Cafe");
  }

  makeSearchResultPage(result) {
    this.addScript();
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let search_result = common_view.makeSearchResult();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML = header + search_result + search_pop;
    window.addEventListener("load", () => {
      let dom = document.getElementsByClassName("js-search-result-list")[0];
      console.log(dom);
      dom.innerHTML += item;
      // for (let i = 0, max = result.length; i < max; i++) {
      //   dom.innerHTML += item(result[i]); //result는 나중에 데이터 받아서 구체적으로 바꿔줘야함
      // }
    });
    this.pushState("Search");
  }

  makeCafeInfoPage(result) {
    this.addScript();
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
    let script15 = document.createElement("script");
    let script16 = document.createElement("script");

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
    script14.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f6ac04217d0213217c7208829defdafb&libraries=LIBRARY";
    script15.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=f6ac04217d0213217c7208829defdafb&libraries=services,clusterer,drawing`;
    script16.src = `${path}/resources/app.js`;

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
    script14.setAttribute = ("type", "text/javascript");
    script15.setAttribute = ("type", "text/javascript");
    script16.setAttribute = ("type", "module");

    script1.setAttribute = ("defer", "defer");
    script2.setAttribute = ("defer", "defer");
    script3.setAttribute = ("defer", "defer");
    script4.setAttribute = ("defer", "defer");
    script5.setAttribute = ("defer", "defer");
    script6.setAttribute = ("defer", "defer");
    script7.setAttribute = ("defer", "defer");
    script8.setAttribute = ("defer", "defer");
    script9.setAttribute = ("defer", "defer");
    script10.setAttribute = ("defer", "defer");
    script11.setAttribute = ("defer", "defer");
    script12.setAttribute = ("defer", "defer");
    script13.setAttribute = ("defer", "defer");
    script14.setAttribute = ("defer", "defer");
    script15.setAttribute = ("defer", "defer");
    script16.setAttribute = ("defer", "defer");

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
    document.body.append(script15);
    document.body.append(script16);
  }

  getContextPath() {
    var hostIndex = location.href.indexOf(location.host) + location.host.length;
    return location.href.substring(
      hostIndex,
      location.href.indexOf("/", hostIndex + 1)
    );
  }

  pushState(page, dynamic_id) {
    let data;
    const main = "/hiddenc";
    const admin_login = "/hiddenc/login/admin";
    const cafe_list = "/hiddenc/admin/cafe";
    const revise = "/hiddenc/admin/addcafe/byuser";
    const member = "/hiddenc/admin/user";
    const add_cafe = "/hiddenc/admin/addcafe";
    const user_info = "/hiddenc/search/other";
    const cafe_info = "/hiddenc/login/search/result/cafeinfo";
    const search_result = "/hiddenc/login/search/result";
    const pre_page = window.history.state.pre_page;

    switch (page) {
      case "Home":
        data = { pre_page: pre_page };
        window.history.pushState(data, "home", admin_login);
        break;
      case "admin":
        data = { pre_page: main };
        window.history.pushState(data, "admin", admin_login);
        break;
      case "Hidden Cafe List":
        data = { pre_page: pre_page };
        window.history.pushState(data, "cafe_list", cafe_list);
        break;
      case "Revise Hidden Cafe":
        data = { pre_page: pre_page };
        window.history.pushState(data, "revise", revise);
        break;
      case "Member Management":
        data = { pre_page: pre_page };
        window.history.pushState(data, "member_menagement", member);
        break;
      case "Add New Hidden":
        data = { pre_page: pre_page };
        window.history.pushState(data, "add_cafe_admin", add_cafe);
        break;
      case "Admin":
        data = { pre_page: pre_page };
        window.history.pushState(data, "cafe_list", cafe_list);
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
        console.log("Unexpected case");
        break;
    }
  }
}
