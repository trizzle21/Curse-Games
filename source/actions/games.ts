import { GlobalStateGetter } from "../state/GlobalState";
import { Game } from '../models/Game';

// Fetch Games Started
export type FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export const FETCH_GAMES_STARTED: FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export type FetchGamesStarted = {
    type: FETCH_GAMES_STARTED;

};

function fetchGamesStarted(): FetchGamesStarted { 
    return { type: FETCH_GAMES_STARTED };
}

// Fetch Games Succeeded
export type FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
export const FETCH_GAMES_SUCCEEDED: FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
export type FetchGamesSucceeded = {
    type: FETCH_GAMES_SUCCEEDED;
    Game:Object;

};

function fetchGamesSucceeded(Game: Object): FetchGamesSucceeded { 
    return { type: FETCH_GAMES_SUCCEEDED, Game };
}

// Fetch Games Failed
export type FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export const FETCH_GAMES_FAILED: FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export type FetchGamesFailed = {
    type: FETCH_GAMES_FAILED;
};

function fetchGamesFailed(): FetchGamesFailed { 
    return { type: FETCH_GAMES_FAILED };
}



// export type RECIEVE_GAMES = 'RECIEVE_GAMES';
// export const RECIEVE_GAMES: RECIEVE_GAMES = 'RECIEVE_GAMES';
// export type RecieveGames = {
//     type: RECIEVE_GAMES;

// };

// function recieveGames(Game: Game): RecieveGames { 
//     return { 
//        type: RECIEVE_GAMES,
//        JSON: Game[],
//     };
// }




// Fetch Games Thunk
export function fetchGames() {
    
    return (dispatch: Redux.Dispatch<any>, getState: GlobalStateGetter) => {
        dispatch(fetchGamesStarted()); 
        fetch(`https://clientupdate-v6.cursecdn.com/Feed/games/v10/games.json`)
        .then(response => dispatch(fetchGamesSucceeded(response['data'])), json => dispatch(fetchGamesFailed()));

        console.log("finished");




    };
}
