//import axios from 'axios'
import { bases } from "../../src/arq/bases";

/*
const URL_BASES = 'http://localhost:3004/bases'

async function getBases (base) {
    let name = base ? `?name=${base.toLowerCase()}` : ''
    let res = await axios.get(`${URL_BASES}${name}`)
    return res.data
}
*/
const getBases = base => {
    if(base)
        return bases.filter(b => b.name.toLowerCase() === base.toLowerCase())
    else
        return bases
}

const getBase = base => {
    let bases = getBases(base)
    if(bases.length > 0)
        return bases[0]
}

export { getBases, getBase }