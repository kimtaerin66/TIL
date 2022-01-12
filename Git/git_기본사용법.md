
# 리포지토리 초기화

git init

# 스테이지 영역(임시 영역)에 a라는 파일 추가
git add a.txt 

# 레포지토리 상태 보기

git status

# 커밋하기 '내용'
git commit -m '1'
 
# 커밋된 로그 확인
git log

# 로그 첫번째 줄만 보이기
git log --pretty=short

# 브랜치 목록 확인
git branch

# 브랜치 만들고 이동
git checkout -b '만들브랜치_이름'

# 브랜치 시각적으로 확인
git log --graph

# 저장소 설정
git remote add origin github.com:사용자명/저장소이름.git

# 클론하기
git clone git주소.git까지

# 푸시하기 origin 리포지토리의 master 브랜치.
git push origin master 

