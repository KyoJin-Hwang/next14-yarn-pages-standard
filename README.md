# next-yarn-standard

#### ✅ 첫 Clone 시에는 yarn or yarn install 실행

#### ❌ yarn dev Error 시

- 버전을 맞춘다.
- yarn install을 한다

## ✔ 세팅 버전 ( Version )

#### ✔ **Node** : 20.12.1

#### ✔ **Yarn berry** : 4.3.1

#### ✔ **React** : 18.2.0

#### ✔ **Next** : 14.2.4

## 📖 특징 ( Features )

- ⚛️ Create Next App
- 0️⃣ Zero-install
- 💢 ESLint & Prettier
- 🎨 Emotion

## 1️⃣ 초기설치 ( Setup )

### 0. Node Version 확인

```bash
node -v  // 20.12.1
```

### ❌ Node 버전 틀린 경우

```bash
// 터미널 열기 (관리자권한)

(1)
nvm list
nvm use 20.12.1

(2)
# node v 20.12.1 없을경우 ❌
# nvm 버전 설치
# 리스트에 다운로드 여부 확인 ✔

nvm install 20.12.1
nvm list
nvm use 20.12.1
```

### 1. Yarn 설치

```bash
npm install -g yarn
```

### 2. Next 프로젝트 생성

```bash
# NextJS 프로젝트
yarn create next-app [프로젝트명]
```

### 3. Yarn berry 활성화

```bash
# 최신버전으로 다운로드
yarn set version berry

# 특정 버전 다운
yarn set version [version]

이후

yarn or yarn install
```

### 4. pnp 설정

1. .yarnrc.yml 폴더에서 nodeLinker 수정
   ![alt text](image.png)
2. $ yarn install
3. Yarn berry 와 IDE 통합 - **ZipFs Plugin 익스텐션설치**

```bash
yarn dlx @yarnpkg/sdks vscode

- allow 를 누르고 사용한다
# 누르지 못할경우 타입스크립트 파일에서
# ctrl + shift + p > Select TypeScript Version 클릭 > use Workspace version 클릭
```

### 5. .gitignore 설정 ( zero-install )

```bash
#.gitignore 에 추가

# yarn zero install
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

### 6. GIT REMOTE

```bash
git remote add origin [레포주소]
git branch -M main
git push -u origin main

이후

git add . // 전체 저장
git commit 'test : remote test'
git push origin main
```

### 7. GIT remote test 커밋 삭제 이후 초기 commit 에 상태 반영

```bash
1.
git reset --soft [커밋주소]
- soft : 현재 변경사항을 유지한상태로 특정 커밋 주소로 되돌림
- hard : 로컬 저장소의 상태를 특정 커밋 주소 상태로 완전히 되돌림

2.
git status
- new file 은 test : remote test 에 있던것
- modified 는 현재에서 수정하고 있던것
- 초록색 : 스테이징올란간것
- 빨간색 : 변경중인것

3.
git commit -m 'feat : [내용]'
- 커밋 메시지의 첫번째 줄은 Title 두번째 줄은 description 마지막에 ' 붙여준다

- Error : 충돌
git push origin main 을 할경우 이전 커밋주소로인해 충돌이난다.
- 결론 : git push origin +main 으로 강제 푸시해줘야한다.
```

## 2️⃣ Prettier 적용

### 1. prettier devDependencies 설치

```bash
yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
```

### 2. eslintrc.json에 prettier 요소를 적어준다.

```json
{
  "extends": ["next/core-web-vitals", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### 4. prettier 파일 추가

- .prettierrc 파일생성

### 5. prettier 규칙 생성

```json
{
  "useTabs": false,
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine": "lf",
  "semi": false,
  "arrowParens": "always"
}
```

### 6. eslint 와 prettier 경로 맞춰주기

```bash
yarn dlx @yarnpkg/sdks vscode
```

## 3️⃣ emotion 적용

### 1. emotion 설치

- Next14는 여기 설치까지만

```bash
yarn add @emotion/react @emotion/styled
```

### 2. .babelrc 파일 생성 후 emotion 적용

- Next14 미만에만 해당

```json
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ]
}
```

### 3. tsconfig 에서 emotion 적용

- Next 버전 상관없이 모두 다

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./src/*"]
    },
    // 이 부분 추가해줬음
    "jsxImportSource": "@emotion/react"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## 4️⃣ 디렉토리 구조

```bash
📂src
├── 📂components // 페이지에서 사용되는 컴포넌트 폴더
│   └── 📃shared // Button, H1, H2, Space 등 전체적으로 사용하는 컴포넌트 폴더
├── 📂hooks // 커스텀 훅 폴더
├── 📂layouts // 페이지의 레이아웃 폴더
├── 📂lib // 외부 라이브러리 및 외부 연결 폴더
├── 📂models // 타입 폴더
├── 📂pages // 페이지 폴더
├── 📂services // API 폴더
├── 📂stores // 클라이언트 상태관리 폴더
├── 📂styles // 스타일 담당 폴더
└── 📂utils // 유틸성 함수 폴더
```
