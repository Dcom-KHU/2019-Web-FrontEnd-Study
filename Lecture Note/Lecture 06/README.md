# Lecture 06: AJAX with jQuery
## AJAX란?
AJAX (Asynchronous JavaScript and XML)
<br>
AJAX는 Javascript를 이용하여 클라이언트와 서버간의 비동기 통신으로 XML데이터를 주고받는 기술입니다. AJAX를 이용하면 전체 페이지를 새로고침하지 않고도 원하는 페이지의 일부분만을 업데이트 할 수 있습니다. 즉, 불필요한 리소스 낭비를 줄일 수 있습니다.
<br>
더욱 자세한 AJAX 설명은 [링크](https://visualize.tistory.com/402)에서 확인해주세요!
<br>
<br>
## AJAX 구현 with jQuery
jQuery를 이용하면 AJAX를 매우 간단하게 구현할 수 있습니다.
<br>
<br>
**기본구문**
```javascript
$.ajax({
    url:'/api', //요청 보낼 경로
    type:'POST', // GET, POST 등 HTTP 메소드
    data:{'user':'root'}, //보낼 데이터 (데이터 타입은 주로 JSON을 사용합니다)
    success: function(data) { //서버로부터 응답이 성공일 때 실행
    },
    error: function(err) { //서버로부터 응답에 오류가 있을 때 실행
    }
});
```
이외에도 다양한 jquery AJAX 메소드는 [링크](http://blog.naver.com/PostView.nhn?blogId=software705&logNo=220969995944&parentCategoryNo=&categoryNo=9&viewDate=&isShowPopularPosts=false&from=postView)에서 확인할 수 있습니다.

