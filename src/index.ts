import express from 'express';
import cors from 'cors';
 
const app = express();
app.use(cors());
app.use(express.json());
 
app.get('/', (_req, res) => {
  res.send('API ModuLMS em TypeScript!');
});
 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});