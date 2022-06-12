const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(item = 0; item < skillsContent.length; item++){
        skillsContent[item].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}


skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
