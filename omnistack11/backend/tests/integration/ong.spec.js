const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    })

// .set('Authorization' , '2ec632c4') Passando HEADER

   it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "AMIGOS DA ESPERANÇA",
                email: "contato@test.com",
                whatsapp: "4700000000",
                city: "São Gabriel do Oeste",
                uf: "MS"
            });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
   }); 
});