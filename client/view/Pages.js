function Pages() {}

Pages.prototype = {
  constructor: Pages,
  adminLoginPage: function () {
    let form = `
        <div class="adminformfield">
            <label>ID: </label>
            <input type="text" name="admin_id"  placeholder="아이디를 입력해주세요." id="admin-id/>
        </div>
        <div class="adminformfield">
            <label>PW: </label>
            <input type="password" name="admin_pw"  placeholder="비밀번호를 입력해주세요." id="admin-pw"/>
        </div>
        <div>
        <button type="submit" name="admin_loginbtn" id="submit">Login</button>
        </div>
    `;
    return form;
  },
  makeInput: function () {
    let input = `<label>Name</label>
	<input name="name" type="text" id="name" />`;
    return input;
  }, //test
  makeSubmit: function () {
    let btn = `<button  id="submit" type="submit">Submit Message</button>`;
    return btn;
  }, //test
  makeMainLogin: function () {
    let list = `
	  <div class="page-loading">
	  <img src="images/loader.gif" alt="" />
	  <span>Skip Loader</span>
  </div>
  
  <div class="theme-layout">
	  
	  <div class="responsiveheader">
		  <div class="rheader">
			  <span><img src="images/ricon.png" alt="" /></span>
			  <div class="logo">
				  <a href="#" title=""><img src="http://placehold.it/164x37" alt="" /></a>
			  </div>
			  <div class="extras">
				  <span class="accountbtn"><i class="flaticon-avatar"></i></span>
			  </div>
		  </div>
		  <div class="rnaver">
			  <span class="closeresmenu"><i>x</i>Close</span>
			  <div class="logo"><a href="#" title=""><img src="http://placehold.it/175x40" alt="" /></a></div>
			  <div class="extras">
				  <a href="add-listing.html" title=""><img src="images/icon1.png" alt="" /> Add Cafe</a>
			  </div>
			  <ul>
			  <li>
				  <a href="#" title="">Home</a>
			  </li>
			  <li >
				  <a href="#" title="">Search</a>
			  </li>
			  <li >
				  <a href="#" title="">User</a>
			  </li>
		  </ul>
		  </div>
	  </div><!-- Responsive header -->
	  
	  <header class="s4 dark">
		  <div class="container fluid">
			  <div class="logo">
				  <a href="#" title=""><img src="http://placehold.it/164x37" alt="" /></a>
			  </div>
			  <div class="extras">
				  <a href="add-listing.html" title=""><img src="images/icon1.png" alt="" /> Add Cafe</a>
				  <span class="accountbtn"><i class="flaticon-avatar"></i></span>
			  </div>
			  <nav>
			  <ul>
			  <li>
				  <a href="#" title="">Home</a>
			  </li>
			  <li >
				  <a href="#" title="">Search</a>
			  </li>
			  <li >
				  <a href="#" title="">User</a>
			  </li>
		  </ul>
			  </nav>
		  </div>
	  </header>
	  <section>
	  <div class="block less-bottom">
		  <div class="container fluid">
			  <div class="row">
				  <div class="col-lg-12">
					  <div class="heading">
						  <h2>Happening Cities</h2>
						  <span>Cities you must explore this summer</span>
					  </div><!-- Heading -->
					  <ul class="citieslists">
						  <li>
							  <div class="cities">
								  <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
								  <div class="cities-title"><h3><a href="#" title="">Hong Kong</a></h3><span>7 listings</span></div>
							  </div><!-- Cities -->
							  <div class="cities">
								  <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
								  <div class="cities-title"><h3><a href="#" title="">China</a></h3><span>7 listings</span></div>
							  </div><!-- Cities -->
							  <div class="cities">
								  <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
								  <div class="cities-title"><h3><a href="#" title="">Malaysia</a></h3><span>7 listings</span></div>
							  </div><!-- Cities -->
							  <div class="cities">
								  <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
								  <div class="cities-title"><h3><a href="#" title="">Singapur</a></h3><span>7 listings</span></div>
							  </div><!-- Cities -->
						  </li>
						  <li>
							  <div class="cities">
								  <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
								  <div class="cities-title"><h3><a href="#" title="">Pakistan</a></h3><span>7 listings</span></div>
							  </div><!-- Cities -->
							  <div class="cities">
								  <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
								  <div class="cities-title"><h3><a href="#" title="">Turkey</a></h3><span>7 listings</span></div>
							  </div><!-- Cities -->
							  <div class="cities">
								  <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
								  <div class="cities-title"><h3><a href="#" title="">Japan</a></h3><span>7 listings</span></div>
							  </div><!-- Cities -->
							  <div class="cities">
								  <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
								  <div class="cities-title"><h3><a href="#" title="">Australia</a></h3><span>7 listings</span></div>
							  </div><!-- Cities -->
						  </li>
						  <li>
							  <div class="cities">
								  <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
								  <div class="cities-title"><h3><a href="#" title="">Pakistan</a></h3><span>7 listings</span></div>
							  </div><!-- Cities -->
							  <div class="cities">
								  <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
								  <div class="cities-title"><h3><a href="#" title="">Turkey</a></h3><span>7 listings</span></div>
							  </div><!-- Cities -->
							  <div class="cities">
								  <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
								  <div class="cities-title"><h3><a href="#" title="">Japan</a></h3><span>7 listings</span></div>
							  </div><!-- Cities -->
							  <div class="cities">
								  <a href="#" title=""><img src="http://placehold.it/292x430" alt="" /></a>
								  <div class="cities-title"><h3><a href="#" title="">Australia</a></h3><span>7 listings</span></div>
							  </div><!-- Cities -->
						  </li>
					  </ul>
				  </div>
			  </div>
		  </div>
	  </div>
  </section>
	
	  <section>
	  <div class="block">
		  <div class="container">
			  <div class="row">
				  <div class="col-lg-12">
					  <div class="heading">
						  <h2>Most Visited Places</h2>
						  <span>Explore the greates places in the city. You won’t be disappointed.</span>
					  </div><!-- Heading -->
					  <div class="carouselplaces">
						  <ul id="carouselsec">
							  <li>	
								  <div class="places">
									  <div class="placethumb">
										  <img src="http://placehold.it/360x220" alt="" />
										  <div class="placeoptions">
											  <span class="pull-left"> <i class="flaticon-eye"></i> Preview </span>
											  <span class="pull-right"> <i class="flaticon-heart"></i> Save </span>
										  </div>
									  </div>
									  <div class="placeinfos">
										  <h3><a href="#" title="">Hills Restaurant</a></h3>
										  <span>Delicious, luxury food for you</span>
										  <ul class="listmetas">
											  <li><span class="rated">3.5</span>3 Ratings</li>
											  <li><a href="#" title=""><i class="flaticon-chef"></i> Restaurant</a></li>
											  <li>Open</li>
										  </ul>
									  </div>
									  <div class="placedetails">
										  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
										  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
									  </div>
								  </div><!-- Places -->
							  </li>
							  <li>	
								  <div class="places">
									  <div class="placethumb">
										  <img src="http://placehold.it/360x220" alt="" />
										  <div class="placeoptions">
											  <span class="pull-left"> <i class="flaticon-eye"></i> Preview </span>
											  <span class="pull-right"> <i class="flaticon-heart"></i> Save </span>
										  </div>
									  </div>
									  <div class="placeinfos">
										  <h3><a href="#" title="">Urban Hotels</a></h3>
										  <span>Delicious, luxury food for you</span>
										  <ul class="listmetas">
											  <li><span class="rated">3.5</span>3 Ratings</li>
											  <li><a href="#" title=""><i class="flaticon-chef"></i> Restaurant</a></li>
											  <li>Open</li>
										  </ul>
									  </div>
									  <div class="placedetails">
										  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
										  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
									  </div>
								  </div><!-- Places -->
							  </li>
							  <li>	
								  <div class="places">
									  <div class="placethumb">
										  <img src="http://placehold.it/360x220" alt="" />
										  <div class="placeoptions">
											  <span class="pull-left"> <i class="flaticon-eye"></i> Preview </span>
											  <span class="pull-right"> <i class="flaticon-heart"></i> Save </span>
										  </div>
									  </div>
									  <div class="placeinfos">
										  <h3><a href="#" title="">Liberty Club</a></h3>
										  <span>Delicious, luxury food for you</span>
										  <ul class="listmetas">
											  <li><span class="rated">3.5</span>3 Ratings</li>
											  <li><a href="#" title=""><i class="flaticon-chef"></i> Restaurant</a></li>
											  <li>Open</li>
										  </ul>
									  </div>
									  <div class="placedetails">
										  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
										  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
									  </div>
								  </div><!-- Places -->
							  </li>	
							  <li>
								  <div class="places">
									  <div class="placethumb">
										  <img src="http://placehold.it/360x220" alt="" />
										  <div class="placeoptions">
											  <span class="pull-left"> <i class="flaticon-eye"></i> Preview </span>
											  <span class="pull-right"> <i class="flaticon-heart"></i> Save </span>
										  </div>
									  </div>
									  <div class="placeinfos">
										  <h3><a href="#" title="">Blansa Restaurant</a></h3>
										  <span>Delicious, luxury food for you</span>
										  <ul class="listmetas">
											  <li><span class="rated">3.5</span>3 Ratings</li>
											  <li><a href="#" title=""><i class="flaticon-chef"></i> Restaurant</a></li>
											  <li>Open</li>
										  </ul>
									  </div>
									  <div class="placedetails">
										  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
										  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
									  </div>
								  </div><!-- Places -->
							  </li>	
							  <li>
								  <div class="places">
									  <div class="placethumb">
										  <img src="http://placehold.it/360x220" alt="" />
										  <div class="placeoptions">
											  <span class="pull-left"> <i class="flaticon-eye"></i> Preview </span>
											  <span class="pull-right"> <i class="flaticon-heart"></i> Save </span>
										  </div>
									  </div>
									  <div class="placeinfos">
										  <h3><a href="#" title="">Liberty Club</a></h3>
										  <span>Delicious, luxury food for you</span>
										  <ul class="listmetas">
											  <li><span class="rated">3.5</span>3 Ratings</li>
											  <li><a href="#" title=""><i class="flaticon-chef"></i> Restaurant</a></li>
											  <li>Open</li>
										  </ul>
									  </div>
									  <div class="placedetails">
										  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
										  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
									  </div>
								  </div><!-- Places -->
							  </li>
							  <li>
								  <div class="places">
									  <div class="placethumb">
										  <img src="http://placehold.it/360x220" alt="" />
										  <div class="placeoptions">
											  <span class="pull-left"> <i class="flaticon-eye"></i> Preview </span>
											  <span class="pull-right"> <i class="flaticon-heart"></i> Save </span>
										  </div>
									  </div>
									  <div class="placeinfos">
										  <h3><a href="#" title="">Liberty Club</a></h3>
										  <span>Delicious, luxury food for you</span>
										  <ul class="listmetas">
											  <li><span class="rated">3.5</span>3 Ratings</li>
											  <li><a href="#" title=""><i class="flaticon-chef"></i> Restaurant</a></li>
											  <li>Open</li>
										  </ul>
									  </div>
									  <div class="placedetails">
										  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
										  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
									  </div>
								  </div><!-- Places -->
							  </li>
						  </ul>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  </section>

  <section>
	  <div class="block no-padding">
		  <div class="container fluid">
			  <div class="row">
				  <div class="col-lg-12"><div class="singleline"></div></div>
			  </div>
		  </div>
	  </div>
  </section>

  <footer>
  <div class="block">
	  <div class="container">
		  <div class="row">
			  <div class="col-lg-12">
				  <div class="footersec">
					  <div class="flogo"><a href="#" title=""><img src="http://placehold.it/175x40" alt="" /></a></div>
					  <ul>
						  <li><a href="#" >Home</a></li>
						  <li><a href="#" >Partners</a></li>
						  <li><a href="#" >Contact</a></li>
						  <li><a href="#" >Terms</a></li>
						  <li><a href="#">Customer Center</a></li>
					  </ul>
					  <span>Seoul Geumcheon-gu, Gasan-dong, Gasan digital 1-ro</span>
					  <span>+82 02-123-4567</span>
					  <span>hiddenC@gmail.com</span>
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
	  <a href="#scrollup" class="scrollup" title=""><i class="fa fa-angle-up"></i></a>
	  <span>© 2020 hiddenC All rights reserved. Design by Creative Layers</span>
  </div>
</footer>
  
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
                        <form class="loginform">
                            <div class="accountformfield">
                                <label>ID</label>
                                <input type="text" placeholder="Creative Layers" />
                            </div>
                            <div class="accountformfield">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <p class="c-label">
                                <input name="cb" id="cb1" type="checkbox"><label for="cb1">Remember me?</label>
                            </p>
                            <a href="#" title="">Lost your password</a>
                            <button type="submit">Sign In</button>
                        </form>
                        <div class="extraconnect">
                            <span>Or Connect With Social Networks</span>
                            <div class="social">
                                <a class="facebook" href="#" title=""><i class="fa fa-facebook"></i></a>
                                <a class="twitter" href="#" title=""><i class="fa fa-twitter"></i></a>
                                <a class="googleplus" href="#" title=""><i class="fa fa-google"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="accountform" id="two" style="display: none;">
                        <form class="loginform">
                            <div class="accountformfield">
                                <label>ID</label>
                                <input type="text" placeholder="Creative Layers" />
                            </div>
                            <div class="accountformfield">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div class="accountformfield">
                                <label>Name</label>
                                <input type="text" placeholder="Creative Layers" />
							</div>
							<div class="accountformfield">
                                <label>Email</label>
                                <input type="email" placeholder="example@example.com" />
							</div>
							<div class="accountformfield">
                                <label>BirthDate</label>
                                <input type="text" placeholder="ex) 90년도 12월 12일생 -> 19901212" />
							</div>
							<div class="accountformfield">
							<label>Gender</label>
							<select class="cdropshere">
							<option>Select</option>
							<option>Female</option>
							<option>Male</option>
						</select>
							</div>

							
                            <div class="terms">By creating an account you agree to our <a href="#" title="">Terms and Conditions</a> and our <a href="#" title="">Privacy Policy</a></div>
                            <button type="submit">Sign Up</button>
                        </form>
                        <div class="extraconnect">
                            <span>Or Connect With Social Networks</span>
                            <div class="social">
                                <a class="facebook" href="#" title=""><i class="fa fa-facebook"></i></a>
                                <a class="twitter" href="#" title=""><i class="fa fa-twitter"></i></a>
                                <a class="googleplus" href="#" title=""><i class="fa fa-google"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	 `;
    return list;
  },
  makeDash: function (
    user_name,
    followers,
    following,
    status,
    all_cafe,
    total_views,
    total_reviews,
    like,
    notification,
    favorite
  ) {
    let dash = `

	  <div class="page-loading">
		  <img src="images/loader.gif" alt="" />
		  <span>Skip Loader</span>
	  </div>
	  
	  <div class="theme-layout">
	  
		  <div class="responsiveheader">
			  <div class="rheader">
				  <span><img src="images/ricon.png" alt="" /></span>
				  <div class="logo">
					  <a href="#" title=""><img src="/images/hiddenc_logo.png" alt="" /></a>
				  </div>
				  <div class="extras">
					  <span class="accountbtn"><i class="flaticon-avatar"></i></span>
				  </div>
			  </div>
			  <div class="rnaver">
				  <span class="closeresmenu"><i>x</i>Close</span>
				  <div class="logo"><a href="#" title=""><img src="http://placehold.it/175x40" alt="" /></a></div>
				  <div class="extras">
					  <a href="add-listing.html" title=""><img src="images/icon1.png" alt="" /> Add Cafe</a>
				  </div>
				  <ul>
					  <li>
						  <a href="#" title="">Home</a>
					  </li>
					  <li >
						  <a href="#" title="">Search</a>
					  </li>
					  <li >
						  <a href="#" title="">User</a>
					  </li>
				  </ul>
			  </div>
		  </div><!-- Responsive header -->
		  
		  <header class="sticktop">
			  <div class="logo">
				  <a href="#" title=""><img src="http://placehold.it/164x37" alt="" /></a>
			  </div>
			  <div class="userdropsec">
				  <span><img src="http://placehold.it/50x50" alt="" />${user_name} <i class="fa fa-bars"></i></span>
				  <div class="userdrop">
					  <div class="userdopinfo">
						  <img src="http://placehold.it/50x50" alt="" />
						  <h3>${user_name}</h3>
						  <span>${status}</span>
					  </div>
					  <a href="#" title=""><i class="flaticon-credit-card"></i>Dashboard</a>
					  <a href="#" title=""><i class="flaticon-avatar"></i>Profile</a>
					  <a href="#" title=""><i class="flaticon-coupon"></i>My Listings (${like}) </a>
					  <a href="#" title=""><i class="flaticon-note"></i>Notifications (${notification}) </a>
					  <a href="#" title=""><i class="flaticon-heart"></i>Favorites (${favorite})</a>
					  <a href="#" title=""><i class="flaticon-thumb-up"></i>Reviews</a>
				  </div>
			  </div>
			  <a href="#" title="" class="bellicon"><i class="fa fa-bell-o"></i><strong>3</strong></a>
			  <div class="extras">
				  <a href="add-listing.html" title=""><img src="images/icon1.png" alt="" /> Add Cafe</a>
			  </div>
			  <nav>
					  <ul>
					  <li>
					  <a href="#" title="">Home</a>
				  </li>
				  <li >
					  <a href="#" title="">Search</a>
				  </li>
				  <li >
					  <a href="#" title="">User</a>
				  </li>
						  </li>
					  </ul>
				  </nav>
		  </header>

		  <section>
		  <div class="block remove-bottom double-gap-top">
			  <div class="layer blackish">
				  <div data-velocity="-.1" style="background: url(http://placehold.it/1920x850) repeat scroll 50% 422.28px transparent;" class="no-parallax parallax scrolly-invisible"></div><!-- PARALLAX BACKGROUND IMAGE -->	
				  <div class="container">
					  <div class="row">
						  <div class="col-lg-12">
							  <div class="iamusersec">
								  <div class="iamuser">
									  <div class="userimg"><img src="http://placehold.it/120x120" alt="" /></div>
									  <div class="userinfos">
										  <h3>${user_name}</h3>
										  <span>${status}</span>
									  </div>
								  </div>
								  <div class="iamuserstats">
									  <span><i class="flaticon-avatar"></i>Followers ${followers}</span>
									  <span><i class="flaticon-avatar"></i>Following ${following}</span>
									  <a href="#" title=""><i class="flaticon-eraser"></i>Edit Profile</a>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
		  <div class="menubarsec">
			  <div class="container">
				  <div class="row">
					  <div class="col-lg-12">
						  <a href="#" title=""><i class="flaticon-credit-card"></i>Dashboard</a>
						  <a href="#" title=""><i class="flaticon-avatar"></i>Profile</a>
						  <a href="#" title=""><i class="flaticon-coupon"></i>My Listings (${like}) </a>
						  <a href="#" title=""><i class="flaticon-note"></i>Notifications (${notification}) </a>
						  <a href="#" title=""><i class="flaticon-heart"></i>Favorites (${favorite})</a>
						  <a href="#" title=""><i class="flaticon-thumb-up"></i>Reviews</a>
					  </div>
				  </div>
			  </div>
		  </div>
	  </section>

  <section>
	  <div class="block gray">
		  <div class="container">
			  <div class="row">
				  <div class="col-lg-12">
					  <div class="dashboradsec">
						  <h3>Dashboard</h3>
						  <div class="dashbadgesec">
							  <div class="row">
								  <div class="col-lg-4">
									  <div class="dashbadge clr1">
										  <a href="#" title="" class="dashnum"> <span><i>${all_cafe}</i></span> <strong>All Cafe</strong></a>
									  </div>
								  </div>
								  <div class="col-lg-4">
									  <div class="dashbadge clr2">
										  <a href="#" title="" class="dashnum"> <span><i>${total_views}</i></span> <strong>Total Views</strong></a>
									  </div>
								  </div>
								  <div class="col-lg-4">
									  <div class="dashbadge clr3">
										  <a href="#" title="" class="dashnum"> <span><i>${total_reviews}</i></span> <strong>Total Reviews</strong></a>
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
  
  <footer>
  <div class="block">
	  <div class="container">
		  <div class="row">
			  <div class="col-lg-12">
				  <div class="footersec">
					  <div class="flogo"><a href="#" title=""><img src="http://placehold.it/175x40" alt="" /></a></div>
					  <ul>
						  <li><a href="#" >Home</a></li>
						  <li><a href="#" >Partners</a></li>
						  <li><a href="#" >Contact</a></li>
						  <li><a href="#" >Terms</a></li>
						  <li><a href="#">Customer Center</a></li>
					  </ul>
					  <span>Seoul Geumcheon-gu, Gasan-dong, Gasan digital 1-ro </span>
					  <span>+82 02-123-4567</span>
					  <span>hiddenC@gmail.com</span>
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
	  <a href="#scrollup" class="scrollup" title=""><i class="fa fa-angle-up"></i></a>
	  <span>© 2020 hiddenC All rights reserved. Design by Creative Layers</span>
  </div>
</footer>

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
                        <form class="loginform">
                            <div class="accountformfield">
                                <label>ID</label>
                                <input type="text" placeholder="Creative Layers" />
                            </div>
                            <div class="accountformfield">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <p class="c-label">
                                <input name="cb" id="cb1" type="checkbox"><label for="cb1">Remember me?</label>
                            </p>
                            <a href="#" title="">Lost your password</a>
                            <button type="submit">Sign In</button>
                        </form>
                        <div class="extraconnect">
                            <span>Or Connect With Social Networks</span>
                            <div class="social">
                                <a class="facebook" href="#" title=""><i class="fa fa-facebook"></i></a>
                                <a class="twitter" href="#" title=""><i class="fa fa-twitter"></i></a>
                                <a class="googleplus" href="#" title=""><i class="fa fa-google"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="accountform" id="two" style="display: none;">
                        <form class="loginform">
                            <div class="accountformfield">
                                <label>ID</label>
                                <input type="text" placeholder="Creative Layers" />
                            </div>
                            <div class="accountformfield">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div class="accountformfield">
                                <label>Name</label>
                                <input type="text" placeholder="Creative Layers" />
							</div>
							<div class="accountformfield">
                                <label>Email</label>
                                <input type="email" placeholder="example@example.com" />
							</div>
							<div class="accountformfield">
                                <label>BirthDate</label>
                                <input type="text" placeholder="ex) 90년도 12월 12일생 -> 19901212" />
							</div>
							<div class="accountformfield">
							<label>Gender</label>
							<select class="cdropshere">
							<option>Select</option>
							<option>Female</option>
							<option>Male</option>
						</select>
							</div>

							
                            <div class="terms">By creating an account you agree to our <a href="#" title="">Terms and Conditions</a> and our <a href="#" title="">Privacy Policy</a></div>
                            <button type="submit">Sign Up</button>
                        </form>
                        <div class="extraconnect">
                            <span>Or Connect With Social Networks</span>
                            <div class="social">
                                <a class="facebook" href="#" title=""><i class="fa fa-facebook"></i></a>
                                <a class="twitter" href="#" title=""><i class="fa fa-twitter"></i></a>
                                <a class="googleplus" href="#" title=""><i class="fa fa-google"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    return dash;
  },
  makeNotification: function () {
    let notification = `<section>
	  <div class="block gray">
		  <div class="container">
			  <div class="row justify-content-center">
				  <div class="col-lg-10">
					  <div class="dashboradsec">
						  <h3>Notifications</h3>
						  <div class="pbox">
							  <div class="notcenter">
								  <div class="notificationlist">
									  <h3>Jessica Alba Accepted Your Friend Request</h3>
									  <span>29 minutes ago</span>
									  <a href="#" title=""><i class="flaticon-dustbin"></i> Remove</a>
								  </div>
								  <div class="notificationlist">
									  <h3>Alsad Kozar Commented On Your Last Video</h3>
									  <span>29 minutes ago</span>
									  <a href="#" title=""><i class="flaticon-dustbin"></i> Remove</a>
								  </div>
								  <div class="notificationlist">
									  <h3>Tupac Shakur Posted 2 Comments On Your Photo</h3>
									  <span>29 minutes ago</span>
									  <a href="#" title=""><i class="flaticon-dustbin"></i> Remove</a>
								  </div>
								  <div class="notificationlist">
									  <h3>Jessica Alba Accepted Your Friend Request</h3>
									  <span>29 minutes ago</span>
									  <a href="#" title=""><i class="flaticon-dustbin"></i> Remove</a>
								  </div>
								  <div class="notificationlist">
									  <h3>Alsad Kozar Commented On Your Last Video</h3>
									  <span>29 minutes ago</span>
									  <a href="#" title=""><i class="flaticon-dustbin"></i> Remove</a>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  </section>`;
    return notification;
  },
  makeUserList: function () {
    let list = `<section>
	  <div class="block gray">
		  <div class="container">
			  <div class="row justify-content-center">
				  <div class="col-lg-10">
					  <div class="dashboradsec">
						  <h3>My Listings</h3>
						  <div class="pbox">
							  <div class="mltabsec tab">
								  <ul class="tabs">
									  <li><a href="#" title="">All</a></li>
									  <li><a href="#" title="">Published (0)</a></li>
									  <li><a href="#" title="">In Review (5)</a></li>
									  <li><a href="#" title="">Unpaid (18)</a></li>
									  <li><a href="#" title="">Expried (45)</a></li>
								  </ul>
								  <div id="contents" class="tab_content">
									  <div class="tabs_item" id="ones" style="display: block;">
										  <div class="mlistingdash">
											  <div class="places s2 makelist">
												  <div class="placethumb">
													  <img src="http://placehold.it/200x140" alt="">
												  </div>
												  <div class="boxplaces">
													  <div class="placeinfos">
														  <h3><a href="#" title="">Hills Restaurant</a></h3>
														  <span>Delicious, luxury food for you</span>
														  <ul class="listmetas">
															  <li><a href="#" title=""><i class="flaticon-eye"></i> View</a></li>
															  <li><a href="#" title=""><i class="flaticon-eraser"></i> Edit</a></li>
															  <li><a href="#" title=""><i class="flaticon-dustbin"></i> Delete</a></li>
														  </ul>
													  </div>
													  <div class="placedetails">
														  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													  </div>
												  </div>
											  </div>
											  <div class="places s2 makelist">
												  <div class="placethumb">
													  <img src="http://placehold.it/200x140" alt="">
												  </div>
												  <div class="boxplaces">
													  <div class="placeinfos">
														  <h3><a href="#" title="">Hills Restaurant</a></h3>
														  <span>Delicious, luxury food for you</span>
														  <ul class="listmetas">
															  <li><a href="#" title=""><i class="flaticon-eye"></i> View</a></li>
															  <li><a href="#" title=""><i class="flaticon-eraser"></i> Edit</a></li>
															  <li><a href="#" title=""><i class="flaticon-dustbin"></i> Delete</a></li>
														  </ul>
													  </div>
													  <div class="placedetails">
														  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													  </div>
												  </div>
											  </div>
											  <div class="places s2 makelist">
												  <div class="placethumb">
													  <img src="http://placehold.it/200x140" alt="">
												  </div>
												  <div class="boxplaces">
													  <div class="placeinfos">
														  <h3><a href="#" title="">Hills Restaurant</a></h3>
														  <span>Delicious, luxury food for you</span>
														  <ul class="listmetas">
															  <li><a href="#" title=""><i class="flaticon-eye"></i> View</a></li>
															  <li><a href="#" title=""><i class="flaticon-eraser"></i> Edit</a></li>
															  <li><a href="#" title=""><i class="flaticon-dustbin"></i> Delete</a></li>
														  </ul>
													  </div>
													  <div class="placedetails">
														  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													  </div>
												  </div>
											  </div>
										  </div>
									  </div>
									  <div class="tabs_item" id="twos">
										  <div class="mlistingdash">
											  <div class="places s2 makelist">
												  <div class="placethumb">
													  <img src="http://placehold.it/200x140" alt="">
												  </div>
												  <div class="boxplaces">
													  <div class="placeinfos">
														  <h3><a href="#" title="">Hills Restaurant</a></h3>
														  <span>Delicious, luxury food for you</span>
														  <ul class="listmetas">
															  <li><a href="#" title=""><i class="flaticon-eye"></i> View</a></li>
															  <li><a href="#" title=""><i class="flaticon-eraser"></i> Edit</a></li>
															  <li><a href="#" title=""><i class="flaticon-dustbin"></i> Delete</a></li>
														  </ul>
													  </div>
													  <div class="placedetails">
														  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													  </div>
												  </div>
											  </div>
											  <div class="places s2 makelist">
												  <div class="placethumb">
													  <img src="http://placehold.it/200x140" alt="">
												  </div>
												  <div class="boxplaces">
													  <div class="placeinfos">
														  <h3><a href="#" title="">Hills Restaurant</a></h3>
														  <span>Delicious, luxury food for you</span>
														  <ul class="listmetas">
															  <li><a href="#" title=""><i class="flaticon-eye"></i> View</a></li>
															  <li><a href="#" title=""><i class="flaticon-eraser"></i> Edit</a></li>
															  <li><a href="#" title=""><i class="flaticon-dustbin"></i> Delete</a></li>
														  </ul>
													  </div>
													  <div class="placedetails">
														  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													  </div>
												  </div>
											  </div>
										  </div>
									  </div>
									  <div class="tabs_item" id="threes">
										  <div class="mlistingdash">
											  <div class="places s2 makelist">
												  <div class="placethumb">
													  <img src="http://placehold.it/200x140" alt="">
												  </div>
												  <div class="boxplaces">
													  <div class="placeinfos">
														  <h3><a href="#" title="">Hills Restaurant</a></h3>
														  <span>Delicious, luxury food for you</span>
														  <ul class="listmetas">
															  <li><a href="#" title=""><i class="flaticon-eye"></i> View</a></li>
															  <li><a href="#" title=""><i class="flaticon-eraser"></i> Edit</a></li>
															  <li><a href="#" title=""><i class="flaticon-dustbin"></i> Delete</a></li>
														  </ul>
													  </div>
													  <div class="placedetails">
														  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													  </div>
												  </div>
											  </div>
											  <div class="places s2 makelist">
												  <div class="placethumb">
													  <img src="http://placehold.it/200x140" alt="">
												  </div>
												  <div class="boxplaces">
													  <div class="placeinfos">
														  <h3><a href="#" title="">Hills Restaurant</a></h3>
														  <span>Delicious, luxury food for you</span>
														  <ul class="listmetas">
															  <li><a href="#" title=""><i class="flaticon-eye"></i> View</a></li>
															  <li><a href="#" title=""><i class="flaticon-eraser"></i> Edit</a></li>
															  <li><a href="#" title=""><i class="flaticon-dustbin"></i> Delete</a></li>
														  </ul>
													  </div>
													  <div class="placedetails">
														  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													  </div>
												  </div>
											  </div>
											  <div class="places s2 makelist">
												  <div class="placethumb">
													  <img src="http://placehold.it/200x140" alt="">
												  </div>
												  <div class="boxplaces">
													  <div class="placeinfos">
														  <h3><a href="#" title="">Hills Restaurant</a></h3>
														  <span>Delicious, luxury food for you</span>
														  <ul class="listmetas">
															  <li><a href="#" title=""><i class="flaticon-eye"></i> View</a></li>
															  <li><a href="#" title=""><i class="flaticon-eraser"></i> Edit</a></li>
															  <li><a href="#" title=""><i class="flaticon-dustbin"></i> Delete</a></li>
														  </ul>
													  </div>
													  <div class="placedetails">
														  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													  </div>
												  </div>
											  </div>
										  </div>
									  </div>
									  <div class="tabs_item" id="fours">
										  <div class="mlistingdash">
											  <div class="places s2 makelist">
												  <div class="placethumb">
													  <img src="http://placehold.it/200x140" alt="">
												  </div>
												  <div class="boxplaces">
													  <div class="placeinfos">
														  <h3><a href="#" title="">Hills Restaurant</a></h3>
														  <span>Delicious, luxury food for you</span>
														  <ul class="listmetas">
															  <li><a href="#" title=""><i class="flaticon-eye"></i> View</a></li>
															  <li><a href="#" title=""><i class="flaticon-eraser"></i> Edit</a></li>
															  <li><a href="#" title=""><i class="flaticon-dustbin"></i> Delete</a></li>
														  </ul>
													  </div>
													  <div class="placedetails">
														  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													  </div>
												  </div>
											  </div>
										  </div>
									  </div>
									  <div class="tabs_item" id="fives">
										  <div class="mlistingdash">
											  <div class="places s2 makelist">
												  <div class="placethumb">
													  <img src="http://placehold.it/200x140" alt="">
												  </div>
												  <div class="boxplaces">
													  <div class="placeinfos">
														  <h3><a href="#" title="">Hills Restaurant</a></h3>
														  <span>Delicious, luxury food for you</span>
														  <ul class="listmetas">
															  <li><a href="#" title=""><i class="flaticon-eye"></i> View</a></li>
															  <li><a href="#" title=""><i class="flaticon-eraser"></i> Edit</a></li>
															  <li><a href="#" title=""><i class="flaticon-dustbin"></i> Delete</a></li>
														  </ul>
													  </div>
													  <div class="placedetails">
														  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													  </div>
												  </div>
											  </div>
											  <div class="places s2 makelist">
												  <div class="placethumb">
													  <img src="http://placehold.it/200x140" alt="">
												  </div>
												  <div class="boxplaces">
													  <div class="placeinfos">
														  <h3><a href="#" title="">Hills Restaurant</a></h3>
														  <span>Delicious, luxury food for you</span>
														  <ul class="listmetas">
															  <li><a href="#" title=""><i class="flaticon-eye"></i> View</a></li>
															  <li><a href="#" title=""><i class="flaticon-eraser"></i> Edit</a></li>
															  <li><a href="#" title=""><i class="flaticon-dustbin"></i> Delete</a></li>
														  </ul>
													  </div>
													  <div class="placedetails">
														  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													  </div>
												  </div>
											  </div>
											  <div class="places s2 makelist">
												  <div class="placethumb">
													  <img src="http://placehold.it/200x140" alt="">
												  </div>
												  <div class="boxplaces">
													  <div class="placeinfos">
														  <h3><a href="#" title="">Hills Restaurant</a></h3>
														  <span>Delicious, luxury food for you</span>
														  <ul class="listmetas">
															  <li><a href="#" title=""><i class="flaticon-eye"></i> View</a></li>
															  <li><a href="#" title=""><i class="flaticon-eraser"></i> Edit</a></li>
															  <li><a href="#" title=""><i class="flaticon-dustbin"></i> Delete</a></li>
														  </ul>
													  </div>
													  <div class="placedetails">
														  <span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														  <span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													  </div>
												  </div>
											  </div>
										  </div>
									  </div>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  </section>`;
    return list;
  },
  make404: function () {
    let error = `	<section>
	  <div class="block double-gap-top double-gap-bottom">
		  <div class="container">
			  <div class="row justify-content-center">
				  <div class="col-lg-8">
					  <div class="errorsec">
						  <img src="images/404.png" alt="" />
						  <span>We're sorry, but the page you were looking for doesn't exist.</span>
						  <form><input type="text" placeholder="What are you looking for?" /><button type="submit">Search <i class="flaticon-magnifying-glass"></i></button></form>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  </section>`;
    return error;
  },
  makeAddCafe: function () {
    let add = `	<section>
	  <div class="block gray">
		  <div class="container">
			  <div class="row justify-content-center">
				  <div class="col-lg-10">
					  <div class="pbox">
						  <h3>Listing Style</h3>
						  <div class="slistingoption">
							  <div class="slisting">
								  <div class="slistingbox"><img src="http://placehold.it/160x136" alt="" /></div>
								  <span>List Style V1</span>
							  </div>
							  <div class="slisting">
								  <div class="slistingbox"><img src="http://placehold.it/160x136" alt="" /></div>
								  <span>List Style V2</span>
							  </div>
							  <div class="slisting">
								  <div class="slistingbox"><img src="http://placehold.it/160x136" alt="" /></div>
								  <span>List Style V3</span>
							  </div>
							  <div class="slisting">
								  <div class="slistingbox"><img src="http://placehold.it/160x136" alt="" /></div>
								  <span>List Style V4</span>
							  </div>
							  <div class="slisting">
								  <div class="slistingbox"><img src="http://placehold.it/160x136" alt="" /></div>
								  <span>List Style V5</span>
							  </div>
						  </div>
					  </div><!-- PBox -->
					  <div class="pbox">
						  <div class="addlistingform">
							  <form>
								  <div class="row">
									  <div class="col-lg-6">
										  <div class="fieldformy">
											  <span>Cafe name*</span>
											  <input type="text">
										  </div>
										  <div class="fieldformy">
											  <span>Categories *</span>
											  <select class="cdropshere">
												  <option>카테고리1</option>
												  <option>카테고리2</option>
												  <option>카테고리3</option>
												  <option>카테고리4</option>
											  </select>
										  </div>
										  <div class="fieldformy">
											  <span>Cafe Location *</span>
											  <select class="cdropshere">
												  <option>England</option>
												  <option>Pakistan</option>
												  <option>Turkey</option>
												  <option>Bangladesh</option>
											  </select>
										  </div>
										  <div class="fieldformy">
											  <span>Address *</span>
											  <input placeholder="Listing Address, Eg: Manchester, United Kingdom" type="text">
										  </div>
										  <div class="fieldformy">
											  <span>Website *</span>
											  <input placeholder="" type="text">
										  </div>
										  <div class="fieldformy">
											  <span>Segmentation</span>
											  <select class="cdropshere">
												  <option>$$$ - Expensive</option>
												  <option>$$ - Medium</option>
												  <option>$ - Normal</option>
											  </select>
										  </div>
										  <div class="fieldformy">
											  <span>Tags</span>
											  <div class="pf-field">
												   <ul class="tags">
													 <li class="addedTag">Web<span onclick="$(this).parent().remove();" class="tagRemove">x</span><input type="hidden" name="tags[]" value="Web Deisgn"></li>
													  <li class="addedTag">Arts<span onclick="$(this).parent().remove();" class="tagRemove">x</span><input type="hidden" name="tags[]" value="Web Develop"></li>
													  <li class="addedTag">SEO<span onclick="$(this).parent().remove();" class="tagRemove">x</span><input type="hidden" name="tags[]" value="SEO"></li>
													  <li class="tagAdd taglist">  
															 <input type="text" id="search-field">
													  </li>
												  </ul>
											  </div>
										  </div>
										  
									  </div>
									  <div class="col-lg-6">
										  <div class="thislisting">
											  <img src="http://placehold.it/420x357" alt="" />
										  </div>
										  <div class="alform">
											  <div class="row">
												  <div class="col-lg-6">
													  <div class="fieldformy">
														  <span>Listing Title *</span>
														  <input type="text">
													  </div>
												  </div>
												  <div class="col-lg-6">
													  <div class="fieldformy">
														  <span>Phone</span>
														  <input type="text">
													  </div>
												  </div>
												  <div class="col-lg-6">
													  <div class="fieldformy">
														  <span>Email</span>
														  <input type="text">
													  </div>
												  </div>
												  <div class="col-lg-6">
													  <div class="fieldformy">
														  <span>Minimum Price</span>
														  <input type="text">
													  </div>
												  </div>
												  <div class="col-lg-6">
													  <div class="fieldformy">
														  <span>Maximum Price</span>
														  <input type="text">
													  </div>
												  </div>
												  <div class="col-lg-6">
													  <div class="fieldformy">
														  <span>Your Business video(Optional)</span>
														  <input type="text">
													  </div>
												  </div>
											  </div>
										  </div>
									  </div>
									  <div class="col-lg-12">
										  <p class="c-label">
											  <input name="cb" id="th1" type="checkbox"><label for="th1">Business Hours</label>
										  </p>
									  </div>
									  <div class="col-lg-12">
										  <div class="tabletime">
											  <table>
												  <thead>
													  <tr>
														  <td>Day</td>
														  <td>Start time</td>
														  <td>End time</td>
														  <td>Closed</td>
													  </tr>
												  </thead>
												  <tbody>
													  <tr>
														  <td>Monday</td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <p class="c-label">
																  <input name="cb" id="t1" type="checkbox"><label for="t1"></label>
															  </p>
														  </td>
													  </tr>
													  <tr>
														  <td>Tuesday</td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <p class="c-label">
																  <input name="cb" id="t2" type="checkbox"><label for="t2"></label>
															  </p>
														  </td>
													  </tr>
													  <tr>
														  <td>Wednesday</td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <p class="c-label">
																  <input name="cb" id="t3" type="checkbox"><label for="t3"></label>
															  </p>
														  </td>
													  </tr>
													  <tr>
														  <td>Thursday</td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <p class="c-label">
																  <input name="cb" id="t4" type="checkbox"><label for="t4"></label>
															  </p>
														  </td>
													  </tr>
													  <tr>
														  <td>Friday</td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <p class="c-label">
																  <input name="cb" id="t5" type="checkbox"><label for="t5"></label>
															  </p>
														  </td>
													  </tr>
													  <tr>
														  <td>Saturday</td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <p class="c-label">
																  <input name="cb" id="t6" type="checkbox"><label for="t6"></label>
															  </p>
														  </td>
													  </tr>
													  <tr>
														  <td>Sunday</td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <div class="tablewaqt">
																  <input type="text" value="08:00" />
																  <input type="text" value="24:00" />
																  <select class="cdropshere">
																	  <option>AM</option>
																	  <option>PM</option>
																  </select>
															  </div>
														  </td>
														  <td>
															  <p class="c-label">
																  <input name="cb" id="t7" type="checkbox"><label for="t7"></label>
															  </p>
														  </td>
													  </tr>
												  </tbody>
											  </table>
										  </div>
									  </div>
									  <div class="col-lg-12">
										  <a title="" class="uploadfile">
											  <img src="images/cloud.png" alt="" />
											  <span>Upload Featured images</span>
											  <input type="file" />
										  </a>
										  <div class="fieldformy">
											  <span>Listing Content *</span>
											  <textarea></textarea>
										  </div>
									  </div>
								  </div>
							  </form>
						  </div>
					  </div>
					  <div class="pbox">
						  <h3>Gallery</h3>
						  <div class="slistinggallery">
							  <div class="sgallery">
								  <a title="" class="uploadgallery">
									  <img src="images/cloud.png" alt="" />
									  <span>Listing Gallery</span>
									  <input type="file" />
								  </a>
							  </div>
							  <div class="sgallery">
								  <div class="sgallerybox"><img src="http://placehold.it/150x110" alt="" /><i class="delgallery">x</i></div>
							  </div>
							  <div class="sgallery">
								  <div class="sgallerybox"><img src="http://placehold.it/150x110" alt="" /><i class="delgallery">x</i></div>
							  </div>
							  <div class="sgallery">
								  <div class="sgallerybox"><img src="http://placehold.it/150x110" alt="" /><i class="delgallery">x</i></div>
							  </div>
						  </div>
					  </div><!-- PBox -->
					  <div class="pbox">
						  <h3>Social Networks</h3>
						  <div class="socialnetworks">
							  <form>
								  <div class="row">
									  <div class="col-lg-6">
										  <div class="fieldformy">
											  <span>Facebook</span>
											  <input type="text">
											  <i class="fa fa-facebook"></i>
										  </div>
										  <div class="fieldformy">
											  <span>Twitter</span>
											  <input type="text">
											  <i class="fa fa-twitter"></i>
										  </div>
									  </div>
									  <div class="col-lg-6">
										  <div class="fieldformy">
											  <span>Linkedin</span>
											  <input type="text">
											  <i class="fa fa-linkedin"></i>
										  </div>
										  <div class="fieldformy">
											  <span>Google Plus</span>
											  <input type="text">
											  <i class="fa fa-google"></i>
										  </div>
									  </div>
								  </div>
							  </form>
						  </div>
					  </div><!-- PBox -->
				  </div>
			  </div>
		  </div>
	  </div>
  </section>
`;
    return add;
  },
  makeFavorite: function () {
    let favorite = `<section>
	  <div class="block gray">
		  <div class="container">
			  <div class="row justify-content-center">
				  <div class="col-lg-10">
					  <div class="dashboradsec">
						  <h3>Favourites</h3>
						  <div class="pbox">
							  <div class="favsec">
								  <div class="favourites">
									  <div class="favthumb"><img src="http://placehold.it/200x140" alt="" /></div>
									  <div class="favinfos">
										  <h3>Urban Hotels</h3>
										  <p>Long waits are worth it! I suggest a party of 2 if you can make it happen, just because when you</p>
										  <div class="reviewaction">
											  <a href="#" title=""><i class="flaticon-dustbin"></i> Remove</a>
										  </div>
									  </div>
								  </div>
								  <div class="favourites">
									  <div class="favthumb"><img src="http://placehold.it/200x140" alt="" /></div>
									  <div class="favinfos">
										  <h3>Trips to Hawaii</h3>
										  <p>Long waits are worth it! I suggest a party of 2 if you can make it happen, just because when you</p>
										  <div class="reviewaction">
											  <a href="#" title=""><i class="flaticon-dustbin"></i> Remove</a>
										  </div>
									  </div>
								  </div>
								  <div class="favourites">
									  <div class="favthumb"><img src="http://placehold.it/200x140" alt="" /></div>
									  <div class="favinfos">
										  <h3>Bike Tours Hollywood</h3>
										  <p>Long waits are worth it! I suggest a party of 2 if you can make it happen, just because when you</p>
										  <div class="reviewaction">
											  <a href="#" title=""><i class="flaticon-dustbin"></i> Remove</a>
										  </div>
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
`;
    return favorite;
  },
  makeCafeInfo: function () {
    let info = `<section>
	  <div class="block no-padding">
		  <div class="container fluid">
			  <div class="row">
				  <div class="col-lg-12">
					  <div class="sl-slider" id="makeslider">
						  <div class="slg-box"> <img src="http://placehold.it/480x350" alt="" /> </div>
						  <div class="slg-box"> <img src="http://placehold.it/480x350" alt="" /> </div> 
						  <div class="slg-box"> <img src="http://placehold.it/480x350" alt="" /> </div> 
						  <div class="slg-box"> <img src="http://placehold.it/480x350" alt="" /> </div>
						  <div class="slg-box"> <img src="http://placehold.it/480x350" alt="" /> </div>
						  <div class="slg-box"> <img src="http://placehold.it/480x350" alt="" /> </div> 
						  <div class="slg-box"> <img src="http://placehold.it/480x350" alt="" /> </div> 
						  <div class="slg-box"> <img src="http://placehold.it/480x350" alt="" /> </div>  
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  </section>

  <section>
	  <div class="block no-padding gray flip">
		  <div class="container fluid">
			  <div class="row">
				  <div class="col-lg-12">
					  <div class="slhead">
						  <div class="container">
							  <div class="row">
								  <div class="col-lg-6">
									  <div class="sltitle">
										  <h1>Burger House</h1>
										  <span>Delicious, luxury food for you</span>
										  <ul class="listmetas">
											  <li><span class="rated">3.5</span>3 Ratings</li>
											  <li><a href="#" title=""><i class="flaticon-chef"></i> Restaurant</a></li>
											  <li><div class="currency"><i>$$$</i>$$</div></li>
										  </ul>
									  </div>
								  </div>
								  <div class="col-lg-6">
									  <div class="slbtnsspans">
										  <span><i class="flaticon-pin"></i> 2726 Shinn Street, New York</span>
										  <span><i class="flaticon-phone-call"></i> + 44 20 456 823</span>
										  <div class="slbtns">
											  <div class="sharelisting">
												  <a href="#" title=""><i class="flaticon-share"></i>Share</a>
												  <div class="sharebtns">
													  <a href="#" title=""><i class="fa fa-facebook"></i></a>
													  <a href="#" title=""><i class="fa fa-twitter"></i></a>
													  <a href="#" title=""><i class="fa fa-instagram"></i></a>
													  <a href="#" title=""><i class="fa fa-pinterest"></i></a>
													  <a href="#" title=""><i class="fa fa-dribbble"></i></a>
													  <a href="#" title=""><i class="fa fa-google"></i></a>
												  </div>
											  </div>
											  <a href="#" title=""><i class="flaticon-heart"></i>Bookmark</a>
											  <a href="#" title=""><i class="flaticon-note"></i>Add review</a>
										  </div>
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
	  <div class="block s2">
		  <div class="container">
			  <div class="row">
				  <div class="col-lg-8 column">
					  <div class="bbox">
						  <h3>Description</h3>
						  <div class="ldesc">
							  <p>Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in  pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra. Eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut  tristique elit risus at metus. Lorem ipsum dolor sit amet,</p>
						  </div>
					  </div>
					  <div class="bbox">
						  <h3>Amenities</h3>
						  <div class="amenties">
							  <span><i class="flaticon-credit-card"></i>Accepts Credit Cards</span>
							  <span><i class="flaticon-wifi"></i>Wireless Internet</span>
							  <span><i class="flaticon-parking"></i>Parking street</span>
							  <span><i class="flaticon-smoking"></i>Smoking Allowed</span>
							  <span><i class="flaticon-bicycle"></i>Bike Parking</span>
							  <span><i class="flaticon-handicapped"></i>Wheelchair Accesible</span>
							  <span><i class="flaticon-booked"></i>Reservations</span>
							  <span><i class="flaticon-coupon"></i>Coupons</span>
							  <span><i class="flaticon-map"></i>Outdoor Seating</span>
						  </div>
					  </div>
					  <div class="bbox">
						  <h3>Gallery</h3>
						  <ul class="gallerylistin">
							  <li><img src="http://placehold.it/160x115" alt="" /></li>
							  <li><img src="http://placehold.it/160x115" alt="" /></li>
							  <li><img src="http://placehold.it/160x115" alt="" /></li>
							  <li><img src="http://placehold.it/160x115" alt="" /></li>
							  <li><img src="http://placehold.it/160x115" alt="" /></li>
							  <li><img src="http://placehold.it/160x115" alt="" /></li>
						  </ul>
					  </div>
					  <div class="bbox">
						  <h3>2 Reviews for Burger House</h3>
						  <div class="reviewssec">
							  <div class="reviewthumb"> <img src="http://placehold.it/60x60" alt="" /> </div>
							  <div class="reviewinfo">
								  <h3>Ali TUFAN</h3>
								  <span>December 12, 2017 at 8:18 am</span>
								  <ul class="listmetas justrate"><li><span class="rated">3.5</span>3 Ratings</li></ul>
								  <p>We had the tasting menu here and it was one of the nicest meals I’ve ever had. The of the food service and surroundings it was marvellous.</p>
								  <div class="wasreview">
									  <span>Was This Review ...?</span>
									  <div class="wasreviewbtn">
										  <a href="#" title="" class="c1"><i class="flaticon-thumb-up"></i>Interesting 85</a>
										  <a href="#" title="" class="c2"><i class="flaticon-smile"></i>Lol 45</a>
										  <a href="#" title="" class="c3"><i class="flaticon-heart"></i>Love 87</a>
									  </div>
								  </div>
								  <div class="reviewaction">
									  <a href="#" title=""><i class="flaticon-back"></i> Reply</a>
								  </div>
							  </div>
						  </div>
						  <div class="reviewssec">
							  <div class="reviewthumb"> <img src="http://placehold.it/60x60" alt="" /> </div>
							  <div class="reviewinfo">
								  <h3>Ali TUFAN </h3>
								  <span>December 12, 2017 at 8:18 am</span>
								  <ul class="listmetas justrate"><li><span class="rated">3.5</span>3 Ratings</li></ul>
								  <p>We had the tasting menu here and it was one of the nicest meals I’ve ever had. The of the food service and surroundings it was marvellous.</p>
								  <div class="rgallery">
									  <a href="#" title=""><img src="http://placehold.it/180x115" alt="" /></a>
									  <a href="#" title=""><img src="http://placehold.it/180x115" alt="" /></a>
									  <a href="#" title=""><img src="http://placehold.it/180x115" alt="" /></a>
								  </div>
								  <div class="wasreview">
									  <span>Was This Review ...?</span>
									  <div class="wasreviewbtn">
										  <a href="#" title="" class="c1"><i class="flaticon-thumb-up"></i>Interesting 85</a>
										  <a href="#" title="" class="c2"><i class="flaticon-smile"></i>Lol 45</a>
										  <a href="#" title="" class="c3"><i class="flaticon-heart"></i>Love 87</a>
									  </div>
								  </div>
								  <div class="reviewaction">
									  <a href="#" title=""><i class="flaticon-back"></i> Reply</a>
								  </div>
							  </div>
						  </div>
					  </div>
					  <div class="listingcomment">
						  <div class="leavecomment">
							  <h3>Rate us and Write a Review</h3>
							  <div class="upimg">
								  <span>Upload images</span>
								  <a href="#" title=""><img src="images/cloud.png" alt="" /></a>
								  <input type="file" />
							  </div>
							  <div class="urrating">
								  <span>Your Rating for this listing</span>
								  <strong>Very Good</strong>
								  <b>
									  <i class="fa fa-star"></i>
									  <i class="fa fa-star"></i>
									  <i class="fa fa-star"></i>
									  <i class="fa fa-star-o"></i>
									  <i class="fa fa-star-o"></i>
								  </b>

							  </div>
							  <form>
								  <input placeholder="your@mail.com" type="Email">
								  <input placeholder="Title" type="text">
								  <textarea placeholder="Review"></textarea>
								  <input value="Submit Review" type="submit">
							  </form>
						  </div>
					  </div>
				  </div>
				  <div class="col-lg-4 column">
					  <div class="openclosetiming">
						  <h3>Closed <span>09:00 AM - 05:00 PM</span></h3>
						  <span>Monday <i>2:00 pm - 11:45 pm</i></span>
						  <span>Tuesday <i>2:00 pm - 11:45 pm</i></span>
						  <span>Wednesday <i>2:00 pm - 11:45 pm</i></span>
						  <span>Thursday <i>2:00 pm - 11:45 pm</i></span>
						  <span>Friday <i>2:00 pm - 11:45 pm</i></span>
						  <span>Saturday <i>2:00 pm - 11:45 pm</i></span>
						  <span>Sunday <i>2:00 pm - 11:45 pm</i></span>
					  </div>
					  <div class="blocation">
						  <h3>Location <a href="#" title="">Get Direction</a></h3>
						  <div class="contact-map">
							  <div id="map_div">&nbsp;</div>
						  </div>
						  <span>Collins Street West, Victoria 8007, Australia.</span>
						  <span>+1 246-345-0695</span>
						  <span>info@example.com</span>
						  <div class="wsocial">
							  <a href="#" title=""><i class="fa fa-facebook"></i></a>
							  <a href="#" title=""><i class="fa fa-twitter"></i></a>
							  <a href="#" title=""><i class="fa fa-linkedin"></i></a>
							  <a href="#" title=""><i class="fa fa-pinterest"></i></a>
							  <a href="#" title=""><i class="fa fa-google"></i></a>
							  <a href="#" title=""><i class="fa fa-dribbble"></i></a>
						  </div>
					  </div>
					  <div class="cbusiness">
						  <h3>Contact business</h3>
						  <form>
							  <label>Your Name *</label>
							  <input type="text" placeholder="Ali TUF..." />
							  <label>Your Email Address*</label>
							  <input type="text" placeholder="demo@demo.com" />
							  <label>Your Message</label>
							  <textarea placeholder="demo@demo.com"></textarea>
							  <button type="submit">Send Message</button>
						  </form>
					  </div>
					  <div class="cad">
						  <div class="ad"><img src="http://placehold.it/360x220" alt="" /></div>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  </section>`;
    return info;
  },
  makeHalfList: function (rate) {
    let half_list = `		
	<section>
	<div class="block gray">
	<div class="container">
		<div class="row ">
			<div class="col-lg-12">
								<form>
									<div class="row">
										<div class="col-lg-3">
											<div class="mlfield drop">
												<input type="text" placeholder="Price" />
												<i class="fa fa-money"></i>
												<div class="prices-dropsec">
													<div class="prices-drop">
														<p>What is the price range?</p>
														<span><i>Prices</i>$</span><span><i>Prices</i>$$</span><span><i>Prices</i>$$$</span><span><i>Prices</i>$$$$</span>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-3">
											<div class="mlfield">
												<input type="text" placeholder="Near Me" />
												<i class="fa fa-flag-o"></i>
											</div>
										</div>
										<div class="col-lg-3">
											<div class="mlfield">
												<input type="text" placeholder="Open Now" />
												<i class="fa fa-clock-o"></i>
											</div>
										</div>
										<div class="col-lg-3">
											<div class="mlfield">
												<select class="selectbox">
													<option>Sort By</option>
													<option>By Date</option>
													<option>By Location</option>
													<option>Latest</option>
												</select>
											</div>
										</div>
										<div class="col-lg-3">
											<div class="mlfield s2">
												<select class="selectbox">
													<option>All Categories</option>
													<option>Homes</option>
													<option>Electrician</option>
													<option>Mobiles</option>
													<option>Camera</option>
													<option>Technology</option>
												</select>
											</div>
										</div>
										<div class="col-lg-3">
											<div class="customdropdown">
												<span>More Filters <i class="fa fa-angle-down"></i></span>
												<div class="customdrops">	
													<div class="mltags">
														<div class="row">
															<div class="col-lg-6">
																<p class="c-label"><input name="cb" id="1" type="checkbox"><label for="1">Smoking Allow</label></p>
																<p class="c-label"><input name="cb" id="2" type="checkbox"><label for="2">Parking str</label></p>
																<p class="c-label"><input name="cb" id="3" type="checkbox"><label for="3">Daily Specials</label></p>
																<p class="c-label"><input name="cb" id="4" type="checkbox"><label for="4">Card Payment</label></p>
															</div>
															<div class="col-lg-6">
																<p class="c-label"><input name="cb" id="5" type="checkbox"><label for="5">Wireless Inter</label></p>
																<p class="c-label"><input name="cb" id="6" type="checkbox"><label for="6">Wheelchair</label></p>
																<p class="c-label"><input name="cb" id="7" type="checkbox"><label for="7">Pet Friendly</label></p>
																<p class="c-label"><input name="cb" id="8" type="checkbox"><label for="8">Smoking Allow</label></p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-3">
											<div class="customdropdown">
												<span>Distance Radius <i class="fa fa-angle-down"></i></span>
												<div class="customdrops">
													<div class="rangedrops">
														<span>Radius around selected destination</span>
														<div class="rslider">
															<amino-slider class="slider" data-min="0" data-max="100" data-value="10"></amino-slider>
														</div>
														<a href="#" title="" class="btn1 pull-left">Disable</a>
														<a href="#" title="" class="btn2 pull-right">Apply</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>	
							</div>
							<div class="ml-listings allset">
								<div class="ml-filterbar">
									<h3><i class="flaticon-eye"></i>14 Results Found</h3>
									<ul>
										<li class="doubleplaces active"><span><i class="fa fa-th-large"></i></span></li>
										<li class="listingplaces"><span><i class="fa fa-th-list"></i></span></li>
									</ul>
								</div>
								<div class="ml-placessec">
									<div class="row">
										<div class="col-lg-6">
											<div class="places s2">
												<div class="placethumb">
													<img src="http://placehold.it/360x220" alt="" />
													<div class="placeoptions">
														<span class="pull-left"> <i class="flaticon-eye"></i> Preview </span>
														<span class="pull-right"> <i class="flaticon-heart"></i> Save </span>
													</div>
												</div>
												<div class="boxplaces">
													<div class="placeinfos">
														<h3><a href="#" title="">Hills Restaurant</a></h3>
														<span>Delicious, luxury food for you</span>
														<ul class="listmetas">
															<li><span class="rated">3.5</span>3 Ratings</li>
															<li><a href="#" title=""><i class="flaticon-chef"></i> Restaurant</a></li>
															<li>Open</li>
														</ul>
													</div>
													<div class="placedetails">
														<span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														<span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													</div>
												</div>
											</div><!-- Places -->
										</div>
										<div class="col-lg-6">
											<div class="places s2">
												<div class="placethumb">
													<img src="http://placehold.it/360x220" alt="" />
													<div class="placeoptions">
														<span class="pull-left"> <i class="flaticon-eye"></i> Preview </span>
														<span class="pull-right"> <i class="flaticon-heart"></i> Save </span>
													</div>
												</div>
												<div class="boxplaces">
													<div class="placeinfos">
														<h3><a href="#" title="">Balara Cinemas</a></h3>
														<span>Delicious, luxury food for you</span>
														<ul class="listmetas">
															<li><span class="rated">3.5</span>3 Ratings</li>
															<li><a href="#" title=""><i class="flaticon-chef"></i> Restaurant</a></li>
															<li>Open</li>
														</ul>
													</div>
													<div class="placedetails">
														<span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														<span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													</div>
												</div>
											</div><!-- Places -->
										</div>
										<div class="col-lg-6">
											<div class="places s2">
												<div class="placethumb">
													<img src="http://placehold.it/360x220" alt="" />
													<div class="placeoptions">
														<span class="pull-left"> <i class="flaticon-eye"></i> Preview </span>
														<span class="pull-right"> <i class="flaticon-heart"></i> Save </span>
													</div>
												</div>
												<div class="boxplaces">
													<div class="placeinfos">
														<h3><a href="#" title="">Balara Cinemas</a></h3>
														<span>Delicious, luxury food for you</span>
														<ul class="listmetas">
															<li><span class="rated">3.5</span>3 Ratings</li>
															<li><a href="#" title=""><i class="flaticon-chef"></i> Restaurant</a></li>
															<li>Open</li>
														</ul>
													</div>
													<div class="placedetails">
														<span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														<span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													</div>
												</div>
											</div><!-- Places -->
										</div>
										<div class="col-lg-6">
											<div class="places s2">
												<div class="placethumb">
													<img src="http://placehold.it/360x220" alt="" />
													<div class="placeoptions">
														<span class="pull-left"> <i class="flaticon-eye"></i> Preview </span>
														<span class="pull-right"> <i class="flaticon-heart"></i> Save </span>
													</div>
												</div>
												<div class="boxplaces">
													<div class="placeinfos">
														<h3><a href="#" title="">Balara Cinemas</a></h3>
														<span>Delicious, luxury food for you</span>
														<ul class="listmetas">
															<li><span class="rated">3.5</span>3 Ratings</li>
															<li><a href="#" title=""><i class="flaticon-chef"></i> Restaurant</a></li>
															<li>Open</li>
														</ul>
													</div>
													<div class="placedetails">
														<span class="pull-left"><i class="flaticon-pin"></i>Roma, Italy</span>
														<span class="pull-right"><i class="flaticon-phone-call"></i>+ 44 20 456 823</span>
													</div>
												</div>
											</div><!-- Places -->
										</div>
									</div>
								</div>
				
					<div class="half-map s2">
						<div id="map_div" class="map">&nbsp;</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</section>
`;
    return half_list; //수정해야함 --> 6/6으로 column을 나눠야함
  },
  makeProfileHeader: function (
    user_name,
    status,
    like,
    notification,
    favorite,
    followers,
    following
  ) {
    let profile_header = `	
	 <div class="page-loading">
		  <img src="images/loader.gif" alt="" />
		  <span>Skip Loader</span>
	  </div>
	  
	  <div class="theme-layout">
	  
		  <div class="responsiveheader">
			  <div class="rheader">
				  <span><img src="images/ricon.png" alt="" /></span>
				  <div class="logo">
					  <a href="#" title=""><img src="/images/hiddenc_logo.png" alt="" /></a>
				  </div>
				  <div class="extras">
					  <span class="accountbtn"><i class="flaticon-avatar"></i></span>
				  </div>
			  </div>
			  <div class="rnaver">
				  <span class="closeresmenu"><i>x</i>Close</span>
				  <div class="logo"><a href="#" title=""><img src="http://placehold.it/175x40" alt="" /></a></div>
				  <div class="extras">
					  <a href="add-listing.html" title=""><img src="images/icon1.png" alt="" /> Add Cafe</a>
				  </div>
				  <ul>
					  <li>
						  <a href="#" title="">Home</a>
					  </li>
					  <li >
						  <a href="#" title="">Search</a>
					  </li>
					  <li >
						  <a href="#" title="">User</a>
					  </li>
				  </ul>
			  </div>
		  </div><!-- Responsive header -->
		  
		  <header class="sticktop">
			  <div class="logo">
				  <a href="#" title=""><img src="http://placehold.it/164x37" alt="" /></a>
			  </div>
			  <div class="userdropsec">
				  <span><img src="http://placehold.it/50x50" alt="" />${user_name} <i class="fa fa-bars"></i></span>
				  <div class="userdrop">
					  <div class="userdopinfo">
						  <img src="http://placehold.it/50x50" alt="" />
						  <h3>${user_name}</h3>
						  <span>${status}</span>
					  </div>
					  <a href="#" title=""><i class="flaticon-credit-card"></i>Dashboard</a>
					  <a href="#" title=""><i class="flaticon-avatar"></i>Profile</a>
					  <a href="#" title=""><i class="flaticon-coupon"></i>My Listings (${like}) </a>
					  <a href="#" title=""><i class="flaticon-note"></i>Notifications (${notification}) </a>
					  <a href="#" title=""><i class="flaticon-heart"></i>Favorites (${favorite})</a>
					  <a href="#" title=""><i class="flaticon-thumb-up"></i>Reviews</a>
				  </div>
			  </div>
			  <a href="#" title="" class="bellicon"><i class="fa fa-bell-o"></i><strong>3</strong></a>
			  <div class="extras">
				  <a href="add-listing.html" title=""><img src="images/icon1.png" alt="" /> Add Cafe</a>
			  </div>
			  <nav>
					  <ul>
					  <li>
					  <a href="#" title="">Home</a>
				  </li>
				  <li >
					  <a href="#" title="">Search</a>
				  </li>
				  <li >
					  <a href="#" title="">User</a>
				  </li>
						  </li>
					  </ul>
				  </nav>
		  </header>

		  <section>
	<div class="block remove-bottom double-gap-top">
		<div class="layer blackish">
			<div data-velocity="-.1" style="background: url(http://placehold.it/1920x850) repeat scroll 50% 422.28px transparent;" class="no-parallax parallax scrolly-invisible"></div><!-- PARALLAX BACKGROUND IMAGE -->	
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="iamusersec">
							<div class="iamuser">
								<div class="userimg"><img src="http://placehold.it/120x120" alt="" /></div>
								<div class="userinfos">
									<h3>${user_name}</h3>
									<span>${status}</span>
								</div>
							</div>
							<div class="iamuserstats">
								<span><i class="flaticon-avatar"></i>Followers ${followers}</span>
								<span><i class="flaticon-avatar"></i>Following ${following}</span>
								<a href="#" title=""><i class="flaticon-eraser"></i>Edit Profile</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="menubarsec">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<a href="#" title=""><i class="flaticon-credit-card"></i>Dashboard</a>
					<a href="#" title=""><i class="flaticon-avatar"></i>Profile</a>
					<a href="#" title=""><i class="flaticon-coupon"></i>My Listings (${like}) </a>
					<a href="#" title=""><i class="flaticon-note"></i>Notifications (${notification}) </a>
					<a href="#" title=""><i class="flaticon-heart"></i>Favorites (${favorite})</a>
					<a href="#" title=""><i class="flaticon-thumb-up"></i>Reviews</a>
				</div>
			</div>
		</div>
	</div>
</section>
  `;
    return profile_header;
  },

  makeReviewPiece: function () {
    let piece = `<div class="pbox">
	  <div class="reviewssec">
		  <div class="reviewthumb"> <img src="http://placehold.it/60x60" alt="" /> </div>
		  <div class="reviewinfo">
			  <h3>Ali TUFAN   <i>You posted a review on <strong>Shoreline Village</strong></i></h3>
			  <span>December 12, 2017 at 8:18 am</span>
			  <ul class="listmetas justrate"><li><span class="rated">3.5</span>3 Ratings</li></ul>
			  <p>We had the tasting menu here and it was one of the nicest meals I’ve ever had. The of the food service and surroundings it was marvellous.</p>
			  <div class="reviewaction">
				  <a href="#" title=""><i class="flaticon-back"></i> Reply</a>
				  <a href="#" title=""><i class="flaticon-eraser"></i> Edit</a>
				  <a href="#" title=""><i class="flaticon-dustbin"></i> Remove</a>
			  </div>
		  </div>
	  </div>
	  </div>`;
    return piece;
  },
  makeReview: function () {
    let review = `	<div class="leavecomment">
	<h3>Rate us and Write a Review</h3>
	<div class="upimg">
		<span>Upload images</span>
		<a href="#" title=""><img src="images/cloud.png" alt="" /></a>
		<input type="file" />
	</div>
	<div class="urrating">
		<span>Your Rating for this listing</span>
		<strong>Very Good</strong>
		<b>
			<i class="fa fa-star"></i>
			<i class="fa fa-star"></i>
			<i class="fa fa-star"></i>
			<i class="fa fa-star-o"></i>
			<i class="fa fa-star-o"></i>
		</b>

	</div>
	<form>
		<input placeholder="your@mail.com" type="Email">
		<input placeholder="Title" type="text">
		<textarea placeholder="Review"></textarea>
		<input value="Submit Review" type="submit">
	</form>
</div>
</div>
</div>`;
    return review;
  },
  makeHeader: function () {
    let header = `<div class="page-loading">
	<img src="images/loader.gif" alt="" />
	<span>Skip Loader</span>
</div>

<div class="theme-layout">
	
	<div class="responsiveheader">
		<div class="rheader">
			<span><img src="images/ricon.png" alt="" /></span>
			<div class="logo">
				<a href="#" title=""><img src="http://placehold.it/164x37" alt="" /></a>
			</div>
			<div class="extras">
				<span class="accountbtn"><i class="flaticon-avatar"></i></span>
			</div>
		</div>
		<div class="rnaver">
			<span class="closeresmenu"><i>x</i>Close</span>
			<div class="logo"><a href="#" title=""><img src="http://placehold.it/175x40" alt="" /></a></div>
			<div class="extras">
				<a href="add-listing.html" title=""><img src="images/icon1.png" alt="" /> Add Cafe</a>
			</div>
			<ul>
			<li>
				<a href="#" title="">Home</a>
			</li>
			<li >
				<a href="#" title="">Search</a>
			</li>
			<li >
				<a href="#" title="">User</a>
			</li>
		</ul>
		</div>
	</div><!-- Responsive header -->
	
	<header class="s4 dark">
		<div class="container fluid">
			<div class="logo">
				<a href="#" title=""><img src="http://placehold.it/164x37" alt="" /></a>
			</div>
			<div class="extras">
				<a href="add-listing.html" title=""><img src="images/icon1.png" alt="" /> Add Cafe</a>
				<span class="accountbtn"><i class="flaticon-avatar"></i></span>
			</div>
			<nav>
			<ul>
			<li>
				<a href="#" title="">Home</a>
			</li>
			<li >
				<a href="#" title="">Search</a>
			</li>
			<li >
				<a href="#" title="">User</a>
			</li>
		</ul>
			</nav>
		</div>
	</header>`;
    return header;
  },

  makeFooter: function () {
    let footer = `	<footer>
      <div class="block">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="footersec">
                          <div class="flogo"><a href="#" title=""><img src="http://placehold.it/175x40" alt="" /></a></div>
                          <ul>
                              <li><a href="#" title="">Home</a></li>
                              <li><a href="#" title="">Explore</a></li>
                              <li><a href="#" title="">Listings</a></li>
                              <li><a href="#" title="">Destinations</a></li>
                              <li><a href="#" title="">Pages</a></li>
                          </ul>
                          <span>Collins Street West, Victoria 8007, Australia.</span>
                          <span>+1 246-345-0695</span>
                          <span>info@example.com</span>
                          <div class="social">
                              <a href="#" title=""><i class="fa fa-facebook"></i></a>
                              <a href="#" title=""><i class="fa fa-twitter"></i></a>
                              <a href="#" title=""><i class="fa fa-instagram"></i></a>
                              <a href="#" title=""><i class="fa fa-pinterest"></i></a>
                              <a href="#" title=""><i class="fa fa-dribbble"></i></a>
                              <a href="#" title=""><i class="fa fa-google"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="bottomline">
          <a href="#scrollup" class="scrollup" title=""><i class="fa fa-angle-up"></i></a>
          <span>© 2018 Find&Go All rights reserved. Design by Creative Layers</span>
      </div>
  </footer>
`;
    return footer;
  },
  makePopup: function () {
    let popup = `<div class="popupsec">
        <div class="popup">
            <div class="accounttabs">
                <span class="closepopup"><i>+</i></span>
                <ul class="ctabs group">
                    <li><a href="#/one" class="active">Sign In</a></li>
                    <li><a href="#/two">Sign Up</a></li>
                </ul>
                <div id="content">
                    <div class="accountform" id="one">
                        <form class="loginform">
                            <div class="accountformfield">
                                <label>ID</label>
                                <input type="text" placeholder="Creative Layers" />
                            </div>
                            <div class="accountformfield">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <p class="c-label">
                                <input name="cb" id="cb1" type="checkbox"><label for="cb1">Remember me?</label>
                            </p>
                            <a href="#" title="">Lost your password</a>
                            <button type="submit">Sign In</button>
                        </form>
                        <div class="extraconnect">
                            <span>Or Connect With Social Networks</span>
                            <div class="social">
                                <a class="facebook" href="#" title=""><i class="fa fa-facebook"></i></a>
                                <a class="twitter" href="#" title=""><i class="fa fa-twitter"></i></a>
                                <a class="googleplus" href="#" title=""><i class="fa fa-google"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="accountform" id="two" style="display: none;">
                        <form class="loginform">
                            <div class="accountformfield">
                                <label>ID</label>
                                <input type="text" placeholder="Creative Layers" />
                            </div>
                            <div class="accountformfield">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div class="accountformfield">
                                <label>Name</label>
                                <input type="text" placeholder="Creative Layers" />
							</div>
							<div class="accountformfield">
                                <label>Email</label>
                                <input type="email" placeholder="example@example.com" />
							</div>
							<div class="accountformfield">
                                <label>BirthDate</label>
                                <input type="text" placeholder="ex) 90년도 12월 12일생 -> 19901212" />
							</div>
							<div class="accountformfield">
							<label>Gender</label>
							<select class="cdropshere">
							<option>Select</option>
							<option>Female</option>
							<option>Male</option>
						</select>
							</div>

							
                            <div class="terms">By creating an account you agree to our <a href="#" title="">Terms and Conditions</a> and our <a href="#" title="">Privacy Policy</a></div>
                            <button type="submit">Sign Up</button>
                        </form>
                        <div class="extraconnect">
                            <span>Or Connect With Social Networks</span>
                            <div class="social">
                                <a class="facebook" href="#" title=""><i class="fa fa-facebook"></i></a>
                                <a class="twitter" href="#" title=""><i class="fa fa-twitter"></i></a>
                                <a class="googleplus" href="#" title=""><i class="fa fa-google"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    return popup;
  },
  makeHalfMap: function () {
    let half_map = `<div class="half-map">
      <div id="map_div" class="map">&nbsp;</div>
  </div>`;
    return half_map;
  },
};
