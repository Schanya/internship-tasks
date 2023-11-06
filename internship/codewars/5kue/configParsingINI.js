function parseConfig(config) {
    const obj = {};
    let isItSection = false;
    let section = ''

    const array = config.trim().split('\n');

    for (let i = 0; i < array.length; i++) {
        let el = array[i];

        if (!el.length || el.includes(';')) continue;

        if (el.includes('[')) {
            isItSection = true;
            section = el.split('').filter(el => el != '[' && el != ']').join('')

            obj[section] = {}

        } else if (el.includes('=')) {

            if (isItSection) {
                el = el.split('=');

                obj[section][el[0]] = el[1]
            } else {
                el = el.split('=');

                obj[el[0]] = el[1]
            }
        } else {
            throw 'Parsing failed!'
        }
    }

    return obj
}

const config = `
euismodaliquam=risusnulla
necsemper=duivestibulum

; klfnelkfn

suspendissemassaipsumscelerisque
pulvinarnon=condimentumrutrum
vestibulummassa=ametcurabitur
mollisvestibulum=gravidavestibulum
seddolor=nislcommodo

[estamet]
nullascelerisque=sempernulla
[suscipitamet]
rutrumturpis=nisisodales
ipsumut=nullagravida

vestibulumdui=donecquam
suscipitest=consecteturnisl
velsemper=nuncgravida
[nislmassa]


vestibulumnisi=necest
[aliquettellus]
condimentumpharetra=duised


volutpatjusto=ipsumfelis
erosturpis=etvelit
ipsumcondimentum=consectetureros
`;

console.log(parseConfig(`[artifact]
group=com.example.test
name=Test
description=lorem ipsum dolor sit amet
consectetur adipiscing elit sed do

[compilation]
source=1.8
target=1.8`));