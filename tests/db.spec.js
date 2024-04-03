import { testConfig } from '../tests/testConfig';
import { test } from '@playwright/test';
import oracledb from 'oracledb';
//npm install oracledb
test('Connect to Oracle DB', async () => {
    try {
        // Setting up Oracle connection options
        const dbConfig = {
            user: testConfig.dbUsername,
            password: testConfig.dbPassword,
            connectString: testConfig.dbServerName + ':' + testConfig.dbPort + '/' + testConfig.dbName,
        };

        // Creating a connection pool
        const connection = await oracledb.createPool(dbConfig);

        // Executing a query
        const result = await connection.execute(`SELECT * FROM YOUR_TABLE`);

        // Output the result
        console.log(result.rows);

        // Close the connection pool
        await oracledb.getPool().close();
    } catch (error) {
        console.error('Error connecting to the Oracle DB:', error);
    }
});
