import * as React from 'react'
import { Slide, Heading, Appear } from 'spectacle'
import { erc721Context, presentationContext } from 'src/Provider'
import { observer } from 'mobx-react-lite'

const SetupAddressComponent: React.FunctionComponent = observer(() => {
    const erc721 = React.useContext(erc721Context)
    const presentation = React.useContext(presentationContext)

    const handleClick = async () => {
        const bal = await erc721!.getNumberOfTokens()
        presentation.updateBalanceOf(bal)
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <button onClick={handleClick} className="btn btn-info">
                Get balanceOf
            </button>
            <span>balance: {presentation.balanceOf}</span>
        </div>
    )
})

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading margin="0 0 30px 0" size={1} textColor="secondary">
            Step 3
        </Heading>
        <Appear>
            <div>
                <Heading margin="0 0 30px 0" size={3} textColor="secondary">
                    call balanceOf function
                </Heading>
                <SetupAddressComponent />
            </div>
        </Appear>
    </Slide>
)
