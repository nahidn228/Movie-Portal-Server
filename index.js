const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Movie Portal!");
});

app.listen(port, () => {
  console.log(`Movie portal listening on port ${port}`);
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dssil.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const movieCollection = client.db("movieCollectionDB").collection("movies");
    // const authUserCollection = client
    //   .db("userManagementDB")
    //   .collection("authUser");

    //CREATE
    app.post("/movies", async (req, res) => {
      const movies = req.body;
      console.log(movies);

      const result = await movieCollection.insertOne(movies);
      res.send(result);
    });

    // READ
    app.get("/movies", async (req, res) => {
      const cursor = movieCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // //DELETE
    // app.delete("/movies/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await movieCollection.deleteOne(query);
    //   res.send(result);
    // });

    // //Find
    // app.get("/movies/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await movieCollection.findOne(query);
    //   res.send(result);
    // });

    // //UPDATE
    // app.put("/movies/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const filter = { _id: new ObjectId(id) };
    //   const options = { upsert: true };
    //   const updateUser = req.body;
    //   const updated = {
    //     $set: {
    //       name: updateUser.name,
    //       email: updateUser.email,
    //       photo: updateUser.photo,
    //       gender: updateUser.gender,
    //       status: updateUser.status,
    //     },
    //   };
    //   const result = await movieCollection.updateOne(filter, updated, options);
    //   res.send(result);
    // });

    //authUser from firebase

    // //CREATE
    // app.post("/authUser", async (req, res) => {
    //   const newAuthUser = req.body;
    //   console.log(newAuthUser);
    //   const result = await authUserCollection.insertOne(newAuthUser);
    //   res.send(newAuthUser);
    // });

    // //READ
    // app.get("/authUser", async (req, res) => {
    //   const newAuthUser = req.body;
    //   console.log(newAuthUser);
    //   const cursor = authUserCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
