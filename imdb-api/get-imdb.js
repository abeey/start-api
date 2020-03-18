function searchMovie() {
	//kosongkan html untuk list pencarian
	$('#movie-list').html('');

	// struktur data ajax
	// url, type, dataType, data {}, success
	// url adalah url source
	// type : get, push, put, dll
	// dataType : json, xml dll
	// data : dalam array, {var : key , var : key}
	// success : jika success
	$.ajax({
		url : 'https://omdbapi.com',
		type : 'get',
		dataType : 'json',
		data : {
			'apikey': 'c4d09c44',
			's' : $('#search-input').val()
		},
		success : function (result) {
			// jika berhasil mendapatkan data
			if (result.Response == 'True') {
				
				//untuk menggilangkan `search` pada json
				let movies = result.Search

				// perulangan untuk menampilkan data
				// i, data = foreach (a as row), maka yang diolah adlah 'data'
				$.each(movies, function (i, data) {
					$('#movie-list').append(`
						<div class="col-md-4">
							<div class="card mt-3">
							  <img src="` + data.Poster +`" class="card-img-top" alt="`+ data.Title+`">
							  <div class="card-body">
							    <h5 class="card-title">`+ data.Title +`</h5>
							    <h6 class="card-subtitle mb-2 text-muted">`+ data.Year+`</h6>
							    <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.imdbID +`">See Details</a>
							  </div>
							</div>
						</div>
					`)
				})

				//hapus val di inputan
				$('#search-input').val('');

			// Jika error
			}else {
				$('#movie-list').html(`
					<div class="col">
					<h1 class="text-center">`+ result.Error +`</h1>
					</div>
					`)
			}

		}
	});

} // End fungsi search movie

//funtion untuk detail movie by Id
function detailMovie(id) {
	$('.modal-title').html('');
	$('.modal-body').html('');

	$.ajax({
		url : 'https://omdbapi.com',
		type : 'get',
		typeData : 'json',
		data : {
			'apikey': 'c4d09c44',
			'i' : id
		},
		success : function (movie) {
			if (movie.Response === 'True') {
				$('.modal-title').html(movie.Title);

				$('.modal-body').html(`
				<div class="container-fluid">
					<div class="row">
					<div class="col-md-4">
						<img src="`+ movie.Poster+`" class="img-fluid" />
					</div>
	
					<div class="col-md-8">
						<ul class="list-group">
							<li class="list-group-item"><b>Title : </b>`+movie.Title+`</li>
							<li class="list-group-item"><b>Year : </b>`+movie.Year+`</li>
							<li class="list-group-item"><b>Length : </b>`+movie.Runtime+`</li>
							<li class="list-group-item"><b>Genre : </b>`+movie.Genre+`</li>
							<li class="list-group-item"><b>Actors : </b>`+movie.Actors+`</li>
							<li class="list-group-item"><b>Sinopsis : </b>`+movie.Plot+`</li>
						</ul>
					</div>
				</div>	
				</div>
				`);
			}
		}
	})

}
// end fungsi detail movies

// pencarian dengan klik tombol search
$('#button-search').on('click', function () {
	//panggil function searchMovie()
	searchMovie();
});


// pencarian dengan enter
$('#search-input').on('keyup', function (e) {
	//jika key code 13 (13 = enter)
	//http://keycode.info/
	if (e.keyCode === 13) {
		searchMovie();
	}
})

$('#movie-list').on('click', '.see-detail', function () {
	let id = $(this).data('id');
	
	// panggil fungsi detail movies
	detailMovie(id);
})