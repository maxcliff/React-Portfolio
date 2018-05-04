import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state= { activeTab: 0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <Card shadow={0} style={{width: '300px', height: '300px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
            )
        } else if (this.state.activeTab === 1){
            return(
                <Card shadow={0} style={{width: '300px', height: '300px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        nice
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
            )
        }else if (this.state.activeTab === 2){
            return(
                <Card shadow={0} style={{width: '300px', height: '300px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        nice
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
            )
        }else if (this.state.activeTab === 3){
            return(
                <Card shadow={0} style={{width: '300px', height: '300px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        nice
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                    <CardMenu style= {{color: '#fff'}}>
                        <IconButton name= "share" />
                    </CardMenu>
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