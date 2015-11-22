var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

client.post('statuses/update', {status: 'DroneSelfie @thiruppathi #nodeBots #nodcopter'}, function(error, tweet, response){
  if (!error) {
    console.log(tweet);
  }
});


// Load your image
var data = require('fs').readFileSync('frame.png');

// Make post request on media endpoint. Pass file data as media parameter
client.post('media/upload', {media: data}, function(error, media, response){

  if (!error) {

    // If successful, a media object will be returned.
    console.log(media);

    // Lets tweet it
    var status = {
      status: 'Test DroneSelfie @thiruppathi #nodeBots #nodcopter',
      media_ids: media.media_id_string // Pass the media id string
    }

    client.post('statuses/update', status, function(error, tweet, response){
      if (!error) {
        console.log(tweet);
      }
    });

  }
});
