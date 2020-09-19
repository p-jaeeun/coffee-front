import { AdminView } from "../view/AdminView";
import { AdminService } from "../service/AdminService";

export class AdminCTR {
  constructor(service,view) {
    this.view = view;
    this.service = service;

    this.view.adminMenu(()=>{
      this.callAdminPage(this.view.makeAddCafePage());
    });

    this.view.addCafe(()=>{
      this.addCafe(this.view.saveCafeData());
    });

  }

  // adminLogin() {
  //   this.service.adminLogin();
  // }
  
  
  callAdminPage(){
    this.service.addCafeData();
  }

  addCafe(){
    this.service.addCafeInfo();
  }

}
