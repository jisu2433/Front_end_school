## 함수
* 함수를 보면 구조파악이 쉽다.
* 함수는 재사용하기 좋다.

### 지역변수 전역변수
* 파선아실 : 파라미터 : 선언, 아규먼트 : 실행
* paramete : 변수명
* argument : 값
* 전역변수, 지역변수 여부는 키워드가 결정하는 것이 아니다.
* 위치가 중요하다.
```javascript
var z = 100;
function sum(x){//x는 매개변수(paramete)이면서 지역변수(local val)
    var y = 50; //y는 지역변수
    z = z + y;
    return x + y;
}
document.write(sum(10));//10은 전달인자(argument)
document.write('<br>');
document.write(y);

//함수 선언문
//어디서든지 sum호출가능
document.write(sum(10, 20));
function sum(x, y){
    return x + y;
}

//함수 표현식
let sumXY = function(x, y){
    return x + y;
};
let sumXYcopy = sumXY;
document.write(sumXYcopy(10, 20), '<br>');

//콜백함수
//나중에 호출되는 함수
function sum(x, y, c){
    c(x + y);
    return x + y;
}

function documentWrite(s){
    document.write('콜백함수',s);
}

sum(10, 20, documentWrite)
```
### 호이스팅이란?
* 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것이다.
* 함수 선언문에서는 호이스팅이 일어난다.
* 함수 표현식은 호이스팅이 일어나지 않는다
```javascript
    console.log(add1(10, 20));
    console.log(add2(10, 20));
    
    function add1(x, y) {
        return x + y;
    }

    console.log(mul(10, 20));
    let mul = function (a, b) {
        return a * b; // 적용X
    }

    function add2(x, y) {
        return x + y;
    }
//결과 : 30, 30
//호이스팅 되어서 위로 올라간다.
```
