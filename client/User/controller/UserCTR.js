export class UserCTR {
  constructor(service, view) {
    this.service = service;
    this.view = view;
    this.self = this;

    this.view.signin(() => {
      this.signin(this.view.saveSigninData());
    });
    this.view.signup(this.signup(this.self, this.view.saveSignupData()));
  }
  signin = (userData) => {
    console.log("CTR");
    console.log(this);
    this.service.signin(userData);
  };

  signup(scope, userData) {
    scope.service.signup(userData);
  }
}
