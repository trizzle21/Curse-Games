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
        const { fetchGames } = this.props;
        fetchGames();
    }



    render() {
        //Uses Opacity as progress.
        if(this.props.isFetching){
            return(
                    
                <div className='GameList--root'>
                    <img src="/assets/images/flame.png" />
                    <br />
                    <h2 style={{opacity:this.props.progress}}>Loading...</h2>

                </div>

            );
        } else {
            return (
                <div className='GameList--root'>
                    <img src="/assets/images/flame.png" />
                    <h1>Curse React</h1>

                     <ul>
                         {this.props.games.map(function(game){
                           return  <Link className="Link" to={`/game/${game.ID}`} key={game.ID}> <div className="Game"  >
                                <div className="leftSideSquare">
                                <img className="icon" src={game.Icon} />
                                <div className="Title">
                                   {game.Name}
                                </div>
                                </div>
                                <div className="rightSideSquare">
                                    <div>Supports AddOn: {game.SupportsAddons.toString()}</div>
                                    <div>Supports Video: {game.SupportsVoice.toString()}</div>
                                </div>
                            </div>
                                </Link>                        

                         })


                     }
                     </ul>




                    

                </div>
            );
        }
    }
} 
