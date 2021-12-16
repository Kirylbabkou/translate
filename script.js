async function getTranslate(word, source = 'ru', target = 'en') {
    const translate = await fetch(`https://tmp.myitschool.org/API/translate/?word=${word}&source=${source}&target=${target}`)
    .then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    });
    return translate
    
}

// getTranslate('стул');

let btnTr =  document.querySelector('.btnTranslate');
btnTr.addEventListener('click', async _ => {
    const inputText = document.querySelector('.word_for_translate');
    const transl = await getTranslate(inputText.value);

    console.log(transl);
})
console.log(btnTr);