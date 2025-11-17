const { spec } = require('pactum');

it('Testando requisições com body', async () => {
    await spec()
    .post('http://localhost:3000/login')
    .withHeaders({
        'Content-Type': 'application/json'
    })
    .withBody({
        "email": "fulano@qa.com",
        "password": "teste"
    })
    .expectStatus(200)
    .expectJsonLike({
        "message": "Login realizado com sucesso"
    })
})

