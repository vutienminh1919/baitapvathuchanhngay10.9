function tinhtoan() {
    let giatrivao = document.getElementById('dauvao').value
    let select1 = document.getElementById('select1').value
    let select2 = document.getElementById('select2').value
    if (select1 == select2) {
        document.getElementById('ketqua').innerText = 'Result ' + giatrivao
    } else if (select1 == "a" && select2 == "b") {
        document.getElementById('ketqua1').innerText = 'Result ' + giatrivao / 23000;
    } else {
        document.getElementById('ketqua1').innerText = 'Result ' + 23000 * giatrivao;
    }
}