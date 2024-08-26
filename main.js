document.addEventListener('DOMContentLoaded', function(){
    simpancatatan();
});

const click = document.getElementById('click');
click.addEventListener('click', function(){
    const textinput = document.getElementById('input');
    const areainput = textinput.value.trim();

    if(areainput ==='' )return;

    const catatan = get();
    catatan.push(areainput); 
    simpan(catatan);

    textinput.value = '';
    displaycatatan();
})

function displaycatatan(){
    const list = document.getElementById('catatan');
    const catatan = get();
    list.innerHTML='';

    catatan.forEach((catatan, index) => {
        const listdiv = document.createElement('div');
        listdiv.classList.add('listcatatan')

        const teks = document.createElement('p');
        teks.textContent = catatan;

        const childdiv = document.createElement('div');
        childdiv.classList.add('childdiv');

        const tedit = document.createElement('button');
        tedit.textContent = 'edit';
        tedit.onclick = () => edit(index);

        const thapus = document.createElement('button');
        thapus.classList.add('delete');
        thapus.textContent = 'hapus';
        thapus.onclick = () => hapus(index)

        childdiv.appendChild(tedit);
        childdiv.appendChild(thapus);
        listdiv.appendChild(teks);
        listdiv.appendChild(childdiv);
        list.appendChild(listdiv);
    });
}


function get() {
    const catatan = localStorage.getItem('catatan');
    return catatan ? JSON.parse(catatan) : [];
}
function simpan(catatan) {
    localStorage.setItem('catatan', JSON.stringify(catatan));
}

function hapus(index) {
    const catatan = get(); 
    catatan.splice(index, 1);
    simpan(catatan);
    displaycatatan();
}

function edit(index) {
    const catatan = get();
    const catatanbaru = prompt('Edit catatan:', catatan[index]);

    if (catatanbaru !== null) {
        catatan[index] = catatanbaru;
        simpan(catatan);
        displaycatatan();
    }
}

function simpancatatan() {
    displaycatatan();
}