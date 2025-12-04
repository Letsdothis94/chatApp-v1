import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='flex flex-col px-4 overflow-auto'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages