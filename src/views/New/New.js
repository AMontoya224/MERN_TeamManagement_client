import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './New.css';
import PlayerForm from '../../components/PlayerForm/PlayerForm';
import Theme from '../../components/Theme/Theme';


function New( props ){
    const [serverError, setServerError] = useState( ' ' ); 
    const [isCreate, setIsCreate] = useState( false );

    const onSubmitCreate = player => {
        axios.post( 'http://localhost:8000/api/players/new', player )
            .then( () => {
                setServerError( ' ' );
                setIsCreate( true );
            })
            .catch( err => {
                try{ setServerError( 'Fields cannot be empty, cannot create' ); }
                catch( err ) { setServerError( ' ' ); };
            })
    };

    return (
        <div className='new'>
            {isCreate ? <Redirect to='/players/list'/> : <></>}
            <div className='row justify'>
                <Link to={`/players/list`} >
                    <h2 className='link active'>
                        Manage Players
                    </h2>
                </Link>
                <Link to={`/status/game/0`} >
                    <h2 className='link'>
                        Manage Player Status
                    </h2>
                </Link>
                <Theme/>
            </div>
            <div className='sub-container'>
                <div className='row justify'>
                    <Link to={`/players/list`} >
                        <h2 className='link'>
                            List
                        </h2>
                    </Link>
                    <h2 className='separador'>
                        |
                    </h2>
                    <Link to={`/players/addplayer/`} >
                        <h2 className='link active'>
                            Add Player
                        </h2>
                    </Link>
                </div>
                <PlayerForm initialName={''} initialPosition={''} initialServerError={serverError} 
                            onSubmitProp={onSubmitCreate}/>
            </div>
        </div>
    );
};

export default New;