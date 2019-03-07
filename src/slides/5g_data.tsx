import * as React from 'react'
import { Slide, Heading, Appear } from 'spectacle'
import { presentationContext } from 'src/Provider'
import { observer } from 'mobx-react-lite'

const ShowDataComponent: React.FunctionComponent = observer(() => {
    const presentation = React.useContext(presentationContext)

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <textarea
                className="form-control"
                readOnly
                rows={6}
                value={JSON.stringify(presentation.jsonArray, null, 2)}
            />
            <div style={{ overflowY: 'auto', overflowX: 'hidden', height: '300px' }} className="container row">
                {presentation.jsonArray.map(data => {
                    return (
                        <div className="col-6" key={data.properties.image.description}>
                            <img
                                className="img-fluid"
                                src={data.properties.image.description}
                                alt={data.properties.image.description}
                            />
                            <h5>{data.properties.name.description}</h5>
                            <h5>{data.properties.description.description}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
})

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading margin="0 0 30px 0" size={1} textColor="secondary">
            Step 7
        </Heading>
        <Appear>
            <div>
                <Heading margin="0 0 30px 0" size={3} textColor="secondary">
                    Render Data + 💰
                </Heading>
                <ShowDataComponent />
            </div>
        </Appear>
    </Slide>
)
