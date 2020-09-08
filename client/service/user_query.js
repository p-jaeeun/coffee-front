//  api.js를 호출
import { Ajax } from "../lib/ajax.js";
export function UserQuery() {}

UserQuery.prototype = {
  constructor: UserQuery,

  userLogin: async function (UserDTO) {
    let ajax = new Ajax();
    let result;
    let userData = {};

    userData.user_id = UserDTO.getUserId();
    userData.user_pw = UserDTO.getUserPw();

    try {
      result = await ajax.sendAjaxPost(
        "http://localhost:3000/user/login",
        userData
      );
    } catch (e) {
      console.log("error: " + e);
    }

    console.log("result-query: " + result);

    return result;
  },
};
