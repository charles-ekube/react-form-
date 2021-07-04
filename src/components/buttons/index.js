import React from 'react';
import './style.css';


const Button = ({text_color, bg_color, title, mt, mb}) => {

    return (
        <>
            <button style={{color:text_color, backgroundColor:bg_color, marginTop:mt, marginBottom:mb}}>
                {title}
            </button>
        </>
    )
}

export {Button}