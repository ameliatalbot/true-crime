let express = require('express');
let router = express.Router();

const { tiktokVals } = require('../../../public/script');

/* Define your routes/endpoints here */

router.get('/tiktokResponse', (req, res) => {
    let data = tiktokVals;
    res.status(200).json(data);
});

// router.post('/', (req, res) => {
//   let {firstName, lastName, phoneNumber, email, id} = req.body;
//   let status = 200;
//   let message = {msg: "successfully added contact"};
//   let emailPattern = /^.+@.+.com$/gm;
//   let phonePattern = /\d\d\d-\d\d\d-\d\d\d\d/gm;
//   if (firstName.length > 20 || lastName.length > 20) {
//     console.log("issue w name");
//     status = 500;
//   } else if (!emailPattern.test(email)) {
//     console.log("issue w email");
//     status = 500;
//   } else if (isNaN(id)) {
//     console.log("issue w id");
//     status = 500;
//   } else if (!phonePattern.test(phoneNumber)) {
//     console.log("issue w phone num");
//     status = 500;
//   }
//   if (status === 500) {
//     message = {error: "failed validations on contact resource"};
//   } else {
//     const contact = new Contact(firstName, lastName, phoneNumber, email, id)
//     contacts.push(contact);
//   }
//   res.status(status).json(message);
// });

// contactsRouter.get('/:id', (req, res) => {
//   let id = req.params.id;
//   let contact = contacts.find((person) => person.id == id);
//   if (contact) {
//     res.status(200).json(contact);
//   } else {
//     res.status(404).json({error: "the resource was not found"});
//   }
// });

// contactsRouter.put('/:id', (req, res) => {
//   let id = req.params.id;
//   let contact = contacts.find((person) => person.id == id);
//   let status = 200;
//   let emailPattern = /^.+@.+.com$/gm;
//   let phonePattern = /\d\d\d-\d\d\d-\d\d\d\d/gm;
//   if (firstName.length > 20 || lastName.length > 20) {
//     console.log("issue w name");
    
//   } else if (!emailPattern.test(email)) {
//     console.log("issue w email");
//     status = 500;
//   } else if (isNaN(id)) {
//     console.log("issue w id");
//     status = 500;
//   } else if (!phonePattern.test(phoneNumber)) {
//     console.log("issue w phone num");
//     status = 500;
//   }
//   if (contact) {
//     console.log("found contact");
//     let index = contacts.indexOf(contact);
//     let {firstName, lastName, phoneNumber, email} = req.body;
//     console.log(email);
//     if (firstName) {
//       if (firstName.length <= 20) {
//         contact.firstName = firstName;
//       } else {
//         status = 404;
//       }
//     }
//     if (lastName) {
//       if (lastName.length <= 20) {
//         contact.lastName = lastName;
//       } else {
//         status = 404;
//       }
//     }
//     if (phoneNumber) {
//       if (phonePattern.test(phoneNumber)) {
//         contact.phoneNumber = phoneNumber;
//       } else {
//         status = 404;
//       }
//     }
//     if (email) {
//       if (emailPattern.test(email)) {
//         contact.email = email;
//       } else {
//         status = 404;
//       }
//     }
//     contacts[index] = contact;
//     console.log(contact);
//   } else {
//     status = 404;
//   }
//   if (status == 404) {
//     res.status(status).json({error: "unable to update resource"});
//   } else {
//     res.status(201).json(contact);
//   }
// });

// contactsRouter.delete('/:id', (req, res) => {
//   let id = req.params.id;
//   let contact = contacts.find((person) => person.id == id);
//   if (contact) {
//     let index = contacts.indexOf(contact);
//     contacts.splice(index, 1);
//     res.status(201).json(contact);
//   } else {
//     res.status(404).json({error: "resource not found"});
//   }
// });

module.exports = router;