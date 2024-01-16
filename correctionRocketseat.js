let students = [
    {
        name: 'Murilo',
        firstNote: 6,
        secondNote: 9,
    },

    {
        name: 'Ana',
        firstNote: 5,
        secondNote: 3,
    },

    {
        name: 'Sara',
        firstNote: 8,
        secondNote: 8,
    }        
]

function calculate(firstNote,secondNote) {
let result = (firstNote + secondNote) / 2
return result
}
   

for(let student of students){
    Average = calculate(student.firstNote, student.secondNote)
    let approval = Average < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

    alert(`A média de ${student.name} é ${Average}.
${approval}`)
}   