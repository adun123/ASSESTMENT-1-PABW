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
    ]

    
}