# Lecture 05: jQuery
jquery를 빠르게 배우기 위해 필요한 내용을 정리한 강의자료입니다.
<br>

## 목차
## jQuery를 배우는 이유
jQuery는 보다 생산적으로 Javascript 개발을 할 수 있도록 도와주는 Javascript 라이브러리입니다.<br> 예를들어 순수 Javascript로는 복잡한 DOM 제어, Event Handling, Animation, Ajax 등을 Jquery를 이용하면 간단하게 구현할 수 있습니다.
## jQuery 시작하기
jQuery를 사용하기 위해서는 두가지의 방법이 있습니다.
1. Jquery Library 파일을 직접 다운하여 프로젝트 폴더에 포함.
2. CDN(Content Delivery Network)을 이용.
<br>
자세한 방법은 [링크](https://www.w3schools.com/jquery/jquery_get_started.asp)를 참고해주세요.

## jQuery 기본 문법
## 선택자(selector)

기본 문법은 다음과 같습니다.<br>
**$(selector).action()**
<br>
예를 들어 아래는 test라는 ID를 가진 Element들을 숨기는 순수 자바스크립트 코드입니다.
```javascript
document.getElementById(".test").style.display ="none";
```
위의 코드를 Jquery를 이용하여 작성하면 아래와 같습니다. 한 눈에 보기에도 간단해졌습니다.
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

Jquery는 다양하고 유용한 이벤트들을 지원합니다. kedma 코드는 Front-end 4강에서 다룬 바닐라 JS로 이벤트를 다루는 두가지 방법입니다.
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
# jQuery document ready
