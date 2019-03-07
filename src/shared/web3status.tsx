import * as React from 'react'
import { web3Context } from 'src/Provider'
import { observer } from 'mobx-react-lite'

export const Web3Status: React.FunctionComponent = observer(() => {
    const { state } = React.useContext(web3Context)
    return (
        <i
            style={{
                color: state === 'loading' ? 'grey' : state === 'login' ? 'green' : 'red'
            }}
            className="fas fa-circle"
        />
    )
})
