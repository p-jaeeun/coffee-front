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

  makeMarker(id, latitude, longitude) {
    let float_latitude = parseFloat(latitude);
    let float_longitude = parseFloat(longitude);
    var mapContainer = document.getElementById(id), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(float_latitude, float_longitude), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var imageSrc =
        "https://www.flaticon.com/svg/static/icons/svg/190/190965.svg", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.


    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다

  // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      image: markerImage, // 마커이미지 설정
    });

    // 마커가 지도 위에 표시되도록 설정합니다
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
    
    var markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ),
  }
}
