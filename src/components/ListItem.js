import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const Listitem = (props) => {
    if(!props.title){
        return null;
    }
  return <div data-test='listItemComponent'>
<h1 data-test='titleComponent'>{props.title}</h1>
<div data-test='descComponent'>{props.desc}</div>

  </div>;
};

Listitem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default Listitem;
