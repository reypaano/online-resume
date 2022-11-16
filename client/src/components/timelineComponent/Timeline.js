import React, { useContext, useState, useEffect } from 'react'
import {ReactComponent as WorkLogo}  from '../../images/work.svg'
import {ReactComponent as SchoolLogo}  from '../../images/school.svg'
import axios from 'axios'

import {
    VerticalTimeline, 
    VerticalTimelineElement
} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"

function Timeline() {
    const workIconStyles = {background: "#06d6a0"};
    const schoolIconStyle = {background: "#f9c74f"};
    const [data, setData] =useState([])

    const loadData = async () => {
        const response = await axios.get(`http://localhost:3001/api/experience-info/` )
        setData(response.data)
    } 

    useEffect (() => {
        loadData()
      }, [])

  return (
    <div className='timeline'>
        <h1 className='title'>Experience Timeline</h1>
        <VerticalTimeline>
            {
                data.map(element=>{
                    const isWorkIcon= element.expe_type ==="work";
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