import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/')

test('Probar que aparecen correctamente el inpput y el boton', async t =>{
    await t
        .click(page.link3)
    await t
        .expect(page.input31).ok()
        .expect(page.button32).ok()
});

test('Probar escribir que podemos escribir un email', async t =>{
    await t
    .click(page.link3)

    await t
        .typeText(page.input31, 'noemail@noemail.com')
        .expect(page.input31.value).eql('noemail@noemail.com')
});

test('Probar que envio el email correctamente', async t =>{
    await t
    .click(page.link3)

    await t
        .typeText(page.input31, 'noemail@noemail.com')
        .expect(page.input31.value).eql('noemail@noemail.com')
        .click(page.button32)
    await t
    .expect(page.text33.innerText).contains('sent','Ya se envio')
});


//Parametros de terminal para ejecutar tests
//testcafe chrome practica3.js -t "Probar escribir que podemos escribir un email"
// for i in {1..3};do testcafe "chrome -incognito" practica2.js;done
