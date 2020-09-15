  // main-before-login : start_header(common) + start_main(common) + account_pop(common)
  // cafeInfo : user_header OR admin_header + search_pop(common) + cafeinfo(common) + footer(common)

export class CommonView {
  constructor() {}

  makeStartHeader(){
    let start_header =`
    <div class="page-loading">
    <img src="images/loader.gif" alt="" />
    <span>Skip Loader</span>
    </div>

    <div class="theme-layout">  
      <div class="responsiveheader">
      <div class="rheader">
   
        <div class="logo">
          <a href="#" title=""
            ><img src="images/hiddenc_logo.png" alt=""
          /></a>
        </div>
        <div class="extras extra_top">
          <span class="accountbtn account_text">Start</i></span>
        </div>
      </div>
      
      </div>
    <!-- Responsive header -->

    <header class="header_color">
      <div class="container fluid">
        <div class="logo">
          <a href="#" title=""
            ><img src="images/hiddenc_logo.png" alt=""
          /></a>
        </div>
        <div class="extras extra_top">
          <span class="accountbtn account_text">Start</span>
        </div>
      </div>
    </header>`;
    return start_header;
  }

  makeStartMain(){
    let start_Main= `
    <section>
        <div class="block no-padding main_img" >
          <div class="layer blackish">
            <div
              data-velocity="-.1"
              style="
                background: url(images/cafe_main.jpg) repeat scroll 50% 422.28px
                  transparent;
              "
              class="no-parallax parallax scrolly-invisible main_img"
            ></div>
            
            <!-- PARALLAX BACKGROUND IMAGE -->
            <div class="container">
              <div class="row justify-content-center main_section">
                <div class="col-lg-8 ">
                  <div class="listingsf" style="margin-top: 50%">
                    <h3>Explore hidden cafe</h3>
                    <p>
                      Let's uncover the best places to eat and drink nearest to
                      you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
    return start_Main;
  }

  makeAccountPopup() {
    let account_pop = `
    <div class="popupsec">
    <div class="popup">
      <div class="accounttabs">
        <span class="closepopup"><i>+</i></span>
        <ul class="ctabs group">
          <li><a href="#/one" class="active">Sign In</a></li>
          <li><a href="#/two">Sign Up</a></li>
        </ul>
        <div id="content">
          <div class="accountform" id="one">
            <div class="loginform" >
              <div class="accountformfield">
                <label>ID</label>
                <input type="text" class="js-signin-input" placeholder="Creative Layers" />
              </div>
              <div class="accountformfield">
                <label>Password</label>
                <input type="password" class="js-signin-input" />
              </div>
              <p class="c-label">
                <input name="cb" id="cb1" type="checkbox" /><label for="cb1"
                  >Remember me?</label
                >
              
              <a href="#" title="">Lost your password?</a></p>
              <button type="submit" id="js-signin-btn">Sign In</button>
            </div>
            <div class="extraconnect">
              <span>Or Connect With Social Networks</span>
              <div class="social">
                <a class="facebook" href="#" title=""
                  ><i class="fa fa-facebook"></i
                ></a>
                <a class="twitter" href="#" title=""
                  ><i class="fa fa-twitter"></i
                ></a>
                <a class="googleplus" href="#" title=""
                  ><i class="fa fa-google"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="accountform" id="two" style="display: none">
            <div class="loginform">
              <div class="accountformfield">
                <label>ID</label>
                <input type="text" class="js-signup-input" placeholder="maxpower123" />
              </div>
              <div class="accountformfield">
                <label>Password</label>
                <input type="password" class="js-signup-input" />
              </div>
              <div class="accountformfield">
                <label>Name</label>
                <input type="text" class="js-signup-input" placeholder="John Doe" />
              </div>
              <div class="accountformfield">
                <label>Email</label>
                <input type="email" class="js-signup-input" placeholder="example@example.com" />
              </div>
              <div class="accountformfield">
                <label>BirthDate</label>
                <input
                  type="text" class="js-signup-input"
                  placeholder="ex) 90년도 12월 12일생 -> 19901212"
                />
              </div>
              <div class="accountformfield">
                <label>Gender</label>
                <select class="cdropshere js-signup-input"">
                  <option>Select</option>
                  <option value=1>Male</option>
                  <option value=0>Female</option>
                </select>
              </div>
              <div class="terms">
                By creating an account you agree to our
                <a href="#" title="">Terms and Conditions</a> and our
                <a href="#" title="">Privacy Policy</a>
              </div>
              <button type="submit" id="js-signup-btn">Sign Up</button>
            </div>
            <div class="extraconnect">
              <span>Or Connect With Social Networks</span>
              <div class="social">
                <a class="facebook" href="#" title=""
                  ><i class="fa fa-facebook"></i
                ></a>
                <a class="twitter" href="#" title=""
                  ><i class="fa fa-twitter"></i
                ></a>
                <a class="googleplus" href="#" title=""
                  ><i class="fa fa-google"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    return account_pop;
  }
  
