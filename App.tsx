import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default function App() {
  /*
  //console.log('App called')
  const textElement = React.createElement(Text, null, 'Hello world!')
  return textElement
  */

  const isLoading = true;
  const hello = 'Hello world';
  // # 1. if 문 예제
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
  const children = new Array(100)
    .fill(null)
    .map((notUsed, index) => <Text>Hello world! {index}</Text>);
  return <SafeAreaView>{children}</SafeAreaView>;
}
