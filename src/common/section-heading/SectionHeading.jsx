import React from "react";
import { NavLink } from "react-router-dom";
import './SectionHeading.css'

function SectionHeading({ title, mainTitle, description, children }) {
  return (

    <div className={` section-heading flex mb-5  ${children?'justify-content-between' : 'center'}`}>
      <div className="sec-details">

        <b className={`d-block ${!children ? 'text-center' : ''}`}>


          {title}

          <span> {mainTitle}</span>
        </b>


        <p className={`m-0 text-center`} style={{maxWidth : !children && '400px'}}>{description}</p>
      </div>

      {children}
    </div>

  );
}

export default SectionHeading;
