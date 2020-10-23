import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/')

test('Probar checkboxes', async t =>{    
    await t   
    .click(page.link9)

    await t
    .pressKey('backspace') //.pressKey: Ejecutar una acción del teclado
    .wait(500) //Crear una espera en milisegundos 500=1/2 segundos
    
    await t
    .pressKey('C')
    .wait(500)
    .expect(page.text91.innerText).contains('You entered: C')  /*.contains('You enterted: C'): Valida que el resutado contenga 'You enterted: C'*/
    .expect(page.text91.innerText).notContains('wdkhweudwe%··%·%')

    .pressKey('tab')
    .wait(500)

    .pressKey('enter')
    .wait(500)
    .expect(page.text91.innerText).contains('YOU ENTERED: ENTER')

    .pressKey('CAPSLOCK')
    .wait(500)

    .pressKey('SHIFT')
    .wait(500)
});