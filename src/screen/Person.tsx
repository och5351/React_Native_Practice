import React from 'react'
import type {FC} from 'react'
import * as D from '../data'
import {Text} from 'react-native'

export type PersonProps = {
  person: D.IPerson
}
// 클래스 형
// const Person: FC<PersonProps> = props => {
//   const {person} = props
//   return <Text>{JSON.stringify(person, null, 2)}</Text>
// }

// 함수형
const Person: FC<PersonProps> = ({person}) => {
  return <Text>{JSON.stringify(person, null, 2)}</Text>
}

export default Person
