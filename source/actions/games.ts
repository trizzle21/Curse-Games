import { GlobalStateGetter } from "../state/GlobalState";
import { Game  } from '../models/Game';
import { config } from '../globals';
import { template, map} from "lodash";

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


function comparator(a:any,b:any){
    return a.Order - b.Order;
}

function turnDataIntoGameArray(gameArray: Array<any>){ 
    var length = gameArray.length;
    var Games = new Array(length);
    for(let a of gameArray){
        let game: Game;
        
        Games.push({
            ID: a.ID,
            Order:a.Order,
            Name: a.Name,
            SupportsAddons: a.SupportsAddons,
            SupportsVoice: a.SupportsAddons,
            Icon: config.gameIconURLTemplate({ 'gameID': a.ID }),
            Slug: a.Slug,
            GameFiles: a.GameFiles,
            Category: a.CategorySections,

        });

        
    }
    return Games.sort(comparator);
}






// Fetch Games Thunk
export function fetchGames() {
    return (dispatch: Redux.Dispatch<any>, getState: GlobalStateGetter) => {
        dispatch(fetchGamesStarted()); 
        fetch(config.gamesDataURL)
        .then(response => response.json())
        .then(json => dispatch(fetchGamesSucceeded(turnDataIntoGameArray(json['data']))), json => dispatch(fetchGamesFailed()));
            





    };
}
