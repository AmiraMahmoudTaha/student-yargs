const yargs = require('yargs');


/////////////////////////////////////       ADD           ////////////////////////////////////
const students = require('./students')
yargs.command({
    command: 'add',
    describe: ' add studnets data',
    builder: {
        id: {
            describe: 'student id',
            type: 'number',
            demandOption:true
        },
        name: {
            describe: 'student name',
            type: 'string',
            demandOption:true
        },
        subject: {
            describe: 'student subject',
            type: 'string',
            demandOption:true
        },
        grade: {
            describe: 'student grade',
            type: 'number',
            demandOption:true
        },
        comment: {
            describe: 'leave a comment',
            type: 'string'
        },
    },
    handler: (argv) => {
        students.addStudent(argv.id,argv.name,argv.subject,argv.grade,argv.comment)
    }
})


//////////////////////////////////       DELETE       ////////////////////////////////



yargs.command({
    command: 'delete',
    describe: ' delete studnets data',
    builder: {
        id: {
            describe: 'student id',
            type: 'number',
            demandOption:true
        }
    },
    handler: (argv) => {
        students.removeStudent(argv.id)
    }
})



/////////////////////////////////       READ      ////////////////////////////////

yargs.command({
    command: 'read',
    describe: ' read studnets data',
    builder: {
        id: {
            describe: 'student id',
            type: 'number',
            demandOption:true
        }
    },
    handler: (argv) => {
        students.readStudent(argv.id)
    }
})


//////////////////////////////     LIST    ///////////////////////////////

yargs.command({
    command: 'list',
    describe: ' list studnets data',
    handler: () => {
        students.listStudent()
    }
})

yargs.parse()