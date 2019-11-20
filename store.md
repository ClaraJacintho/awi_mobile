# Polyteach mobile store

## Description

This mobile application needs to retain crucial information, in order for it to work properly. Moreover, this store needs to be stored, so that it will remain even in an event of network loss.

The store is implemented _via_ Redux, with Redux-offline and Redux-persist. Please find the documentation of these packages for more information.

## Store description

The general store looks like this:

```JSON
{
    savedVideos: [ { videoName: String, subtitlesName: String }],
    currentVideo: { videoURI: String, subtitlesURI: String },
    videos: [{
            videoId: Number,
            videoName: String,  
            videoURI: String,
            subtitlesURI: String,
            courseId: Number
    }],
    courses: [{
        courseId: Number,
        courseName: String,
        courseDesc: String,
        courseImgLink: String
    }],
    user: {
        accessToken: String,
        refreshToken: String,
        username: String, 
        role: String
    },
    isConnected: Boolean,
    connection: String

}
```

Lets describe every object:

### savedVideos

The savedVideos object is used to store the videos put in cache. Since we don't actually have to store the URI (because it's all located in the same place), we can just store the names of the files. We are assuming that two videos can't have the same name, because otherwise they couldn't be stored int he same cloud to begin with.

- videoName: String, indicating the video name in the app's documents folder.
- subtitlesName: String, indicating the subtitles name in the app's documents folder.

### currentVideo

The currentVideo object is used to store the video playing in the application.

- videoURI: String. Could be a location over the network, or local.
- subtitlesURI: String. Same as the videoURI.

### videos

It's an array containing every videos we retrieved from the backend. It is mainly used to store videos of a specific course. It is updated at every course selection change.
It contains the objects describes as follows:

- videoId: Number. The video ID in the database.
- videoName: String. The video name.
- videoURI: String. The video location.
- subtitlesURI: The subtitles location.
- courseId: Number. The course the video is about.

### courses

It's an array containing the courses we retrieved from the backend. It contains every courses that the user subscribed to. It contains the following objects:

- courseId: Number. The course ID in the database.
- courseName: String. The course name.
- courseDesc: String. The course description.
- courseImgLink: String. The link to a hosted image representing the course.

### user

Simple object containing the user's information.

- accessToken: String. The identification token.
- refreshToken: String. The refresh token.
- username: String. The user's name.
- role: String. The user's role (student or teacher)

### isConnected

A simple boolean to indicate if we are connected to the API or not.

### connection

Stores the random state we sent to the OAuth server.
