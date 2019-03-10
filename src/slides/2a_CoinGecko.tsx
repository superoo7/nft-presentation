import * as React from 'react'
import { Slide, Image } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="teal">
        <Image src="img/CoinGecko-WhiteText.png" alt="CG" />
        <div className="d-flex justify-content-around">
            <a href="https://coingecko.com/en" target="_blank" rel="noopener noreferrer">
                CoinGecko Site
            </a>
            <a href="https://coingecko.com/api" target="_blank" rel="noopener noreferrer">
                CoinGecko API
            </a>
        </div>
    </Slide>
)
