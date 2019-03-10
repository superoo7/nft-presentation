import * as React from 'react'
import { Slide, Heading, Image } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} textColor="secondary">
            Demo
        </Heading>
        <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
            <Image src="img/metamask.png" />
        </a>
    </Slide>
)
