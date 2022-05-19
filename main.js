// window.addEventListener("scroll", onScroll) -> adicionamos a propriedade scroll e a função onScroll na janela principal(Window)
window.addEventListener("scroll", onScroll);

onScroll();

function onScroll(){
    showNavOnScroll();
    showBackToTopButton();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section){
    // innerHeight -> altura da minha viewport
    const targetLine = scrollY + innerHeight / 2;

    // verificar se a secção passou da linha
    // .offsetTop -> saber qual a posição do topo de alguma coisa
    const sectionTop = section.offsetTop;

    // offsetHeight -> altura de alguma coisa
    const sectionHeight = section.offsetHeight;
    
    // o topo da seção chegou ou ultrapassou a linha alto
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    // informações dos dados e da lógica
    console.log(
        "O topo da seção chegou ou passou da linha?", sectionTopReachOrPassedTargetLine
    );

    // verificar se a a base está abaixo da linha alvo
    // quais dados vou precisar?

    // a seção termina aonde?
    const sectionEndAt = sectionTop + sectionHeight;

    // o final da seção passou da linha alvo?
    const sectionEndPassedTargetLine = sectionEndAt <= targetLine;

    console.log(
        "O fundo da seção passou ou chegou na linha?", sectionEndPassedTargetLine
    );

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute("id");
    const menuElement = document.
    querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove("active");
    if (sectionBoundaries) {
        menuElement.classList.add("active")
    }

}

function showNavOnScroll(){
    // scrollY -> retorna a posição do scroll ao rolar a página

    // .classList -> referente as classes que estão na mesma tag de nav. Exemplo: <nav id="navigation" class="scroll"><nav>

    if (scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}

function showBackToTopButton(){
    
    if (scrollY >= 834) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}

function openMenu(){
    document.body.classList.add("menu-expanded");
}

function closeMenu(){
    document.body.classList.remove("menu-expanded");
}

ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 700,
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .cards,
#about,
#about header,
#about .content`);