import axios from 'axios';
import './GameTable.css'


function GameTable( props ){
    const { players, gameIdx } = props;

    const onSubmitUpdate = ( _id, status, idx, action ) => {
        let newStatus = [...status];
        newStatus[idx] = action;
        axios.put( 'http://localhost:8000/api/players/' + _id + '/update', {status : newStatus} )
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {players.map( ( player, idx ) => {
                    let col = player.status[gameIdx];
                    return(
                        <tr key={idx}>
                            <td>{player.name}</td>
                            <td>
                                <button className={ ( col === 'Playing' ) ? 'update-table sucess' : 'update-table'} 
                                        onClick={ ()=>{onSubmitUpdate( player._id, player.status, gameIdx, 'Playing' )}}>
                                    Playing
                                </button>
                                <button className={ ( col === 'Not Playing' ) ? 'update-table danger' : 'update-table'} 
                                        onClick={ ()=>{onSubmitUpdate( player._id, player.status, gameIdx, 'Not Playing' )}}>
                                    Not Playing
                                </button>
                                <button className={ ( col === 'Undecided' ) ? 'update-table warning' : 'update-table'} 
                                        onClick={ ()=>{onSubmitUpdate( player._id, player.status, gameIdx, 'Undecided' )}}>
                                    Undecided
                                </button>
                            </td>
                        </tr>
                    )}
                )}
            </tbody>
        </table>
    )
};

export default GameTable;