import React from 'react';
import { Link } from 'react-router-dom';

function BackHome(){
    return(
        <div className="BackHome div11">
            <Link to="/"><button className='backHomeBtn'>Back to Home Page</button></Link>
        </div>
    );
};

export default BackHome;