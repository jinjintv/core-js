/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    return 'ㅎㅇ';
  },
};

// Object.prototype.nickName = '호랑이';

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

// console.log(javaScript.hasOwnProperty('toString'));

// console.log(Object.prototype.hasOwnProperty.call((javaScript, 'nickName')));

// for (let key in javaScript) {
//   if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
//     // console.log(key);
//   }
// }

const obj = {};

obj.nickName = 'jin';

// Object.defineProperties(obj, 'age', {
//   value: 30,
//   enumerable: true,
//   writable: false,
// });

// 점 표기법 => 변수 설정 x
// 대괄호 표기법 => 변수 설정 o

const tens = [10, 100, 1000, 10_000];

for (let key in tens) {
  // console.log(tens[key]);
}

//for in은 객체에게 양보하자

// 배열은 순서 보장이 안됨. 성능도 저하 => for in은 객체에 양보하자