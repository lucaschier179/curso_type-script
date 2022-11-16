// Singleton - Gof
export class Database {
    private static database: Database;

    private constructor(
        private host: string,
        private user: string,
        private password: string,
    ) {}

    connect(): void {
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
    }

    static getDatabase(host: string, user: string, password: string,): Database {
        if (Database.database)
    }
}

const db1 = new Database('localhost', 'root', '123456');
db1.connect();

const db2 = new Database('localhost', 'root', '123456');
db2.connect();

console.log(db1 === db2);
