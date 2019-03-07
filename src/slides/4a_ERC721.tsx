import * as React from 'react'
import { Slide, Heading, Appear } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} textColor="secondary">
            ERC 721
        </Heading>
        <Appear>
            <Heading size={5} textColor="secondary">
                Standard for building non-fungible token
            </Heading>
        </Appear>
    </Slide>
)
