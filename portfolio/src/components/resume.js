import React, {Component} from 'react';
import {Card, CardTitle, CardActions, Button, CardText} from 'react-mdl';

class Resume extends Component{
    constructor(props){
        super(props);
        this.state= {activateTab: 0};
    }
    render(){
        if(this.state.activateTab===0){
            return(
                <Card shadow={0} style={{width: '500px', height: '500px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff'}}></CardTitle>
                    <CardText>
                        Max Cliff Technical Resume
                    </CardText>
                    <CardActions border>
                        <Button colored>
                            See here!                
                        </Button>
                    </CardActions>
                </Card>
            )
        }
        
    }
}

export default Resume;