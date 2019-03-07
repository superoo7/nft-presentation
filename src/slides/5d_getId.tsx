import * as React from 'react'
import { Slide, Heading, Appear } from 'spectacle'
import { erc721Context, presentationContext } from 'src/Provider'
import { observer } from 'mobx-react-lite'
import { range } from 'src/store/helper'

const GetIdsComponent: React.FunctionComponent = observer(() => {
    const erc721 = React.useContext(erc721Context)
    const presentation = React.useContext(presentationContext)
    const { balanceOf } = presentation
    const handleClick = async () => {
        const numArr = range(0, balanceOf)
        const promiseGetTokenIdArray = numArr.map(index => erc721.getTokenOfOwnerByIndex(index))
        const tokenData = (await Promise.all(promiseGetTokenIdArray)).map(d => parseInt(d, 10))
        presentation.updateNftIds(tokenData)
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h4>Current balanceOf: {balanceOf}</h4>
            <button onClick={handleClick} className="btn btn-info my-3">
                Get all Ids
            </button>
            <textarea className="form-control" readOnly rows={6} value={JSON.stringify(presentation.nftIds, null, 2)} />
        </div>
    )
})

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading margin="0 0 30px 0" size={1} textColor="secondary">
            Step 4
        </Heading>
        <Appear>
            <div>
                <Heading margin="0 0 30px 0" size={3} textColor="secondary">
                    tokenOfOwnerByIndex (in array)
                </Heading>
                <GetIdsComponent />
            </div>
        </Appear>
    </Slide>
)
