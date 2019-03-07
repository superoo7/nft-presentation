import * as React from 'react'
import { Slide, Heading, Image } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading margin="0 0 30px 0" size={1} textColor="secondary">
            ERC Standard
        </Heading>
        <Image src="img/erc.png" alt="erc standard" />
    </Slide>
)
