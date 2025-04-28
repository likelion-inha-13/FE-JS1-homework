const menu = document.querySelector('.menu');
const openButton = document.querySelector('.open'); // ▼, 메뉴가 열렸을 때
const closeButton = document.querySelector('.close'); // ▶, 메뉴가 닫혀있을 때
// menu, openButton, closeButton을 각각 menu, open, close의 첫 번째 요소에 접근한 것으로 정의
// 이때, 먼저 getElementsById로 접근해봤지만 오류가 발생함.
// 찾아보니, style 등을 적용하기 위해서는 요소의 하나에만 접근해야 하기 때문에 수정함.

closeButton.addEventListener('click', () => { // 닫혀있는 상태의 버튼 클릭 시, 즉 메뉴를 열 때때
  menu.classList.add('active'); // 메뉴가 열리고
  closeButton.style.display = 'none'; // 닫힌 상태의 버튼이 사라짐
  openButton.style.display = 'inline'; // 열림 상태의 버튼이 생김
});

openButton.addEventListener('click', () => { // 열려있는 상태의 버튼 클릭 시, 즉 메뉴를 닫을 때때
  menu.classList.remove('active'); // 메뉴가 사라지고
  closeButton.style.display = 'inline'; // 닫힌 상태의 버튼이 생김
  openButton.style.display = 'none'; // 열린 상태의 버튼이 사라짐
});

// addEventListener로 이벤트 처리함
// 아무것도 하지 않은 상태일 때, class "menu"는 .menu {display: none;}의
// 상태이기 때문에 보이지 않는 상태임. closeButton을 클릭했을 때
// menu.classList.add('active'); << 이게 호출되면, "menu" class에 active가 추가됨.
// .menu.active{display: block;} 가 적용되므로 menu의 상태를 block, 즉 보이게 됨.



