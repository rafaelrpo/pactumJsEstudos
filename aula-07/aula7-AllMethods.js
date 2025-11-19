const { spec } = require('pactum');

let userId;

describe('SERVEREST - CRUD Usuários', () => {

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


  it('GET - Deve retornar usuário por ID', async () => {
    console.log("Buscando ID:", userId);

    await spec()
      .get(`https://serverest.dev/usuarios/${userId}`)
      .expectStatus(200)
      .expectJsonLike({
        _id: userId
      });
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


  it('DELETE - Deve excluir usuário', async () => {
    await spec()
      .delete(`https://serverest.dev/usuarios/${userId}`)
      .expectStatus(200)
      .expectJsonLike({
        message: "Registro excluído com sucesso"
      });
  });

});
