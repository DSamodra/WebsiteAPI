function youtuber() {
    $.getJSON('https://www.googleapis.com/youtube/v3/channels?part=snippet, statistics&id=UCoSrY_IQQVpmIRZ9Xf-y93g&key=AIzaSyDIVNfATCqGf56jkX8dXqEeZD-doRMyrDU', function (data) {
            $('.account').append(`
            <div class="" style="width: 15rem;">
                <img src="`+ data.items[0].snippet.thumbnails.medium.url +`" class="card-img-top rounded-circle shadow p-1 mb-2 bg-white rounded" alt="...">
                <div class="card-body text-center">
                    <hr>
                    <p class="card-text font-weight-bold">`+ data.items[0].snippet.title +`</p>
                </div>
            </div>
            `);
      
    });
};



function video() {
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCoSrY_IQQVpmIRZ9Xf-y93g&maxResults=4&key=AIzaSyDXISy-tdXM_rOgot-0SblAiYgf2vGXaRY', function (videos) {
        var lastest = videos.items;
        $.each(lastest, function (i, core) {
            console.log(core)
            $('.video-list').append(`
            <div class="col-md-6">
                <div class="card mb-6 shadow p-1 mb-2 bg-white rounded">
                    <div class="embed-responsive embed-responsive-16by9 card-img-top">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/`+ core.id.videoId + `" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                    <p class="card-title">`+ core.snippet.title + `</p>
                    </div>    
                </div>
            </div>
            `);
        });
    });
};

$(this).on('load', function () {
    video();
    youtuber();
});