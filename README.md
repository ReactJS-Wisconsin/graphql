# graphql-demo

This is an example app built in react-redux using graphql that is hooked up to mongodb.

Step 1
Install mongodb
- If you do not have mongodb installed, please do so.
- Once mongodb is set up and running locally
-- create an 'addressbook' database (mongo command: use addressbook)
-- create/use a 'contact' collection
-- insert some rows to populate your addressbook
--- db.contact.insert({"firstname":"Sheldon", "lastname":"Cooper", "phone":"262-555-4444", "street":"123 Big Band Dr", "city":"Palo Alto", "state":"CA", "zip":"55555"})

-- the application is going to assume mongo is running on its default port, 27017

npm install

npm run build

npm start

Address Book Demo
localhost:4080

GraphiQL - querying interface
localhost:3000/graphql

Queries:
Return all contacts, returning firstname, lastname and phone

{
  all{
    firstname, lastname, phone
  }
}

Get Contact by firstname, returning firstname, lastname and phone
-- play around with returning different properties (street, city...)

{
  contact(firstname:"Sheldon"){
    firstname, lastname, phone
  }
}

Mutation:

mutation{updatePhone(_id: "[insert id from mongo]", phone: "414-141-4141") {
  _id
  firstname
}}
