import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Box.css'

const Box = ({color}) =>{
    return (
            <div className="Box"
                style={{backgroundColor: color}}
            >
            
            </div>
        );
}

Box.propTypes = {
  color: PropTypes.string
};

export default Box;