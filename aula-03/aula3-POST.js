const { spec } = require('pactum');
let userId;
describe('POST - Deve cadastrar um usuário', () => {

  it('POST - Deve cadastrar um usuário', async () => {

    userId = await spec()
      .post('https://serverest.dev/usuarios')
      .withBody({
        nome: "Fulano Teste",
        email: `email_${Date.now()}@qa.com`,
        password: "1234",
        administrador: "true"
      })
      .expectStatus(201)
      .returns('_id'); 

    console.log("ID criado:", userId);
  });

});
