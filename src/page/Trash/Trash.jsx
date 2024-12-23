import React from 'react'
import SidePanel from '../ChatPage/SidePanel/SidePanel'
import TrashState from './TrashState'

export const Trash = () => {
  return (
    <div style ={{display:'flex', height:"100vh"}}>
      <div style = {{ width:'300px'}}>
        <SidePanel />
      </div>
      <div style = {{width: '100%'}}>
        <TrashState />
      </div>
    </div>
  )
}
