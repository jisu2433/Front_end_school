//문제14 : 3의 배수 인가요?
//영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.

//입력으로 랜덤한 숫자 n이 주어집니다.

//만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.
const n = prompt();
if (n%3 == 0){
    console.log("짝");
}else{
    console.log(n);
}
//해설 : 3으로 나눠서 나머지가 0이면 짝 출력, 아니면 그냥 숫자 출력