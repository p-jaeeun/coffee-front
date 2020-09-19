export class UserCTR {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    this.view.signin(() => {
      this.signin(this.view.saveSigninData());
      console.log(this.view.saveSigninData());
    });
    this.view.signup(() => {
      this.signup(this.view.saveSignupData());
    });
  }

  signin = async (userData) => {
    console.log("CTR-this:" + this);
    let result;

    try {
      result = await this.service.signin(userData);
    } catch (e) {
      console.log("CTR-error:" + e);
    }
    if (result !== undefined || result !== "undefined") {
      this.view.makeLoginMain();
      console.log("컨트롤러-서비스 결과값:" + result);
    } else {
      console.log("CTR-return-error:" + result);
      return;
    }
  };

  signup = async (userData) => {
    let result;

    try {
      result = await this.service.signup(userData);
    } catch (e) {
      console.log("CTR-error:" + e);
    }
    if (result !== undefined || result !== "undefined") {
      this.view.makeDashboard();
      console.log("컨트롤러-서비스 결과값:" + result);
    } else {
      console.log("CTR-return-error:" + result);
      return;
    }
  };
}
