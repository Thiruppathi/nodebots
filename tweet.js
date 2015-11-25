var Twitter = require('twitter');
var envKeys = require('./envKeys').envKeys;

var client = new Twitter(envKeys);

/*
client.post('statuses/update', {status: 'DroneSelfie @thiruppathi #nodeBots #nodcopter'}, function(error, tweet, response){
  if (!error) {
    console.log(tweet);
  }
});*/

// Load your image
var data = require('fs').readFileSync('frame2.png');

// Make post request on media endpoint. Pass file data as media parameter
client.post('media/upload', {media: data}, function(error, media, response){

  if (!error) {

    // If successful, a media object will be returned.
    console.log(media);

    // Lets tweet it
    var status = {
      status: 'DroneSelfie @thiruppathi @LeedsJS #nodeBots #nodcopter',
      media_ids: media.media_id_string // Pass the media id string
    }

    client.post('statuses/update', status, function(error, tweet, response){
      if (!error) {
        console.log(tweet);
      }
    });

  } else {
    console.log('Sorry. Could not post');
  }
});
