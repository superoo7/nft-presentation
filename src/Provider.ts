import { createContext } from 'react'
import Web3Store from './store/web3.store'
import ERC721Store from './store/erc721.store'
import PresentationStore from './store/presentation.store'

const web3 = new Web3Store()
const erc721 = new ERC721Store(web3)
const presentation = new PresentationStore()

export const web3Context = createContext(web3)
export const erc721Context = createContext(erc721)
export const presentationContext = createContext(presentation)
