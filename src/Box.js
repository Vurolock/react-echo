import React from 'react';

const Box = (props) => {
    return (
        <div className="text-box">
            <input
                className="text-input"
                type="text"
                onChange={ (event) => props.handleOnChange(event.target.value) }
                value={props.content} 
            />
        </div>
    );
}

export default Box;