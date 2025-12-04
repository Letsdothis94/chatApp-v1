import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogOutbtn from './LogOutbtn'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        <LogOutbtn />
    </div>
  )
}

export default Sidebar