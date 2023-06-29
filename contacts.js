const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

/* Розкоментуй і запиши значення */
const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументувати кожну функцію
  const getListContacts = async() => {
    // ...твій код. Повертає масив контактів.
    const contacts = await fs.readFile(contactsPath);
    const result = JSON.parse(contacts);
    return result;
  }
  
  const getContactById = async(id) => {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
    const contactId = String(id);
    const contacts = await getListContacts();
    const result = contacts.find(item => item.id === contactId);
    return result || null;
  }
  
  const removeContact = async(id) => {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
    const contactId = String(id);
    const contacts = await getListContacts();
    const index = contacts.findIndex(item => item.id === contactId);
    if(index === -1){
        return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
  }
  
  const addContact = async({name, email, phone}) => {
    // ...твій код. Повертає об'єкт доданого контакту.
    const contacts = await getListContacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone,
    }
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  }

  module.exports = {
    getListContacts,
    getContactById,
    removeContact,
    addContact  
  };
