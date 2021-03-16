# Practice

## npm
1. npm init
- package name: (lecture) lecture
- author: Allie
- license: (ISC) or MIT

2. npm i react react-dom
- react 
- react-dom

3. npm i -D webpack webpack-cli
- webpack 
- webpack-cli

* npm i react-refresh @pmmmwh/react-refresh-webpack-plugin -D
* npm i -D webpack-dev-server

## babel install
### npm i -D @babel/core @babel/preset-env @babel/preset-react bable-loader
- @babel/core: 최신문법 변경
- @babel/preset-env: 환경에 맞게 변경
- @babel/preset-react: jsx, js 변경
- @babel/preset-react: 리액트
- bable-loader: 바벨과 웹팩 연결

### 빌드시 오류
npm i -D @babel/plugin-proposal-class-properties

+ error 
// babel 설치
npm install --save-dev babel-core babel-loader babel-preset-env
// webpack 설치
npm install --save-dev webpack webpack-dev-server

// bulid 오류: address already in use
1. cmd
2. netstate -ano
3. PID -> 작업관리자 -> 세부정보 


#### [참고]
- https://chimimode.github.io/2019-07-26-webpack-babel-project-setting/