import { Game } from "../models/Game";

export interface GamesState {
    games: Game[];
    isFetching: boolean;
    progress:number;
}
