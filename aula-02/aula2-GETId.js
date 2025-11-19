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

it('GET - Deve retornar usuário por ID', async () => {
    console.log("Buscando ID:", userId);

    await spec()
      .get(`https://serverest.dev/usuarios/${userId}`)
      .expectStatus(200)
      .expectJsonLike({
        _id: userId
      });
  });