import React from 'react';

function CallBtn(props){

    
        const handleButtonClick = () => {
          const dialpadURL = `tel:${props.btnPhoneNumber}`;
          window.location.href = dialpadURL;}
        

    return(
        <button onClick={handleButtonClick} className="btn2callnow">{props.btnText1}</button>
    );
};

export default CallBtn;