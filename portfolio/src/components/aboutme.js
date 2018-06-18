import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class About extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={3}>
                        <h1 style={{fontFamily: 'Quicksand'}}>About Me</h1>
                            <img 
                                src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/1922158_795269010502382_818500846_n.jpg?_nc_cat=0&oh=08bf6341cb98db761021542c82f371c5&oe=5BB0F640"
                                alt="avatar"
                                className="boat-img"  
                            />

                            <img 
                                src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/32399288_10211608953483721_2805134361827999744_o.jpg?_nc_cat=0&oh=bf0d9b068b13db2c5c07c82f468d3ae7&oe=5BBB9C40"
                                alt="doggo"
                                className="dog-img"  
                            />


                    </Cell>
                    
                    <Cell col={9}>
                        <h4 style={{fontFamily: 'Quicksand', margin: '50px', border: 'solid black 1px', padding: '20px'}}>

                        Hello! My name is Max and I am seeking employment within the field of web development. I am 23 years old and I currently live in Vienna, Virginia. In my spare time I enjoy playing soccer, walking my dogs, and working out. I am new to web development, but have quickly grown to like it. Before programming, I was working two jobs, one in customer sales and the other in business development. 
                        I considered them to be "jobs" rather than occupations because they were a way to pass the time and make money. This led me to look into other opportunities that I felt would be worthwhile. Coding was foreign to me and I felt there wasn't a chance that it would be something I'd be capable of doing. After taking some advice 
                        from several friends, I decided to give it a try through online courses. After diving into the basic HTML and CSS, I was hooked. The way the code rendered on the page gave me a feeling of instant joy and I couldn't get enough. This led me to look into programs where I could learn at an accelerated rate to augment my learning. I found the bootcamp at George Washington University and my true 
                        journey through the world of programming began! I have since earned my certificate in full-stack web development and I'm continuing to perfect my craft every day. I've learned from my experience that no matter what I’m doing, if I don't have a sense of pride in my work, I need to make a change. While it was difficult transitioning from working full time back to learning as a student,
                         I know that my choice was ultimately the best and I have a positive outlook on my future in web development.   
                        </h4>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;