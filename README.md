jsonpost
=========

A node application for posting json object and returning valid items.

## Setup

Clone the GIT repository and download NPM dependencies

```
git clone https://github.com/rkhub/jsonpost.git

cd jsonpost && npm install
```

## Run

```
node server

```

## Test through Curl
### Install Curl from  http://curl.haxx.se/docs/ if you don't already have it

With the follwing example

```
curl -H "Content-Type: application/json" -d '{
    "payload": [
        {
            "country": "UK",
            "description": "Whats life like when you have enough children to field your own football team?",
            "drm": true,
            "episodeCount": 3,
            "genre": "Reality",
            "image": {
                "showImage": "http://catchup.ninemsn.com.au/img/jump-in/shows/16KidsandCounting1280.jpg"
            },
            "language": "English",
            "nextEpisode": null,
            "primaryColour": "#ff7800",
            "seasons": [
                {
                    "slug": "show/16kidsandcounting/season/1"
                }
            ],
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting",
            "tvChannel": "GEM"
        }
    ],
    "skip": 0,
    "take": 10,
    "totalRecords": 75
}' http://localhost:3000/
```

##Heroku Deployment

The application's end point, It can also me tested using curl.
```
http://infinite-scrubland-7457.herokuapp.com/
```