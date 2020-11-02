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

  search(input_class, search_class, userData) {
    let input = document.querySelector(input_class);
    let search = document.querySelector(search_class);
    let mapContainer = document.getElementById("js-addcafe-map"); // 지도를 표시할 div
    let mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
      mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };

    // 지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);
    let geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다

    // 키워드로 장소를 검색합니다
    search.addEventListener("click", (e) => {
      console.log("check button");
      geocoder.addressSearch(input.value, (result, status) => {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          let marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          let infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${input.value}</div>`,
          });
          infowindow.open(map, marker);
          map.setCenter(coords);

          //observer에 값을 넘김
          this.observer.notify("search", coords, userData, input);
        }
      });
    });
  }
  getLoc() {
    return this.latlng;
  }
  Test() {
    // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    var mapContainer = document.getElementById("js-addcafe-map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch("이태원 맛집", placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }
  // registerCafe(html_class, callback) {
  //   //based user location -> it needs https server

  //   // navigator.geolocation.getCurrentPosition((position) => {
  //   // 		let lat = position.coords.latitude
  //   // 		let lng = position.coords.longitude
  //   // 		console.log("lat: " + lat)
  //   // 		console.log("lng: " + lng)
  //   // 		let latlng = new kakao.maps.latLng(lat, lng)
  //   // 		var mapContainer = document.getElementById('js-half-map')// 지도를 표시할 div
  //   // 		var mapOption = {
  //   // 		        center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
  //   // 		        level: 4, // 지도의 확대 레벨
  //   // 		        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
  //   // 		    };

  //   // 		// 지도를 생성한다
  //   // 		var map = new kakao.maps.Map(mapContainer, mapOption);
  //   // 		var marker = new kakao.maps.Marker(latlng)
  //   // });

  //   let center = new kakao.maps.LatLng(37.5554251714123, 126.971865111592321); //test data
  //   var mapContainer = document.getElementById(html_class); // 지도를 표시할 div
  //   var mapOption = {
  //     center: center, // 지도의 중심좌표
  //     level: 4, // 지도의 확대 레벨
  //     mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
  //   };

  //   // 지도를 생성한다
  //   var map = new kakao.maps.Map(mapContainer, mapOption);

  //   // 지도를 클릭한 위치에 표출할 마커입니다
  //   var marker = new kakao.maps.Marker({
  //     // 지도 중심좌표에 마커를 생성합니다
  //     position: map.getCenter(),
  //   });
  //   // 지도에 마커를 표시합니다
  //   marker.setMap(map);

  //   kakao.maps.event.addListener(map, "click", function (mouseEvent) {
  //     // 클릭한 위도, 경도 정보를 가져옵니다
  //     var latlng = mouseEvent.latLng;

  //     // 마커 위치를 클릭한 위치로 옮깁니다
  //     marker.setPosition(latlng);

  //     var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
  //     message += "경도는 " + latlng.getLng() + " 입니다";

  //     console.log(message);
  //     this.latLng = latlng;
  //     console.log("get:" + this.latLng);
  //     console.log("get type:" + typeof this.latLng);

  //     if (typeof callback === "string") {
  //       callback = this[callback(latlng)];
  //     } else if (typeof callback === "function") {
  //       callback.call(this, latlng);
  //     }
  //   });
  // }
}
