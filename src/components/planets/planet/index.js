import React from "react";
import IMG from "../../shared";
import DescriptionWithLink from "../DescriptionWithLink";

const Planet = (props) => {
    return (
      <div class="PADDING">
        <h2>{props.name}</h2>
        <DescriptionWithLink nameOfPlanet={props.description} linkOfPage={props.link}/>
        <IMG img_url={props.img_url}/>
        <hr></hr>
      </div>
    )
  }

export default Planet;