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

  adminMenu(callback){
    this.admin_menu.addEventListener("click",callback);
  }

  addCafe(callback){
    console.log("카페추가 버튼")
    this.addcafe_btn.addEventListener("click",callback);
  }
  
  reviseCafe(callback){
    console.log("카페 수정 버튼")
    this.revisecafe_update_btn.addEventListener("click",callback);
  }

  loadCafeList(callback){
    console.log("카페 불러오기 버튼")
    this.revisecafe_load_btn.addEventListener("click",callback);
  }

  // previewCafeImg(callback){
  //   this.thumnail.addEventListener("load",callback);  // 이미지 미리보기?
  // }




  //save input data

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

    console.log(cafeData);
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

    console.log(cafeData);
    return cafeData;
  }


  // make view of admin page 

  makeAddCafePage(){
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let add_cafe_form = admin_view.makeAddCafeForm();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");  
    window.document.body.setAttribute("id", "scrollup");    

    window.document.body.innerHTML = header + add_cafe_form + footer + search_pop;
  }

  makeReviseCafePage(){
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let revise_cafe_form = admin_view.makeReviseCafeForm();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");  
    window.document.body.setAttribute("id", "scrollup");    

    window.document.body.innerHTML = header + revise_cafe_form + footer + search_pop;
  }

}
