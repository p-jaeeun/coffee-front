// admin - addcafe : admin_header + searchpop(common) + addcafe + footer(common) 
// admin - revisecafe : admin_header + searchpop(common) + revisecafe + footer(common)

export class AdminView {
  constructor() {}
  makeAdminHeader(admin_id, profile_admin_id,notification) {
    let admin_header = `
    <div class="page-loading">
      <img src="images/loader.gif" alt="" />
      <span>Skip Loader</span>
    </div>

    <div class="theme-layout">
    <div class="responsiveheader js-admin-header-menu">
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
        <li class="menu-item-has-children">
          <a href="#" title="">Admin</a>
          <ul id="js-admin-header-menu">
            <li>Add Cafe</li>
            <li>Revise Cafe</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <!-- Responsive header -->

  <header class="s4 dark js-admin-header-menu">
    <div class="container fluid">
      <div class="logo">
        <a href="#" title=""
          ><img src="/images/hiddenc_logo.png" alt=""
        /></a>
      </div>
      <div class="userdropsec">
        <span
          ><img src="${profile_admin_id}" alt="" /><span class=""
            >${admin_id}</span
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
          <li class="menu-item-has-children">
            <a href="#" title="">Admin</a>
            <ul id="js-admin-header-menu">
              <li>Add Cafe</li>
              <li>Revise Cafe</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>`;
    return admin_header;
  }

  makeReviseCafe() {
    let revisecafe = `
    <section>
        <div class="block gray">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <!-- PBox -->
                <div class="pbox">
                  <div class="addlistingform">
                    <div class="add_cafe_title">카페 수정하기</div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="saved_cafe_list">
                          <h5 id="cafe_list_title">
                            카페 리스트:
                            <select name="cafe_list" class="js-admin-revisecafe-list" id="saved_cafe_list">
                              <option value="0">select</option>
                            </select>
                          </h5>
                        </div>
                        <div class="fieldbtn">
                          <button type="sumbit" id="js-admin-revisecafe-btn">불러오기</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pbox">
                  <div class="addlistingform">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="fieldformy">
                          <span>카페 이름 *</span>
                          <input type="text" class="js-admin-revisecafe-input"/>
                        </div>
                        <div class="fieldformy">
                          <span>카페 메뉴 </span>
                          <input type="text" class="js-admin-revisecafe-input" placeholder="" />
                        </div>
                        <div class="fieldformy">
                          <span>카테고리</span>
                          <select class="cdropshere">
                            <option>select option</option>
                            <option>option1</option>
                            <option>option2</option>
                            <option>option3</option>
                            <option>option4</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="fieldformy">
                          <span>카페 주소 *</span>
                          <input type="text" class="js-admin-revisecafe-input" placeholder="" />
                        </div>
                        <div class="fieldformy">
                          <span>카페 SNS </span>
                          <input type="text" class="js-admin-revisecafe-input" placeholder="" />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="fieldformy">
                          <span>카페 기타 정보 사항</span>
                          <textarea placeholder=""></textarea>
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="fieldformy">
                          <span>카페 기타 정보 사항</span>
                          <textarea
                            class="js-admin-revisecafe-input"
                            placeholder="예) 여기는 라떼맛집이에요! 핸드드립 메뉴도 있어요"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <a title="" class="uploadfile">
                          <img src="images/cloud.png" alt="" />
                          <span>이미지를 업로드 하려면 클릭해주세요.</span>
                          <input
                            type="file"
                            class="js-admin-revisecafe-img"
                            accept="img/*"
                            onChange="uploadImgPreview()"
                            id="js-upload"
                          />
                        </a>
                        <div class="pbox">
                          <h3>Gallery</h3>
                          <div class="slistinggallery">
                            <div class="sgallery img_preview">
                              <div id="js-thumnail" style="display: flex"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="fieldbtn">
                      <button type="submit" class="js-submit" id="js-admin-revisecafe-btn">등록하기</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
    return revisecafe;
  }

  makeAddCafe() {
    let addcafe = `
    <div class="block gray">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <!-- PBox -->
                <div class="pbox">
                  <div class="addlistingform">
                    <div class="add_cafe_title">카페 추가하기</div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="fieldformy">
                          <span>카페 이름 *</span>
                          <input type="text" class="js-admin-addcafe-input"/>
                        </div>
                        <div class="fieldformy">
                          <span
                            >카페 메뉴</span
                          >
                          <input
                            type="text" 
                            class="js-admin-addcafe-input" 
                            placeholder="ex) 아메리카노 4000 , 라떼 4500"
                          />
                        </div>
                        <div class="fieldformy">
                          <span>카테고리</span>
                          <select class="cdropshere">
                            <option>select option</option>
                            <option>option1</option>
                            <option>option2</option>
                            <option>option3</option>
                            <option>option4</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="fieldformy">
                          <span>카페 주소 *</span>
                          <input
                            type="text"
                            class="js-admin-addcafe-input" 
                            placeholder="ex) Seoul, Jongno-gu, Gwancheol-dong, 5-8 카페 뎀셀브즈"
                          />
                        </div>
                        <div class="fieldformy">
                          <span>카페 SNS </span>
                          <input
                          type="text"
                          class="js-admin-addcafe-input"
                          placeholder="https://www.instagram.com/starbucks"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="fieldformy">
                          <span>카페 기타 정보 사항</span>
                          <textarea
                            class="js-admin-addcafe-input"
                            placeholder="예) 여기는 라떼맛집이에요! 핸드드립 메뉴도 있어요"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <a title="" class="uploadfile">
                          <img src="images/cloud.png" alt="" />
                          <span>이미지를 업로드 하려면 클릭해주세요.</span>
                          <input
                            type="file"
                            class="js-admin-addcafe-img"
                            accept="img/*"
                            onChange="uploadImgPreview()"
                            id="js-upload"
                          />
                        </a>
                        <div class="pbox">
                          <h3>Gallery</h3>
                          <div class="slistinggallery">
                            <div class="sgallery img_preview">
                              <div id="js-thumnail" style="display: flex"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="fieldbtn">
                      <button type="search" class="js-submit" id="js-admin-addcafe-btn">등록하기</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    return addcafe;
  }
}
