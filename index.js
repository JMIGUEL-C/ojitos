const yes = document.querySelector('#yes');

yes.addEventListener('click',function(){
    alert('Sabía que ibas a decir que sí, ojitos. Yo sé que le encantó. Mire, ahí le dejo unas flores, solo hunde en aceptar. Te quiero.')
});

const not = document.querySelector('#not');

not.addEventListener('mouseover', function() {
    const randomX = Math.floor(Math.random() * 100);
    const randomY = Math.floor(Math.random() * 100);
    
    not.style.setProperty('top', randomY + '%');
    not.style.setProperty('left', randomX + '%');
    not.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});
