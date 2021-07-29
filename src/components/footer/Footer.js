import React from 'react'
import { Copyrights } from './Copyrights'
import { FooterInformation } from './FooterInformation'

export const Footer = () => {
    return (
        <footer id="footer" className="dark">
            <FooterInformation/>
            <Copyrights/>
        </footer>
    )
}
