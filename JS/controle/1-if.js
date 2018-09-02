function soNoticiaBoa(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soNoticiaBoa(8.1)
soNoticiaBoa(6.1)

function seForVedadeEuFalo(valor) {
    if(valor) {
        console.log('É verdave... ' + valor)
    }
}

seForVedadeEuFalo()
seForVedadeEuFalo(null)
seForVedadeEuFalo(undefined)
seForVedadeEuFalo(NaN)
seForVedadeEuFalo('')
seForVedadeEuFalo(0)
seForVedadeEuFalo(-1)
seForVedadeEuFalo(' ')
seForVedadeEuFalo('?')
seForVedadeEuFalo([])
seForVedadeEuFalo([1, 2])
seForVedadeEuFalo({})