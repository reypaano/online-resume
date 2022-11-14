import React from 'react'
import {ReactComponent as WorkLogo}  from '../../images/work.svg'
import {ReactComponent as SchoolLogo}  from '../../images/school.svg'
import timelineElements from '../../pages/timelineElements'

import {
    VerticalTimeline, 
    VerticalTimelineElement
} from 'react-vertical-timeline-component'

import "react-vertical-timeline-component/style.min.css"

function Timeline() {
    const workIconStyles = {background: "#06d6a0"};
    const schoolIconStyle = {background: "#f9c74f"};
  return (
    <div className='timeline'>
        <h1 className='title'>Timeline</h1>
        <VerticalTimeline>
            {
                timelineElements.map(element=>{
                    const isWorkIcon= element.icon ==="work";
                    const showButton = element.buttonText !== undefined 
                        && element.buttonText !== null 
                        && element.buttonText  !== ""; 
                    return(
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon ? workIconStyles:schoolIconStyle}
                            icon={isWorkIcon? <WorkLogo/> : <SchoolLogo/>}
                        >
                            <h3 className='vertical-timeline-element-title'>
                                {element.title}
                            </h3>
                            <h5 className='vertical-timeline-element-subtitle'>
                                {element.location}
                            </h5>

                            <p id='description'>{element.description}</p>
                            
                            { showButton && (
                                <a className={ `button ${
                                    isWorkIcon ? "workButton" : "schoolButton"
                                  }`}
                                    href='/'>
                                        {element.buttonText}
                                </a>)

                            }
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    </div>
    
  )
}

export default Timeline