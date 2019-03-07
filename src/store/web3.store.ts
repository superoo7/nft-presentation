import { abi, address } from './contract'
import { action, computed, observable } from 'mobx'
import Web3 from 'web3'

interface CustomWindow extends Window {
    web3: Web3
    ethereum: any
}

declare let window: CustomWindow

class Web3Store {
    @observable public web3instance: Web3
    @observable public state: 'login' | 'logout' | 'loading' = 'loading'
    @observable public accountIds: string[] = []
    @observable public accountChosen: string
    @observable public accounChosenBalance: string
    @observable public network: string
    // @observable public token: any;

    @action.bound
    public async initialize() {
        this.state = 'loading'
        let web3 = window.web3
        if (window.ethereum) {
            this.web3instance = new Web3(window.ethereum)
            try {
                // Request account access if needed
                await window.ethereum.enable()
                this.state = 'login'
                this.checkLogin()
            } catch (error) {
                // User denied account access...
                this.state = 'logout'
            }
        } else if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider)
            this.web3instance = web3
            this.checkLogin()
        } else {
            // Fallback to localhost if no web3 injection. We've configured this to
            // use the development console's port by default.
            const provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')
            web3 = new Web3(provider)
            this.web3instance = web3
            this.checkLogin()
        }
    }

    @action.bound
    public async checkLogin() {
        this.network = await (this.web3instance.eth.net as any).getNetworkType()
        await this.web3instance.eth.getAccounts((err, accounts) => {
            if (err) {
                this.state = 'logout'
            } else if (accounts.length === 0) {
                this.state = 'logout'
            } else {
                this.state = 'login'
                this.accountIds = accounts
                this.accountChosen = accounts[0] ? accounts[0] : ''
                this.updateChosenAccounBalance()
            }
        })
    }

    @action.bound
    public updateChosenAccount(account: string) {
        this.accountChosen = account
    }

    @action.bound
    public async updateChosenAccounBalance() {
        const data = await this.getBalance(this.accountChosen)
        this.accounChosenBalance = `${Number.parseInt(data.toString(), 10) / 10e17}`
        return
    }

    @action.bound
    public getBalance(ethAddress: string) {
        return this.web3instance.eth.getBalance(ethAddress)
    }

    @computed
    public get isLogin() {
        return this.state === 'login' || this.accountIds.length > 0
    }

    @computed
    public get isLoading() {
        return this.state === 'loading'
    }

    @computed
    public get token() {
        const contractAddress = address.main
        return new this.web3instance.eth.Contract(abi as any, contractAddress, {
            from: this.accountChosen,
            gasPrice: '20000000000'
        } as any)
    }
}

export default Web3Store
