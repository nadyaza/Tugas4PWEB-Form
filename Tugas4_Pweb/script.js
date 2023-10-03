// Daftar mata kuliah yang akan digunakan untuk saran
const mataKuliahList = [
    "Pemrograman Web",
    "PBKK (Pemrograman Berbasis Kerangka Kerja)",
    "RSBP (Rekayasa Sistem Berbasis Pengetahuan)",
    "Grafika Komputer",
    "Pemodelan Simulasi",
    "Jaringan Komputer",
    "Teori Graf",
];

// Fungsi untuk menampilkan saran mata kuliah
function showMataKuliahSuggestions(inputValue) {
    const suggestionsContainer = document.getElementById("mataKuliahSuggestions");
    suggestionsContainer.innerHTML = "";

    // Filter mata kuliah yang cocok dengan input
    const filteredMataKuliah = mataKuliahList.filter((mataKuliah) =>
        mataKuliah.toLowerCase().includes(inputValue.toLowerCase())
    );

    // Tampilkan saran mata kuliah dalam daftar
    const ul = document.createElement("ul");
    filteredMataKuliah.forEach((mataKuliah) => {
        const li = document.createElement("li");
        li.textContent = mataKuliah;
        li.addEventListener("click", () => {
            // Isi input dengan mata kuliah yang dipilih
            document.getElementById("mataKuliah").value = mataKuliah;
            // Kosongkan daftar saran
            suggestionsContainer.innerHTML = "";
        });
        ul.appendChild(li);
    });

    suggestionsContainer.appendChild(ul);
}

// Event listener untuk input mata kuliah
const mataKuliahInput = document.getElementById("mataKuliah");
mataKuliahInput.addEventListener("input", (e) => {
    const inputValue = e.target.value;
    showMataKuliahSuggestions(inputValue);
});

// Event listener untuk form submit
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah halaman untuk refresh
    // Ambil nilai dari semua input
    const nama = document.getElementById("nama").value;
    const nim = document.getElementById("nim").value;
    const mataKuliah = document.getElementById("mataKuliah").value;
    const dosen = document.getElementById("dosen").value;

    // Lakukan apa yang Anda ingin lakukan dengan data tersebut di sini,
    // misalnya, mengirimkannya ke server atau menampilkan pesan sukses.
    console.log("Data yang akan dikirim:");
    console.log("Nama Mahasiswa:", nama);
    console.log("NIM:", nim);
    console.log("Mata Kuliah:", mataKuliah);
    console.log("Dosen:", dosen);

    // Reset form jika diperlukan
    registrationForm.reset();
});
