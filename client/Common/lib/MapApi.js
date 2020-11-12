import { Observer } from "./Observer.js";

export class MapApi {
  constructor() {
    this.observer = new Observer();
    this.self = this;
  }

  getHalfMap(visited_arr) {
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

  search(userData) {
    let input = userData.get("cafe_location");

    let mapContainer = document.getElementById("js-addcafe-map"); // 지도를 표시할 div
    let mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
      mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };

    // 지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);
    let geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(input, (result, status) => {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        let infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${input}</div>`,
        });
        infowindow.open(map, marker);
        map.setCenter(coords);

        //observer에 값을 넘김
        this.observer.notify("search", coords, userData, input);
      }
    });
  }
}
