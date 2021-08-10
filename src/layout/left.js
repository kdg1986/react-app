import React from 'react';
import { Link } from 'react-router-dom';

const Left = () => {
    return (
        
        <div>
            <ul>
                <li><Link to="/section1">Home</Link></li>
                <li><Link to="/section1/page1">page1</Link></li>
                <li><Link to="/section1/page2">page2</Link></li>
                <li><Link to="/section1/page3">page3</Link></li>
                <li><Link to="/section1/page4">page4</Link></li>                
                <li><Link to="/section1/page5">page5</Link></li>                
            </ul>
            <hr/>
        </div>
        
    )
}

export default Left;