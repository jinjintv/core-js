/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);


function getRandomValue(){
  return Math.random() > 0.5 ? 1 : 0;
}

// getRandomValue가 math.random() 메서드를 사용하여 0과 1중 하나를 무작위로 반환함. 생성된 난수의 값이 0.5보다 클 경우 1을 반환하고, 작을 시 0을 반환함


// default parameter 
// 함수 선언           매개변수 / parameter / 인자
function calcPrice(
  priceA,
  priceB,
  priceC = getRandomValue(),
  priceD = getRandomValue()
){


  // if(priceC === undefined) priceC = 0;
  // if(!priceC) priceC = 0;
  // priceC = priceC || 0;
  // priceC ||= 0;
  
  // priceC = priceC ?? 0;
  // priceC ??= 0;

  return priceA + priceB + priceC + priceD;

    //priceA~D라는 4개의 인자를 받아 합을 계산해 반환함, priceC와 D는 기본값으로 위 getRandomValue 함수의 결과를 사용

}

// 함수 호출    인수 / argument
const result = calcPrice(1000,3000);

// 함수를 호출하여 결과를 result 변수에 저장. priceC와 priceD는 getRandomValue()의 값에 의해 지정되므로 A,B의 값만 지정함

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건



// 1. 함수의 이름을 잘 지어야 한다. (동사) / 가독성 => 읽었을 때 바로 기능을 알 수 있다.
// 3. 하나의 기능만을 수행해야 한다.

// 2. 전역의 오염을 막는다.

// 4. 재사용성이 좋아야 한다. ( 매개변수 => 유연한 함수 )




/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;

function rem(pxValue = 0,base = 16){
  
  if(!pxValue){
    throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.');
  }

  if(typeof pxValue === 'string'){ 
    pxValue = parseInt(pxValue,10) 
  }
  if(typeof base === 'string'){
    base = parseInt(base,10);
  }

  return pxValue / base + 'rem'
}

// parseFloat
// parseInt

// 픽셀 값을 rem 단위로 변경. pxValue가 문자열일 경우 parseInt로 숫자로 변환, 기본값을 16으로 지정


// Test Driven Development

console.assert(rem(20) === '1.25rem')
console.assert(rem('25px') === '1.5625rem')
console.assert(rem('30px',10) === '3rem')

// console.assert는 조건이 거짓일 경우 오류를 발생 시키는 메서드

// css(node: string, prop: string, value: number|strung) : string;


// 점 표기법    => 변수로 사용 x
// 대괄호 표기법 => 변수로 사용 o

const first = document.querySelector('.first');

function setStyle(node,prop,value){

  if(typeof node === 'string') node = document.querySelector(node)
  
  if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');

  if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');

  node.style[prop] = value

}


setStyle('.first','color','blue')

// HTML 요소의 스타일을 설정. node는 선택자 문자열이거나 DOM 요소일 수 있음. prop는 스타일 속성이며, value는 설정할 값임.


function getStyle(node,prop){

  if(typeof node === 'string') node = document.querySelector(node);
  if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');

  return getComputedStyle(node)[prop]

}


const h1FontSize = getStyle('.first','fontSize') // 32px


/* 

1. function name
2. argument (함수 실행부)
3. parameter
4. return value
5. validation
6. Test Driven Development (TDD)


*/


function css(node,prop,value){

  // if(!value){
  //   // getter
  //   return getStyle(node,prop)

  // }else{
  //   // setter
  //   setStyle(node,prop,value)
  // }

  return !value ? getStyle(node,prop) : setStyle(node,prop,value);

  // condition ? value1 : value2
}

// const css2 = (node,prop,value) => !value ? getStyle(node,prop) : setStyle(node,prop,value);

css('.first','color','red') // setter

css('.first','color') // getter













// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.