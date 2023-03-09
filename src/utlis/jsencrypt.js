import {JSEncrypt} from 'jsencrypt'
import { RsakeyApi } from '../request/api'


export function encrypt(txt){
	const publicKey = window.localStorage.getItem("publicKey")
	const encryptor = new JSEncrypt()
	encryptor.setPublicKey(publicKey)
	// console.log(publicKey)
	return encryptor.encrypt(txt)
}