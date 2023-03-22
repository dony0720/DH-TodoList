const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); // loginForm에 있는 input을 불러온다
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 새로 고침을 막는다
    loginForm.classList.add(HIDDEN_CLASSNAME); // form을 다시 숨김
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // 로컬스토리지에 username값을 username이라는 키와 함께 저장
    paintGreetings(username); // paintGreetings함수의 username 호출
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
 
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
}