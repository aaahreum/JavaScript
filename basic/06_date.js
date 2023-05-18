{
  const today = new Date();
  console.log(today);
}

{
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();

  const today = `오늘은 ${year}년 ${month + 1}월 ${date}일입니다.`;
  document.write(today);
}

{
  // getTime() : 1970년 1월 1일 부터 경과된 시간을 밀리초로 표기
  // 남은 일수(밀리초) : 특정날짜(밀리초) - 현재날짜(밀리초)
  // 1초 : 1000
  // 1분 : 1000 * 60
  // 1시간 : 1000 * 60 * 60
  // 1일 : 1000 * 60 * 60 * 24

  const today = new Date();
  const nowYear = today.getFullYear();
  const endDate = new Date(nowYear, 11, 31);

  const remainSec = endDate.getTime() - today.getTime();
  const result = Math.ceil(remainSec / (1000 * 60 * 60 * 24));

  console.log(result);
}
