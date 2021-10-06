# React Native 조사

### React Native 구조

### Dom과 Rendering

<br>

아래와 같은 정적 HTML을 웹 브라우저는 파싱과정을 거쳐 자바스크립트 객체 구조를 만든다.

```html
<html>
  <body style="margin: 0; padding: 0">
    <div
      id="root"
      style="
            display: flex;
            width: 100vw;
            height: 100vh;
            align-items: center;
            justfy-content: center;"
    ></div>
  </body>
</html>
```

<br>

<p>비록 웹 브라우저는 &ltdiv&gt, &lth1&gt 같은 HTML 형태로 보여주지만 자바사크립트 코드 관점에서는 &ltdiv&gt는 HTMLDivElement 클래스의 인스터스이고 &lth1&gt은 HTMLHeadingElement 클래스의 인스턴스이다.
이 와 같은 클래스를 DOM 이라고 부르고 DOM 클래스의 인스턴스를 DOM 객체라고 한다. DOM 객체는 무수히 많으며 이 많은 DOM 객체는 부모/자식 형태의 tree 구조를 이루며, DOM 구조는 tree 구조 이다. HTML을 파싱하여 js DOM 구조로 만드는 것을 Rendering이라고 한다.</p>

<br><br>

##### 물리 DOM과 가상 DOM

<br>

React framework에는 물리 DOM과 가상 DOM 구조라는 용어를 사용하며,

- 물리 DOM : 웹 브라우저에서 자바스크립트 코드가 생성하는 실제 DOM 구조
- 가상 DOM : 리액트 코드가 생성한 자바스크립트 객체 구조

위 와 같은 의미로 사용된다.

React 는 특정 시점에서 가상 DOM구조를 물리 DOM 구조로 만드는데, 이를 React가 Rendering 한다고 말하며, 이 기능을 수행하는 패키지를 Renderer라고 한다.

> React는 가상 DOM 구조를 react-dom 이란 renderer package를 사용하여 물리 DOM 구조로 rendering 함. (DOM Renderer)
> <br>

> React Native는 가상 DOM 구조를 react-native 란 renderer package를 사용하여 물리 DOM 구조로 rendering 함. (Native Renderer)

### React 패키지의 역할

<br>

<div align="center">
<img src="https://user-images.githubusercontent.com/45858414/135958350-6416532a-93aa-4418-9fc8-32b7c2d22804.png" width="70%" height="70%" />
</div>

<br>

- react 패키지는 App.tsx 파일 같은 것들을 가상 DOM 구조로 만드는 역할(App Component)
- Native Renderer는 React 요소를 Android framework 이나 IOS용 UIKit fremework의 화면 UI 객체로 바꿔주는 역할

##### Bridge 방식 Rendering

<br>

JS로 동작하는 React는 React.render라는 DOM Renderer의 동작을 코드로 확인할 수 있지만 React Native에서는 Native Renderer의 모습을 확인할 수 없다.
android와 ios 디렉터리에 있는 Java 나 Object-C 로 구현한 Native 모듈 쪽에서 Rendering이 진행 되기 때문이다.
<br>

> Native module 쪽은 JavaScriptCore 라는 이름의 JS 엔진이 동작. C++ 로 구현 됨.
> <br>

> JavaScriptCore 엔진은 Android에서는 JNI(Java Native Interface) 방식으로 연결
> <br>

> JavaScriptCore 엔진은 IOS에서는 Object-C의 FFI(Foreign Function Interface)방식으로 연결

<br><br>

React Native App을 설치하고 실행하면 React Native의 Native module이 실행 되면서 Native(Android framework, IOS UIKit framework 쪽 Rendering)를 담당하는 UI Thread와 App.tsx와 같은 JS 코드를 실행하는 JS 엔진 Thread 2개가 동시에 동작 된다.
이 두 Thread는 Message queue 방식으로 서로 Rendering과 관련된 데이터를 주고 받는다.
사용자가 화면을 터치하거나 하면 UI Thread는 이 내용을 JS 쪽 Thread에 Event 형태로 넘긴다. 그리고 이런 방식으로 동작하는 Framework를 Bridge 방식 Framework라 한다.

<br><br>

##### Life cycle

1. 가상 DOM 객체 생성

```javascript
const pElement = React.createElement('p', null, 'Hello world!')
```

2. 물리 DOM 객체 생성

```javascript
import ReactDOM from 'react-dom'

ReactDOM.render(pElement, document.body)
```

3. 가상 DOM 객체 생성

```javascript
const textElement = React.createElement(Text, null, 'Hello world!')
```

4. DOM 객체를 네이티브로 넘김

