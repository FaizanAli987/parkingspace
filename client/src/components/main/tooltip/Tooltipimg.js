import React from 'react'

function Tooltipimg({title,image}) {
  return (
    <>
    <div className="tooltip-img"> <img src={image} alt="" />
  <span className="tooltiptext">{title}</span>
</div>
    </>
  )
}

export default Tooltipimg