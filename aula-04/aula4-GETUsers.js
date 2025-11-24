const { spec } = require('pactum');

const baseUrl = 'https://serverest.dev';

describe('GET - Deve retornar lista de usuários', () => {

  it('GET - Deve retornar lista de usuários', async () => {
    await spec()
      .get(`${baseUrl}/usuarios`)
      .expectStatus(200)
      .expectJsonLike({
        quantidade: 2,
        usuarios: []
      });
  });

});
