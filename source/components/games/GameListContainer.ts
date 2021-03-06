import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { GameList, GameListProps, ConnectedProps, ConnectedDispatch } from './GameList'; 
import { GamePage} from './GamePage';

import { GlobalState } from '../../state/GlobalState';

import { fetchGames } from '../../actions/games';



function mapStateToProps(state: GlobalState, props: GameListProps): ConnectedProps {
    return {
    	games: state.games.games,
    	isFetching: state.games.isFetching,
    	progress: state.games.progress,
    }
};

function mapDispatchToProps(dispatch: Dispatch<any>): ConnectedDispatch {
    return bindActionCreators({
        fetchGames,
        
    }, dispatch);
};

// tslint:disable-next-line:variable-name
export const GameListContainer = connect(mapStateToProps, mapDispatchToProps)(GameList) as React.ComponentClass<GameListProps>;
export const GamePageContainer = connect(mapStateToProps, mapDispatchToProps)(GamePage) as React.ComponentClass<GameListProps>;