//문제27 : 객체 만들기
//첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
//두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

let names = "Yujin Hyewon";
let scores = "70 100";

let obj = [];

// 출력
names = names.split(" "); 
scores = scores.split(" ");

console.log(names[0], scores[0], names[1], scores[1]);

//강의 답
const keys = prompt().split(" ");
const values = prompt().split(" ");
let obj = {};

for(let i=0; i<keys.length; i++){
    obj[keys[i]] = values[i];
}

console.log(obj);
//Basic_JS;
// 입력, 출력 데이터 저장할 변수(바구니)
// let => 추가적인 할당이 있을 경우 혹은 있을 수 있는 경우에 사용

// 사고 순서
// 1. 입력이 어떻게 되는가? ====> 이름을 공백을 기준으로 2개, 점수를 공백을 기준으로 2개
// 2. 출력이 어떻게 되는가? ====> 객체 타입으로 출력을 한다.
// 3. 입력받은걸 어떻게 객체 타입으로 만들 것인가?
// 4. 한 줄로된 문자열(이름, 점수)을 어떻게 나눠줄 것인가? ====> split을 사용한다.
// 5. split으로 쪼갠 데이터(배열)를 어떻게 객체 타입으로 만들 것인가? ====> 객체 변수에 넣어주면돼
