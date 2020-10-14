export class LikeDTO {
  constructor() {
    this._like_id
    this._push_user
    this._got_like
  }
  getLikeId() {
    return this._like_id;
  }
  setLikeId(like_id) {
    this._like_id = like_id;
  }

  getPushUser() {
    return this._push_user;
  }
  setPushUser(push_user) {
    this._push_user = push_user;
  }

  getGotLike() {
    return this._gotLike;
  }
  setGotLike(got_like) {
    this._got_like = got_like;
  }
}

// Like_ID INT
// Push_User INT
// Got_Like INT