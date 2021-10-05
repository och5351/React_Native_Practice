import React from 'react'
import {SafeAreaView, Text} from 'react-native'
// 3. 컴포넌트
import * as D from './src/data'
const person = D.createRandomPerson()
// 3-1. 사용자 컴포넌트
import ArrowComponent from './src/screen/ArrowComponent'
// 4. 타입스크립트로 함수 컴포넌트 구현하기
import Person from './src/screen/Person'

export default function App() {
  /*
  //console.log('App called')
  const textElement = React.createElement(Text, null, 'Hello world!')
  return textElement
  */
  // # 1. if 문 예제
  // const isLoading = true
  // const hello = 'Hello world'
  // return (
  //   <SafeAreaView>
  //     {/* if 문 단축 평가 코드
  //       isLoading ? <Text>{hello}</Text> : undefined
  //       아래와 같이
  //      */}
  //     {isLoading && <Text>Loading ...</Text>}
  //     {!isLoading && <Text>{hello}</Text>}
  //   </SafeAreaView>
  // )
  // # 1-1. if 문 예제
  // const cㄴhildren = isLoading ? <Text>Loading ...</Text> : <Text>{hello}</Text>
  // return <SafeAreaView>{children}</SafeAreaView>
  // # 2. 배열 -- 반드시 부모 컴포넌트 아래에 위치해야 함.
  // const children = [
  //   <Text>Hello world!</Text>,
  //   <Text>Hello world!</Text>,
  //   <Text>Hello world!</Text>,
  // ]
  // return <SafeAreaView>{children}</SafeAreaView>
  // # 2-1. 데이터 배열을 컴포넌트 배열로 만들기
  // const children = [1, 2, 3].map((i) => <Text>Hello world! {i}</Text>);
  // return <SafeAreaView>{children}</SafeAreaView>;
  // # 2-2. 조금씩 다른 100개의 컴포넌트 배열을 만드는 예
  // ERROR  Warning: Each child in a list should have a unique "key" prop.
  // undefined로 채워진 배열을 만들고 null로 채운 훈 map을 이용하여 index를 집어 넣는다.
  // const children = new Array(100)
  //   .fill(null)
  //   .map((notUsed, index) => <Text>Hello world! {index}</Text>)
  // return <SafeAreaView>{children}</SafeAreaView>
  // # 3. 컴포넌트
  // faker 외부 패키지 - 가짜 데이터 (package-lock.json 때문에 metro 서버 종료 후 설치)
  // > npm i faker
  // > npm i @types/faker <- typescript 노드 모듈
  // ./src/data 내용 기입
  // return (
  //   <SafeAreaView>
  //     <Text>{JSON.stringify(person, null, 2)}</Text>
  //   </SafeAreaView>
  // )
  // # 3-1. 사용자 컴포넌트
  return (
    <SafeAreaView>
      <ArrowComponent />
      <Person person={person} />
    </SafeAreaView>
  )
}
