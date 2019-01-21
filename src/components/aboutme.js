import React, {Component} from 'react';
// import '../stylesheets/aboutme.css';
import {Grid, Cell} from 'react-mdl';

class About extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={3}>
                        <h1 style={{fontFamily: 'Quicksand'}}>About Me</h1>

                    </Cell>
                    
                    <Cell col={9} tablet={8}>
                        <h4 style={{fontFamily: 'Quicksand', margin: '50px', border: 'solid black 1px', padding: '20px'}}>
                            Hello! My name is Max and I am a Front End Web Developer. I am 23 years old and I currently live in Reston, Virginia. In my spare time I enjoy playing sports and eating good food. I am new to web development, but have quickly grown to like it. Before programming, I was working two jobs, one in customer sales and the other in business development. 
                            I have since earned my certificate in full-stack web development from George Washington University and I'm continuing to perfect my craft every day. While it was difficult transitioning from working full time back to learning as a student,
                            I know that my choice was ultimately the best and I have a positive outlook on my future in web development.   
                        </h4>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;