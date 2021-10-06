import color from 'color'
import React from 'react'
//prettier-ignore
import {Alert, Button, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableHighlight, TouchableOpacity, View} from 'react-native'
import {Colors} from 'react-native-paper'
import {Platform} from 'react-native'

// 3. 컴포넌트
// import * as D from './src/data'
// 3-1. 사용자 컴포넌트
// import ArrowComponent from './src/screen/ArrowComponent'
// 3-2. 타입스크립트로 함수 컴포넌트 구현하기
// import Person from './src/screen/Person'
// 4. 컴포넌트 이벤트 속성
// import {Button} from 'react-native'
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
  // return (
  //   <SafeAreaView>
  //     <ArrowComponent />
  //     <Person person={person} />
  //   </SafeAreaView>
  // )
  // # 3-2. 스크롤 뷰
  // const people = D.makeArray(100).map(D.createRandomPerson)
  // const children = people.map(person => (
  //   <Person key={person.id} person={person} />
  // ))
  // return (
  //   <SafeAreaView>
  //     <ScrollView>{children}</ScrollView>
  //   </SafeAreaView>
  // )
  // # 4. 이벤트 속성과 이벤트 처리기
  // return (
  //   <SafeAreaView>
  //     <Button
  //       title="Home"
  //       onPress={() => Alert.alert('home pressed.', 'message')}
  //     />
  //   </SafeAreaView>
  // )
  // # 4-1. 터쳐블
  // const onPress = () => Alert.alert('home pressed.', 'message')
  // return (
  //   <SafeAreaView>
  //     <Button title="home" onPress={onPress} />
  //     <TouchableOpacity onPress={onPress}>
  //       <Text>TouchableOpacity</Text>
  //     </TouchableOpacity>
  //     <TouchableHighlight onPress={onPress}>
  //       <Text>TouchableHeighLight</Text>
  //     </TouchableHighlight>
  //   </SafeAreaView>
  // )
  // # 4-2. TextInput
  // const onPress = () => Alert.alert('home pressed.', 'message')
  // return (
  //   <SafeAreaView>
  //     <Button title="home" onPress={onPress} />
  //     <TouchableOpacity onPress={onPress}>
  //       <Text>TouchableOpacity</Text>
  //     </TouchableOpacity>
  //     <TouchableHighlight onPress={onPress}>
  //       <Text>TouchableHeighLight</Text>
  //     </TouchableHighlight>
  //     <TextInput
  //       placeholder="enter your name"
  //       onChangeText={(text: string) => console.log(text)}
  //       // 포커싱 때 발생
  //       onFocus={() => console.log('onFocus')}
  //       // 포커싱을 잃었을 때 발생
  //       onBlur={() => console.log('onBlur')}
  //       // 편집을 마쳤을 때 발생
  //       onEndEditing={() => console.log('onEndEditing')}
  //     />
  //   </SafeAreaView>
  // )
  // # 5 Style sheet
  // return (
  //   <SafeAreaView style={[styles.SafeAreaView, {backgroundColor: 'blue'}]}>
  //     <Text style={[styles.text, {color: 'white'}]}>
  //       Hello StyleSheet world!
  //     </Text>
  //   </SafeAreaView>
  // )
  // # 5-1. react-native-paper와 color 패키지
  // return (
  //   <SafeAreaView style={[styles.SafeAreaView]}>
  //     <Text style={[styles.text]}>Hello StyleSheet world!</Text>
  //   </SafeAreaView>
  // )
  // # 6. View component css box model
  // #
  // const {width, height} = Dimensions.get('window')
  // 화면이 다르게 나타나는 이유
  /*
    1. SafeAreaView 는 android에서는 View로 동작한다.
    2. SafeAreaView 는 IOS에서는 View가 아니다.
    --> padding 이 동작하지 않는다.
  */
  // return (
  //   <SafeAreaView style={[styles.SafeAreaView]}>
  //     <Text style={[styles.text]}>OS : {Platform.OS}</Text>
  //     <Text style={[styles.text]}>width: {width}</Text>
  //     <Text style={[styles.text]}>height: {height}</Text>

  //     <View style={[styles.box, styles.border]} />
  //     <View style={[styles.box, styles.border, {borderRadius: 20}]} />
  //     <View
  //       style={[
  //         styles.box,
  //         styles.border,
  //         {borderTopLeftRadius: 40, borderBottomLeftRadius: 40},
  //       ]}
  //     />
  //   </SafeAreaView>
  // )
  // # Platform.select
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={[styles.text, {color: 'white'}]}>OS : {Platform.OS}</Text>
      <Text style={[styles.text, {color: 'yellow'}]}>width: {width}</Text>
      <Text style={[styles.text, {color: 'orange'}]}>height: {height}</Text>

      <View style={[styles.box, {borderRadius: 10}]} />
      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border, {borderRadius: 10}]} />
    </SafeAreaView>
  )
}
const {width, height} = Dimensions.get('window')
// prettier-ignore
const styles = StyleSheet.create({
  // SafeAreaView: {alignItems: 'center', backgroundColor: Colors.blue500, height: '50%'}, // justifyContent: 'center', flex: 1, 
  // SafeAreaView: {flex: 0.5 ,alignItems: 'center', backgroundColor: Colors.blue500},
  // SafeAreaView: {alignItems: 'center', backgroundColor: Colors.blue500, flex: 1, margin: '10%'},
  // SafeAreaView: {flex: 1 ,alignItems: 'center', backgroundColor: Colors.blue500, padding: 10},
  // text: {fontSize: 20, color: color(Colors.blue500).alpha(0.7).lighten(0.9).string(), marginBottom: 10},
  // box: {height: 100, backgroundColor: Colors.lime500, margin: 10, width},
  // border: {borderWidth: 10, borderColor: color('black').alpha(0.3).string(), width}

  SafeAreaView: {flex: 1, backgroundColor: Colors.blue500, paddingLeft: Platform.select({ios:0, android:20})},
  text: {fontSize: 20, marginBottom: 10, marginLeft:50, marginTop:10},
  box: {width: '70%', height: 100, backgroundColor: 'white', marginBottom: 10, marginLeft: Platform.select({ios: 20, android: 0})},
  border: {borderWidth: 10, borderColor: Colors.lime500}
})
