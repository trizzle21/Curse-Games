import { GamesState } from "../state/GamesState";
import { 
    FetchGamesStarted, FetchGamesSucceeded, FetchGamesFailed,
    FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_FAILED,
} from '../actions/games';

type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed;

const initialState: GamesState = {
    games: [],
    isFetching:false,
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
                Games: action.Game,
                isFetching: false
            }
    }

    return state;
}
