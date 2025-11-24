const { spec } = require('pactum');
const pactum = require('pactum');

let userId;

describe('SERVEREST - CRUD Usuários', () => {


it('POST - Login com usuário válido', async () => {
  await pactum
    .spec()
    .post('https://serverest.dev/login')
    .withJson({
      email: "fulano@qa.com",
      password: "teste"
    })
    .expectStatus(200)
    .expectJsonLike({
      message: 'Login realizado com sucesso'
    });
});


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

      console.log("Registro alterado com sucesso:", userId);
  });


  it('DELETE - Deve excluir usuário', async () => {
    await spec()
      .delete(`https://serverest.dev/usuarios/${userId}`)
      .expectStatus(200)
      .expectJsonLike({
        message: "Registro excluído com sucesso"
      });

      console.log("Registro excluído com sucesso:", userId);
  });

});
