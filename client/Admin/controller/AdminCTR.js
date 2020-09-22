import { AdminView } from "../view/AdminView.js";
import { AdminService } from "../service/AdminService.js";

export class AdminCTR {
  constructor(service, view) {
    this.view = view;
    this.service = service;

    // this.view.makeAddCafePage();

    // event delegation
    this.view.headerMenu((e) => {
      this.headerMenu(e);
    });

    this.view.adminMenu((e) => {
      this.adminMenu(e);
    });

    this.view.addCafe(() => {
      this.addCafe();
    });

    this.view.reviseCafe(() => {
      this.reviseCafe();
    });

    this.view.loadCafeList(() => {
      this.loadCafeList();
    });
  }

  addCafe = () => {
    var result;

    this.view.addcafe_form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let cafeData = new FormData(this.view.addcafe_form);
      for (let value of cafeData.values()) {
        console.log("value: " + value);
      }

      let service = new AdminService();
      result = await service.addCafe(cafeData);
    });
  };

  reviseCafe() {
    var result;

    this.view.revisecafe_form.addEventListener("submit", async (e) => {
      e.preventDefault();

      //마저 작성해야함.
    });
  }

  loadCafeList() {
    this.service.loadCafeList();
  }

  // event delegation
  headerMenu = async (e) => {
    console.log("headermenu-controller");

    if (
      e.target.tagname === "UL" ||
      e.target.tagName === "LI" ||
      e.target.tagName === "A"
    ) {
      // console.log('taget' + e.target.tagName)
      if (e.target.innerHTML.includes("Home")) {
        console.log("clicked Home");
        this.service.callMain();
      } else if (e.target.innerHTML.includes("Search")) {
        console.log("clicked Search");
      } else if (e.target.innerHTML.includes("Admin")) {
        console.log("clicked Admin");

        let adminData = localStorage.getItem("admin_id");
        console.log("local data:" + adminData);
        let result;
        try {
          result = await this.service.callAdminPage(adminData);
        } catch (e) {
          console.log("error: " + e);
        }

        if (result === undefined || result === "undefined") {
          console.log("CTR-result is undefined" + result);
          return;
        } else {
          this.view.makeCafeListPage(result);
        }
      }
    } else {
      console.log("you clicked invalid area");
    }
  };

  adminMenu = async (e) => {
    console.log("admin menu -controller");

    if (e.target.tagName === "A" || e.target.tagName === "I") {
      if (e.target.innerHTML.includes("Hidden Cafe List")) {
        console.log("clicked Hidden Cafe List");
        let result;
        let adminData = localStorage.getItem("admin_id");
        console.log("local data:" + adminData);
        try {
          result = await this.service.callCafeList(adminData);
        } catch (e) {
          console.log("error: " + e);
        }

        if (result === undefined || result === "undefined") {
          console.log("CTR-result is undefined" + result);
          return;
        } else {
          this.view.makeCafeListPage(result);
        }
      } else if (e.target.innerHTML.includes("Add New Hidden Cafe")) {
        console.log("clicked Add Cafe");

        let cafe_id = localStorage.getItem("cafe_id");
        let adminData = localStorage.getItem("admin_id");
        console.log("local data: " + adminData);

        try {
          result = await this.service.callAddCafe(adminData);
        } catch (e) {
          console.log("error: " + e);
        }

        if (result === undefined || result === "undefined") {
          console.log("CTR-result is undefined" + result);
          return;
        } else {
          this.view.makeAddCafePage(result);
        }
      } else if (e.target.innerHTML.includes("Add New Hidden Cafe by Users")) {
        console.log("clicked Revise Cafe");

        let cafe_id = localStorage.getItem("cafe_id");
        let adminData = localStorage.getItem("admin_id");
        console.log("local data:" + adminData);

        try {
          result = await this.service.callMemberList();
        } catch (e) {
          console.log("error: " + e);
        }
        if (result === undefined || result === "undefined") {
          console.log("CTR-result is undefined" + result);
          return;
        } else {
          this.view.makeMemberPage(cafe_id, adminData);
        }
      }
    } else {
      console.log("you clicked ivalid area");
    }
  };
}
