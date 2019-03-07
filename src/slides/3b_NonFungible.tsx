import * as React from 'react'
import { Slide, Heading, Appear, Image } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="lightgreen">
        <Heading margin="0 0 30px 0" size={1} textColor="darkblue">
            Non-Fungible
        </Heading>
        <Appear>
            <Image src="img/nonfungible.png" />
        </Appear>
        <Appear>
            <Heading margin="30px 0 0 0" size={5}>
                not interchangeable
            </Heading>
        </Appear>
    </Slide>
)
