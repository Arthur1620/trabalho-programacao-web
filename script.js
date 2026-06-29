let ultimoScroll = 0;
const menu = document.querySelector('.topo-site'); 

window.addEventListener('scroll', () => {
    const scrollAtual = window.pageYOffset;

    if (scrollAtual <= 0) {
        menu.classList.remove('escondido');
        return;
    }

    if (scrollAtual > ultimoScroll && !menu.classList.contains('escondido') && scrollAtual > 70) {
        menu.classList.add('escondido');
    } 
    else if (scrollAtual < ultimoScroll && menu.classList.contains('escondido')) {
        menu.classList.remove('escondido');
    }

    ultimoScroll = scrollAtual;
});