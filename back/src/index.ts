import server from './server';
import { PORT } from './config/envs';
import 'reflect-metadata';
import { AppDataSource } from './config/data-source';
import { log } from 'console';

AppDataSource.initialize()
    .then((res) => {
        console.log('Conexión a la base de datos realizada con éxito');
        server.listen(PORT, () => {
            console.log(`Server listening on PORT ${PORT}`);
        });
    })
    .catch((error) => console.log(error));
