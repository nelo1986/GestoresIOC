import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';
import compression from 'compression';


const __dirname = dirname(fileURLToPath(import.meta.url)) + sep,
  cfg = {
    port: process.env.PORT || 3000,
    dir: {
      root: __dirname,
      static: __dirname + 'public' + sep,
      views: __dirname + 'views' + sep,
      controllers: __dirname + 'controllers' + sep,
      models: __dirname + 'models' + sep,
      routes: __dirname + 'routes' + sep,
    }
  };
const app = express();
app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(compression());

app.use(express.urlencoded({ extended: true }));

app.listen(cfg.port, () => {
  console.log(`listening on port ${cfg.port}`);
});

app.get('/', (req, res) => {
  res.send('Hello Team!')
})