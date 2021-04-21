# Router
### 라우팅
어떤 주소에 어떤 UI를 보여줄것인가를 정함
옛날에는 보통 서버에서 관리하는 로직 이였으나 이제는 클라이언트가 관리함

### SPA
장점:
단점: 앱의 규모가 커지면서 JS파일의 크기가 너무 커질 수 있다. 해결책: Code Splitting
브라우저에서 자바스크립트가 구동되지 않으면 UI를 볼 수 없다. ex) 검색엔진에서 크롤링 불가능 해결책:Server Side Rendering

### 리액트 vs 넥스트
리액트 라우터는 컴포넌트 기반으로 라우팅을 한다. 넥스트는 서버사이드 렌더링을 엄청나게 쉽게 구현 가능, 파일경로, 이름을 기반으로 라우팅한다.

### HTML5 History API
주소만 바꾸고 페이지는 다시 불러오지 않음
### HashRouter
#를 사용하며 못생겼다.. 옛날 브라우저 전용 방식
### MemoryRouter
브라우저의 주소와 무관함, 일체 건들이지 않음. 그래서 브라우저 아닌 환경인 임베디드 웹앱, 리액트 네이티브 등에서 사용

### Route
라우트를 정의할 때 사용하는 컴포넌트
### Link
사용한 Router의 주소를 바꿈 a태그지만 새로고침 안됨