import React from 'react'

function UserBtn({BtnName , changecolor}) {
  return (
    <>
    <button className={changecolor?changecolor
    :'user-btn'}>
        {BtnName}
    </button>
    </>
  )
}

export default UserBtn