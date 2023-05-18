// Object 객체
// - 속성과 기능
// - phone의 상태 => color, size
// - phone의 행동 => ring, take a photo, play music
// - 형식 { 키 : 값 }

//  객체의 종류
// - 내장 객체 : 문자(String), 날짜(Date), 배열(Array), 수학(Math) 등
// - 브라우저 객체 모델(BOM) : window, screen, location, history, navigator
// - 문서 객체 모델(DOM) : html 문서 구조
// - jquery

// 샘플 object
const user = {
  name: "Picaso",
  age: 30,
  email: "picaso@gmail.com",
  works: [
    { id: 1, title: "게르니카", price: 1000, like: 50 },
    { id: 2, title: "아비뇽의 처녀들", price: 3000, like: 80 },
    { id: 3, title: "우는 여인", price: 5000, like: 200 },
  ],
  login: function () {
    console.log("입장하였습니다.");
  },
  logout() {
    console.log("안녕히 가세요.");
  },

  goodJob() {
    console.log("피카소의 대표작");
    this.works.forEach((work) => {
      console.log(`${work.id}, ${work.title}, ${work.price}원, 좋아요(${work.like})`);
    });
  },
};

console.log(user.age);
user.age = 45;
console.log(user.age);

user.login();
user.logout();
user.goodJob();
