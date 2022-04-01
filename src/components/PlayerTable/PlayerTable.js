import React from 'react';
import axios from 'axios';
import './PlayerTable.css'


function PlayerTable( props ){
    const { removeFromDom } = props;

    const deletePlayer = ( _id, name ) => {
        let answer = window.confirm( `Are you sure you want to delete ${name}` );
        if (answer) {
            axios.delete( 'http://localhost:8000/api/players/' + _id + '/delete' )
            .then( () => {
                removeFromDom( _id )
            })
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.players.map( ( player, idx ) => {
                    return(
                        <tr key={idx}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td>
                                <button className='delete-table' onClick={ ()=>{deletePlayer( player._id, player.name )}}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}
                )}
            </tbody>
        </table>
    )
};

export default PlayerTable;