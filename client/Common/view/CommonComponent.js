import { CommonView } from "/Users/김청하/Desktop/coffee-front/coffee/client/Common/view/CommonView";

export class CommonComponent {
  constructor() {
    this.signup = document.getElementById("");
    this.signin = document.getElementById("");
    this.cafeDetail = document.getElementById("");
  }

  userSignin(callback) {
    this.signin.addEventListener("click", callback);
  }

  userSignup(callback) {
    this.signup.addEventListener("click", callback);
  }

  getCafeDetail(callback) {
    this.cafeDetail.add("click", callback);
  }
}
