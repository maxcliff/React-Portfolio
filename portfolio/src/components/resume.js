import React, {Component} from 'react';
import {Cell, Grid} from 'react-mdl';
import Education from './education.js';
import Experience from './experience.js';
class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell className= "resume-left-col" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img style={{height: '400px'}}src='https://www.shareicon.net/data/512x512/2015/09/22/105500_development_512x512.png' 
                            alt='profile'
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Max Cliff</h2>
                        <hr style={{borderTop: '3px solid #C6CAC8', width: '50%'}}/>
                        <p style= {{width: '95%'}}>
                        Hard working and dedicated learner who currently has sights set on a position in full-time web development or product management. Experienced in HTML5, CSS3, Javascript, React, JQuery, Node JS, MySQL, Bootstrap, Express, & Handlebars JS. I bring a positive attitude to new challenges and thrive when working in teams.
                        </p> 
                        <hr style={{borderTop: '3px solid #C6CAC8', width: '50%'}}/>
                        <h5>Address</h5>
                            <p>620 Beulah Rd.<br /> Vienna, VA 22180
                            </p>
                            
                        <h5>Phone</h5>
                            <p>(703)-593-9719</p>
                        <h5>Email</h5>
                            <p>maxcliff3@gmail.com</p>  
                        <hr style={{borderTop: '3px solid #C6CAC8', width: '50%'}}/>
                    </Cell>
                    <Cell className= "resume-right-col" col={8}>
                        <h3>Education</h3>

                        <Education 
                            startYear="January 2018"
                            endYear="April 2018"
                            schoolName="George Washington University"
                            schoolDescription="Enrolled as a full-time student in an intensive 12-week long boot camp dedicated to designing and building web applications. Skills learned consisted of HTML5, CSS3, Javascript, JQuery, Bootstrap, Node JS, MySQL, Express, React, and Handlebars JS. Familiar with Git commands and publishing in Heroku."
                        />

                        <Education 
                            startYear="August 2013"
                            endYear="May 2017"
                            schoolName="University of North Carolina at Charlotte"
                            schoolDescription="Received a B.A. in Communications with an emphasis in Public Relations. Skills learned include writing press releases, utilizing SEO analytics, managing clients and campaigns. Worked as an intern for the university's communications department during senior year. Earned Dean's List in Spring 2016, Fall 2017, and Spring 2017."
                        />

                        <h3>Work Experience</h3>

                        <Experience
                            startYear="May 2018"
                            endYear="May 2018"
                            Position="SoSACorp"
                            positionTitle="Software Development Intern"
                            positionDescription="Worked alongside team in developing new software for the company. Learned fundamentals of Python during the internship. Important technologies obtained include Docker, Pycharm, and Jupyter Notebook."
                        />

                        <Experience
                            startYear="September 2017"
                            endYear="January 2018"
                            Position="Sherwin-Williams"
                            positionTitle="Assistant Manager"
                            positionDescription="In charge of managing incoming supplies, scheduling external shipments, monitoring store expenses, and interactions with customers and clients contracted through Sherwin Williams. From this leadership position I learned how to manage other employees, assign tasks for others, and oversee store expenses."
                        />

                        <Experience
                            startYear="August 2017"
                            endYear="January 2018"
                            Position="Moe's Southwest Grill"
                            positionTitle="Business Development Coordinator"
                            positionDescription="Assigned to help enhance sales within Moe's Southwest Grill locations in the Washington D.C. area. Several of my duties included createing and managing SEO marketing leads, interacting with potential partners, and communicating with key publics via social media and email."
                        />

                       
                    </Cell>
                </Grid>

            </div>
        )
    }
    
}
export default Resume;