use admin
switched to db admin
db.createCollection("toys")
{ ok: 1 }
db.toys.insertMany([
  { type: "car", brand: "HotWheels", price: 10, tags: ["new", "popular"] },
  { type: "car", brand: "Matchbox", price: 12, tags: ["classic"] },
  { type: "doll", brand: "Barbie", price: 20, tags: ["new"] },
  { type: "car", brand: "HotWheels", price: 15, tags: ["popular"] },
  { type: "doll", brand: "Frozen", price: 25, tags: ["limited", "popular"] }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('685a7ef7d9022a8dede379d0'),
    '1': ObjectId('685a7ef7d9022a8dede379d1'),
    '2': ObjectId('685a7ef7d9022a8dede379d2'),
    '3': ObjectId('685a7ef7d9022a8dede379d3'),
    '4': ObjectId('685a7ef7d9022a8dede379d4')
  }
}
db.toys.aggregate([
  // 1️⃣ Filter only popular items
  { $match: { tags: "popular" } },  // Filters docs where "popular" is in tags :contentReference[oaicite:1]{index=1}

  // 2️⃣ Expand tags array
  { $unwind: "$tags" },             // Produces one document per tag :contentReference[oaicite:2]{index=2}

  // 3️⃣ Optionally filter only popular tags after unwind
  { $match: { tags: "popular" } },

  // 4️⃣ Group by type and brand, summing prices and counting
  {
    $group: {
      _id: { type: "$type", brand: "$brand" },
      totalPrice: { $sum: "$price" },
      count: { $sum: 1 }
    }
  },

  // 5️⃣ Sort by total price descending
  { $sort: { totalPrice: -1 } },    // Must follow $group :contentReference[oaicite:3]{index=3}

  // 6️⃣ Project the final shape
  {
    $project: {
      _id: 0,
      type: "$_id.type",
      brand: "$_id.brand",
      totalPrice: 1,
      count: 1
    }
  }
], { allowDiskUse: true })
.forEach(doc => printjson(doc));
{ totalPrice: 25, count: 1, type: 'doll', brand: 'Frozen' }
{ totalPrice: 25, count: 2, type: 'car', brand: 'HotWheels' }
db.toys.aggregate([
  {
    $facet: {
      priceRanges: [
        {
          $bucket: {
            groupBy: "$price",
            boundaries: [0, 10, 20, 30],
            default: "30+",
            output: {
              count: { $sum: 1 },
              avgPrice: { $avg: "$price" }
            }
          }
        }
      ],
      countByType: [
        { $sortByCount: "$type" }
      ],
      topBrands: [
        { $sortByCount: "$brand" },
        { $limit: 5 }
      ]
    }
  }
]);
{
  priceRanges: [
    {
      _id: 10,
      count: 3,
      avgPrice: 12.333333333333334
    },
    {
      _id: 20,
      count: 2,
      avgPrice: 22.5
    }
  ],
  countByType: [
    {
      _id: 'car',
      count: 3
    },
    {
      _id: 'doll',
      count: 2
    }
  ],
  topBrands: [
    {
      _id: 'HotWheels',
      count: 2
    },
    {
      _id: 'Matchbox',
      count: 1
    },
    {
      _id: 'Frozen',
      count: 1
    },
    {
      _id: 'Barbie',
      count: 1
    }
  ]
}
db.toys.insertOne({
  type: "puzzle",
  brand: "BrainGames",
  features: [
    { name: "difficulty", score: 7 },
    { name: "educational", score: 9 }
  ]
});

db.toys.aggregate([
  {
    $project: {
      type: 1,
      brand: 1,
      totalFeatureScore: {
        $reduce: {
          input: "$features",
          initialValue: 0,
          in: { $add: ["$$value", "$$this.score"] }
        }
      }
    }
  }
]);
{
  _id: ObjectId('685a7ef7d9022a8dede379d0'),
  type: 'car',
  brand: 'HotWheels',
  totalFeatureScore: null
}
{
  _id: ObjectId('685a7ef7d9022a8dede379d1'),
  type: 'car',
  brand: 'Matchbox',
  totalFeatureScore: null
}
{
  _id: ObjectId('685a7ef7d9022a8dede379d2'),
  type: 'doll',
  brand: 'Barbie',
  totalFeatureScore: null
}
{
  _id: ObjectId('685a7ef7d9022a8dede379d3'),
  type: 'car',
  brand: 'HotWheels',
  totalFeatureScore: null
}
{
  _id: ObjectId('685a7ef7d9022a8dede379d4'),
  type: 'doll',
  brand: 'Frozen',
  totalFeatureScore: null
}
{
  _id: ObjectId('685a7fbcd9022a8dede379d5'),
  type: 'puzzle',
  brand: 'BrainGames',
  totalFeatureScore: 16
}
db.toys.aggregate([
  { $match: { price: { $gte: 10 } } },
  { $sample: { size: 3 } },
  { $project: { type: 1, brand: 1, price: 1 } }
]);
{
  _id: ObjectId('685a7ef7d9022a8dede379d3'),
  type: 'car',
  brand: 'HotWheels',
  price: 15
}
{
  _id: ObjectId('685a7ef7d9022a8dede379d0'),
  type: 'car',
  brand: 'HotWheels',
  price: 10
}
{
  _id: ObjectId('685a7ef7d9022a8dede379d2'),
  type: 'doll',
  brand: 'Barbie',
  price: 20
}
admin

