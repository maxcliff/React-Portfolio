import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state= { activeTab: 0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <Card shadow={0} style={{width: '300px', height: '300px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://embedwistia-a.akamaihd.net/deliveries/e292ff06a3954f931671ae1bd96c10095860095e.jpg) center no-repeat #46B6AC'}}></CardTitle>
                    <CardText>
                        HTML/CSS
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <a href= "" rel= "noopener noreferrer" target= "_blank">
                            <i aria-hidden= "true"/>View Here
                        </a>
                        </Button>
                    </CardActions>
                </Card>
            )
        } else if (this.state.activeTab === 1){
            return(
                <Card shadow={0} style={{width: '300px', height: '300px', margin: 'auto'}}>
                    <CardTitle expand style={{color: 'black', background: 'url(https://www.sololearn.com/Icons/Courses/1082.png) center no-repeat #ffff'}}></CardTitle>
                    <CardText>
                        GIFTASTIC
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <a href= "https://maxcliff.github.io/Giftastic/" rel= "noopener noreferrer" target= "_blank">
                            <i aria-hidden= "true"/>View Here
                        </a>
                        </Button>
                    </CardActions>
                </Card>
            )
        }else if (this.state.activeTab === 2){
            return(
                <Card shadow={0} style={{width: '300px', height: '300px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://cdn.auth0.com/blog/es6rundown/logo.png) center no-repeat #ea273e'}}></CardTitle>
                    <CardText>
                        TRIVIA GAME            
                    </CardText>
                    <CardActions border>
                        <Button colored>
                            <a href= "https://maxcliff.github.io/Trivia-Game/" rel= "noopener noreferrer" target= "_blank">
                                <i aria-hidden= "true"/>View Here
                            </a> 
                        </Button>
                    </CardActions>
                </Card>
            )
        }else if (this.state.activeTab === 3){
            return(
                <Card shadow={0} style={{width: '300px', height: '300px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://appendto.com/wp-content/uploads/2016/05/React-1.png) center no-repeat #866AF6'}}></CardTitle>
                    <CardText>
                        READING LIST
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <a href= "https://reactreadinglis.herokuapp.com/" rel= "noopener noreferrer" target= "_blank">
                            <i aria-hidden= "true"/>View Here
                        </a>
                        </Button>
                    </CardActions>
                </Card>
            )
        }
    }

    render() {
        return(
            <div className= "category-tabs">
                <Tabs activeTab= {this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>JQuery</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>React</Tab>
                </Tabs>
                <section className="projects-grid">
                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;