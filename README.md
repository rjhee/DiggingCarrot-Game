<img src="https://user-images.githubusercontent.com/87287296/138561621-ad44f0b2-3f83-4364-a2d2-81eeb05f40d9.gif" alt="당근게임">

<h1 class="desc-title">당근뽑기 게임 (콘솔 게임)</h2>
<a
  href="https://rjhee.github.io/diggingcarrot-game/"
  target="_blank"
  class="link"
  >👉🏼 완성작 보러가기</a
>
<dl class="desc-cover">
  <dt>
    <h3>컨셉</h3>
  </dt>
  <dd>
    벌레를 피해서 당근을 제한시간내에 다 뽑아야 한다. 제한시간안에
    당근을 다 뽑으면 다음 레벨로 넘어갈 수 있다. 벌레를 클릭하면
    게임이 끝난다.
  </dd>
  <hr>
  <dt>
    <h3>기능</h3>
  </dt>
  <dd>- 당근과 벌레를 랜덤으로 배치하기.</dd>
  <dd>- 당근을 클릭시 카운터 증가, 벌레 클릭시 게임 종료.</dd>
  <dd>- 게임 시작 버튼 클릭시 타이머 스타트.</dd>
  <dd>- 당근을 제한시간내에 다 뽑으면 레벨업.</dd>
  <hr>
  <dt>
    <h3>배운점</h3>
  </dt>
  <dd>
    랜덤으로 숫자를 생성하여 당근요소가 배치될 수 있도록 순수
    자바스크립트로 DOM을 제어하는 방법을 배웠습니다.
  </dd>
  <dd>map(), forEach()등 배열 APIs를 배웠습니다.</dd>
  <dd>자바스크립트로 사운드파일 제어 방법을 배웠습니다.</dd>
  <dd>필요한 함수를 만드는 기술을 익혔습니다.</dd>
    <hr>
  <dt>
    <h3>어려웠던 점</h3>
  </dt>
  <dd>👉🏼 items-box안에 새로만든 당근과 버그를 랜덤으로 배치하는 기능.</dd>
  <dd>해결
    <ol>
      <li>반복문으로 items-box안에 img.carrot과 img.bug 태그 15개씩 만들기.</li>
      <li>querySelectorAll로 모든 .carrot과 .bug를 가져오기.</li>
      <li>가져온 15개 태그에 각각, css translate 값을 랜덤으로 변경하기.</li>
      <li>단점: 코드 너무 길다 총 30줄이상.</li>
    </ol>
  </dt>
  <br>
  <dd>👉🏼 (중지버튼 || 버그 || 당근 모두) 클릭했을때 타이머가 멈추는
    기능.</dd>
  <dd>해결
    <ol>
      <li>처음에 setTimeout로 만든 타이머로는 clearTimeout 사용할수 없어서
        처음에 만든 타이머를 setInterval로 다시만듬.</li>
        <li>setInterval로 타이머를 더
          간단하게 만들고 clearInterval로 요소를 클릭할때 생성한 타이머 멈추게함.</li>
          <li>단점:
            없는듯?</li>
    </ol>
  </dd>
  <br>
  <dd> 👉🏼 리플레이버튼을 클릭했을때 타이머를 초기화 하는 기능.</dd>
  <dd>해결
    <ol>
      <li>처음에
        만든 타이머 경우, replaybtn을 클릭하면 처음에 playbtn을 클릭했을때 시작했던
        타이머가 멈추지 않아서, playbtn클릭시 보여졌던 타이머숫자와, replaybtn클릭시
        보여졌던 타이머숫자가 겹처서 나왔음.</li>
      <li>clearInterval로 타이머 멈추게하고,
        타이머함수에 인자(타이머숫자)를 받아와 만들었더니 버튼 클릭시 다시 초기화됨.</li>
      <li>장점: 인자를 받아올 수 있으니 타이머 숫자를 원하는데로 설정가능. </li>
      <li>단점: 없는듯.</li>
    </ol>
  </dd>
    <br>
  <dd>👉🏼 😱 (타이머 == 0:0 && 카운터 != 15) 조건일때, LOST 모달창 띄우는것.</dd>
  <dd>해결
    <ol>
      <li>첫번째 방법, 타이머의 숫자가 0일때 LOST 함수 호출.</li>
      <li>두번째 방법, 요소가
        클릭될때 (타이머 == 0:0 && 카운터 != 15)이면 LOST함수 호출.</li>
      <li> 단점: 두번째 방법은
        당근을 클릭했을때, (타이머 == 0:0 && 카운터 != 15) 이 조건이여야 LOST 함수가
        호출된다.</li>
    </ol>
  </dd>
    <br>
  <dd>👉🏼 😱 (타이머 != 0:0 && 카운터 == 15) 조건일때, WIN 모달창 띄우는것.</dd>
  <dd>해결
    <ol>
      <li>(타이머 != 0:0 && 카운터 == 15)조건이 맞을때 WIN 모달창 띄우는
        WIN함수를 만들고</li>
      <li>items-box를 클릭했을때 클릭된 타겟을 인자로 받는
        clickOnCarrot콜백함수를 호출하고,</li>
      <li>clickOnCarrot의 인자(클릭된타겟이)가
        carrot이면 WIN함수를 호출.</li>
    </ol>
  </dd>
</dl>
</dl>

