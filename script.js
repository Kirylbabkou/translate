function WordsTranslate(source, target) {

    async function getTranslate(word, source = 'ru', target = 'en') {
        const translate = await fetch(`https://tmp.myitschool.org/API/translate/?word=${word}&source=${source}&target=${target}`)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        });

        console.log(source);
        return translate
        
    }

    const add = (translInput) => {
        libr.push(translInput);
        
        update();
    }

    const remove = (index) => {
        libr = libr.filter((item, i) => i !=index); 

        update();
    }
    
    
    const update = () => {
        list.innerHTML = '';
        libr.forEach((item, index) => {
            
            const li = document.createElement('li');
            li.innerHTML = `
            <div class="word-name">${item.word}</div>
            <div class="word-translate">${item.translate}</div>
            <div class="word-direct">${source} -> ${target}</div>
            `;

            const btnRemove = document.createElement('button');
            btnRemove.innerHTML = 'X';
            
            btnRemove.addEventListener('click', () => {
                remove(index);
            })

            list.append(li);
            li.append(btnRemove);
        });
    }

    let libr = [];
    
    const inputText = document.querySelector('.word_for_translate');
    const btnTr =  document.querySelector('.btnTranslate');
    const list = document.querySelector('.words');
    

    btnTr.addEventListener('click', async _ => {
        
        const translInput = await getTranslate(inputText.value, source, target);
        add(translInput)
        // inputText.value = translInput.translate;
    
        console.log(translInput);
        console.log(source);
    });

};

let korean = new WordsTranslate('ru', 'ko');
// let blr = new WordsTranslate('ru', 'be');
// let polska = new WordsTranslate('ru', 'pl')





