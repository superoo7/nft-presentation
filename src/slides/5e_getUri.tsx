import * as React from 'react'
import { Slide, Heading, Appear } from 'spectacle'
import { erc721Context, presentationContext } from 'src/Provider'
import { observer } from 'mobx-react-lite'

const GetIdsComponent: React.FunctionComponent = observer(() => {
    const erc721 = React.useContext(erc721Context)
    const presentation = React.useContext(presentationContext)
    const { balanceOf } = presentation
    const handleClick = async () => {
        const promiseGetUriArray = presentation.nftIds.map(token => erc721.getURI(token))
        const uriData = await Promise.all(promiseGetUriArray)
        presentation.updateUri(uriData)
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h4>Current balanceOf: {balanceOf}</h4>
            <textarea className="form-control" readOnly rows={6} value={JSON.stringify(presentation.nftIds, null, 2)} />
            <button onClick={handleClick} className="btn btn-info my-3">
                Get all Uri
            </button>
            <textarea className="form-control" readOnly rows={6} value={JSON.stringify(presentation.uri, null, 2)} />
        </div>
    )
})

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading margin="0 0 30px 0" size={1} textColor="secondary">
            Step 5
        </Heading>
        <Appear>
            <div>
                <Heading margin="0 0 30px 0" size={3} textColor="secondary">
                    tokenURI (in array)
                </Heading>
                <GetIdsComponent />
            </div>
        </Appear>
    </Slide>
)
