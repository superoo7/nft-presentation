import * as React from 'react'
import { Slide, Heading, Image, Text } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="teal">
        <Heading size={2} caps lineHeight={2} textColor="t-primary">
            About Me
        </Heading>
        <Image src="img/profile.png" alt="Profile Image" />
        <Heading margin="30px 0 10px 0" size={4} textColor="t-primary" bold caps>
            Johnson Lai (@superoo7)
        </Heading>
        <Text margin="0 0 10px 0" textColor="t-primary">
            Software Engineer @ CoinGecko
        </Text>
        <Text className="d-flex justify-content-around">
            <a href="https://twitter.com/jlwhoo7" target="_blank" rel="noopener noreferrer">
                <i style={{ color: 'white' }} className="fab fa-2x fa-twitter-square" />
            </a>
            <a href="https://github.com/superoo7" target="_blank" rel="noopener noreferrer">
                <i style={{ color: 'white' }} className="fab fa-2x fa-github-square" />
            </a>
            <a href="https://linkedin.com/in/superoo7" target="_blank" rel="noopener noreferrer">
                <i style={{ color: 'white' }} className="fab fa-2x fa-linkedin" />
            </a>
        </Text>
    </Slide>
)
