// Konfigurasi Telegram Bot untuk Notifikasi ke HP Anda
// Ikuti panduan di bawah untuk mendapatkan Token & Chat ID
const TELEGRAM_BOT_TOKEN = '8951109811:AAHRg-j8ebjzuGSuuqfR5gQPMXKm6g3IDgo';
const TELEGRAM_CHAT_ID = '8984364575';

function handleLogin() {
    const usernameInput = document.getElementById('username').value;
    
    if (usernameInput.trim() === '') {
        alert('Nama tidak boleh kosong!');
        return;
    }

    // Tampilkan toko, sembunyikan login
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('store-section').classList.remove('hidden');
    document.getElementById('user-display').innerText = usernameInput;

    // Kirim notifikasi ke perangkat Anda (via Telegram)
    sendNotification(usernameInput);
}

function logout() {
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('store-section').classList.add('hidden');
    document.getElementById('username').value = '';
}

function beli(namaBarang) {
    alert('Anda memilih untuk membeli: ' + namaBarang + '\nFitur checkout (pembayaran) membutuhkan integrasi database/payment gateway.');
}

// Fungsi mengirim notifikasi ke HP owner
function sendNotification(username) {
    const pesan = `🚨 *NOTIFIKASI YOUR PRIORITY* 🚨\nUser bernama *${username}* baru saja login ke website Anda!`;
    
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: pesan,
            parse_mode: 'Markdown'
        })
    }).then(response => {
        console.log("Notifikasi berhasil dikirim ke perangkat Owner");
    }).catch(error => {
        console.error("Gagal mengirim notifikasi:", error);
    });
}
