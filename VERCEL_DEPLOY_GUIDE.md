# Vercel 무료 배포 가이드

이 폴더는 Vercel이 자동으로 인식하는 Next.js 프로젝트입니다. 개인 포트폴리오 용도라면 Vercel의 무료 Hobby 플랜으로 배포할 수 있습니다.

## 가장 쉬운 방법: GitHub 연결

### 1. ZIP 압축 해제

`jooho-portfolio-vercel.zip`을 압축 해제합니다. 이미 폴더 형태로 받은 경우 이 단계는 건너뜁니다.

### 2. GitHub에 새 저장소 만들기

1. `https://github.com/new`에 접속합니다.
2. Repository name에 `jooho-portfolio`를 입력합니다.
3. 공개 포트폴리오라면 Public을 선택합니다.
4. `Add a README`, `.gitignore`, `license`는 선택하지 않습니다.
5. **Create repository**를 누릅니다.

### 3. 폴더를 GitHub에 업로드

GitHub 저장소 화면에서 **uploading an existing file**을 선택합니다. 압축 파일 자체가 아니라, 압축을 푼 `jooho-portfolio-vercel` 폴더 안의 파일과 폴더 전체를 끌어다 놓습니다.

업로드 후 아래 항목이 저장소 최상단에 보이면 정상입니다.

- `app/`
- `public/`
- `package.json`
- `tsconfig.json`

Commit changes를 눌러 업로드를 완료합니다.

### 4. Vercel 계정 만들기

1. `https://vercel.com/signup`에 접속합니다.
2. **Continue with GitHub**를 선택합니다.
3. 개인 프로젝트용 **Hobby** 플랜을 선택합니다.

### 5. GitHub 저장소 가져오기

1. Vercel Dashboard에서 **Add New → Project**를 선택합니다.
2. GitHub 저장소 목록에서 `jooho-portfolio`의 **Import**를 누릅니다.
3. Framework Preset이 **Next.js**인지 확인합니다.
4. Root Directory는 `./` 그대로 둡니다.
5. Build Command, Output Directory, Install Command는 기본값을 유지합니다.
6. 환경 변수는 필요하지 않습니다.

### 6. 배포

**Deploy**를 누릅니다. 빌드가 끝나면 `https://프로젝트명.vercel.app` 형태의 무료 주소가 생성됩니다.

### 7. 이후 수정과 자동 배포

GitHub 저장소의 파일을 수정하거나 새 커밋을 올리면 Vercel이 자동으로 다시 배포합니다. `main` 브랜치 변경은 운영 사이트에 반영되고, 다른 브랜치와 Pull Request에는 미리보기 주소가 만들어집니다.

## 터미널로 직접 배포하는 방법

Node.js가 설치되어 있다면 GitHub 없이도 배포할 수 있습니다.

```bash
cd jooho-portfolio-vercel
npm install
npx vercel
```

처음 실행할 때 브라우저 로그인을 진행하고 질문에는 기본값을 선택합니다. 미리보기 주소가 정상이라면 운영 배포를 실행합니다.

```bash
npx vercel --prod
```

## 개인 도메인 연결

Vercel 프로젝트에서 **Settings → Domains**로 이동한 뒤 보유한 도메인을 입력합니다. Vercel이 안내하는 DNS 레코드를 도메인 구매처에 등록하면 HTTPS가 자동 적용됩니다. 도메인 구매 비용은 별도입니다.

## 배포 전 확인사항

- `public/profile.jpg`는 인터넷에 공개됩니다.
- `public/jooho-son-resume.pdf`도 누구나 다운로드할 수 있습니다.
- Resume에 전화번호와 이메일이 있으므로 공개 범위를 다시 확인하세요.
- Hobby 플랜은 개인·비상업 프로젝트용입니다.
- 사용량 한도를 초과하면 무료 프로젝트가 일시 중지될 수 있습니다.

## 자주 생기는 문제

### Vercel이 Next.js로 인식하지 못함

`package.json`이 저장소 최상단에 있는지 확인합니다. ZIP 파일이나 상위 폴더만 업로드하면 안 됩니다.

### Resume 또는 프로필 사진이 보이지 않음

`public/jooho-son-resume.pdf`와 `public/profile.jpg`가 저장소에 올라갔는지 확인합니다. 파일명은 변경하지 않는 것이 안전합니다.

### 빌드 실패

Vercel의 배포 화면에서 **Build Logs**를 열어 첫 번째 오류를 확인합니다. 로컬에서는 `npm install` 후 `npm run build`로 같은 문제를 재현할 수 있습니다.

## 공식 문서

- Vercel Git 배포: https://vercel.com/docs/git
- GitHub 연동: https://vercel.com/docs/git/vercel-for-github
- CLI 배포: https://vercel.com/docs/projects/deploy-from-cli
- Hobby 플랜: https://vercel.com/docs/plans/hobby
