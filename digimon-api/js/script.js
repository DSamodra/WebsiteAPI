
$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchMovie();
    }
});

$('.nav-link').on('click', function(){
    tampilall();
   
});

$(this).on('load', function(){
     tampilall();
});


function searchDigimon() {
    $('#digimon-list').html('');

    $.getJSON('https://digimon-api.vercel.app/api/digimon/name/'+$('#search-input').val() +'', function (data) {

        $.each(data, function (i, isi) {
            $('#digimon-list').append(`
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="`+ isi.img + `" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">`+ isi.name + `</h5>
                        <h6 class="card-subtitle mb-2 text-muted">`+ isi.level + `</h6>
                    </div>
                </div>
            </div>   
            `);
        });
    });
};



function tampilall(){
    $('#movie-list').html('');

    $('#search-input').val()
    $.getJSON('https://digimon-api.vercel.app/api/digimon', function (data) {

        $.each(data, function (i, isi) {
            $('#movie-list').append(`
            <div class="col-md-4">
                <div class="card mb-3">
                <img src="`+ isi.img + `" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">`+ isi.name + `</h5>
                    <h6 class="card-subtitle mb-2 text-muted">`+ isi.level + `</h6>
                </div>
                </div>
            </div>   
            `);
        });
    });
}

