
            function formatEmail(text){
                if(!text.endsWith('.com')){
                    return false;}
                if(text.split('@').length !== 2){
                    return false;}
                if(text.startsWith('.com') || text.startsWith('@')){ 
                    return false;}
                return true;}

            function onSubmit(event){
                var formData = new FormData(document.getElementById("myForm"))
                var name = formData.get('name')
                var email = formData.get('email')
                var city = formData.get('city')
                var address = formData.get('address')
                var payment = formData.get('payment')
                var cardNumber = formData.get('cardNumber')
                var cardExp = formData.get('cardExp')
                var CVV = formData.get('CVV')

                if(name === ''){
                    alert('Nama tidak boleh kosong!')
                } else if (email === ''){
                    alert('Email tidak boleh kosong')
                } else if (city === ''){
                    alert('City tidak boleh kosong')
                } else if(address === ''){
                    alert('Address tidak boleh kosong')
                } else if (payment === ''){ 
                    alert('Payment tidak boleh kosong')
                } else if(!formatEmail(email)){
                    alert('Format email tidak sesuai!')}
                else {
                    var str = 'Yakin data Anda sudah benar? Mohon di cek kembali data yang Anda input!\n'
                    str += '\n'
                    str += 'Name: ' + name + '\n'
                    str += 'Email: ' + email + '\n'
                    str += 'City: ' + city + '\n'
                    str += 'Address: ' + address + '\n'
                    str += 'Payment Method: ' + payment + '\n'
                    str += 'Card Number: ' + cardNumber + '\n'
                    str += 'Exp Date: ' + cardExp + '\n'
                    str += 'CVV Card: ' + CVV + '\n'
                    str += '\n'
                    str += 'Anda dapat menolak transaksi dengan menginput [BATAL] jika Anda mengalami kesalahan dalam menginput data.'
                    if(confirm(str)){
            
                                document.getElementById("myForm").submit();
                                alert('Terima kasih sudah melakukan transaksi kepada kami. Pembayaran sudah dikirimkan via email Anda. Mohon dibayarkan tepat waktu paling lambat 4 jam setelah waktu pembelian dengan dikirimkan bukti ke email toko kami.')}  
                            else{
                            alert('Transaksi telah dibatalkan. Coba sesaat lagi.')
                            }}}


                            