// EX1
// db.getCollection('linkedon').find({salary: {$gt: 25000}}).count()


// EX 2
// db.getCollection('linkedon').aggregate([
//     { $group: { _id: "$firstName", total: { $max: "$salary" } } },  
//      { $sort : { total : -1} } 
// ])



// EX 3 

// db.getCollection('linkedon').find({"currentCompany.name": "Walmart", salary: {$gte: 7000}}).count()

// EX 4 
// db.getCollection('linkedon').find({$or: [{"currentCompany.industry": "Sales"},{"currentCompany.industry": "Retail"}]},{_id:0, "currentCompny.name":1, "firstName":1, "lastName":1, "salary":1}).sort({salary: -1})

// EX 5
// db.getCollection('linkedon').find({$or: [{'currentCompany.name': 'Apple'},{'previousCompanies.name': 'Apple'}]})

// Extension1
// db.getCollection('linkedon').aggregate([
//     {
//         $match: {"currentCompany.name": "Apple"}
//     },
//     {
//         $group: { _id: "$currentCompany.industry", count: {$sum:1}}
//     }
// ])

// Extnesion 2
// db.getCollection('linkedon').aggregate([
//     {
//         $match: {"currentPosition": "Analyst"}
//     },
//     {
//         $group: { _id: "$currentCompany.name", avgSalary: { $avg: "$salary" }}
//     }
// ])


// Extension 3
// db.getCollection('linkedon').aggregate([
//     {
//         $match: { $and: [{ $or: [ {'currentCompany.name': 'Apple'}, {'currentCompany.name': 'Google'} ] },{'currentCompany.industry': 'Tech'}] }
//     },
//     {
//         $group: { _id: "$lastName", avgSalary: { $avg: "$salary" }}
//     },
//     {
//         $sort: {avgSalary: -1}
//     }
// ])