```javascript
export default function App() {
  const testElement = React.createElement(Text, null, 'Hello world!')
  return testElement
}
```

### React Native 가 제공하는 두 가지 서비스

<br>

1. Core component: 어떤 내용을 Rendering 해야 할 때 사용
   <br>

2. API: 폰의 하드웨어나 운영체제가 제공하는 기능이 필요할 때 사용
   <br>

> React 와 같은 framework에서는 자신만의 Component를 만들 수 있다. 이렇게 직접 만드는 Component는 사용자 정의 컴포넌트 또는 사용자 컴포넌트라고 한다.
> <br>

사용자 컴포넌트 : 객체 지향 프로그래밍에서 컴포넌트 UI를 담당하는 클래스를 의미.

- 클래스 컴포넌트 : 객체지향 방식
- 함수 컴포넌트 : 리액트 훅 기능이 새로 도입되면서 나온 함수형 방식

<br>

클래스 컴포넌트

```javascript
import React, {component} from 'react'
import {Text} from 'react-native'
import * as D from '../data'

const person = D.createRandomPerson()
export default class ClassComponent extends Component {
  render() {
    return <Text>{JSON.stringify(person, null, 2)}</Text>
  }
}
```

<br>

함수형 컴포넌트

```javascript
import React from 'react'
import {Text} from 'react-native'
import * as D from '../data'

const person = D.createRandomPerson()
const ArrowComponent = () => {
  return <Text>{JSON.stringify(person, null, 2)}</Text>
}
export default ArrowComponent
```

<br><br>

### 속성이란?

<br>

속성이란 클래스의 맴버 변수를 의미.
또한 화면 UI를 담당하는 '클래스'이므로 속성을 가질 수 있다.
<br>

- 가변 : 수시로 값이 바뀌는 값
- 불변 : 한번 설정되면 다시는 바뀌지 않는 값
  <br>

React Native는 component의 속성이 바뀌면 이를 즉각 화면에 반영해야 한다.
React와 React Native에서 바뀐 속성값을 화면에 반영하는 것을 Re-rendering이라고 한다.
React와 React Native에서 속성은 '클래스 속성 + 재렌더링'을 의미하는 용어.
<br>

string 타입 속성값 지정

```javascript
<Person name="Jack" />
```

<br>

number 타입 속성값 지정

```javascript
<Person name="Jack" age={22} />
```

<br>

속성값이 객체일 때

```javascript
<Person person={{name: 'Jack', age: 32}} />
```

<br>

자식 컴포넌트로 데이터 전달

```javascript
const person = D.createRandomPerson()

export default function App() {
  return <ArrowComponent person={person} />
}
```

<br>

##### ID

<br>

모든 React와 React Native 컴포넌트 key, childern, ref 등 3개 속성을 기본으로 가진다.
이 중 key 속성은 React Framework가 Component의 렌더링 속도를 최적화 하는 데 필요한 속성이다.

<br><br>

### 함수 컴포넌트 타입

<br>

타입은 타입스크립트가 코드를 javascript로 컴파일 할 때만 필요한 정보. 타입스크립트 코드가 자바프크립트 코드로 컴파일되고 나면 타입 관련 내용은 자바스크립트 코드에서 완전히 사라진다.
<br>

import type 구문

```javascript
import type {FC} from 'react'
import {component} from 'react'
```

### 스타일

<br>

인라인 스타일과 StyleSheet 스타일과의 차이
<br>

컴포넌트는 필요에 따라 리액트 네이티브에 의해 재렌더링 됨.

<b>인라인 스타일 방식</b>은 자바스크립트 엔진 쪽 스레드에서 UI 스레드 쪽으로 브리지를 경유하여 옮겨 가므로 내용이 <b>컴포넌트 로직에 의해 바뀌지 않을 때는 앱의 디스플레이 속도가 떨어짐.</b>
이 와는 달리 <b>StyleSheet.create로 생성된 스타일 객체</b>는 UI Thread 쪽에 캐시되므로 <b>앱 전체의 디스플레이 속도가 빨라짐.</b>

<br><br>

### width와 height 스타일 속성과 값 설정 방법

<br>

width 와 height 스타일의 속성값 4가지 방법

1. 명시적으로 width, height를 설정하지 않고 React Native의 기본 설정 방식을 따르는 방법
2. 픽셀(pixel, px) 단위의 숫자를 직접 설정하는 방법
3. 부모 요소의 width, height를 기준으로 자식 Component의 크기를 퍼센트(%)로 설정하는 방법
4. flex 속성을 사용하여 여러 자식 Component가 부모 Component의 크기를 분할하여 가지는 방법
