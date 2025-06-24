
use mydatabaseuse myCollege
switched to db mydatabaseuse
db.createCollection("students")
{ ok: 1 }
db.students.insertOne({
  name: "Anu",
  age: 20,
  department: "CSE",
  city: "Chennai"
})
{
  acknowledged: true,
  insertedId: ObjectId('685a732c1228b88a57beb4c8')
}
db.students.insertMany([
  { name: "Bala", age: 21, department: "ECE", city: "Delhi" },
  { name: "Divya", age: 22, department: "EEE", city: "Mumbai" },
  { name: "Sara", age: 20, department: "CSE", city: "Coimbatore" },
  { name: "Ram", age: 23, department: "IT", city: "Chennai" }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('685a73361228b88a57beb4c9'),
    '1': ObjectId('685a73361228b88a57beb4ca'),
    '2': ObjectId('685a73361228b88a57beb4cb'),
    '3': ObjectId('685a73361228b88a57beb4cc')
  }
}
db.students.find()
{
  _id: ObjectId('685a732c1228b88a57beb4c8'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a73361228b88a57beb4c9'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a73361228b88a57beb4ca'),
  name: 'Divya',
  age: 22,
  department: 'EEE',
  city: 'Mumbai'
}
{
  _id: ObjectId('685a73361228b88a57beb4cb'),
  name: 'Sara',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a73361228b88a57beb4cc'),
  name: 'Ram',
  age: 23,
  department: 'IT',
  city: 'Chennai'
}
db.students.find({ department: "CSE" })
{
  _id: ObjectId('685a732c1228b88a57beb4c8'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a73361228b88a57beb4cb'),
  name: 'Sara',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
db.students.find({ age: { $gt: 20 } })
{
  _id: ObjectId('685a73361228b88a57beb4c9'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a73361228b88a57beb4ca'),
  name: 'Divya',
  age: 22,
  department: 'EEE',
  city: 'Mumbai'
}
{
  _id: ObjectId('685a73361228b88a57beb4cc'),
  name: 'Ram',
  age: 23,
  department: 'IT',
  city: 'Chennai'
}
db.students.find({ city: { $in: ["Chennai", "Delhi"] } })
{
  _id: ObjectId('685a732c1228b88a57beb4c8'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a73361228b88a57beb4c9'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a73361228b88a57beb4cc'),
  name: 'Ram',
  age: 23,
  department: 'IT',
  city: 'Chennai'
}
db.students.updateOne(
  { name: "Ram" },
  { $set: { department: "AIML" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.students.updateOne(
  { name: "Anu" },
  { $set: { email: "anu@example.com" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.students.deleteOne({ name: "Divya" })
{
  acknowledged: true,
  deletedCount: 1
}
db.students.find({ age: { $lt: 23 } })
{
  _id: ObjectId('685a732c1228b88a57beb4c8'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai',
  email: 'anu@example.com'
}
{
  _id: ObjectId('685a73361228b88a57beb4c9'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a73361228b88a57beb4cb'),
  name: 'Sara',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
db.students.find({ department: { $in: ["ECE", "IT"] } })
{
  _id: ObjectId('685a73361228b88a57beb4c9'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
db.students.find().limit(2)
{
  _id: ObjectId('685a732c1228b88a57beb4c8'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai',
  email: 'anu@example.com'
}
