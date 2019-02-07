import React, { Component } from 'react';
import  './style.css';

class MediaEffect extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="middle">
                <a className="btn" href="#">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn" href="#">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className="btn" href="#">
                    <i className="fab fa-google"></i>
                </a>
                {/* <a className="btn" href="#">
                    <i className="fab fa-instagram"></i>
                </a> */}
                {/* <a className="btn" href="#">
                    <i className="fab fa-youtube"></i>
                </a> */}
            </div>
         );
    }
}
 
export default MediaEffect;