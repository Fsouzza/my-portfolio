/* ----------- PRINT A4 OU DOWNLOAD -------------*/
function scalecv(){
    document.body.classList.add('scale-cv');
}

function removeScale(){
    document.body.classList.remove('scale-cv');
}





/* ----------- EVENTO PDF -------------*/
let areacv = document.getElementById('area-cv');


let opt = {
    margin:       0,
    filename:     'Curriculo.pdf',
    image:        { type: 'jpeg', quality: 1.5 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'A4', orientation: 'portrait' }
};



function generateResume(){
    html2pdf(areacv, opt)
}


document.getElementById('resume-button').addEventListener('click', () => {
    scalecv();
    generateResume();
    setTimeout(removeScale, 3000)
})