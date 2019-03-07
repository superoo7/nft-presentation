import { range } from './helper'
import { action, observable } from 'mobx'
import { TokenItem } from './API.interface'
import Web3Store from './web3.store'

class ERC721Store {
    @observable public loading: boolean
    @observable public progress: number
    @observable public error = false
    @observable public totalSupply: number
    @observable public erc721Token: number
    @observable public numberOfTokensOwned: number
    @observable public data: Array<{
        tokenId: number
        uri?: string
        json?: TokenItem
        data?: {
            name: string
            description: string
            image: string
        }
    }> = []

    private web3: Web3Store

    constructor(web3: Web3Store) {
        this.web3 = web3
    }

    @action.bound
    public async initialize() {
        this.loading = true
        this.progress = 0
        this.error = false

        try {
            // get total supply
            this.totalSupply = await this.getTotalSupply()
            this.progress = 20
            // 3. Get number of NFT tokens owned
            this.numberOfTokensOwned = parseInt(`${await this.getNumberOfTokens()}`, 10)
            this.progress = 30
            if (this.numberOfTokensOwned > 0) {
                // 4. Based on numberOfTokensOwned, get all the own token id.
                const numberArray = range(0, this.numberOfTokensOwned)
                const promiseGetTokenIdArray = numberArray.map(index => this.getTokenOfOwnerByIndex(index))
                const tokenData = (await Promise.all(promiseGetTokenIdArray)).map(d => parseInt(d, 10))
                this.progress = 50
                this.data = tokenData.map(d => ({ tokenId: d }))
                // 5. Based on token_id, get uri
                const promiseGetUriArray = tokenData.map(token => this.getURI(token))
                const uriData = await Promise.all(promiseGetUriArray)
                this.progress = 75
                this.data = this.data.map((d, key) => ({ ...d, uri: uriData[key] }))
                // 6. Fetch
                const promiseFetchJsonArray = uriData.map(i => fetch(i).then(d => d.json()) as Promise<TokenItem>)
                const jsonData = await Promise.all(promiseFetchJsonArray)
                this.progress = 100
                this.data = this.data.map((d, key) => ({
                    ...d,
                    data: {
                        description: jsonData[key].properties.description.description,
                        image: jsonData[key].properties.image.description,
                        name: jsonData[key].properties.name.description
                    },
                    json: jsonData[key]
                }))
            }

            this.loading = false
        } catch (err) {
            this.loading = false
            this.error = true
        }
    }

    /**
     * Get total supply of ERC721 tokens
     * @returns {(Promise<number>)}
     * @memberof ERC721Store
     */
    @action.bound
    public getTotalSupply(): Promise<number> {
        return this.web3.token.methods.totalSupply().call()
    }

    @action.bound
    public getTokenOfOwnerByIndex(index: number): Promise<string> {
        return this.web3.token.methods.tokenOfOwnerByIndex(this.web3.accountChosen, index).call()
    }

    @action.bound
    public checkOwnerOf(token: string) {
        return this.web3.token.methods.ownerOf(token).call()
    }

    @action.bound
    public getURI(tokenId: number) {
        return this.web3.token.methods.tokenURI(tokenId).call()
    }

    @action.bound
    public getNumberOfTokens(): Promise<number> {
        return this.web3.token.methods.balanceOf(this.web3.accountChosen).call()
    }
}

export default ERC721Store
