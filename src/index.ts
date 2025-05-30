import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database';
import courseRoutes from './routes/course.routes';
import moduleRoutes from './routes/module.routes';

 
dotenv.config();
 
const app = express();
app.use(cors());
app.use(express.json());
 
app.get('/', (_req, res) => {
  res.send('API ModuLMS em TypeScript!');
});
 
app.use('/courses', courseRoutes);
app.use('/modules', moduleRoutes);
 
const PORT = process.env.PORT || 3000;
 
sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });