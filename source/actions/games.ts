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
    game: Array<Game>;

};

function fetchGamesSucceeded(Game: Game[]): FetchGamesSucceeded { 
    return { type: FETCH_GAMES_SUCCEEDED, game: Game };
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


export type INCREASE_PROGRESS = 'INCREASE_PROGRESS';
export const INCREASE_PROGRESS: INCREASE_PROGRESS = 'INCREASE_PROGRESS';
export type IncreaseProgress = {
    type: INCREASE_PROGRESS;
};


function increaseProgress() {
    return (dispatch: Redux.Dispatch<any>, getState: GlobalStateGetter) => {
        dispatch({ type: INCREASE_PROGRESS }); 
    };
}





function turnDataIntoGameArray(gameArray: Array<any>){ 
    var Games = new Array();
    
    for(let a of gameArray){
        increaseProgress();
        let game: Game;
        
        Games.push({
            ID: a.ID,
            Name: a.Name,
            // SupportsAddons: a['SupportsAddons'],
            // SupportsVoice: a['SupportsAddons'],
            // Slug: a['Slug'],
            // Order:a['Number'],
        });
        
    }
    return Games;
}






// Fetch Games Thunk
export function fetchGames() {
    
    return (dispatch: Redux.Dispatch<any>, getState: GlobalStateGetter) => {
        dispatch(fetchGamesStarted()); 
        fetch(`https://clientupdate-v6.cursecdn.com/Feed/games/v10/games.json`)
        .then(response => response.json())
        .then(json => dispatch(fetchGamesSucceeded(turnDataIntoGameArray(json['data']))), json => dispatch(fetchGamesFailed()));
            

        console.log("finished");




    };
}
