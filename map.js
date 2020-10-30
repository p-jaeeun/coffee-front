class MapApi {
  constructor() {
    this.latlng;
  }

  getHalfMap(visited_arr) {
    //it needs https server
    // navigator.geolocation.getCurrentPosition((position) => {
    // 		let lat = position.coords.latitude
    // 		let lng = position.coords.longitude
    // 		console.log("lat: " + lat)
    // 		console.log("lng: " + lng)
    // 		let latlng = new kakao.maps.latLng(lat, lng)
    // 		var mapContainer = document.getElementById('js-half-map')// 지도를 표시할 div
    // 		var mapOption = {
    // 		        center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
    // 		        level: 4, // 지도의 확대 레벨
    // 		        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
    // 		    };

    // 		// 지도를 생성한다
    // 		var map = new kakao.maps.Map(mapContainer, mapOption);
    // 		var marker = new kakao.maps.Marker(latlng)
    // });
    let center = new kakao.maps.LatLng(37.5554251714123, 126.971865111592321); //현재위치 기반 -> https여야함
    var mapContainer = document.getElementById("js-half-map"); // 지도를 표시할 div
    var mapOption = {
      center: center, // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
      mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };

    // 지도를 생성한다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    for (let i = 0, max = visited_arr.length; i < max; i++) {
      let latlng = new kakao.maps.LatLng(
        visited_arr[i].lat,
        visited_arr[i].lng
      );

      console.log("latlng:" + latlng + ", i:" + i);

      let marker = new kakao.maps.Marker();
      marker.setPosition(latlng);
      marker.setClickable(true);
      marker.setMap(map);
      //   marker.setPosition(latlng);
      //   marker.getMap();

      kakao.maps.event.addListener(marker, "click", function () {
        // 마커 위에 인포윈도우를 표시합니다
        let iwRemoveable = true;
        let infowindow = new kakao.maps.InfoWindow({
          map: map, // 인포윈도우가 표시될 지도
          position: latlng,
          content: visited_arr[i].content,
          removable: iwRemoveable,
        });

        console.log("num-i:" + i);
        console.log("info-window-clicked!");
        console.log("position:" + latlng);
        console.log("content:" + visited_arr[i].content);
        infowindow.open(map, marker);
      });
    }

    // 지도 중심 좌표 변화 이벤트를 등록한다
    kakao.maps.event.addListener(map, "center_changed", function () {
      console.log(
        "지도의 중심 좌표는 " + map.getCenter().toString() + " 입니다."
      );
    });

    // 지도 확대 레벨 변화 이벤트를 등록한다
    kakao.maps.event.addListener(map, "zoom_changed", function () {
      console.log("지도의 현재 확대레벨은 " + map.getLevel() + "레벨 입니다.");
    });

    // 지도 영역 변화 이벤트를 등록한다
    kakao.maps.event.addListener(map, "bounds_changed", function () {
      var mapBounds = map.getBounds(),
        message =
          "지도의 남서쪽, 북동쪽 영역좌표는 " +
          mapBounds.toString() +
          "입니다.";

      console.log(message);
    });

    // 지도 시점 변화 완료 이벤트를 등록한다
    kakao.maps.event.addListener(map, "idle", function () {
      var message =
        "지도의 중심좌표는 " +
        map.getCenter().toString() +
        " 이고," +
        "확대 레벨은 " +
        map.getLevel() +
        " 레벨 입니다.";
      console.log(message);
    });

    // 지도 클릭 이벤트를 등록한다 (좌클릭 : click, 우클릭 : rightclick, 더블클릭 : dblclick)
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      console.log(
        "지도에서 클릭한 위치의 좌표는 " +
          mouseEvent.latLng.toString() +
          " 입니다."
      );
    });
  }

  getCafeInfoMap(cafe_data) {
    let center = new kakao.maps.LatLng(cafe_data.lat, cafe_data.lng);
    var mapContainer = document.getElementById("js-mini-map"); // 지도를 표시할 div
    var mapOption = {
      center: center, // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
      mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };

    // 지도를 생성한다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    let latlng = new kakao.maps.LatLng(cafe_data.lat, cafe_data.lng);

    let marker = new kakao.maps.Marker();
    marker.setPosition(latlng);
    marker.setClickable(true);
    marker.setMap(map);

    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      let iwRemoveable = true;
      let infowindow = new kakao.maps.InfoWindow({
        map: map, // 인포윈도우가 표시될 지도
        position: latlng,
        content: cafe_data.content,
        removable: iwRemoveable,
      });

      infowindow.open(map, marker);
    });

    // 지도 중심 좌표 변화 이벤트를 등록한다
    kakao.maps.event.addListener(map, "center_changed", function () {
      console.log(
        "지도의 중심 좌표는 " + map.getCenter().toString() + " 입니다."
      );
    });

    // 지도 확대 레벨 변화 이벤트를 등록한다
    kakao.maps.event.addListener(map, "zoom_changed", function () {
      console.log("지도의 현재 확대레벨은 " + map.getLevel() + "레벨 입니다.");
    });

    // 지도 영역 변화 이벤트를 등록한다
    kakao.maps.event.addListener(map, "bounds_changed", function () {
      var mapBounds = map.getBounds(),
        message =
          "지도의 남서쪽, 북동쪽 영역좌표는 " +
          mapBounds.toString() +
          "입니다.";

      console.log(message);
    });

    // 지도 시점 변화 완료 이벤트를 등록한다
    kakao.maps.event.addListener(map, "idle", function () {
      var message =
        "지도의 중심좌표는 " +
        map.getCenter().toString() +
        " 이고," +
        "확대 레벨은 " +
        map.getLevel() +
        " 레벨 입니다.";
      console.log(message);
    });

    // 지도 클릭 이벤트를 등록한다 (좌클릭 : click, 우클릭 : rightclick, 더블클릭 : dblclick)
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      console.log(
        "지도에서 클릭한 위치의 좌표는 " +
          mouseEvent.latLng.toString() +
          " 입니다."
      );
    });
  }

  registerCafe(html_class) {
    //based user location -> it needs https server

    // navigator.geolocation.getCurrentPosition((position) => {
    // 		let lat = position.coords.latitude
    // 		let lng = position.coords.longitude
    // 		console.log("lat: " + lat)
    // 		console.log("lng: " + lng)
    // 		let latlng = new kakao.maps.latLng(lat, lng)
    // 		var mapContainer = document.getElementById('js-half-map')// 지도를 표시할 div
    // 		var mapOption = {
    // 		        center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
    // 		        level: 4, // 지도의 확대 레벨
    // 		        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
    // 		    };

    // 		// 지도를 생성한다
    // 		var map = new kakao.maps.Map(mapContainer, mapOption);
    // 		var marker = new kakao.maps.Marker(latlng)
    // });

    let center = new kakao.maps.LatLng(37.5554251714123, 126.971865111592321); //test data
    var mapContainer = document.getElementById(html_class); // 지도를 표시할 div
    var mapOption = {
      center: center, // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
      mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };

    // 지도를 생성한다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);

      var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
      message += "경도는 " + latlng.getLng() + " 입니다";

      console.log(message);
      this.latLng = latlng;
      console.log("get:" + this.latLng);
      console.log("get type:" + typeof this.latLng);
    });
  }
}

