import * as React from 'react'
import { Slide, Heading, Image } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="teal">
        <Heading margin="0 0 30px 0" size={1} textColor="t-primary">
            NFT Gecko
        </Heading>
        <Image src="img/nftgecko.png" alt="erc standard" />
        <a href="https://github.com/coingecko/nftgecko" target="_blank" rel="noopener noreferrer">
            <Heading size={5}>coingecko/nftgecko</Heading>
        </a>
    </Slide>
)
