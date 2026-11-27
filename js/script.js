function mudarcor(){
    var a = document.querySelector('#inicio')
    a.style.color = '#dfa43b'
    a.style.textDecoration = 'underline'
}
function voltarcor(){
    var a = document.querySelector('#inicio')
    a.style.color = '#f2d49b'
    a.style.textDecoration = 'none'
}

function mudarcorP(){
    var p = document.querySelector('#proposta')
    p.style.color = '#dfa43b'
    p.style.textDecoration = 'underline'
}
function voltarcorP(){
    var p = document.querySelector('#proposta')
    p.style.color = '#f2d49b'
    p.style.textDecoration = 'none'
}

function mudarcorB(){
    var b = document.querySelector('#beneficios')
    b.style.color = '#dfa43b'
    b.style.textDecoration = 'underline'
}
function voltarcorB(){
    var b = document.querySelector('#beneficios')
    b.style.color = '#f2d49b'
    b.style.textDecoration = 'none'
}

function subir(){
    var nossa = document.querySelector('#nossa')
    nossa.style.transform = 'scale(1.1)'
    nossa.style.transition = '0.3s'
}

function descer(){
    var nossa = document.querySelector('#nossa')
    nossa.style.transform = 'scale(1)'
    nossa.style.transition = '0.3s'
}