  makeCafeInfo(user_id, notification, cafe_img_main, cafe_name, cafe_rate, cafe_rate_count, cafe_location, cafe_information, cafe_menu, cafe_mail, cafe_img_gallery, review_user_id,profile_user_id,write_date,comment,cafe_like){
    let cafeinfo =`
    <div class="page-loading">
      <img src="images/loader.gif" alt="" />
      <span>Skip Loader</span>
    </div>

    <div class="theme-layout">
      <div class="responsiveheader">
        <div class="rheader">
          <span><img src="images/ricon.png" alt="" /></span>
          <div class="logo">
            <a href="#" title=""
              ><img src="/images/hiddenc_logo.png" alt=""
            /></a>
          </div>
        </div>
        <div class="rnaver">
          <span class="closeresmenu"><i>x</i>Close</span>
          <ul>
            <li>
              <a href="#" title="">Home</a>
            </li>
            <li class="accountbtn">
              <a href="#" title="">Search</a>
            </li>
            <li>
              <a href="#" title="">User</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Responsive header -->

      <header class="s4 dark">
        <div class="container fluid">
          <div class="logo">
            <a href="#" title=""
              ><img src="/images/hiddenc_logo.png" alt=""
            /></a>
          </div>
          <div class="userdropsec">
            <span
              ><img src="http://placehold.it/50x50" alt="" /><span
                class="header_user_id"
                >${user_id}</span
              ></span
            >
          </div>
          <a href="#" title="" class="bellicon"
            ><i class="fa fa-bell-o"></i><strong>${notification}</strong></a
          >
          <nav>
            <ul>
              <li>
                <a href="#" title="">Home</a>
              </li>
              <li class="accountbtn" style="float: left">
                <a href="#" title="">Search</a>
              </li>
              <li>
                <a href="#" title="">User</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <!-- 개인 프로필이 포함된 헤더 -->
      <div class="section_down">

          <div class="block no-padding">
            <div class="container fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="sl-slider" id="makeslider">
                    <div class="slg-box">
                      <img src="${cafe_img_main}" alt="" />
                    </div>
                    <div class="slg-box">
                      <img src="${cafe_img_main}" alt="" />
                    </div>
                    <div class="slg-box">
                      <img src="${cafe_img_main}" alt="" />
                    </div>
                    <div class="slg-box">
                      <img src="${cafe_img_main}" alt="" />
                    </div>
                    <div class="slg-box">
                      <img src="${cafe_img_main}" alt="" />
                    </div>
                    <div class="slg-box">
                      <img src="${cafe_img_main}" alt="" />
                    </div>
                    <div class="slg-box">
                      <img src="${cafe_img_main}" alt="" />
                    </div>
                    <div class="slg-box">
                      <img src="${cafe_img_main}" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    

        <section>
          <div class="block no-padding gray">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="slhead">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="sltitle">
                          <h1>${cafe_name}</h1>
                          <ul class="listmetas">
                            <li>
                              <span class="rated">${cafe_rate}</span
                              >${cafe_rate_count}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="slbtnsspans">
                          <span
                            ><i class="flaticon-pin"></i> ${cafe_location}</span
                          >

                          <div class="slbtns">
                            <div class="sharelisting">
                              <a href="#" title=""
                                ><i class="flaticon-share"></i>Share</a
                              >
                              <div class="sharebtns">
                                <a href="#" title=""
                                  ><i class="fa fa-facebook"></i
                                ></a>
                                <a href="#" title=""
                                  ><i class="fa fa-twitter"></i
                                ></a>
                                <a href="#" title=""
                                  ><i class="fa fa-instagram"></i
                                ></a>
                                <a href="#" title=""
                                  ><i class="fa fa-pinterest"></i
                                ></a>
                                <a href="#" title=""
                                  ><i class="fa fa-dribbble"></i
                                ></a>
                                <a href="#" title=""
                                  ><i class="fa fa-google"></i
                                ></a>
                              </div>
                            </div>
                            <a href="#" title=""
                              ><i class="flaticon-heart"></i>Bookmark</a
                            >
                            <a href="#" title=""
                              ><i class="flaticon-note"></i>Add review</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="block">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 column">
                  <div class="bbox">
                    <h3>Description</h3>
                    <div class="ldesc">
                      <p>${cafe_information}</p>
                    </div>
                  </div>
                  <div class="bbox">
                    <h3>Menu</h3>
                    <div class="ldesc">
                      <p>${cafe_menu}</p>
                    </div>
                  </div>

                  <div class="bbox">
                    <h3>Gallery</h3>
                    <ul class="gallerylistin">
                      <li>
                        <img
                          src="${cafe_img_gallery}"
                          alt=""
                          class="small_img"
                        />
                      </li>
                      <li>
                        <img
                          src="${cafe_img_gallery}"
                          alt=""
                          class="small_img"
                        />
                      </li>
                      <li>
                        <img
                          src="${cafe_img_gallery}"
                          alt=""
                          class="small_img"
                        />
                      </li>
                      <li>
                        <img
                          src="${cafe_img_gallery}"
                          alt=""
                          class="small_img"
                        />
                      </li>
                      <li>
                        <img
                          src="${cafe_img_gallery}"
                          alt=""
                          class="small_img"
                        />
                      </li>
                      <li>
                        <img
                          src="${cafe_img_gallery}"
                          alt=""
                          class="small_img"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="bbox">
                    <h3>${cafe_rate_count} Reviews for ${cafe_name}</h3>
                    <div class="reviewssec js-cafe-review-list">
                      <div class="reviewthumb">
                        <img src="${profile_user_id}" alt="" />
                      </div>
                      <div class="reviewinfo">
                        <h3>${review_user_id}</h3>
                        <span>${write_date}</span>
                        <ul class="listmetas justrate">
                          <li>
                            <span class="rated">${cafe_rate}</span
                            >${cafe_rate_count}
                          </li>
                        </ul>
                        <p>${comment}</p>
                        <div class="wasreview">
                          <span>Was This Review ...?</span>
                          <div class="wasreviewbtn">
                            <a href="#" title="" class="c3"
                              ><i class="flaticon-heart"></i>Like ${cafe_like}</a
                            >
                          </div>
                        </div>
                        <div class="reviewaction">
                          <a href="#" title=""
                            ><i class="flaticon-back"></i> Reply</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="listingcomment">
                    <div class="leavecomment">
                      <h3>Rate us and Write a Review</h3>
                      <div class="upimg" style="width: 60%">
                        <span>Upload images</span>
                        <a href="#" title=""
                          ><img src="images/cloud.png" alt=""
                        /></a>
                        <input
                          type="file"
                          class="js-cafe-review-input"
                          accept="img/*"
                          onChange="uploadImgPreview()"
                          id="js-upload"
                          multiple
                        />
                        <div id="js-thumnail"></div>
                      </div>
                      <div class="urrating rate_input">
                        <input type="text" class="js-cafe-review-input" placeholder="점수를 입력하세요." />
                      </div>

                      <input type="email" class="js-cafe-review-input" placeholder="your@mail.com"  />
                      <input type="text" class="js-cafe-review-input" placeholder="Title" />
                      <textarea class="js-cafe-review-input" placeholder="Review"></textarea>

                      <div class="fieldbtn">
                        <button type="submit" id="js-cafe-review-btn">등록하기</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 column">
                  <div class="blocation">
                    <h3>Location <a href="#" title="">Get Direction</a></h3>
                    <div class="contact-map">
                      <div id="map js-map-mini" style="width: 350px; height: 400px"></div>
                    </div>
                    <span>${cafe_location}</span>
                    <span>${cafe_mail}</span>

                    <div class="wsocial">
                      <a href="#" title=""><i class="fa fa-facebook"></i></a>
                      <a href="#" title=""><i class="fa fa-twitter"></i></a>
                      <a href="#" title=""><i class="fa fa-linkedin"></i></a>
                      <a href="#" title=""><i class="fa fa-pinterest"></i></a>
                      <a href="#" title=""><i class="fa fa-google"></i></a>
                      <a href="#" title=""><i class="fa fa-dribbble"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>`;
    return cafeinfo;
  }

