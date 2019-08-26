# Lecture 05: jQuery
jquery를 빠르게 배우기 위해 필요한 내용을 정리한 강의자료입니다.
<br>

## 목차
## jQuery를 배우는 이유
jQuery는 보다 생산적으로 Javascript 개발을 할 수 있도록 도와주는 Javascript 라이브러리입니다.<br> 예를들어 순수 Javascript로는 복잡한 DOM 제어, Event Handling, Animation, Ajax 등을 Jquery를 이용하면 간단하게 구현할 수 있습니다. <br>
또한 jQuery는 대부분의 웹 브라우저와 호환된다는 장점이 있습니다.
## jQuery 시작하기
jQuery를 사용하기 위해서는 두가지의 방법이 있습니다.
1. Jquery Library 파일을 직접 다운하여 프로젝트 폴더에 포함.
2. CDN(Content Delivery Network)을 이용.
<br>
자세한 방법은 
[링크](https://www.w3schools.com/jquery/jquery_get_started.asp)를 참고해주세요.

## jQuery 기본 문법
## 선택자(selector)

기본 문법은 다음과 같습니다.<br>
**$(selector).action()**
<br>
예를 들어 아래는 test라는 ID를 가진 Element들을 숨기는 순수 자바스크립트 코드입니다.
```javascript
document.getElementById(".test").style.display ="none";
```
위의 코드를 Jquery를 이용하여 작성하면 아래와 같습니다.
```javascript
$("#test").hide()
```
Jquery의 큰 장점 중 하나는 강력한 **선택자**입니다. CSS 선택자 문법과 유사한 선택자를 지원합니다.
```javascript
$(this).hide() //현재 Element 숨기기
$("p").hide() //모든 p 태그 숨기기
$(".test").hide() //test라는 클래스를 가진 Element 숨기기
$("#test").hide() //test라는 ID를 가진 Element 숨기기
```
 
## 이벤트(Event)

Jquery는 다양하고 유용한 이벤트들을 지원합니다. 다음 코드는 Front-end 4강에서 다룬 바닐라 JS로 이벤트를 다루는 두가지 방법입니다.
```javascript
//Property Listner
let t1 = document.getElementById('target1');
t1.onclick = function(){
    alert('Hello world');
}

//addEventListner()
let t2 = document.getElementById('target2');
t2.addEventListner('click',alert_func)
function alert_func(){
    alert('Hello world');
}
```   
위 코드를 Jquery를 이용하여 작성하면 다음과 같습니다.
```javascript
$("#target1").click(function(){
    alert('Hello world');
})

$('#target2').on('click',function(){
    alert('Hello world')
})
```
<br>[링크](https://www.w3schools.com/jquery/jquery_ref_events.asp)는 여러가지 jQuery 이벤트를 정리한 문서입니다. 
## 효과(Effect)
jQuery를 이용하여 간단하게 Element에 효과를 줄 수 있습니다.
```javascript
$("#show").click(function(){
  $("p").show();
});
```
다음 링크에서 자주 사용하는 jQuery 효과들을 직접 확인 할 수 있습니다. 특히 토글메뉴 등 동적인 페이지를 구현할 때 매우 유용합니다. 
<br>

[Hide&Show](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show) /
[Toggle](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_toggle)
<br>
[FadeIn](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadein) /
[FadeOut](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadeout) /
[FadeToggle](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadetoggle)
<br>
[SlideDown](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_down) /
[SlideUp](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_up) /
[SildeToggle](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle)
<br>
[Animate](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1)
<br>

[링크](https://www.w3schools.com/jquery/jquery_ref_effects.asp)는 여러가지 jQuery 효과를 정리한 문서입니다. 
## DOM 조작
text(), html(), val() 메소드를 통해 Element의 Content 값을 **얻을** 수 있습니다. 
```javascript
$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
});
$("#btn1").click(function(){
  alert("Value: " + $("#test").val());
});
```
[예제링크](https://codepen.io/facerain/pen/VwZpxpv)
<br>
<br>
위의 세가지 메소드를 통해 Element의 Content 값을 **변경**할 수도 있습니다.
```javascript
$("#btn1").click(function(){
  $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
  $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
  $("#test3").val("Dolly Duck");
});
```
[예제링크](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_html_set)
<br>
<br>
append(),prepend() 메소드를 통해 새로운 Element를 추가할 수 있습니다.
```javascript
function appendText() {
  let txt1 = "<p>Text.</p>";               // Create element with HTML  
  let txt2 = $("<p></p>").text("Text.");   // Create with jQuery
  let txt3 = document.createElement("p");  // Create with DOM
  txt3.innerHTML = "Text.";
  $("body").append(txt1, txt2, txt3);      // Append the new elements 
}
```
[예제링크](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_append2)
<br>
<br>


## 예제(Example)
[링크](https://codepen.io/eclairereese/pen/qZxvPz)
: 간단한 To-do list 구현
<br> 
[링크](https://codepen.io/renato2016/pen/PvWwNp)
: 좌측 메뉴 구현
<br>
[링크](https://www.w3schools.com/howto/default.asp): 다양한 웹 구성 요소 코드(Ex.사진슬라이드, 메뉴바, 로그인폼)