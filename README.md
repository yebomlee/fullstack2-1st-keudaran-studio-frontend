# 🦖 크다란 스튜디오 Front-end 소개
![크다란](https://user-images.githubusercontent.com/87760409/137558624-5290cf93-db93-4d5f-8b24-00453ab28c64.png)

- 조그만 스튜디오 스토어 클론 코딩 프로젝트 입니다.

## 💁🏻‍♂️ 💁🏻‍♀️ 팀원

- [김시원](https://github.com/k-cool)

- [성지수](https://github.com/seong-ji-sue)

- [신기철](https://github.com/PhilipShinnn)

- [이욱창](https://github.com/wook95)

- [이예봄](https://github.com/yebomlee)

- [이은정](http://github.com/leecoder21)

## 📅 프로젝트 기간

- 2021.10. 4 ~ 2021.10. 15 (11일)

## ✅ Skills

- Frond-end

  ![](https://img.shields.io/badge/-React-%2361DAFB?style=flat&logo=react&logoColor=black) ![](https://img.shields.io/badge/-React%20Router-%23CA4245?style=flat&logo=reactrouter&logoColor=white) ![](https://img.shields.io/badge/-Javascript-%23F7DF1E?style=flat&logo=javascript&logoColor=white) 
  
- Common


  ![](https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=white) ![](https://img.shields.io/badge/-Eslint-%234B32C3?style=flat&logo=eslint&logoColor=white) ![](https://img.shields.io/badge/-Prettier-%23F7B93E?style=flat&logo=prettier&logoColor=white)

- Tools


  ![](https://img.shields.io/badge/-GitHub-%23000000??style=flat&logo=github&logoColor=white) ![](https://img.shields.io/badge/-Slack-%234A154B??style=flat&logo=slack&logoColor=white) ![](https://img.shields.io/badge/-Postman-%23FF6C37??style=flat&logo=postman&logoColor=white) 

## Back-end Repository

- [keudaran-studio-backend Link](https://github.com/wecode-bootcamp-korea/fullstack2-1st-keudaran-studio-backend)

## Front-end 구현 기능 상세
### 1. 공통 구현 사항
- 담당 컴포넌트, 페이지별 레이아웃 구현

 - Nav
   - 유저가 로그인 했을시 유저네임, 로그아웃 버튼, 로그아웃 기능 구현
   - 동적 라우팅 구현
 
 - Footer
    - footer 리스트 mockdata 가져와 컴포넌트 구성
 
### 2. 메인 페이지
 - 메인 상단의 Carousel 구현
 - 상품 리스트 mockdata 가져와 페이지 구성
 - best review Carousel 구현
 
### 3. 상품 리스트 페이지
 - 카테고리 API와 연계하여 상품별 카테고리 분류 구현
 - 상품 정렬 API와 연계하여, 정렬 기능 구현
 
### 4. 상품 상세 페이지
 - 상품 ID에 따른 동적 라우팅 구현
 - 상품 상세 API와 연계하여, 상품 정보 동적 구현
 - 옵션 클릭 시, 상품 수량 및 가격 변동 기능 구현
 - 좋아요 기능 구현
 - 사용 후기 구현 (별점)
 - 호버, 버튼 클릭, Set time out시 썸네일 이미지 변경 기능 구현
 
 ### 5. 로그인/회원가입
 - 로그인
    - 로그인 성공시 발급 받은 토큰 `cookie`에 저장 후 , 메인으로 Redirect
    - 아이디 또는 비밀번호가 일치하지 않을 시, Alert로 안내
 - 회원가입
    - 회원가입 API와 연게
    - 회원가입 성공 시 로그인 됨과 동시에 메인으로 Redirect
    - 회원가입 폼의 약관 동의 Checkbox 전체 선택/해제 기능 구현
    - 전체 선택 & 해제 (한 항목 해제 시 전체 선택 해제)


## ☕️ Reference

- 이 프로젝트는 [조구만 스토어](http://www.jogumanstore.com)사이트를 참조하여 학습 목적으로 구현하였습니다. 해당 Repository의 코드를 활용하여 이득을 취하거나 무단 배포할 경우, 법적으로 문제가 될 수 있음을 알려드립니다.
