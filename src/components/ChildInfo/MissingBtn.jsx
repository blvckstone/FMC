import React from 'react';


function MissingBtn(props){
    return(
        
        <div className="div3" style={{backgroundImage: `url(${props.childImg})`}}>
            <button className="btn1" style={{backgroundColor: props.bgColor, color: props.txtColor}} >{props.text}</button>
            
        </div>
    );
};

export default MissingBtn;