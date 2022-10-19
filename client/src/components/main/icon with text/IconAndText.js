import React, { Fragment } from 'react'
import Ptag from '../../typography/Ptag'
import H2tag from '../../typography/H2tag'
import Lowpricesvg from '../../svg/Lowpricesvg'
import Parasmall from '../../typography/Parasmall'


function IconAndText(props) {
  return (
    <>
      <div className={props.columns}>
    <div className="icon-and-textbox">
    <div className="img-div">
        <img src={props.image} alt="" />
    {/* <Lowpricesvg svgpath={props.svg}/> */}
      </div>
      <div className="icon-svg">
    {/* <Lowpricesvg svgpath={props.svg}/> */}
      </div>

<div className="icon-text">

  <H2tag subtitle={props.title}/>
    <Parasmall para={props.para} />
</div>
  </div>
  </div>
  </>
  )
}

export default IconAndText