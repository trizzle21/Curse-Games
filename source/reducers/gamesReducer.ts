import { GamesState } from "../state/GamesState";
import { 
    FetchGamesStarted, FetchGamesSucceeded, FetchGamesFailed,
    FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_FAILED, 
} from '../actions/games';

type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed;

const initialState: GamesState = {
    games: [],
    isFetching:false,
    progress:0
};

export function gamesReducer(state: GamesState = initialState, action: Actions) {
    switch (action.type) {
        case FETCH_GAMES_STARTED:
            return {
                ...state,
                isFetching: true,
                progress: .5,
            }
        case FETCH_GAMES_FAILED:
            return {
                ...state,
                isFetching: false
            }
        case FETCH_GAMES_SUCCEEDED:
            return {
                ...state,
                games: action.game,
                isFetching: false,
                progress: 1,
            } 
    }

    return state;
}


