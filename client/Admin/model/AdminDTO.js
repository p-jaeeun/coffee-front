export class AdminDTO {
  constructor() {
    this._admin_id
    this._admin_pw
    this._admin_pk
  }

  getAdminPk() {
    return _this.admin_pk;
  }

  setAdminPk(admin_pk) {
    this._admin_pk = admin_pk;
  }

  getAdminId() {
    return this._admin_id;
  }
  setAdminId(admin_id) {
    this._admin_id = admin_id;
  }

  getAdminPw() {
    return this._admin_pw;
  }
  setAdminPw(admin_pw) {
    this._admin_pw = admin_pw;
  }

}