  makeFooter() {
    let footer = `<footer>
    <div class="block">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="footersec">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Customer Center</a></li>
              </ul>
              <span
                >Seoul Geumcheon-gu, Gasan-dong, Gasan digital 1-ro</span
              >
              <span>+82 02-123-4567</span>
              <span>HiddenC@gmail.com</span>
              <div class="social">
                <a href="#" title=""><i class="fa fa-facebook"></i></a>
                <a href="#" title=""><i class="fa fa-twitter"></i></a>
                <a href="#" title=""><i class="fa fa-instagram"></i></a>
                <a href="#" title=""><i class="fa fa-google"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomline">
      <a href="#scrollup" class="scrollup" title=""
        ><i class="fa fa-angle-up"></i
      ></a>
      <span>© 2020 HiddenC All rights reserved.</span>
    </div>
  </footer>`;
    return footer;
  }

  
  makeSearchPopup() {
    let search_pop = `
    <div class="popupsec">
        <div class="popup">
          <div class="accounttabs search_pop_size">
            <span class="closepopup"><i>+</i></span>
            <div id="content">
              <div class="accountform pop_form" id="one">
                <div class="pop_title">
                  <h5 class="search_title">어떤 카페를 찾으세요?</h5>
                </div>
                <div class="search_bar">
                  <input type="text" class="js-search-input" placeholder="검색어를 입력하세요" />
                  <div class="fieldbtn">
                    <button type="search" class="search_button" id="js-search-btn">SEARCH</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    return search_pop;
  }

}
