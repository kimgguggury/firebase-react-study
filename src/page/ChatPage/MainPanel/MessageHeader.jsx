import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const MessageHeader = () => {
  return (
    <>
      <Button variant="danger"><Link to={"/trash"} style={{ color : 'white', textDecorationLine: 'none', margin:'5px'}}>쓰레기통현황</Link></Button>
      <Button variant="secondary"><Link to ={"/"} style={{ color : 'white', textDecorationLine: 'none',margin:'5px'}}>채팅창</Link></Button>
    </>
  
  )
}

export default MessageHeader