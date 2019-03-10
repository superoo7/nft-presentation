import * as React from 'react'
import { Slide, Heading, Image } from 'spectacle'

const EthPrice = () => {
    const priceRef: React.RefObject<HTMLDivElement> = React.createRef()

    React.useEffect(() => {
        const scriptSrc = 'https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js'
        const scriptObj = document.createElement('script')
        scriptObj.src = scriptSrc
        document.head.append(scriptObj)

        const node = priceRef.current
        /* tslint:disable max-line-length */
        node!.innerHTML =
            '<coingecko-coin-price-chart-widget coin-id="ethereum" currency="usd" height="300" locale="en"></coingecko-coin-price-chart-widget>'
    }, [])

    return (
        <div className="d-flex justify-content-center">
            <div style={{ height: '100%', width: 'auto' }}>
                <Image src="img/ethereum.png" />
                <span>Ethereum</span>
            </div>
            <div ref={priceRef} />
        </div>
    )
}

export default (
    <Slide transition={['fade']} bgColor="lightgreen">
        <Heading margin="0 0 30px 0" size={1} textColor="darkblue">
            Blockchain for NFTs
        </Heading>
        <EthPrice />
    </Slide>
)
