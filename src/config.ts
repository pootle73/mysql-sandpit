import * as mysql from 'mysql';

export class Config {
        private static connection: any = mysql.createConnection({
                host	: '127.0.0.1',
                user	: 'root',
                password: 'bluemix123?!',
                database: 'test'
        });

        public static getConnection(): any {
                return Config.connection;
        }
}
