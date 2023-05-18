{
  const sum = 9.4;
  const sum2 = "12.12564";

  console.log(Math.round(sum)); // 소수점 첫째 자리에서 반올림하여 정수 반환
  console.log(Math.ceil(sum)); // 소수점 첫째 자리에서 무조건 올림하여 정수 반환
  console.log(Math.floor(sum)); // 소수점 첫째 자리에서 무조건 내림하여 정수 반환
  console.log(Math.pow(2, 4)); // 거듭제곱값을 반환
  console.log(parseInt(sum2)); // 문자를 숫자로 변환
  console.log(Number(sum2)); // 문자를 숫자로 변환
}

{
  const num = Math.random();
  console.log(num);

  // 0 ~ 9 사이의 정수 출력
  console.log(Math.floor(Math.random() * 10));

  // 1 ~ 10
  console.log(Math.floor(Math.random() * 10) + 1);

  // 배열 랜덤 출력
  const food = ["라면", "김밥", "우동", "칼국수", "햄버거"];
  const randomNum = Math.floor(Math.random() * food.length);
  console.log(food[randomNum]);
}
