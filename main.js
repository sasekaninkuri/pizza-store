use pizza store
db.createCollection("Menu")
db.Menu.insertMany([  
  {
    Name: "bbq baccon",
    type: "small.",
    price: 29.90,
    
  },
  {
    name: "chicken",
    type: "large.",
    price: 89.90,
    
  },
  {
    name: "chicken & mushroom",
    type: "medium.",
    price: 189.90,
   
  }
])

db.Menu.deleteOne({ name: "chicken & mushroom" })

// db.Menu.updateOne( { name: "chicken" }, { $set: { price: 99.90 } } ) 

db.Menu.find( { name: "chicken & mushroom" } ) 