// Варіант 1 (yargs)
const contacts = require("./contacts");
const argv = require('yargs').argv;

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            const allContacts = await contacts.getListContacts();
            return console.log(allContacts);
        case "get":
            const contactById = await contacts.getContactById(id);
            return console.log(contactById);
        case "add":
            const newContact = await contacts.addContact({name, email, phone});
            return console.log(newContact);
        case "remove":
            const deleteContact = await contacts.removeContact(id);
            return console.log(deleteContact);
        default:
            console.warn('\x1B[31m Unknown action type!');
    };
};

invokeAction(argv);



// Варіант 2 (commander)

// const contacts = require("./contacts");

// const { Command } = require('commander');
// const program = new Command();

// program
//   .option('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone');

// program.parse(process.argv);

// const argv = program.opts();

// const invokeAction = async ({action, id, name, email, phone}) => {
//     switch(action) {
//         case "list":
//             const allContacts = await contacts.getListContacts();
//             return console.log(allContacts);
//         case "get":
//             const contactById = await contacts.getContactById(id);
//             return console.log(contactById);
//         case "add":
//             const newContact = await contacts.addContact({name, email, phone});
//             return console.log(newContact);
//         case "remove":
//             const deleteContact = await contacts.removeContact(id);
//             return console.log(deleteContact);
//         default:
//             console.warn('\x1B[31m Unknown action type!');
//     };
// };

// invokeAction(argv);     
