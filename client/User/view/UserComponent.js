import { UserView } from "/Users/김청하/Desktop/coffee-front/coffee/client/User/view/UserView";

export class UserComponent {
  constructor() {
    this.header_btn = document.getElementById("");
    this.input = document.getElementsByClassName("input"); //각 인풋마다 클래스를 줄지 정해야함

    this.add = document.getElementById("");
  }

  addCafe(callback) {
    this.add.addEventListener("click", callback);
  }
}
