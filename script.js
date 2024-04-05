//menambahkan array 
let buku = [
    {"nama": "sherlock", "jumlah": 2},
    {"nama": "lupin", "jumlah": 2},
    {"nama": "aladin", "jumlah": 2},
];

//membuat fucntions cekbuku

function cekbuku() {
    let jumlah = document.getElementById("jumlah").value;
    let pilihan = document.getElementById("pilihan").value;

    if (jumlah== "" || pilihan == "") {
        alert("Harap isi jumlah dan pilihan buku");
        return;
    }

    let buku = [
        {"nama": "sherlock", "jumlah": 2},
        {"nama": "lupin", "jumlah": 2},
        {"nama": "aladin", "jumlah": 2},
    ];

    let bukuditemukan = false ;

    for (let i = 0; i < buku.length; i++){
       if (buku[i].nama == pilihan) {
        if (buku[i].jumlah < jumlah) {
            alert("Jumlah buku tidak cukup");
            return;
        }
        let bukuditemukan = true;        
        break;
       }
    }
    if (!bukuditemukan) {
        alert("Buku tidak ditemukan");
        return;
    }
    alert("silahkan ambil buku anda");


    
}