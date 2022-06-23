# React Hook Form을 사용하여 유효성검사하기

01. 모든 인풋창 required
02. 이메일은 네이버 메일만 사용가능 > pattern
03. lastname, username 5글자 이상 > minLength
04. 비밀번호와 비밀번호 확인이 같지않으면 에러 발생시키기 > setError
05. 비밀번호 확인이 같지않으면 해당 INPUT으로 자동포커스되기 > shouldFocus
06. 전체에러(서버에러) 표현하기 > setError
07. 이름이 RIN이거나 RIN을 포함하면, 사용못하게 하기 > validate
