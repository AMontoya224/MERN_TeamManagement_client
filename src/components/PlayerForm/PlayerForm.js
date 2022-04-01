import React, { useState } from 'react';
import './PlayerForm.css';



function PlayerForm( props ){
    const { initialName, initialPosition, initialServerError, onSubmitProp} = props;
    const [name, setName] = useState( initialName );
    const [position, setPosition] = useState( initialPosition );

    const [nameError, setNameError] = useState(' ');
    const [positionError, setPositionError] = useState(' ');
    
    const handleName = e => {
        setName( e.target.value );
        ( e.target.value.length === 0 || e.target.value.length >= 2 ) ? setNameError(' ') :
                             setNameError( 'The name must be at least 2 characters long' );
    };

    const handlePosition = e => {
        setPosition( e.target.value );
        ( e.target.value.length === 0 || e.target.value.length >= 3 ) ? setPositionError(' ') :
                             setPositionError( 'The type must be at least 2 characters long' );
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp( {name, position} );
    };

    return (
        <form onSubmit={onSubmitHandler} className='row'>
            <div className='container'>
                <h1>
                    Add Player
                </h1>
                <div className='inp-container'>
                    <label htmlFor='name' className='inp'>
                        <input type='text' id='name' className='inp-input' placeholder=' ' value={name} 
                               onChange={handleName}/>
                        <span className='inp-label'>Player Name</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{nameError}</p>
                    </label>
                </div>
                <div className='inp-container'>
                    <label htmlFor='position' className='inp'>
                        <input type='text' id='position' className='inp-input' placeholder=' ' value={position} 
                               onChange={handlePosition}/>
                        <span className='inp-label'>Preferred Position</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{positionError}</p>
                    </label>
                </div>
                <p className='error-server'>
                    {initialServerError}
                </p>
                <button type={( nameError.length > 1 || positionError.length > 1 ) ? 'reset' : 'submit'}
                   className={( nameError.length > 1 || positionError.length > 1 ) ? 'submit not-submit' : 'submit'}>
                       Add
                </button>
            </div>
        </form>
    );
};

export default PlayerForm;