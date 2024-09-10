import React from 'react'
import './Services.css'
import {services} from '../../constants/data'

const Services = () => {
  return (
    <div className='services section-p' id='services'>
        <div className='container'>
            <div className='services-content'>
                <div className='section-title'>
                    <h3 className='text-green'>our <span className='text-black'>services</span></h3>
                    <p className='text-black'>Our methods in the study of snake behavior and conservation</p>
                </div>

                <div className='services-list grid'>
                    {
                        services.map((service, index) => {
                            return (
                                <div className='services-item text-center' key = {index}>
                                    <div className='services-item-img'>
                                        <img src={service.image} className='mx-auto' alt="" />
                                    </div>
                                    <div className='services-item-text'>
                                        <h4 className='text-black fs-22 fw-5'>{service.title}</h4>
                                        <p className='text-dark mx-auto'>{service.paragraph}</p>
                                    </div>
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

export default Services