
// OBJECT ke JSON
// let mahasiswa = {
// 	nama : "Febri Nahrul Khayat",
// 	umur : 23,
// 	status : "Tetap"
// }

// console.log(JSON.stringify(mahasiswa));



//  JSON ke OBJECT ajax standar / vanila js
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
// 	if (xhr.readyState == 4 && xhr.status == 200) {
// 		let mahasiswa = JSON.parse(this.responseText);
// 		console.log(mahasiswa);
// 	}
// }

// xhr.open('GET','coba.json', true);
// xhr.send();


$.getJSON('coba.json',function (data) {
	console.log(data);
})