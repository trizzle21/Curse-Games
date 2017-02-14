import * as React from 'react';
import { Link } from 'react-router'


import { Game } from "../../models/Game";

interface params{
	GameID: number;
}


export class GamePage extends React.Component<any, void> {


	componentDidMount(){
		//Checks if games is empty
		if(this.props.games.length === 0){
        	
        	this.props.fetchGames();
		}


	}

    search(nameKey:number, gameList:Game[]){
    	//Searches for right Game in list
    	for(var i = 0; i < gameList.length; i++){
    		if(gameList[i].ID == nameKey){
    			return gameList[i];
    		}
    	}
    }


	render() {  
		const game = this.search(this.props.params.GameID, this.props.games );
		if(this.props.games.length !== 0){
			return (
				<div>
	            	<Link to="/" className="Return">Return</Link>
				<div className="GameData">
	            	<div className="GameInfo">
	            		<img className="GameImage" src={game.Icon} />

	            		<div className="GameNameInfo">
	            			<div className="GameTitle">{game.Name}</div>
	                		<div className="Slug">{game.Slug}</div>
	                	</div>
	                	
	                	<div>Supports AddOn: {game.SupportsAddons.toString()}</div>
	                	<div>Supports Video: {game.SupportsVoice.toString()}</div>
                    </div>
	                
	                <div className="GameFiles">
                     <h4 className="subtitle">Game Files</h4>

                     {game.GameFiles.map(function(file){
                           return (<div className="GameFile" key={file.FileName} >
								{file.FileName}
							</div>)                        
                      })}

                     
                     </div>
                     
                     <div className="Categories">
                     <h4 className="subtitle">Categories</h4>
                     {game.Category.map(function(file){
                           return <div className="Category" key={file} >
								{file.Name}
							</div>                        
                      })}     
	            	</div>

	            </div>
	            </div>
	        );
		} else {
            return(
                    
                <div className='GameList--root'>
                    <img src="/assets/images/flame.png" />
                    <br />
                    <h2 style={{opacity:this.props.progress}}>Loading...</h2>

                </div>

            );
		}

	}


}