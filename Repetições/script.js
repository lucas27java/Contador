function contar() {

    let ini = document.getElementById('txt')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.lenght == 0 ||
        passo.value.length == 0) { window.alert("[Erro] Faltam dados!") } else {

        res.innerHTML = "Contando:"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            /*Contagem Crescente*/
            for (let c = i; c <= f; c += p) { res.innerHTML += `${c}✍🏽` }

        } else {
            /*Contagem Regressiva*/
            for (let c = i; c >= f; c -= p) { res.innerHTML += `${c}✍🏽` }
        }
        res.innerHTML += `💡`
    }
}