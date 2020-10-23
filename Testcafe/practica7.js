import page from './pageModel'

fixture('Test con testcafe')
    .page('http://formy-project.herokuapp.com/form')

test('Probando primer formulario', async t =>{
    await t
    .typeText(page.input71, "Ulises", {speed:0.1})
    .expect(page.input71.value).eql("Ulises")
    .typeText(page.input72, "Goze")
    .expect(page.input72.value).eql("Goze")
    .typeText(page.input73, "Quality Anssurance")
    .expect(page.input73.value).eql("Quality Anssurance")
    .click(page.rbtn74)
    .expect(page.rbtn74.checked).ok()
    .click(page.rbtn75)
    .click(page.rbtn76)
    .click(page.checkbox77)
    .expect(page.checkbox77.checked).ok()
    .click(page.checkbox78)
    .expect(page.checkbox78.checked).ok()
    .click(page.checkbox79)
    .expect(page.checkbox79.checked).ok()
    .click(page.menu701)
    .click(page.opt702)
    .typeText(page.date703, "10222020")
    .click(page.btn704)

    await t
        .expect(page.text705.visible).ok()





});