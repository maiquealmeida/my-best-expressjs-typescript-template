import express from 'express';

const server = express();

server.get('/', (req, res) => {
  return res.json({ message: "I'm fine!" })
});

server.listen(3333, () => console.log('Server is running on port 3333'))
