export interface Game {
	ID:number;
	Name:string;
	SupportsAddons:boolean;
	SupportsVoice:boolean;
	// Slug:string;
	// Order:number;
	// FileName:Array<GameFiles>;
	// category:Array<Category>;
};

interface GameFiles {
	ID:number;
 	GameId:number;
 	Name:string;


}


interface Category {
	ID:number;
	GameID:number;
	Name:string;
	packageType:number;
	Path:string;
	InitialInclusionPattern:string;
	ExtraIncludePattern:any;

}
