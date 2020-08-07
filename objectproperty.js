const student=[
{id: 11, name:"Omor Sani"},
{id:43, name : "Manna"},
{id:22, name : "Mowsumi"},
{id :71, name: "DeepJol"}
]

const nameStudent= student.map(s => s.name);
const bigger = student.filter(s => s.id > 40);
const biggerOne = student.find( s => s.id > 40);

console.log(biggerOne);