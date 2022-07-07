const infos = (() => {
  const NUMBER = document.querySelector('#number')
  const NAME = document.querySelector('#name')
  const NUMBER_ARRAY = []
  const NAME_ARRAY = [];

  return { NUMBER, NUMBER_ARRAY, NAME, NAME_ARRAY }
})()

const creditNumber = () => {
  const flag = document.querySelector('.flag')
  const array = infos.NUMBER_ARRAY

  infos.NUMBER.addEventListener('input', e => {
    if (e.data !== null) {
      infos.NUMBER_ARRAY.push(e)
      console.log('teste22222')
    }
    if (array[0] && array[1]) {
      if (
        Number(array[0].data) === 5 &&
        (Number(array[1].data) === 1 ||
          Number(array[1].data) === 2 ||
          Number(array[1].data) === 3 ||
          Number(array[1].data) === 4 ||
          Number(array[1].data) === 5)
      ) {
        flag.setAttribute('src', './assets/mc.png')
        flag.classList.add('mastercard')
      }
    }
    if (array[0] && array[1]) {
      if (
        Number(array[0].data) === 3 &&
        (Number(array[1].data) === 4 || Number(array[1].data) === 7)
      ) {
        flag.setAttribute('src', './assets/amex.png')
        flag.classList.add('amex')
      }
    }
    if (array[0] && array[1]) {
      if (Number(array[0].data) === 4) {
        flag.setAttribute('src', './assets/visa.png')
        flag.classList.add('visa')
      }
    }
    console.log(infos.NUMBER_ARRAY.length)
  })
  infos.NUMBER.addEventListener('keydown', evento => {
    const key = evento.key
    if (key === 'Backspace') {
      if (infos.NUMBER_ARRAY.length > 0) {
        infos.NUMBER_ARRAY.length = infos.NUMBER_ARRAY.length - 1
      }

      console.log(infos.NUMBER_ARRAY.length);

      flag.setAttribute('src', '')
      flag.classList.remove('mastercard')
      flag.classList.remove('amex')
      flag.classList.remove('visa')
    }
  })
}

const creditName = () => {
  infos.NAME.addEventListener('input', (e) => {
    const creditSpan = document.querySelector('.cname');
    
    if(e.data !== null){
      infos.NAME_ARRAY.push(e.data);
      creditSpan.classList.add('card-name');
      creditSpan.innerText = infos.NAME_ARRAY.join('');
    }
    if(e.data === null){
      infos.NAME_ARRAY.length = infos.NAME_ARRAY.length - 1;
      creditSpan.innerText = infos.NAME_ARRAY.join('');
      console.log(infos.NAME_ARRAY.length);
    }
    console.log(e);
  })
}

creditNumber()
creditName()