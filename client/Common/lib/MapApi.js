export class MapApi {
  constructor() {}

  makeMiniMap(latitude, longitude) {
    let float_latitude = parseFloat(latitude);
    let float_longitude = parseFloat(longitude);
    var container = document.getElementById("js-mini-map"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(float_latitude, float_longitude), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options);
  }

  makehalfMap(latitude, longitude) {
    let float_latitude = parseFloat(latitude);
    let float_longitude = parseFloat(longitude);
    var container = document.getElementById("js-half-map"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(float_latitude, float_longitude), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options);
  }

  makeMarker(id, latitude, longitude) {
    let float_latitude = parseFloat(latitude);
    let float_longitude = parseFloat(longitude);
    var mapContainer = document.getElementById(id), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(float_latitude, float_longitude), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

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

      console.log(`var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
      message += "경도는 " + latlng.getLng() + " 입니다"`);

      var resultDiv = document.getElementById("clickLatlng");
      resultDiv.innerHTML = message;
    });
  }
}
