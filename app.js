let name ={
    firstName:'Aafrin',
    lastName:'abid',
    
}
printFullName=function(hometown,state){
    console.log(this.firstName+" "+this.lastName+' from '+hometown+','+state)
}
printFullName.call(name,'mumbai','maharashtra')

let name2={
    firstName:'habibi',
    lastName:'angadi',

}

//function borrowing
printFullName.call(name2,'shedi angadi','kabirkasoor');
printFullName.apply(name2,['mumbai','maharashtra']);

let printName=printFullName.bind(name2,'mallu','sccenantoo')
printName()