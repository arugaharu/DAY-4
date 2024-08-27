let bukufavorit1 = "Lima Sekawan";
const bukufavorit2 = "100 Kota Yang Hilang";
console.log("Buku Favorit");
console.log("Buku Favorit 1:", bukufavorit1);
console.log("Buku Favorit 2: ", bukufavorit2);//Membuat deklarasi buku favorit 1 dan 2


console.log("\n"); 
bukufavorit1= "Sniper Ghost Shooter";
console.log("Buku Favorit Terbaru");
console.log("Buku Favorit 1 (Terbaru):", bukufavorit1); //update value pertama dengan buku baru

console.log("\n");
const combinedBooks = bukufavorit1 + " and " + bukufavorit2;
console.log("Buku-Buku Favorit:", combinedBooks); // menggabungkan 2 variabel menjadi variabel baru

console.log("\n");
try {
    bukufavorit2 = "Suka Marah-Marah"; 
} catch (error) {
    console.error("Error trying to update a constant variable:", error.message);
} // coba variable kedua menjadi konstan
