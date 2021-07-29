import React from 'react'
import { Banner } from '../banner/Banner'
import { Content } from './Content'
import { Information } from './Information'

export const SuperContent = () => {
    return (
        <div className ='banner-app m-56'>
            <Banner/>
            <Content/>
            <Information/>
        </div>
    )
}
