import { Ajax } from "/Users/김청하/Desktop/coffee-front/coffee/client/Common/lib/Ajax.js";

export class AdminApi {
  constructor() {
    this.ajax = new Ajax();
  }
  adminLogin(AdminDTO) {
    let result;
    let data = new Object();
    data.admin_id = AdminDTO.getAdminId();
    data.admin_pw = AdminDTO.getAdminPw();

    let str = JSON.stringify(data)

    try {
      result = this.ajax.sendAjaxPost("/api/admin/login", str);
    } catch (e) {
      console.log("error:" + e);
    }
    
    return result;
  }

  callCafeList() {
    let result;
    try {
      result = await this.ajax.sendAjaxGet("/api/admin")
    } catch (e) {
      console.log("error:"+e)
    }
  
    return result
  }
}
