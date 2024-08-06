import express, { Request, Response } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import Data from './dbSchema';
import { readFile } from 'fs/promises';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || '';

const app = express();
const port = 3001;
app.use(cors())


// conneect to mongodb
async function main() {
  if (!MONGO_URI) {
    console.error("MONGO_URI is not defined in the environment variables.");
    process.exit(1);
  } else {
    console.log("Connecting to MongoDB...");
    await connect(MONGO_URI).then(() => console.log("Connected to MongoDB"));
  }
}
main().catch(err => console.log(err));


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// initialize db with  data present in data.json file
app.post('/api/init-db', async (req: Request, res: Response) => {
  try {
    const data = JSON.parse(await readFile('./data.json', 'utf-8'));
    await Data.insertMany(data);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send('Error inserting data');
    return;
  }
  res.json({ message: 'Data inserted successfully' });
})

// get all posts
app.get('/api/posts', async (req: Request, res: Response) => {
  try {
    const out = await Data.find();
    res.json(out);
  } catch (error) {
    res.json({ error: 'Error fetching data' });
  }
})

// get a post by id
app.get('/api/post/:id', async (req: Request, res: Response) => {
  const postId = req.params.id;
  try {
    const post = await Data.findById(postId);
    res.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ error: 'Error fetching post' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
