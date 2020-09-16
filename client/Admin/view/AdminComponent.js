import { AdminView } from "./AdminView.js";
import { CommonView } from "../../Common/view/CommonView.js";

export class AdminComponent {
  constructor() {
    this.admin_view = new AdminView();
    this.common_view = new CommonView();
    
    // input
    this.search_input = document.getElementsByClassName("js-search-input");
    this.addcafe_input = document.getElementsByClassName("js-admin-addcafe-input");
    this.revisecafe_input = document.getElementsByClassName("js-admin-js-admin-revisecafe-input");

    // button
    this.addcafe_btn = document.getElementById("js-admin-addcafe-btn");
    this.revisecafe_load_btn = document.getElementById("js-admin-revisecafe-load-btn");
    this.revisecafe_update_btn = document.getElementById("js-admin-revisecafe-btn");
    this.search_btn = document.getElementById("js-search-btn");

    // tag
    this.admin_header = document.getElementsByClassName("js-admin-header-menu");
    this.admin_menu = document. getElementById("js-admin-header-menu");
    this.revisecafe_list = document.getElementsByClassName("js-admin-js-admin-revisecafe-list");
    this.addcafe_img = document.getElementsByClassName("js-admin-addcafe-img");
    this.revisecafe_img = document.getElementsByClassName("js-admin-revisecafe-img");

    // image preview
    // this.thumnail = document.getElementById("js-thumnail");
    // this.upload_cafe = document.getElementById("js-upload");
  }

  //리스너 정의

  headermenu(callback){
    this.admin_header.addEventListener("click",callback);
  }

  adminmenu(callback){
    this.admin_menu.addEventListener("click",callback);
  }

  addcafe(callback){
    this.addcafe_btn.addEventListener("click",callback);
  }

  revisecafe(callback){
    this.revisecafe_update_btn.addEventListener("click",callback);
  }

  loadcafelist(callback){
    this.revisecafe_load_btn.addEventListener("click",callback);
  }

  // previewCafeImg(callback){
  //   this.thumnail.addEventListener("load",callback);  // 이미지 미리보기?
  // }




  //input data 처리
  saveSigninData() {
    let userData = new Object();
    let arr = new Array();
    for(let i=0; i<this.)

    return userData;
  }

  saveCafeData() {
    let cafeData = new Object();
    let arr = new Array();

    for(let i=0; i<this.addcafe_input.length; i++){
      arr.push(this.addcafe_input[i].value);
    }
    cafeData.cafe_name = arr[0];
    cafeData.cafe_menu = arr[1];
    cafeData.cafe_location = arr[2];
    cafeData.cafe_sns = arr[3];
    cafeData.cafe_information = arr[4];
    cafeData.cafe_image = arr[5];
    return cafeData;
  }
  reviseCafeData() {
    let cafeData = new Object();
    let arr = new Array();

    for(let i=0; i<this.revisecafe_input.length; i++){
      arr.push(this.revisecafe_input[i].value);
    }
    cafeData.cafe_name = arr[0];
    cafeData.cafe_menu = arr[1];
    cafeData.cafe_location = arr[2];
    cafeData.cafe_sns = arr[3];
    cafeData.cafe_information = arr[4];
    cafeData.cafe_image = arr[5];
    return cafeData;
  }
}
