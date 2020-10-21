import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/')

    test('Escribir numeros', async t =>{    
        await t
        .click(page.link5)

        await t
        .typeText(page.input51, "letras",{speed: 0.1})
        .expect(page.input51.value).eql("")

        .typeText(page.input51, "77388827738893",{speed: 0.1})
        .expect(page.input51.value).notEql("3456")
        .expect(page.input51.value).eql("77388827738893")

        .typeText(page.input51,"666", {remplace: true})
        .typeText(page.input51,"37887347832234()[]ffjjfd", {remplace: true})


    });

    test('Escribir numeros opcion 2', async t =>{
        await t
        .click(page.link5)

        await t
        .typeText(page.input51, "letras",{speed: 0.1})
        .expect(page.input51.value).eql("")

        .typeText(page.input51, "87979879", {speed: 0.1})
        .expect(page.input51.value).notEql("7687")

        .expect(page.input51.value).eql("87979879")
        .typeText(page.input51,"666", {replace: true})

        .typeText(page.input51,"·%·$%·$$%&8$%-**+^*[]{}¡‚´‚´‚!´", {replace: true})
        console.log(page.input51.value)
        
        await t
        .expect(page.input51.value).eql("8")
    
    });