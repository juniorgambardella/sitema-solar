import React from "react";

const DescriptionWithLink = (props) => {
  return (
    <div>
    <p>{props.nameOfPlanet}</p>
    <a href={props.linkOfPage}>{props.linkOfPage}</a>
    </div>
  )
}

export default DescriptionWithLink