export class CafeDTO {
  constructor() {
    this._cafe_id
    this._cafe_name
    this._cafe_location
    this._cafe_menu
    this._cafe_information
    this._cafe_mood
    this._is_enable_buy_bean
    this._is_enable_bean_choice
    this._is_enable_handdrip
    this._is_checked
    this._user_id_int
  }
  getCafeId() {
    return this._cafe_id;
  }

  setCafeId(cafe_id) {
    this._cafe_id = cafe_id;
  }

  getCafeName() {
    return this._cafe_name;
  }
  setCafeName(cafe_name) {
    this._cafe_name = cafe_name;
  }

  getCafeLocation() {
    return this._cafe_loaction;
  }

  setCafeLocation(cafe_location) {
    this._cafe_location = cafe_location;
  }
  getCafeMenu() {
    return this._cafe_menu;
  }
  setCafeMenu(cafe_menu) {
    this._cafe_menu = cafe_menu;
  }

  getCafeInformation() {
    return this._cafe_information;
  }
  setCafeInformation(cafe_information) {
    this._cafe_information = cafe_information;
  }

  getCafeMood() {
    return this._cafe_mood;
  }
  setCafeMood(cafe_mood) {
    this._cafe_mood = cafe_mood;
  }

  getIsEnableBuyBean() {
    return this._is_enable_buy_bean;
  }
  setIsEnableBuyBean(is_enable_buy_bean) {
    this._is_enable_buy_bean = is_enable_buy_bean;
  }

  getIsEnableBeanChoice() {
    return this._is_enable_bean_choice;
  }
  setIsEnableBeanChoice(is_enable_bean_choice) {
    this._is_enable_bean_choice = is_enable_bean_choice;
  }

  getIsEnableHanddrip() {
    return this._is_enable_handdrip;
  }
  setIsEnableHanddrip(is_enable_handdrip) {
    this._is_enable_handdrip = is_enable_handdrip;
  }

  getIsChecked() {
    return this._is_checked;
  }
  setIsChecked(is_checked) {
    this._is_checked = is_checked;
  }
  getUserIdInt() {
    return this._user_id_int;
  }
  setUserIdInt(user_id_int) {
    this._user_id_int = user_id_int;
  }
}