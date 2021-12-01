// 문제1 : 배열의 삭제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

// 내가 푼 방법
var nums = [100, 200, 300, 400, 500];

nums.length = 3;

console.log(nums);
// nums길이 3으로 설정
// 3개인 100, 200, 300 출력

// 다른 방법
nums.pop();
nums.pop();
// pop : 가장 끝에 있는 배열 삭제하는 함수
console.log(nums);
