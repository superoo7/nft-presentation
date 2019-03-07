import * as React from 'react'
import { Slide, Heading, Appear } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
        <Heading size={1} margin="0 0 20px 0" textColor="secondary" caps>
            THE END
        </Heading>
        <Appear>
            <Heading size={1} textColor="secondary" caps>
                Q & A
            </Heading>
        </Appear>
    </Slide>
)
