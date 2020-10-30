
function tampilall(){
    $.getJSON('data/data.json', function (data) {
        const menu = data.menu;
        $.each(menu, function (i, data) {
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="data/img/amerika.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>')
        });
    });
}


tampilall();

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('.judul').html(kategori);

    if(kategori == 'All'){ 
        tampilall();
        return;
    }

    $.getJSON('data/data.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data){
            if(data.nama == kategori.toLowerCase()){
                content += '<div class="col-md-4"><div class="card mb-3"><img src="data/img/amerika.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>';
            }
        });

        $('#daftar-menu').html(content);

    });

});