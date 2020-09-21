import { AdminView } from "../view/AdminView";
import { AdminService } from "../service/AdminService";

export class AdminCTR {
  constructor() {
    this.view = new AdminView();
    this.service = new AdminService();

    this.view.adminMenu(() => {
      this.callAdminPage(this.view.makeAddCafePage());
    });

    this.view.addCafe(() => {
      this.addCafe(this.view.saveCafeData());
    });

    this.view.reviseCafe(() => {});
  }

  callAdminPage() {
    this.service.addCafeData();
  }

  addCafe() {
    this.service.addCafe();
  }
}
