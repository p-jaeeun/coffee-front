// 데이터 처리하는 서비스
import { UserQuery } from "../service/user_query.js";
import { UserDTO } from "../model/UserDTO.js";

export function UserService() {}

UserService.prototype = {
  constructor: UserService,
  userLogin: async function (userData) {
    const query = new UserQuery();
    const dto = new UserDTO();
    let { user_id, user_pw } = userData;
    let result;

    dto.setUserId(user_id);
    dto.setUserPw(user_pw);

    try {
      result = await query.userLogin(dto);
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  },
};
