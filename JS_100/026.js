//문제26 : 행성 문제2
//우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
//이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

//행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

let a = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "혜왕성"];
let b = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
const n = prompt("행성의 이름을 입력하세요.");
console.log(b[a.indexOf(n)]);
// n은 무조건 숫자여야함
// b와 매칭되는 것을 출력해야함
// 화성 ==> 어떻게 숫자로 바꿀 수 있을까?
// 구글링 >>>>> 자바스크립트 배열 인덱스 추출? 변환? 확인?
// b["화성"]; ==> Mars

// 강의 답
const plants = {
 '수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};

const name = prompt("행성의 이름을 입력하세요.");

console.log(planets[name]);