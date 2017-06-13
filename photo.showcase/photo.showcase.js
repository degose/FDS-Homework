// ! photo.showcase.js




// selector: query,
// selectorAll: queryAll

// var queryAll = function(selector, context){
//    validateError(selector, '!string', '첫번째 인자는 CSS 선택자 문자열이어야 합니다.');
//    context = context || document;
//    validateElementNodeOrDocument(context);
//    return context.querySelectorAll(selector);
// };
// var query = function(selector, context){
//    return queryAll(selector, context)[0];
// };





// 이미지 리스트(tablist)를 클릭했을 때 페이지가 새로고침 되지 않고 이미지 영역(photo-showcase)에 연결된 이미지(photo-showcase-indicator)만 바뀌는 기능을 만든다.

// 링크로 이동하는 기본 동작은 실행시키면 안된다. => return false;??

// 

(function(global, _){
   'use strict';
   
   var container = _.selector('.photo-showcase-container'); // 왜 ('*') 이거나 ('*',body), ('.demo') 안될까?? 
   var showcase = _.selector('.photo-showcase',container);
   // console.log(shsowcase);
   var showcase_view = _.selector('img',showcase);
   var indicators = _.selectorAll('.photo-showcase-indicator',container);
   // console.log(indicators);


   var setPhotoShowcase = function () {
      var indicator_img = _.selector('img', this);
      var index = indicator_img.src.split('=')[1];
      var path = showcase_view.src.split('=')[0] + '=' + index;
      showcase_view.src = path;

      // 그런데 이렇게 false를 줘도 되는건가??
      return false;
   };

   // 찾은 대상(문서 객체)의 이벤트 속성에 함수를 연결
   for ( var i=0, l=indicators.length; i<l; ++i ) {
      var indicator = indicators.item(i);
      indicator.onclick = setPhotoShowcase;
   }

})(window, window.FDS);



// (function(global, _){
//   'use strict';

//   // var photolist = [];
//   // var photo_info = {
//   //   total: 10,
//   //   width: 900,
//   //   height: 420
//   // }
//   // for ( var i=0; i<photo_info.total; i++ ) {
//   //   var path = 'https://unsplash.it/'+photo_info.width+'/'+photo_info.height+'?image=' + i;
//   //   photolist.push(path);
//   // }
//   // console.log(photolist.join(' '));

//   // DOM 제어를 목적으로 하는 문서 객체를 탐색 찾아 변수에 할당.
//   var container     = _.selector('.photo-showcase-container');
//   var showcase      = _.selector('.photo-showcase', container);
//   var showcase_view = _.selector('img', showcase);
//   var indicators    = _.selectorAll('.photo-showcase-indicator', container);

//   var setPhotoShowcase = function() {
//     var indicator_img = _.selector('img', this);
//     var index = indicator_img.src.split('=')[1];
//     var path = showcase_view.src.split('=')[0] + '=' + index;
//     showcase_view.src = path;
//     return false;
//   };

//   // 찾은 대상(문서 객체)의 이벤트 속성에 함수를 연결
//   for ( var i=0, l=indicators.length; i<l; ++i ) {
//     var indicator = indicators.item(i);
//     indicator.onclick = setPhotoShowcase;
//   }

// })(window, window.FDS);