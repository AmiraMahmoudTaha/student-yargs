const fs = require ('fs')

const addStudent = (id,name,subject,grade,comment) =>{
    const students = loadStudents()
    const duplicateID = students.filter((student)=>{
        return student.id === id
    })
    console.log(duplicateID)
    
    if(duplicateID.length === 0){
        students.push({
        id:id,
        name:name,
        subject:subject,
        grade:grade,
        comment:comment
    })
     saveStudents(students)
     console.log('Student data saved Successfully')
    }   
    else{
        console.log('student id is already exists')
    }
}

const loadStudents = () =>{
    try{
        const dataBuffer = fs.readFileSync('students.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}
const saveStudents = (students) =>{
    const saveData = JSON.stringify(students)
    fs.writeFileSync('students.json',saveData)
}


const removeStudent = (id) =>{
    const students = loadStudents()

    const studentsToKeep = students.filter((student)=>{
        return student.id !== id
    }) 
    saveStudents(studentsToKeep)
    console.log('ID is removed')
}

const readStudent = (id) =>{
    const students = loadStudents()
    const student = students.find((student)=>{
        return student.id === id
    })
    if(student){
        console.log(student)
    }
    else{
        console.log('Not Found')
    }  
}

const listStudent  = () =>{
        const students = loadStudents()
        students.forEach(student => {
            console.log(student.name,student.grade)
        });
}

module.exports = {
    addStudent,
    removeStudent,
    readStudent,
    listStudent
}