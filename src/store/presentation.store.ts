import { observable, action } from 'mobx'
import { TokenItem } from './API.interface'

class PresentationStore {
    @observable balanceOf: number = 0
    @observable nftIds: number[] = []
    @observable uri: string[] = []
    @observable jsonArray: TokenItem[] = []

    @action.bound
    updateBalanceOf(balanceOf: number) {
        this.balanceOf = balanceOf
    }

    @action.bound
    updateNftIds(nftIds: number[]) {
        this.nftIds = nftIds
    }

    @action.bound
    updateUri(uri: string[]) {
        this.uri = uri
    }

    @action.bound
    updateJsonArray(jsonArr: TokenItem[]) {
        this.jsonArray = jsonArr
    }
}

export default PresentationStore
