import * as React from 'react';
import { Link } from 'react-router'

import { Game } from "../../models/Game";

import {fetchGames} from '../../actions/games';

export interface GameListProps extends React.Props<GameList> {
    // Define any props taken by List itself.
    ID:number;
    Name:string;
    SupportsAddons:boolean;
}

export interface ConnectedProps {
    // Define any connected props here. (The ones mapped by ListContainer.)
    games: Array<Game>;
    isFetching: boolean;
    progress:number;
}

export interface ConnectedDispatch {
    // Define any connected dispatch actions here. (The ones mapped by ListContainer.)
    fetchGames:Function;


}

type CombinedTypes = GameListProps & ConnectedProps & ConnectedDispatch;

export class GameList extends React.Component<CombinedTypes, void> {
    
    componentDidMount(){
        console.log(typeof this.props.games);

        const { fetchGames } = this.props;
        console.log('mounted');
        fetchGames();
    }

    render() {

        console.log(this.props.progress);
        if(this.props.isFetching){
            return(
                    <div className='GameList--root'>
                    <img src="/assets/images/flame.png" />
                    <br />
                    <progress value="200" max="200"></progress>


                </div>

            );
        } else {
            return (
                <div className='GameList--root'>
                    <img src="/assets/images/flame.png" />
                    <h1>Curse React Test</h1>

                     <ul>
                         {this.props.games.map(function(game){
                           return <Link to={`/game/${game.ID}`}> <li className="Game" key={game.ID} >
                                
                                <img src={game.Icon} />
                                <b>
                                   {game.Name}
                                </b>
                                <div>Supports AddOn: {game.SupportsAddons.toString()}</div>
                                <div>Supports Video: {game.SupportsVoice.toString()}</div>
                            </li>
                            </Link>                           

                         })


                     }
                     </ul>




                    

                </div>
            );
        }
    }
} 
