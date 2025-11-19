const { spec } = require('pactum');

const baseUrl = 'https://serverest.dev';

// variável para armazenar o ID criado
let userId;

describe('GET - Deve retornar lista de usuários', () => {

  it('GET - Deve retornar lista de usuários', async () => {
    await spec()
      .get(`${baseUrl}/usuarios`)
      .expectStatus(200)
      .expectJsonLike({
        quantidade: 0,
        usuarios: []
      });
  });

});
