// import { AdminView } from "../view/AdminView";
// import { AdminService } from "../service/AdminService";

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
