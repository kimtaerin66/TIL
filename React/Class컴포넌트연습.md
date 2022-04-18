# Class로 컴포넌트 만들기

리액트 컴포넌트는 class, function 두가지 방법으로 만들 수 있는데,

function으로만 만들다보니 가끔 class를 볼때 class컴포넌트 방식이 너무 어렵다.

그래서 따로 연습하는 class 컴포넌트

-------------------------
(코드펜으로 작성후 복붙)

## 0.1 기본 컴포넌트 만들기

```js
class Codelab extends React.Component {
	render(){
		return (
			<div>Codelab</div>
		);
	}
}
```
기본 모습 React.Component를 상속받고 있다.

상속 받은 부모에 접근하려면 super를 사용해야한다.

## 0.2 렌더링하기

똑같이 App컴포넌트를 만들고 Codelab 컴포넌트를 렌더링한다.
```html
index.html

<div id="root"></div>
```
```js
class App extends React.Component {
	render(){
		return (
			<Codelab />
		);
	}
}

ReactDOM.render(<App/>,document.getElementById('root'));
```
ReactDOM.render(렌더링할컴포넌트, 컴포넌트를 렌더링할 엘리먼트)

## 0.3 스타일주기
css를 카멜케이스로 작성해야한다.

background-color가아니라 backgroundColor
```js
class Codelab extends React.Component {
	render(){
		const text = "Hello i'm codelab";
		const style = {
			backgroundColor: 'yellow'
		};
		return (
			<div style={style}>{text}</div>
		);
	}
}

```

## 0.4 props

```js
class Codelab extends React.Component {
	render(){
		return (
		<div>
				<h1>Hello {this.props.name}</h1>
				<div>{this.props.children}</div>
		</div>
		)
	}
}

class App extends React.Component {
	render(){
		return (
		<Codelab name='velopert'>이 사이의 내용</Codelab>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
```
[ 결과 ]

![Alt text](../IMG/classp.JPG)

## 0.4 +  props를 계속 안으로 주고싶다면?

```js
class Codelab extends React.Component {
	render(){
		return (
		<div>
				<h1>Hello {this.props.name}</h1>
				<div>{this.props.children}</div>
		</div>
		)
	}
}

class App extends React.Component {
	render(){
		return (
		<Codelab name={this.props.name}>{this.props.children}</Codelab>
		);
	}
}

ReactDOM.render(<App name='velopert'>이 사이의 내용</App>, document.getElementById('root'));
```

결과는 동일한테 값을  ReactDOM.render에 작성하고,
prop으로 계속 받고있다.

## 0.5 props 기본값설정

해당 컴포넌트가 끝나고, 그 아래 작성해주면된다.


```js
class Codelab extends React.Component {
	render(){
		return (
		<div>
				<h1>Hello {this.props.name}</h1>
				<div>{this.props.children}</div>
		</div>
		)
	}
}

Codelab.defaultProps ={
	name : 'Unknown'
}

```

## 0.6 state

state는 유동적인 데이터로 초기값 설정이 필수.

이 초기값은 생성자(constructor)에서 this.state = {}로 설정

값 수정은 this.setState({})로 수정하기, 다시 this.state = {}로 절대 수정하지말것!

이렇게 사용하면 state사용 불가능 => 초기값이 없기때문에.
```js
//초기값 설정 전
class Counter extends React.Component{
  render(){
    return(
      <div>
        <h2>{this.state.value}</h2>
        <button>Press Me</button>
      </div>
    );
  }
}

//초기값 설정 후
class Counter extends React.Component{
  //초기값 설정
  constructor(props){
    super(props); //spuer을 사용해줘야 parent인 react의 this.state나 props에 접근가능
    this.state = {
      value: 0
    };
  }
  render(){
    return(
      <div>
        <h2>{this.state.value}</h2>
        <button>Press Me</button>
      </div>
    );
  }
}

```

### 여기에 버튼클릭시 +1이 되는 메소드를 만들어보자.

state 기본값 설정아래 매서드를 설정해준다.

그리고 버튼에 onClick으로 연결

```js
class Counter extends React.Component{
  //초기값 설정
  constructor(props){
    super(props); //spuer을 사용해줘야 parent인 react의 this.state나 props에 접근가능
    this.state = {
      value: 0
    };
  }
  
  buttonClick(){
    this.setState({
      value:this.state.value +1
    });
  }
  render(){
    return(
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.buttonClick}>Press Me</button>
      </div>
    );
  }
}
//아래 생략
```

여기까지 연결을 잘해줬는데도 숫자가 올라가지 않는다 

=> this가 뭔지 자바스크립트가 모르기때문이다. => binding

constructor 아랫부분에 카운터함수 buttonClick에서 사용되는 this는
랜더링되는 this와 같다는 bind를 해준다.
```js
 this.buttonClick= this.buttonClick.bind(this);
```

[ 전체코드 ]

```js
class Counter extends React.Component{
  //초기값 설정
  constructor(props){
    super(props); //spuer을 사용해줘야 parent인 react의 this.state나 props에 접근가능
    this.state = {
      value: 0
    };
    this.buttonClick= this.buttonClick.bind(this);
  }
  
  buttonClick(){
    this.setState({ //state는 setState로 수정
      value:this.state.value +1
    });
  }
  render(){
    return(
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.buttonClick}>Press Me</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Counter />
    );
  }
};

ReactDOM.render(<App />,document.getElementById("root"));
```