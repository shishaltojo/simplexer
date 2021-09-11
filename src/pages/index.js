import * as React from "react"

import Message from '../components/message';
import Row from '../components/row';
import Input from '../components/input';

const IndexPage = () => {
  return (
    <>
      <Message>Write down the problem to solve</Message>
      <Row>
        <Message>Z=</Message>
        <Input/>
      </Row>
    </>
  )
}

export default IndexPage
