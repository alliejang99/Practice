# Practice

## npm
1. npm init
- package name: (lecture) lecture
- author: Allie
- license: (ISC) or MIT

2. npm i react react-dom
- react 
- react-dom

3. npm i react-refresh @pmmmwh/react-refresh-webpack-plugin -D

4. npm i -D --save-dev webpack webpack-cli webpack-dev-server
- webpack 
- webpack-cli
- webpack-dev-server

## babel install
### npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader 
- @babel/core: 최신문법 변경
- @babel/preset-env: 환경에 맞게 변경
- @babel/preset-react: jsx, js 변경
- @babel/preset-react: 리액트
- bable-loader: 바벨과 웹팩 연결

### 빌드시 오류
npm i -D @babel/plugin-proposal-class-properties 
npm install react-hot-loader
+ error 
// babel 설치
npm install --save-dev babel-core babel-loader babel-preset-env @babel/preset-react

// bulid 오류: address already in use
1. cmd
2. netstat -ano
3. PID -> 작업관리자 -> 세부정보 


#### [참고]
- https://chimimode.github.io/2019-07-26-webpack-babel-project-setting/

# INDEX
- 반복문 : https://github.com/alliejang99/Practice/blob/master/React/WordRelay/WordRelay.jsx

- 조건문 : https://github.com/alliejang99/Practice/blob/master/React/ResponseChack/ResponseChack.jsx

- props와 state 연결 : https://github.com/alliejang99/Practice/blob/master/React/NumberBasball/NumberBaseball.jsx

- setTimeout 다중 사용, use(Effect / Memo / Callback / Ref) 사용 : https://github.com/alliejang99/Practice/blob/master/React/Lotto/Lotto.jsx