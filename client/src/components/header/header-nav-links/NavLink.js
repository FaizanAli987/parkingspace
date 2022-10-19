import React from 'react'

function NavLink({name , link}) {
  return (
    <>
      <a className="nav-link active" aria-current="page" href={`${link}`}>{name}</a>
    </>
  )
}

export default NavLink