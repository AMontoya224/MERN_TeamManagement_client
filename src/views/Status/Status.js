import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Status.css';
import GameTable from '../../components/GameTable/GameTable';
import Theme from '../../components/Theme/Theme';


function Home( props ){
    const [players, setPlayers] = useState( [] );
    const [loaded, setLoaded] = useState( false );

    useEffect( ()=>{
        axios.get( 'http://localhost:8000/api/players' )
            .then( res=>{
                setPlayers( res.data );
                setLoaded( true );
            });
    },[players] );

    if ( !loaded ) {
        return <></>;
    };

    return (
        <div className='status'>
            <div className='row justify'>
                <Link to={`/players/list`} >
                    <h2 className='link'>
                        Manage Players
                    </h2>
                </Link>
                <Link to={`/status/game/0`} >
                    <h2 className='link active'>
                        Manage Player Status
                    </h2>
                </Link>
                <Theme/>
            </div>
            <div className='status-container'>
                <p className='status-title'>
                    Player Status - Game {Number( props.match.params.idx ) + 1}
                </p>
                <div className='row justify'>
                    <Link to={`/status/game/0`} >
                        <h2 className={ ( props.match.params.idx === '0' ) ? 'link active' : 'link'}>
                            Game 1
                        </h2>
                    </Link>
                    <h2 className='separador'>
                        |
                    </h2>
                    <Link to={`/status/game/1`} >
                        <h2 className={ ( props.match.params.idx === '1' ) ? 'link active' : 'link'}>
                            Game 2
                        </h2>
                    </Link>
                    <h2 className='separador'>
                        |
                    </h2>
                    <Link to={`/status/game/2`} >
                        <h2 className={ ( props.match.params.idx === '2' ) ? 'link active' : 'link'}>
                            Game 3
                        </h2>
                    </Link>
                </div>
                {loaded && <GameTable players={players} gameIdx={props.match.params.idx}/>}
            </div>
        </div>
    );
};

export default Home;