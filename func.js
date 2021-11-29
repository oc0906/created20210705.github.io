var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 중심좌표
        level: 3 // 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성
var map = new kakao.maps.Map(mapContainer, mapOption);

// 좌표 지정
var points = [
  {
    title: '1',
    latlng: new kakao.maps.LatLng(33.452278, 126.567803)
  },
  {
    title: '2',
    latlng: new kakao.maps.LatLng(33.452671, 126.574792)
  },
  {
    title: '3',
    latlng: new kakao.maps.LatLng(33.451744, 126.572441)
  }
];

// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성
var bounds = new kakao.maps.LatLngBounds();

var i, marker; // 지정된 좌표에 마커 추가, LatLngBounds 객체에 좌표 추가
for (i = 0; i < points.length; i++) {
    marker = new kakao.maps.Marker({
      map: map,
      position : points[i].latlng,
      title: points[i].title
     });
    //marker.setMap(map);

    bounds.extend(points[i].latlng);
}

//지도 중심으로 부드럽게 이동하는 함수
function panTo() {
    // 이동할 위도 경도 위치를 생성
    var moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);

    // 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동.
    map.panTo(moveLatLon);
}

// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정하는 함수
function setBounds() {
    // 지도의 중심좌표와 레벨이 변경될 수 있음
    map.setBounds(bounds);
}
