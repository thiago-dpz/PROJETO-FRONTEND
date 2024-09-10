import React from 'react';
import { work_process } from '../../constants/data';
import "./WorkProcess.css";

const WorkProcess = () => {
  return (
    <div className='work-process section-p bg-white' id='workprocess'>
        <div className='container'>
            <div className='work-process-content'>
                <div className='section-title'>
                    <h3 className='text-green'>Working <span className='text-black'>Process</span></h3>
                    <p className='text-black'>Our work in a four-way proccess</p>
                </div>

                <div className='workprocess-list grid'>
                    {
                        work_process.map((workprocess, index) => {
                            return (
                                <div className='workprocess-item text-center' key={index}>
                                    <div className='workprocess-item-title flex'>
                                        <span className='text-green fw-7'>0 {index + 1}</span>
                                        <h3 className='text-black fw-5'>{workprocess.title}</h3>
                                    </div>
                                    <p className='text-dark'>
                                        {workprocess.paragraph}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkProcess