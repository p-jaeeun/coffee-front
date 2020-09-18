import { AdminView } from "../view/AdminView";
import { AdminService } from "../service/AdminService";

export class AdminCTR {
  constructor(service,view) {
    this.view = view;
    this.service = service;

    this.view.adminMenu(()=>{
      this.callAdminPage(this.view.makeAddCafePage());
    });

    this.view.makeAddCafe(()=>{ 
    });
  }

  adminLogin() {
    this.service.adminLogin();
  }
  
  
  callAdminPage(){
    this.service.
  }



}
