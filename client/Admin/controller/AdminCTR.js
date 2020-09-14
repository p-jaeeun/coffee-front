import { AdminView } from "/Users/김청하/Desktop/coffee-front/coffee/client/Admin/view/AdminComponent";
import { AdminService } from "/Users/김청하/Desktop/coffee-front/coffee/client/Admin/service/AdminService";

export class AdminCTR {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    this.view.listenLogin(this.adminLogin);
  }

  adminLogin() {
    this.service.adminLogin();
  }
}
