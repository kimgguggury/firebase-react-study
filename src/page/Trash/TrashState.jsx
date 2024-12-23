import React from 'react'
import MessageHeader from '../ChatPage/MainPanel/MessageHeader'
import ProgressBar from 'react-bootstrap/ProgressBar';


const TrashState = () => {
  return (
    <div style={{ padding: '2rem 2rem 0 2rem' }}>
        <MessageHeader />
        <div style={{
                width: '100%',
                height: '567px',
                border: '.2rem solid #ececec',
                borderRadius: '4px',
                padding: '2rem',
                marginBottom: '1rem',
                overflowY: 'auto'
            }}>
                <div style={{margin:'30px'}}>
                    <h1 style={{marginBottom:'20px'}}>1층</h1>
                    <ProgressBar animated now={10} />
                </div>
                <div style={{margin:'30px'}}>
                    <h1 style={{marginBottom:'20px'}}>2층</h1>
                    <ProgressBar animated now={30} />
                </div>
                <div style={{margin:'30px'}}>
                    <h1 style={{marginBottom:'20px'}}>3층</h1>
                    <ProgressBar animated now={50} />
                </div>
                <div style={{margin:'30px'}}>
                    <h1 style={{marginBottom:'20px'}}>4층</h1>
                    <ProgressBar animated now={80} />
                </div>
                


        </div>   
    </div>
  )
}

export default TrashState