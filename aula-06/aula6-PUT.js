const { spec } = require('pactum');

let userId;

it('POST - Deve cadastrar usuário', async () => {
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

it('PUT - Deve atualizar usuário', async () => {
    await spec()
      .put(`https://serverest.dev/usuarios/${userId}`)
      .withBody({
        nome: "Fulano Atualizado",
        email: `edit_${Date.now()}@qa.com`,
        password: "9876",
        administrador: "false"
      })
      .expectStatus(200)
      .expectJsonLike({
        message: "Registro alterado com sucesso"
      });
  });