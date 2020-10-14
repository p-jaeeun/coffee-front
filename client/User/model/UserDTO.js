export class UserDTO {
  constructor() {
    this._user_pk
    this._user_id
    this._user_pw
    this._user_email
    this._user_gender
    this._user_birth
    this._user_like
    this._user_caffeine
    this._count_expose_main
    this._count_accepted_cafe
    this._is_blocked_user
  }

  getUserPk() {
    return this._user_pk;
  }

  setUserPk(user_pk) {
    this._user_pk = user_pk;
  }

  getUserId() {
    return this._user_id;
  }
  setUserId(user_id) {
    this._user_id = user_id;
  }

  getUserPw() {
    return this._user_pw;
  }
  setUserPw(user_pw) {
    this._user_pw = user_pw;
  }

  getUserEmail() {
    return this._user_email;
  }
  setUserEmail(user_email) {
    this._user_eamail = user_email;
  }

  getUserGender() {
    return this._user_gender;
  }
  setUserGender(user_gender) {
    this._user_gender = user_gender;
  }

  getUserBirth() {
    return this._user_birth;
  }
  setUserBirth(user_birth) {
    this._user_birth = user_birth;
  }
  getUserLike() {
    return this._user_like;
  }
  setUserLike(user_like) {
    this._user_like = user_like;
  }

  getUserCaffeine() {
    return this._user_caffeine;
  }

  setUserCaffeine(user_caffeine) {
    this._user_caffeine = user_caffeine;
  }

  getCountExposeMain() {
    return this._count_expose_main;
  }
  setCountExposeMain(count_expose_main) {
    this._count_expose_main = count_expose_main;
  }

  getCountAcceptedCafe() {
    return this._count_accepted_cafe;
  }
  setCountAcceptedCafe(count_accepted_cafe) {
    this._count_accepted_cafe = count_accepted_cafe;
  }

  getIsBlockedUser() {
    return this._is_blocked_user;
  }
  setIsBlockedUser(is_blocked_user) {
    this._is_blocked_user = is_blocked_user;
  }
}

// User_ID(PK) INT
// User_ID VARCHAR(15)
// User_PW VARCHAR(15)
// User_Email VARCHAR(20)
// User_Gender TINYINT
// User_Birth VARCHAR(10)
// User_Like INT
// User_Caffeine INT
// Count_Expose_Main INT
// Count_Accepted_Cafe INT
// Is_Blocked_User TINYINT