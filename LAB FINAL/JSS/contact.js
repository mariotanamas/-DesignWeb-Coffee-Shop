
function formatEmail(text){
    if(!text.endsWith('.com')){
        return false;}
    if(text.split('@').length !== 2){
        return false;}
    if(text.startsWith('.com') || text.startsWith('@')){ 
        return false;}

    return true;
}

function onSubmit(event){
    var formData = new FormData(document.getElementById("myForm"))
    var name = formData.get('name')
    var email = formData.get('email')
    var message = formData.get('message')

    if(name === ''){
        alert('Nama tidak boleh kosong!')
    } else if (email === ''){
        alert('Email tidak boleh kosong')
    } else if(!message === ''){
        alert('Message tidak boleh kosong')
    } else if(!formatEmail(email)){
        alert('Format email tidak sesuai!')}
    else {
        var str = 'Yakin data Anda sudah benar? Mohon di cek kembali data yang Anda input!\n'
        str += 'Name: ' + name + '\n'
        str += 'Email: ' + email + '\n'
        str += 'Message: ' + message + '\n'

        if(confirm(str)){
            if(prompt('Ketik Nama Anda dibawah ini untuk dikonfirmasikan! Setelah Anda konfirmasikan, pesan ini tidak dapat diubah kembali\n') === name){
                document.getElementById("myForm").submit();
                alert('Terima kasih sudah menghubungi kami. Pesan Anda sangat berharga untuk kami.')}
            else{
                alert('Gagal Validasi, Coba Kembali!')}
            }
        }
    }



