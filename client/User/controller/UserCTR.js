export class UserCTR {
  constructor(service, view) {
    this.service = service;
    this.view = view;
    this.self = this;

    this.view.makeLoginMain(); //for test
    // this.view.makeTest();

    this.view.signin(() => {
      console.log(this.view.saveSigninData());
      this.signin(this.view.saveSigninData());
    });
    this.view.signup(() => {
      this.signup(this.self, this.view.saveSignupData());
    });
  }
  signin = (userData) => {
    console.log("CTR");

    console.log("CTR-this:" + this);
    this.service.signin(userData).then((result) => {
      console.log("then");
      this.view.makeLoginMain();

    });
  };

  signup(scope, userData) {
    scope.service.signup(userData);
  }
}
