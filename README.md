# 개인 프로젝트 "플리즈(Plz)"

### < 목차 >

**# 프로젝트 팀 소개**

- 팀원소개

**# 프로젝트 소개**

- 개발 기간 & 프로젝트 명 & 소개 & 목표 & 프로젝트 Rule

**# 시작가이드**

- Installation

**# 와이어프레임**

- 프로젝트 화면 구성 및 기능

  - 필수 사항

  - 선택 사항

  - 트러블슈팅

  - 기능담당

  - 기능소개

- 파일 구조





<br />

## 프로젝트 팀 소개

<br />

**팀원 소개**

---

|                            남해리                            |
| :----------------------------------------------------------: |
|                          Enfj, Infp                          |
| <p><img src="https://lh7-us.googleusercontent.com/Ysape_5NRn4N32ZU7oOgrQmrfIAjTdQXKka5lOI6M6JxrEWg48DNhLQEXET56SbLP6f4CEJsn5RpDDoHgM9m6eDLyUolLBdP_xbLnp0gftdJg0hYUrKGwSXXVQxNO02AiSTl_4Wp0nHn9CSfQBblXhM" width="250px" /></p> |
|          [@r03181231](https://github.com/r03181231)          |
|                           FrontEnd                           |


<br />

<br />



**목표** 

---

\- 포기하지 말자 ! 

\- 피할 수 없으면 돌아가자 ! 

\- 끝까지 완성하자 !



<br />



## 프로젝트 "플리즈(Plz)"

**프로젝트 명** : 플리즈(Plz)

**개발 기간** : 2024. 03. 06~ 2023. 03. 06 (1일) 

**프로젝트 소개** : 제발 끝내자하는 할 일을 적는 서비스입니다.

**프로젝트 목표** : 꼭 그 날 마쳐야 하는 일을 기억할 수 있게 메모하는 서비스입니다.

<br />

### 🚦 Project Rules

#### **개발 환경(버전참고)**

- **Environment :** Visual Studio Code, git(2.37.3), github, vite(v5.1.4)
- **Language :**  typescript
- **Framwork** : React (v18.2.0)
- **DB** : json-server(v1.0.0-alpha.23)
- **Library** : redux(v5.0.1), react-redux(v9.1.0), ,axios(v1.6.7), react-router-dom(v6.22.1), react-query(v3.39.3), style-components(v6.1.8)

<br />

### Code Convention

1. **기능에 대한 주석은 반드시 포함**
2. Airbnb ESLint 사용
3. 작명 방식
   1. JSX 파일 (ex. Home.jsx)
      1. PascalCase
      2. rafce 스니펫 사용
   2. js 파일 (ex. configStore.js) : camelCase
   3. 함수명, 변수명: camelCase
   4. styled-component
      1. PascalCase
      2. 컴포넌트Style.js
4. 주요 디렉토리 구조
   1. common : 재사용 가능한 컴포넌트
   2. component/layout : 고정된 컴포넌트 (ex. Header, Footer)
   3. hooks : custom hook
   4. pages : URL에 해당하는 페이지 (ex. Home, Detail)
   5. shared : 라우터, Redux(shared/redux)
   6. styles : styled-component 파일 & GlobalStyle
5. 시맨틱 태그(main, header, nav, section, ul, li) 사용

6. 프리티어 설정 :

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```


<br />

<br />

<br />



### **📚프로젝트 운영 방식 및 Rules 예시📚**

  #### **깃허브 규칙**

  - 브랜치 이름 : 기능 이름

------

  #### 깃헙 커밋 규칙

| 타입     | 설명                         |
| -------- | ---------------------------- |
| feat     | 기능 구현                    |
| rename   | 파일/폴더 이름 변경 및 이동  |
| script   | 라이브러리 추가              |
| fix      | 버그 수정                    |
| chore    | 주석 추가/삭제, console 제거 |
| refactor | 코드 리팩토링                |
| style    | CSS 코드                     |
| test     | 테스트 코드                  |
| docs     | 문서 수정                    |

------

  #### <이슈(Issue) 작성 규칙>

  - `나 이런 거 할 거다` 를 이슈의 제목으로 입력

  - 위의 `깃헙 커밋 규칙` 의 타입을 참고하여 `[타입] - 하려는 내용` 형태의 이슈 제목 작성

    - 주요 예시
      - 기능 구현 : [feat] - 페인페이지 레이아웃 구현
      - 라이브러리 추가 : [script] - supabase 라이브러리 추가
      - 버그 수정 : [fix] - supabase env 미연결 문제 해결

  - `Assignees` 를 클릭하여 담당자(자기 자신) 지정

  - **이슈 본문**

    - Issue Feature : 하려는 내용

    - Todo : 수행할(→ 수행한) 주요 작업 리스트 (커밋 1개당 Todo 1개를 작성하는 게 아님)

      - 예시

        ```markdown
        제목 : [feat] - 메인페이지 레이아웃 구현
        
        Issue Feature : 메인페이지 레이아웃 구현
        
        Todo
        - [] MainPage.jsx 생성
        - [] Router에 MainPage 연결 // Router처럼 모두가 사용하는 기능을 조작하는 경우 반드시 Todo에 작성
        - [] 세부 컴포넌트 생성
        ```

    - 할 수 있다면 세부적인 내용도 작성해보기 (필수 X)

  - **이슈에 커밋(commit)을 반영하는 방법**

    - 이슈를 생성하면 해당 이슈의 번호(ex. `#12` )가 생기므로 해당 번호를 활용
    - 커밋 메시지를 `[커밋 타입/#이슈번호] - 커밋 내용` 형태로 작성 (ex. `[feat/#12] - Router에 MainPage 연결` )

  - **이슈의 Todo를 모두 끝낸 경우**

    - PR (Pull Request) 할 때 PR 본문에 `키워드 #이슈번호` 입력
    - 키워드 종류
      - `close` / `closes` / `close` `fix` / `fixes` / `fixed` `resolve` / `resolves` / `resolved`

------

  ### PR (Pull Request), Pull 규칙

    1. **PR (Pull Request) 하기 전**

  - 커밋은 가능하면 자주 할 것
  - 본인 github 브랜치에 push도 가능하면 자주 할 것
  - PR은 너무 뜸하지 않게 주기적으로 실시할 것 (주기가 너무 뜸하면, 그만큼 검토해야할 코드가 늘어나기 때문에 그만큼 시간이 지연됨)

    2. **PR (Pull Request) 주의사항**

  - **(중요) 반드시 검토할 사람이 있을 때 PR을 올릴 것!!**
  - 라이브러리를 추가한 경우, 어떤 라이브러리가 추가되었는지 PR 본문에 작성할 것
  - 공통적인 부분 (ex. Route, 공통 컴포넌트, 공통 스타일 등) 을 수정한 경우, 어떤 부분을 수정했는지 PR 본문에 작성할 것

    3. **PR (Pull Request) 수행 이후에 할 일**
       1. Slack에 PR URL 주소를 올림
       2. 다른 사람들이 PR을 검토하고 “승인” 하면 Merge 진행
       3. Slack에 Merge 했다고 메시지를 남김
    4. **Merge 수행 이후에 할 일**
       1. Merge 성공 여부를 검토할 사람이 본인 브랜치에서 작업하던 중간 지점까지 commit
       2. `git pull origin dev`
       3. 추가된 라이브러리가 있는 경우 `yarn`
       4. `yarn start` 하여 충돌 여부 확인
       5. 충돌 없이 정상 작동 시 `"확인했다"` , `"이상 없다"` 같은 내용을 Slack에 남기기 충돌이 있을 시 `"어떤 부분에서 충돌이 있다"` , `"충돌이 있었는데 이렇게 해결했다"` 같은 내용을 Slack에 남기기
    5. **Pull 규칙**

  - **(중요) 자주 하기 (나중에 한꺼번에 pull 해서 오류가 와장창 생기면 본인 책임**

<br />

<br />

<br />

---


## 🚩시작 가이드

<br />

### Installation

```bash
$ git clone https://github.com/r03181231/PLZ.git
$ cd PLZ
$ yarn install or npm install
$ yarn dev or npm run dev
```

### Environment variable

- 파일 이름 : .env.local
- 변수 이름 :  VITE_API_URL



<br />

## 🎨 와이어 프레임

<br />
<br />


### 🖼 프로젝트 화면 구성 및 기능



<br />
<br />
<br />



### 1. 📍필수 요구 사항

---

<br />

### 2. 🎁선택 요구 사항 (추가 구현 기능)    

---


    

<br />

<br />


## 💥트러블 슈팅💥

## 📌 관련 이슈

  closed #16 

## Task TODOLIST

- [ ] input값 타입에 대한 트러블 슈팅 해결

## ✨ 개발 내용


##  TroubleShotting

-문제 : 유효성 검사로 공백을 제거 하기 위해 해당 문자열에서 공백을 모두 제거해서 빈 문자열로 대체하려고 replace함수를 사용했지만,  

> {}' 형식에 'replace' 속성이 없습니다."

라는 메세지가 뜸.

- 원인 : useInput의 initialState의 interface타입을 any에서 unknown으로 바꿨을 때, 타입스크립트가 interface에서 지정한 string타입을 인지 못 함.
- 방안1 : as  string으로 타입을 확정해줌.
- 방안2 : 매개변수에만 제네릭을 사용해서 매개변수로 들어오는 initialState의 값에 제네릭으로 타입지정해 주기.  
- 방안3 : 사용된 useInput 커스텀 훅의 initialState의 타입을 제네릭으로 타입을 동적으로 바꾸고 리턴 값을 배열이 아니라 객체로 리턴하게 하기.
- 선택한 방안 : 방안 1, 방안 2
- 선택한 이유 : 방안 1이 현재  방안 2를 고수하기엔 아직 제네릭에 대한 개념이 잡혀있지 않기 때문에 제네릭을 좀 더 공부하고 사용하기.
- 해결 1 : as string을 붙여주어 값의 타입을 확정함. 
(as 타입 형태는 실상 타입스크립트에 의존하지 않고 개발자 본인이 강제해서 타입을 정해주는 것이라 최종적인 방법으로 써야함.)
- 해결 2 : 방안 2을 사용해서 useInput에서 오류에만 해당하는 매개변수값으로 들어오는 initialState값만 제네릭으로 타입지정해줌.
- 문제와 관련 코드
- useInput.tsx
```tsx

interface initialFormType {
  [key: string]: unknown;
}

```

-FormTodo.tsx
```tsx
  const [todoInput, setTodoInput, onChange, reset] = useInput(init);
  const refTitle = useRef<HTMLInputElement>(null);
  const titleInput = (todoInput?.title || "") as string;
  const commentInput = (todoInput?.comment || "") as string;
  const deadLineInput = (todoInput?.deadLine || "") as string;
  const blankPattern = /^\s+|\s+$/g;

~ 내용 생략~

  // 들어온 값으로 교체해주기
  const onSubmitHand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const titleBlank = (titleInput || "").replace(blankPattern, "");
    const commentBlank = (commentInput || "").replace(blankPattern, "");

```

해결 1 :  as string을 붙여주어 값의 타입을 확정함. 

-해결 전 FormTodo.tsx
```tsx
const titleInput = todoInput?.title || "";
 const commentInput = todoInput?.comment || "";
 const deadLineInput = todoInput?.deadLine || "";

```
-해결 후 FormTodo.tsx

```tsx
 const titleInput = (todoInput?.title || "") as string;
  const commentInput = (todoInput?.comment || "") as string;
  const deadLineInput = (todoInput?.deadLine || "") as string;
```


-해결 2 :  방안 2을 사용해서 useInput에서 오류에만 해당하는 매개변수값으로 들어오는 initialState값만 제네릭으로 타입지정해줌.

-문제의 useInput.tsx
```tsx
 
import { ChangeEvent, useCallback, useState } from "react";

interface initialFormType {
  [key: string]: any;
}

const useInput = (initialForm: initialFormType) => {
  const [form, setForm] = useState<initialFormType>(initialForm);

const onChange = useCallback(
   (
      e:
        | ChangeEvent<HTMLInputElement>
        | ChangeEvent<HTMLSelectElement>
        | ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setForm((preForm) => ({ ...preForm, [name]: value }));
    },
    []
 );
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

return [form, setForm, onChange, reset] as const;
};

export default useInput;

```


- 해결 후
- useInput.tsx
```tsx
import { ChangeEvent, useCallback, useState } from "react";

interface initialFormType {
  [key: string]: unknown;
}

// 제네릭으로 개선 => 타입을 동적으로 바꿀 수 있다.
const useInput = <T extends initialFormType>(initialForm: T) => {
  const [form, setForm] = useState<T>(initialForm);

  //onChange
  const onChange = useCallback(
    (
      e:
        | ChangeEvent<HTMLInputElement>
        | ChangeEvent<HTMLSelectElement>
        | ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setForm((preForm) => ({ ...preForm, [name]: value }));
    },
    []
  );
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, setForm, onChange, reset] as const; // 객체로 내보내는 게 좋다
};

export default useInput;


```

- FormTodo.tsx
```tsx
 const titleInput = todoInput?.title || "";
  const commentInput = todoInput?.comment || "";
  const deadLineInput = todoInput?.deadLine || "";
```



<br />
<br />


## 🎫 파일 구조



<br />
