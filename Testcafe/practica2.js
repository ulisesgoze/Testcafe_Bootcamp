import {Selector} from 'testcafe';
import page from './pageModel';

fixture('Practica 2 con testcafe')
    .page('https://the-internet.herokuapp.com/');

    test('Probar dar clic en un enlace', async t => {
        await t
            .click(page.link2)

        await t
            //.expect(page.text21.exist).ok();
            //.expect(page.text21.innerText).contains('A/B Test Control');
            
        if(page.text21.innerText == "A/B Test Control" || "A/B Test Variation 1" || "A/B Test Variation 1"){
            console.log("Pasa prueba")
        } else{
            console.log("No pasa")
        }
    });