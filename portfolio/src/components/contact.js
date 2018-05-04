import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';


class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Max Cliff</h2>
                            <img 
                                src="https://i.pinimg.com/originals/2f/a8/9a/2fa89a127b2ac70c76120da902d3c4a7.jpg"/>
                                
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Info</h2>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;