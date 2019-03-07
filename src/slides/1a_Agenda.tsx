import * as React from 'react'
import { Slide, Heading, List, ListItem, Appear } from 'spectacle'
import '../style/shake.css'
export default (
    <Slide transition={['zoom']} bgImage="img/ancient-animal.jpg">
        <div style={{ background: 'rgba(0,0,0,0.5)', padding: '4px' }}>
            <Heading margin="0 0 0 30px" size={2} caps lineHeight={1} textColor="t-primary">
                Agenda
            </Heading>
            <List textColor="t-primary">
                <Appear>
                    <ListItem>Ethereum, Fungible, Non Fungible</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Comparison of ERC standard</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Demo</ListItem>
                </Appear>
            </List>
        </div>
    </Slide>
)
