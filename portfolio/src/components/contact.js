import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';



class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2 style= {{color: 'white', fontFamily: 'Poppins'}}>Max Cliff</h2>
                            <img src="https://i.pinimg.com/originals/2f/a8/9a/2fa89a127b2ac70c76120da902d3c4a7.jpg" 
                                style= {{height: '400px', width: '400px', margin: 'auto'}}
                            />            
                    </Cell>
                    <Cell col={6}>
                        <h2 style= {{color: 'white', fontFamily: 'Poppins'}}>Contact Info</h2>
                            <h3 style= {{color: 'white', fontFamily: 'Poppins'}}>Email....maxcliff3@gmail.com</h3>
                            <h3 style= {{color: 'white', fontFamily: 'Poppins'}}>Cell....703-593-9719</h3>
                            
                            
                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;