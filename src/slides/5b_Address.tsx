import * as React from 'react'
import { Slide, Heading, Appear } from 'spectacle'
import Web3Store from '../store/web3.store'
import { web3Context } from 'src/Provider'
import { observer } from 'mobx-react-lite'

interface Props {
    web3?: Web3Store
}

const SetupAddressComponent: React.FunctionComponent<Props> = observer(() => {
    const web3 = React.useContext(web3Context)
    const holderAddr = '0x89ae614d5e0c9dad0fa6a53ca3b14e38c85a73b8'
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        web3!.updateChosenAccount(value)
    }
    const handleClick = () => {
        web3!.updateChosenAccount(holderAddr)
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <input type="text" value={web3!.accountChosen} onChange={handleChange} className="form-control" />
            <button className="btn btn-info" onClick={handleClick}>
                Update Address to {holderAddr}
            </button>
        </div>
    )
})

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading margin="0 0 30px 0" size={1} textColor="secondary">
            Step 2
        </Heading>
        <Appear>
            <div>
                <Heading margin="0 0 30px 0" size={3} textColor="secondary">
                    Setup Address
                </Heading>
                <SetupAddressComponent />
            </div>
        </Appear>
    </Slide>
)
