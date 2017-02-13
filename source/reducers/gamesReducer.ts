import { GamesState } from "../state/GamesState";
import { 
    FetchGamesStarted, FetchGamesSucceeded, FetchGamesFailed, IncreaseProgress,
    FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_FAILED, INCREASE_PROGRESS
} from '../actions/games';

type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed | IncreaseProgress;

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
                isFetching: true
            }
        case FETCH_GAMES_FAILED:
            return {
                ...state,
                isFetching: false
            }
        case FETCH_GAMES_SUCCEEDED:
            console.log(action);
            return {
                ...state,
                games: action.game,
                isFetching: false
            } 
        case INCREASE_PROGRESS:
            return {
                ...state,
                progress: state.progress += 10,
            }
    }

    return state;
}


