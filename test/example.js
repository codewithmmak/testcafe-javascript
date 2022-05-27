import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');

    const articleHeader = await Selector('.result-content').find('h1');
    let headerText = await articleHeader.innerText;
});

test('My second test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

test('Text typing basics', async t => {
    await t
        .typeText('#developer-name', 'Peter')
        .typeText('#developer-name', 'Paker', { replace: true })
        .typeText('#developer-name', 'r', { caretPos: 2 })
        .expect(Selector('#developer-name').value).eql('Parker');
});

test('Click check boxes and then verify their state', async t => {
    await t
        .click('input[id=remote-testing]')
        .expect(Selector('input[id=remote-testing]').checked).ok()
        .click('input[id=reusing-js-code]')
        .expect(Selector('input[id=reusing-js-code]').checked).ok()
        .click('input[id=continuous-integration-embedding]')
        .expect(Selector('input[id=continuous-integration-embedding]').checked).ok();
});