import axios from 'axios'

const URL_BASE = 'http://prg01.datacoper.com.br:40580/IntegradorProgress/'
export async function getArquivos (filtro, diretorios) {
    const res = await axios.get(`${URL_BASE}rest/arquivo?diretorios=${diretorios}&filtro=${filtro}`)
    return res.data
}

export const download = (url, filename) => {
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}