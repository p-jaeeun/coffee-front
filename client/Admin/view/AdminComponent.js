import { AdminView } from "/Users/김청하/Desktop/coffee-front/coffee/client/Admin/view/AdminView";

export class AdminComponent {
  constructor() {
    this.view = new AdminView();

    //버튼
    this.load = document.getElementById("js-cafe-load");
    this.add = document.getElementById("js-add-cafe");
    this.update = document.getElementById("js-cafe-update");
  
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