let arr = [
  {
    lat: 37.55477440293975,
    lng: 126.96428280969594,
    content: `	<section class="info-box">
    <div class="cafe-name">
        <h4>{cafe_name}</h4>
    </div>
    <div calss="cafe-img-info-box">
        <img src="{cafe_img_info_box}" alt="cafe_img_info_box">
    </div>
    <div class="address">
        <h5>{address}</h5>
    </div>
</section>`,
  },
  {
    lat: 37.553876749269854,
    lng: 126.9779542924915,
    content:
      '<div style="padding:0 5px;background:#fff;">HTML코드를 입력해주세요 2222222:D</div>',
  },
  {
    lat: 37.55077699138689,
    lng: 126.9762803443654,
    content:
      '<div style="padding:0 5px;background:#fff;">HTML코드를 입력해주세요3333333 :D</div>',
  },
];

let obj = {
  lat: 37.55477440293975,
  lng: 126.96428280969594,
  content: `	<section class="info-box">
    <div class="cafe-name">
        <h4>{cafe_name}</h4>
    </div>
    <div calss="cafe-img-info-box">
        <img src="{cafe_img_info_box}" alt="cafe_img_info_box">
    </div>
    <div class="address">
        <h5>{address}</h5>
    </div>
</section>`,
};
let map = new MapApi();
// map.getHalfMap(arr);
// map.getCafeInfoMap(obj);
map.registerCafe("js-addcafe-map");
