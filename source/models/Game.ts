export interface Game {
	ID:number;
	[index: number]:number;
	Name:string;
	SupportsAddons:boolean;
	SupportsVoice:boolean;
	Icon:string;
	Slug:string;
	GameFiles: Array<any>;
	Category: Array<any>;
};

