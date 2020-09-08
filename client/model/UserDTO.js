export function UserDTO() {
  this.user_id = user_id;
  this.user_pw = user_pw;
  this.user_key = user_key;

  this.user_name = user_name;
  this.user_email = user_email;
  this.user_gender = user_gender;
  this.user_birth = user_birth;

  this.user_status = user_status;
  this.user_following = user_following;
  this.user_follower = user_follower;
  this.user_visit_list = user_visit_list;
  this.user_notification = user_notification;
  this.user_add_cafe_list = user_add_cafe_list;
  this.user_review = user_review;
  this.user_img = user_img;
}

UserDTO.prototype = {
  constructor: UserDTO,
  getUserId: function () {
    return this.user_id;
  },
  setUserId: function (user_id) {
    this.user_id = user_id;
  },
  getUserPw: function () {
    return this.user_pw;
  },
  setUserPw: function (user_pw) {
    this.user_pw = user_pw;
  },
  getUserKey: function () {
    return user_key;
  },
  setUserKey: function (user_key) {
    this.user_key = user_key;
  },
  getUserName: function () {
    return this.user_name;
  },
  setUserName: function (user_name) {
    this.user_name = user_name;
  },
  getUserEmail: function () {
    return this.user_email;
  },
  setUserEmail: function (user_email) {
    this.user_email = user_email;
  },
  getUserGender: function () {
    return user_gender;
  },
  setUserGender: function (user_gender) {
    this.user_gender = user_gender;
  },
  getUserBirth: function () {
    return this.user_birth;
  },
  setUserBirth: function (user_birth) {
    this.user_birth = user_birth;
  },
  getUserStatus: function () {
    return this.user_status;
  },
  setUserStatus: function (user_status) {
    this.user_status = user_status;
  },
  getUserFollowing: function () {
    return this.user_following;
  },
  setUserFollwing: function (user_following) {
    this.user_following = user_following;
  },
  getUserFollower: function () {
    return this.user_follower;
  },
  setUserFollower: function (user_follower) {
    this.user_follower = user_follower;
  },
  getUserVisitList: function () {
    return this.user_visit_list;
  },
  setUserVisitList: function (user_visit_list) {
    this.user_visit_list = user_visit_list;
  },
  getUserNotification: function () {
    return this.user_notification;
  },
  setUserNotification: function (user_notification) {
    this.user_notification = user_notification;
  },
  getUserAddCafeList: function () {
    return this.user_add_cafe_list;
  },
  setUserAddCafeList: function (user_add_cafe_list) {
    this.user_add_cafe_list = user_add_cafe_list;
  },
  getUserReview: function () {
    return this.user_review;
  },
  setUserReview: function (user_review) {
    this.user_review = user_review;
  },
  getUserImg: function () {
    return user_img;
  },
  setUserImg: function (user_img) {
    this.user_img = user_img;
  },
};
