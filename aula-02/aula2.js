const { spec } = require('pactum');

it('should get a random users', async () => {
    let xpto_abc = await spec()
        .get('https://randomuser.me/api')
        .expectStatus(200)

     console.log(xpto_abc)   
});