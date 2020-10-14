export class ReviewDTO {
  constructor() {
    this._review
    this._rate
    this._image
    this._cafe_id
    this._user_id
  }

  getReview() {
    return this._review;
  }
  setReview(review) {
    this._review = review;
  }

  getRate() {
    return this._rate;
  }
  setRate(rate) {
    this._rate = rate;
  }
  getImage() {
    return this._image;
  }
  setImage(image) {
    this._image = image;
  }
  getCafeId() {
    return this._cafe_id;
  }
  setCafeId(cafe_id) {
    this._cafe_id = cafe_id;
  }
  getUserId() {
    return this._user_id;
  }
  setUserId(user_id) {
    this._user_id = user_id;
  }
}

// Review VARCHAR(45)
// Rate VARCHAR(45)
// image VARCHAR(45)
// Cafe_ID INT
// User_ID INT