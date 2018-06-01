import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style= {{width: '100%', margin: 'auto'}}>
                <Grid className= "landing-grid">
                    <Cell col = {12}>
                        <img
                        src="https://media.licdn.com/dms/image/C4D03AQFVsBTaugcKWg/profile-displayphoto-shrink_200_200/0?e=1530295200&v=beta&t=U82FoYHbpEyvjDPESbQKyeeB0A74_cilu4guSkwkbbg"
                        alt="avatar"
                        className="avatar-img"
                        />
                    <div className= "banner-text">
                        <h1>Max Cliff</h1>

                        <hr/>
                        <p>HTML/CSS | Bootstrap | Javascript | NodeJS | React | MongoDB</p>
                        
                        <div className= "social-links">
                            {/*Github*/}
                                <a href= "https://www.github.com/maxcliff" rel= "noopener noreferrer" target= "_blank">
                                <i className="fa fa-github-square" aria-hidden= "true"/>
                                </a>
                            {/*Linkedin*/}
                                <a href= "https://www.linkedin.com/in/maxcliff/" rel= "noopener noreferrer" target= "_blank">
                                <i className="fa fa-linkedin-square" aria-hidden= "true"/>
                                </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;