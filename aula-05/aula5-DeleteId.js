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
  
it('DELETE - Deve excluir usuário', async () => {
    await spec()
      .delete(`https://serverest.dev/usuarios/${userId}`)
      .expectStatus(200)
      .expectJsonLike({
        message: "Registro excluído com sucesso"
      });
  });