const testData = {
    "episode": {
        "id": "29314799",
        "created_at": "2017-12-11T20:25:44.819Z",
        "archived": false,
        "published_at": "2017-12-11T20:03:15.000Z",
        "image_url": "https://api.breaker.audio/shows/185226/episodes/29314799/image?v=1735a17353ecc0da520ed55ac418762c",
        "primary_color": "9e1a65",
        "secondary_color": "f593b9",
        "enclosure_url": "https://api.breaker.audio/shows/185226/episodes/29314799/enclosure?v=45e6328326e21b2b53c8189ef2fdfa1f",
        "enclosure_type": "audio/mp3",
        "duration": 3195,
        "size": 51123930,
        "title": "No. 41 — Change Everything?",
        "stripped_description": "In the season finale, we dig into the tension between ritual and change. We share how much has changed for each of us—even since the last episode—and how our habits evolve.",
        "explicit": false,
        "liked": null,
        "listened": null,
        "new": false,
        "playlisted": null,
        "episode_comments_count": 0,
        "dislikes_count": 0,
        "likes_count": 1,
        "playlists_count": 33,
        "popularity": 28,
        "language": "en",
        "state": "published",
        "scheduled_at": null,
        "description": "In the season finale, we dig into the tension between ritual and change. We share how much has changed for each of us—even since the last episode—and how our habits evolve.",
        "playlist": null,
        "show": {
            "id": "185226",
            "created_at": "2016-05-10T03:00:34.834Z",
            "name": "Should We",
            "slug": "should-we",
            "artist_id": null,
            "artist_name": "Diana Berlin \u0026 Lisa Sanchez",
            "feed_url": "http://feeds.soundcloud.com/users/soundcloud:users:181343349/sounds.rss",
            "hosted": false,
            "image_url": "https://api.breaker.audio/shows/185226/image?v=8572f6185658e2e7ff77a46fb3ae41aa",
            "primary_color": "fee7d5",
            "secondary_color": "9d4d6a",
            "subtitle": "Creative conversations about the everyday choices…",
            "stripped_description": "Creative conversations about the everyday choices that make us, hosted by Lisa Sanchez and Diana Kimball Berlin.",
            "keywords": null,
            "frequency": "Twice a month",
            "explicit": false,
            "video": false,
            "subscribed": false,
            "median_duration": 2061,
            "subscriptions_count": 124,
            "episodes_count": 51,
            "episode_comments_count": 0,
            "listened_episodes_count": 0,
            "language": "en",
            "state": "published",
            "description": "Creative conversations about the everyday choices that make us, hosted by Lisa Sanchez and Diana Kimball Berlin.",
            "genre": {
                "id": "1324",
                "created_at": "2016-04-01T18:39:40.805Z",
                "name": "Society \u0026 Culture",
                "slug": "society-culture"
            },
            "subscription": null,
            "followee_subscribers": null,
            "links": []
        },
        "followee_episode_commenters": [],
        "followee_likers": [],
        "followee_listeners": []
    }
};

const podcastDataHandler = {
    retrieveEpisode(id) {
        // Would take an id for a podcast episode, make an HTTP request to the Breaker API, and return the podcast episode data.
        return Promise.resolve(testData);
    }, 

    updateEpisode(id, newData) {
        // NO OP --> Would take an id and the data you want to update for the podcast episode, send an HTTP request, 
        // and return the new data and/or possible error messaging.
        // return Promise.resolve(newData);

        return Promise.resolve({
            ...newData, 
            errorMessage: "OH NO - Something went terribly wrong."
        })
        //^ This could emulate what we return if there was an error.
    },
}

export default podcastDataHandler;