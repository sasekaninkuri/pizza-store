use pizzastore
db.createCollection("transportation")
db.transportation.insertMany([
    {
        fleet : "BV67TYGP",
        model: 2003,
        date_serviced: '2021-01-23'
    }
])



db.transportation.updateOne( { fleet: "BV67TYGP" }, { $set: { model: 2023 } } ) 

db.transportation.find( { fleet: "BV67TYGP" } )

