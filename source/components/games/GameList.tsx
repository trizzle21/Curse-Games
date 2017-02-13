import * as React from 'react';
import { Game } from "../../models/Game";

import {fetchGames} from '../../actions/games';

export interface GameListProps extends React.Props<GameList> {
    // Define any props taken by List itself.
}

export interface ConnectedProps {
    // Define any connected props here. (The ones mapped by ListContainer.)
    isFetching: boolean;
    games: Game[];
}

export interface ConnectedDispatch {
    // Define any connected dispatch actions here. (The ones mapped by ListContainer.)
    fetchGames:Function;


}

type CombinedTypes = GameListProps & ConnectedProps & ConnectedDispatch;

export class GameList extends React.Component<CombinedTypes, void> {
    
    componentDidMount(){
        const { fetchGames } = this.props;
        console.log('mounted');
        fetchGames();
    }

    render() {
        console.log(this.props);
        if(this.props.isFetching){
            return(
                    <div className='GameList--root'>
                    <img src="/assets/images/flame.png" />
                
                    <progress value="20" max="100"></progress>


                </div>

            );
        } else {
            return (
                <div className='GameList--root'>
                    <img src="/assets/images/flame.png" />
                    <h1>Curse React Test</h1>
                
                    <p>{this.props.games}</


                    p>

                </div>
            );
        }
    }
} 
