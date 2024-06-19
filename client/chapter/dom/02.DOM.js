/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

function getNode(node) {
  return document.querySelector(node);
}

getNode('.list');
// 1.
let visualSection = document.querySelector('#visual-section');

// 2.
let ulList = document.querySelector('.list');

// 3.
let aboutLi = ulList.querySelector('li:nth-child(2)');

// [...ulList.children].forEach((li) => {
//   console.log(li.textContent);
// });

const about = [...ulList.children].find((li) => li.textContent === 'about');

// 4
let formName = document.querySelector('form[name="search-box"]');

// 5
let inform = formName.children;
// let inform = formName.querySelectorAll('*')

// 6
let inputForm = inform[inform.length - 1];

/* 문서 대상 확인 */
// - matches
// - contains
