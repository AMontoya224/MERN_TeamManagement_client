import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import Theme from '../../components/Theme/Theme';
import PlayerTable from '../../components/PlayerTable/PlayerTable';


function Home( props ){
    const [players, setPlayers] = useState( [] );
    const [loaded, setLoaded] = useState( false );

    const [iconTheme, setIconTheme] = useState( false );
    const changeTheme = () => {
        document.body.classList.toggle( 'dark-theme-variables' );
        setIconTheme( !iconTheme );
    };

    useEffect( ()=>{
        axios.get( 'http://localhost:8000/api/players' )
            .then( res=>{
                setPlayers( res.data );
                setLoaded( true );
            });
    },[players] );

    const removeFromDom = playerId => {
        //alert
        setPlayers( players.filter( player => player._id !== playerId ) );
    };

    if ( !loaded ) {
        return <></>;
    };

    return (
        <div className='home'>
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
                        <h2 className='link active'>
                            List
                        </h2>
                    </Link>
                    <h2 className='separador'>
                        |
                    </h2>
                    <Link to={`/players/addplayer/`} >
                        <h2 className='link'>
                            Add Player
                        </h2>
                    </Link>
                </div>
                {loaded && <PlayerTable players={players} removeFromDom={removeFromDom} />}
            </div>
        </div>
    );
};

export default Home;