import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';



class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Max Cliff</h2>
                            <img src="https://i.pinimg.com/originals/2f/a8/9a/2fa89a127b2ac70c76120da902d3c4a7.jpg" alt= "avatar" style= {{height: '350px', width: '350px', margin: 'auto'}}/>
                        <p style= {{color: 'white', width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            Feel free to reach out to me about future opportunities or if you have any questions. I am also seeking new projects to work on, so if you want to collaborate
                            I would love to hear your ideas. If you just want to chat about soccer, hawaiian shirts, or food then I'm all ears!
                        </p>            
                    </Cell>
                    <Cell className="contact-info" col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className= "contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        (703)593-9719
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        maxcliff3@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        <a href= 'https://www.linkedin.com/in/maxcliff' target="_blank" rel="noopener noreferrer">www.linkedin.com/in/maxcliff</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>  
                        </div>         
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;