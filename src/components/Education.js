import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

function Education() {
    return (
        <div className="education">
          <h1>Education</h1>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <br/>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <br/>
            <ListGroup.Item><strong>Concordia University</strong> from <strong>Sept. 2017​ to Apr. 2019</strong> in​ the <strong>Science Foundations</strong> program <br/> I ​worked on my pre-requisites for Engineering (Physics and Chemistry) and completed 1st and 2nd year Mechanical Engineering classes.</ListGroup.Item>
             <br/>
            <ListGroup.Item><strong>Dawson College</strong> from	<strong>Aug. 2015​ to Apr. 2017​</strong> recieving a <strong>DEC</strong> in <strong>Commerce</strong></ListGroup.Item>
          </ListGroup>
        </div>
    )
}

export default Education;