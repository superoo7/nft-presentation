import * as React from 'react'
import { Slide, Heading, Appear } from 'spectacle'
import Web3Store from '../store/web3.store'
import { Web3Status } from 'src/shared/web3status'
import { web3Context } from 'src/Provider'

interface Props {
    web3?: Web3Store
}

const InitialButton: React.FunctionComponent<Props> = () => {
    const web3 = React.useContext(web3Context)
    const handleClick = () => {
        web3!.initialize()
    }
    return (
        <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-info btn-lg mr-4" onClick={handleClick}>
                Activate 🚀
            </button>
            <Web3Status />
        </div>
    )
}

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading margin="0 0 30px 0" size={1} textColor="secondary">
            Step 1
        </Heading>
        <Appear>
            <div>
                <Heading margin="0 0 30px 0" size={3} textColor="secondary">
                    Initialize Web 3
                </Heading>
                <InitialButton />
            </div>
        </Appear>
    </Slide>
)
