function uploadImgPreview() {
  // @breif 업로드 파일 읽기
  let fileList = document.getElementById("js-upload").files;
  // @breif 업로드 파일 읽기
  function readAndPreview(fileList) {
    // @breif 이미지 확장자 검사
    if (/\.(jpe?g|png|gif)$/i.test(fileList.name)) {
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          let image = new Image();
          image.width = "264";
          image.height = "264";
          image.title = fileList.name;
          image.src = this.result;
          // @details 이미지 확장자 검사
          document.getElementById("js-thumnail").appendChild(image);
        },
        false
      );

      // @details readAsDataURL( )을 통해 파일의 URL을 읽어온다.

      if (fileList) {
        reader.readAsDataURL(fileList);
      }
    }
  }

  if (fileList) {
    [].forEach.call(fileList, readAndPreview);
  }
}

// function fileLoad (load,prev){

//   var upload = document.getElementById(load);
//   var preview = document.getElementById(prev)

//       var reader = new FileReader();
//      /* reader 시작시 함수 구현 */
//      reader.onload = (function () {

//      this.image = document.createElement('img');
//      var vm = this;

//      return function (e) {
//          /* base64 인코딩 된 스트링 데이터 */
//          vm.image.src = e.target.result
//      }
//  })()

//  upload.addEventListener('change',function (e) {
//      var get_file = e.target.files;

//      if(get_file){
//          reader.readAsDataURL(get_file[0]);
//      }

//      preview.appendChild(image);
//  })

//   }
