const pactum = require('pactum');

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