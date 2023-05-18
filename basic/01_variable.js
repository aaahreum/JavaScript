// Variable 변수
// var, let, const

// 1. var
// 읽기, 쓰기 가능
// 블럭을 무시
{
  var userName = "Alice";
  userName = "Picaso";
}

console.log(userName);

// 2. let
// 읽기, 쓰기 가능
{
  let title = "html";
  console.log(title);

  title = "css";
  console.log(title);
}

// 3. const
// 상수 - 읽기만 가능 (변하지 않는 것)
{
  const title = "html";
  console.log(title);

  //   title = "css";
}

// 4. 변수의 데이터 타입 - 자료형
// 원시데이터 - string , numbe, boolean, null, undefined
// object : 싱글데이터를 묶어놓은 데이터
// &, _ 가능
// class 예약어 불가
// 첫 글자 숫자 불가

// 문자형 String
{
  const name1 = "Alice";
  const name2 = "Alice";

  const firstName = "John";
  const lastName = "Snow";

  const fullName = firstName + " " + lastName;
  console.log(fullName);
  console.log(`${firstName} ${lastName}`);
}

// 숫자형 Number
{
  const num = 10;
  const count = 12.5;
  console.log(`값은 ${num}이고, 타입은 ${typeof num}입니다.`);

  const a = 1 / 0;
  const b = -1 / 0;
  const c = "html" / 100;

  console.log(a);
  console.log(b);
  console.log(c);
}

// Boolean
{
  const a = true;
  const b = false;

  const name = "Alice";
  const age = 16;

  console.log(name == "Alice");
  console.log(age == "17");
}

// null - 존재하지 않는 값
{
  const fall = null;
}

// undefined - 값이 할당되지 않음
{
  let winter;
  console.log(winter);
}

// 대화상자 alert, prompt, confirm
{
  //   const name = window.prompt("이름을 입력하세요.", "영업팀");
  //   alert(`안녕하세요 ${name}님, 환영합니다.`);
  //   const isCheck = confirm("확인하였습니까?");
  //   console.log(isCheck);
}

// 동적타입 -
{
  let word = "winter";
  console.log(typeof word);
  word = 100;
  console.log(typeof word);
}

{
  //   const mathScore = prompt("수학점수는?");
  //   const engScore = prompt("영어점수는?");
  //   const score = (Number(mathScore) + Number(engScore)) / 2;
  //   alert(score);
}

{
  console.log(String(1234), String(true), String(false), String(null), String(undefined));

  console.log(Number("1234"), Number("1234hello"), Number(false), Number(true), Number(null), Number(undefined));

  console.log(Boolean(0), Boolean("0"), Boolean(""), Boolean(" "), Boolean());
}
