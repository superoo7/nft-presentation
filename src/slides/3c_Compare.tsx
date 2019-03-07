import * as React from 'react'
import { Slide, Image, Text } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="lightgreen">
        <Image src="img/erc-fungible.png" height="600" alt="fungible" />
        <Text>
            Image Source: Non-Fungible Tokens and What Are Those? (
            <a
                href="https://www.asynclabs.co/blog/what-are-non-fungible-tokens/"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://www.asynclabs.co/blog/what-are-non-fungible-tokens/
            </a>
            )
        </Text>
    </Slide>
)
