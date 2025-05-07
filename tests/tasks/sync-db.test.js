const { syncDB } = require("../../tasks/sync-db")


describe('Pruebas de SyncDB', () => {

    test('debe de ejecutar el proceso 2 veces', () => {
        syncDB();
        const times = syncDB();
        //console.log('Se llamo ', times, 'veces a la tarea de sincronizacion de DB');

        expect(times).toBe(2);
    });
});