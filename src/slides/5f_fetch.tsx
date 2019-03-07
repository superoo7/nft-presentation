import * as React from 'react'
import { Slide, Heading, Appear } from 'spectacle'
import { presentationContext } from 'src/Provider'
import { observer } from 'mobx-react-lite'

const FetchUriComponent: React.FunctionComponent = observer(() => {
    const presentation = React.useContext(presentationContext)

    const handleClick = async () => {
        const promiseGetUriArray = presentation.uri.map(uri => fetch(uri).then(d => d.json()))
        const jsonArr = await Promise.all(promiseGetUriArray)
        presentation.updateJsonArray(jsonArr)
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <textarea className="form-control" readOnly rows={6} value={JSON.stringify(presentation.uri, null, 2)} />
            <button onClick={handleClick} className="btn btn-info my-3">
                Fetch all Uri
            </button>
            <textarea
                className="form-control"
                readOnly
                rows={6}
                value={JSON.stringify(presentation.jsonArray, null, 2)}
            />
        </div>
    )
})

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading margin="0 0 30px 0" size={1} textColor="secondary">
            Step 6
        </Heading>
        <Appear>
            <div>
                <Heading margin="0 0 30px 0" size={3} textColor="secondary">
                    Fetch all URI (GET request)
                </Heading>
                <FetchUriComponent />
            </div>
        </Appear>
    </Slide>
)
