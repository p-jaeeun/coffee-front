export function AdminDTO() {
  this.admin_id = admin_id;
  this.admin_pw = admin_pw;
  this.admin_key = admin_key;

  this.admin_notification = admin_notification;
}
AdminDTO.prototype = {
  constructor: AdminDTO,
  getAdminId: function () {
    return this.admin_id;
  },
  setAdminId: function (admin_id) {
    this.admin_id = admin_id;
  },
  getAdminPw: function () {
    return this.admin_pw;
  },
  setAdminPw: function (admin_pw) {
    this.admin_pw = admin_pw;
  },
  getAdminKey: function () {
    return this.admin_key;
  },
  setAdminKey: function (admin_key) {
    this.admin_key = admin_key;
  },
  getAdminNotification: function () {
    return this.admin_notification;
  },
  setAdminNotification: function (admin_notification) {
    this.admin_notification = admin_notification;
  },
};
