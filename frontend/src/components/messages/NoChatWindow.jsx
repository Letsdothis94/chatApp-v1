import React from 'react'
import { useAuthContext } from '../../context/AuthContext';

const NoChatWindow = () => {
  const { authUser  } = useAuthContext();
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg text-gray-200 font-semibold">
        <p>Welcome {authUser.username} </p>
        <p>Select a friend to start conversation</p>
      </div>
    </div>
  );
}

export default NoChatWindow