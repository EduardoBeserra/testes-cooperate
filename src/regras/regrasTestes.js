import stringTipos from '../stringTipos'
import { getBases } from "./regrasBases";

export async function tratarSolTeste(msg) {
    const aux = msg.split('testes:')
    let aux1, testes, base

    if (aux.length > 1) {
        aux1 = aux[1].split('base:')
        testes = aux1[0].replace('[', '').replace(']', '').split(',').map(base => base.trim())
        if (aux1.length > 1) {
            base = aux1[1].trim()
            base = await getProperty(base)
        }
    }

    let obj = {
        tipo: stringTipos.reqTeste,
        testes,
        base
    }
    return obj
}

async function getProperty(base) {
    let blist = await getBases(base)
    if(blist.length > 0)
        return blist[0].properties
    else
        return base
}