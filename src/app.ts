import {Config} from './config';
import * as express from 'express';

class App {
    public async run(): Promise<void> {
        const app = express();
        let connection = Config.getConnection();

        connection.connect((err: any) => {
            if (err) {
                console.log('Error connecting: ' + err + '\n');
                process.exit(1);
            }
        });

        connection.query('select * from users', (err: any, result: any, fields: any) => {
            if (err) {
                console.log('Error on query: ' + err + '\n');
                process.exit(1);
            } else {
                console.log('Query output: ', result);
            }
        });

        connection.end();
    }
}

new App().run();
