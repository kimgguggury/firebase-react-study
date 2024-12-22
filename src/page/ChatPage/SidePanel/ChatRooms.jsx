import React, { useState } from 'react'
import {FaPlus, FaRegSmileWink} from 'react-icons/fa';
import { Modal, Form} from 'react-bootstrap'

const ChatRooms = () => {

  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  return (
    <div>
      <div style ={{
        position : 'relative',
        width : '100%',
        display : 'flex',
        alignItems: 'center'
      }}>

      <FaRegSmileWink style ={{ marginRight :  3}}/>
      CHAT ROOMS {" "} 

      <FaPlus onClick ={() => setShow(!show)} />

      </div>

      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>채팅 방 생성하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <From.Label>방 이름</From.Label>
              <From.Control 
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder = '채팅방 이름을 입력하세요'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ChatRooms