// String Object
{
  const str = "you he she they we he me";
  console.log(str.length);
  console.log(str.charAt(4)); //인덱스에 해당하는 문자 반환
  console.log(str.indexOf("he")); // 제일 먼저 일치하는 문자의 인덱스
  console.log(str.lastIndexOf("he")); // 오른쪽에서 ...
  console.log(str.indexOf("cat")); // 없으면 -1 반환
  console.log(str.match("he")); // 제일 먼저 찾은 문자를 반환
  console.log(str.match("cat")); // 없으면 null 반환
  console.log(str.replace("they", "html"));
  console.log(str.search("she"));
  console.log(str.slice(4, 10)); // a에서 자르고, b 이후를 자르고 남은 문자 반환
  console.log(str.substring(4, 10)); // a에서 b 이전 구간 문자 반환
}

{
  // 문자열을 잘라서 새로운 배열 만들기
  const str = "html,css,javascript";
  const result = str.split(",");
  console.log(result);
}

{
  const str = "hello";
  const str2 = "world";
  console.log(str.toUpperCase());
  console.log(str.toLowerCase());
}

{
  const str = " hello world ";
  const result = str.trim();
  console.log(str);
  console.log(result);
}

// 방문자의 이름을 대문자로 출력
// 전화번호의 뒷자리 4개를 * 로 출력

{
  const name = prompt("당신의 이름은?", "");
  const phone = prompt("당신의 연락처는?", "");

  const uperName = name.toUpperCase();
  const result = phone.substring(0, phone.length - 4) + "****";

  document.write(uperName, "<br>");
  document.write(result);
}
