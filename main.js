// change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.
    toggle('window-scrolled', window.scrollY >
    0);
})

// CONTACT BUTTONS (Circular Text Buttons)



const textButtons = document.
querySelectorAll('.contact_btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

text.innerHTML = text.innerHTML.split('').map
((character, index) => 
`<span style="transform: rotate(${index *12}deg)">${character}</span>`).join('')
})






// show menu items
        const nav = document.querySelector(".nav_links");
        const openNavBtn = document.querySelector("#nav_toggle-open");
        const closeNavBtn = document.querySelector("#nav_toggle-close");

        openNavBtn.addEventListener('click', () => {
          nav.style.display = 'flex';
          openNavBtn.style.display = 'none';
          closeNavBtn.style.display = 'inline-block';
        })


        // close nav menu 
        const closeNav = () => {
          nav.style.display = 'none';
          openNavBtn.style.display = 'inline-block';
          closeNavBtn.style.display = 'none';
        }


        closeNavBtn.addEventListener('click', closeNav);

       
      
          // close nav menu on clickof menu link
          if (document.body.clientWidth< 1024) {
          nav.querySelectorAll('li a').forEach(navLink => {
            navLink.addEventListener('click',closeNav);

          })
        }