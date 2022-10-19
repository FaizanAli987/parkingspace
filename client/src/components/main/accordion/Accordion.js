import React from 'react'

function Accordion(props) {
  return (
    <>
    
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#'+props.id} aria-expanded="true" aria-controls={props.id}>
        {props.question}
      </button>
    </h2>
    <div id={props.id} className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {props.answer}
      </div>
    </div>
  </div>


    </>
  )
}

export default Accordion