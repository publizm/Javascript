// for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
// 기대값 9, 7, 5, 3, 1

// type.1 증감식을 할당연산자 +=를 사용하여 적용
for (let i = 9; i > 0; i -= 2) {
  console.log(i);
}

console.log('------------------------');

// type.2 if문을 이용하여 적용
for (let j = 9; j > 0; j--) {
  // 암묵적 변환을 이용한 방법
  if (j % 2) console.log(j);
}