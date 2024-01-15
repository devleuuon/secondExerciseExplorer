alert('Bem-vindo aluno! Vamos verificar se foi aprovado? Digite as notas dos semestres...')

let students = [
    {
        name: 'Luiz',
        age: 14,
        semesterOne: 7,
        semesterTwo: 4
    },

    {
        name: 'Luana',
        age: 14,
        semesterOne: 8,
        semesterTwo: 9
    },

    {
        name: 'Leandro',
        age: 14,
        semesterOne: 5,
        semesterTwo: 8
    },
    
    {
        name: 'Lexa',
        age: 14,
        semesterOne: 6,
        semesterTwo: 6
    },
    
    {
        name: 'Pedro',
        age: 14,
        semesterOne: 7,
        semesterTwo: 7
    },
    
    {
        name: 'Pietra',
        age: 14,
        semesterOne: 6,
        semesterTwo: 9
    },
]

let semesterOne = Number(prompt('Digite a primeira nota: '))
let semesterTwo = Number(prompt('Digite a segunda nota: '))

function calculate() {
    result = ((semesterOne + semesterTwo) / 2)
}

calculate()

if (result >= 7) {
    alert(`Parabéns ${students[0].name}! você teve a nota ${result} e foi aprovado(a)`)
} else {
    alert(`Que pena ${students[0].name}! você teve a nota ${result} e foi reprovado(a)`)
}



