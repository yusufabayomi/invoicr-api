import express from 'express';

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configuration();
  }

  public async configuration() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.set('port', process.env.port || 3000);
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening at port ${this.app.get('port')}`);
    });
  }
}

const server = new Server();
server.start();
