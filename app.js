// IMPORTS
import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

require('dotenv').config();

//CREATE
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@cluster0.o2nvl.mongodb.net/grades?retryWrites=true&w=majority`
    ),
      { useNewUrlParser: true, useUnifiedTopology: true };
    console.log('Conectado no MongoDB com sucesso');
  } catch (error) {
    console.log('erro ao conectar' + error);
  }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('API iniciada'));
