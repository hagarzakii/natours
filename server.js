const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('shutting down ...');
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');
const port = process.env.PORT || 8000;
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => console.log('DB connection successful'));

const server = app.listen(port, () => {
  console.log(`App running on ${port}....`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    console.log('shutting down ...');
    process.exit(1);
  });
});
