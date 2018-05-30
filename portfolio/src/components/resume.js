import React, {Component, Link} from 'react';
import {Card, CardTitle, CardActions, Button, CardText} from 'react-mdl';

class Resume extends Component{
    constructor(props){
        super(props);
        this.state= {activateTab: 0};
    }
    render(){
        if(this.state.activateTab===0){
            return(
                <Card shadow={0} style={{width: '500px', height: '500px', margin: 'auto', top: '75px'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://careerminer.infomine.com/wp-content/uploads/2013/01/Resume.jpg) bottom left'}}></CardTitle>
                    <CardText>
                        Max Cliff Technical Resume
                    </CardText>
                    <CardActions border>
                        <Button colored>
                            See here              
                        </Button>
                    </CardActions>
                </Card>
            )
        }
        
    }
}

export default Resume;