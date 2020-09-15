import { AdminView } from "../view/AdminView.js";
import {CommonView} from "../../Common/view/CommonView.js"

export class AdminComponent {
  constructor() {
    this.admin_view = new AdminView();
    this.common_view = new CommonView()

    //버튼
    this.signin = document.getElementById("")
  
    //등록, 수정
    this.cafe_name = document.getElementsByClassName("js-add-revise");
    
    //검색
    this.search_keyword = document.getElementsByClassName("js-search-keyword")

    //이미지 추가 --> 테스트 해야함
    
  }
  //리스너 정의

  listenLoad(callback) {
    this.load.addEventListener("click", callback);
  }
  listenAdd(callback) {
    this.add.addEventListener("click", callback);
  }
  listenSearch(callback) {
    this.search.addEventListener("click", callback);
  }
  listenUpdate(callback) {
    this.update.addEventListener("click", callback);
  }
  listenRevisePage(callback) {
    window.addEventListener("load", callback);
  }

  //페이지 처리 정의
  makeReviseCafe(id, mini_img, cafe_name, cafe_img) {
    this.view.makeRevisePage(id, mini_img, cafe_name, cafe_img);
  }

  //input data 처리
  saveSigninData() {
    let userData = new Object();
    userData.admin_id = this.admin_id;
    userData.admin_pw = this.admin_pw;

    return userData;
  }

  saveCafeData() {
    let userData = new Object()
    userData.cafe_name = 
  }
}
