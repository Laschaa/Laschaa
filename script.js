document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menambahkan animasi saat berpindah halaman
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetUrl = this.getAttribute('href');
            
            // Menambahkan animasi fade-out
            document.body.classList.add('fade-out');
            
            // Mengubah lokasi setelah durasi animasi selesai
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Sesuaikan dengan durasi animasi fadeOut
        });
    });

    // Menambahkan animasi fade-in saat halaman dimuat
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            document.body.classList.remove('fade-out');
            document.body.classList.add('fade-in');
        } else {
            document.body.classList.add('fade-in');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menambahkan animasi saat berpindah halaman
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetUrl = this.getAttribute('href');
            
            // Menambahkan animasi fade-out
            document.body.classList.add('fade-out');
            
            // Mengubah lokasi setelah durasi animasi selesai
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Sesuaikan dengan durasi animasi fadeOut
        });
    });

    // Menambahkan animasi fade-in saat halaman dimuat
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            document.body.classList.remove('fade-out');
            document.body.classList.add('fade-in');
        } else {
            document.body.classList.add('fade-in');
        }
    });
});

