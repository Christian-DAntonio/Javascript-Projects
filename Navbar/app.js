const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
    // console.log(links.classList)
    // console.log(links.classList.conatins('random'))
    // console.log(links.classList.conatins('links'))
    if(links.classList.contains('shows-links')) {
     links.classList.remove('shows-links')
    } else {
     links.classList.add('show-list')
    }
    links.classList.toggle('show-links')
}); 

