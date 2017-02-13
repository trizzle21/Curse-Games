import * as React from 'react';
import { Game } from "../../models/Game";

import {fetchGames} from '../../actions/games';

export interface GameListProps extends React.Props<GameList> {
    // Define any props taken by List itself.
    ID:number;
    Name:string;
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
                           return <li class="Game" key={game.ID}>
                                
                                <div>
                                  GameName: {game.Name}
                                </div>
                                <div>Supports AddOn:</div>
                                <div>Supports Video:</div>

                           </li>
                         })
                     }
                     </ul>




                    

                </div>
            );
        }
    }
} 
