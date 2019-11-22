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
            id: Number,
            title: String,  
            videoUrl: String,
            vttUrl: String,
            averageRating: Number
    }],
    courses: [{
        id: Number,
        name: String,
        description: String,
        picture: String,
        idteacher: Number,
        creationdate: Date,
        isig3: Boolean,
        isig4: Boolean,
        isig5: Boolean,
        teacher: {
            id: Number,
            email: String,
            role: Number,
            firstName: String,
            lastName: String
        },
        rating: Number,
        averageRating: Number
    }],
    user: {
        accessToken: String,
        refreshToken: String,
        username: String,
        role: String
    },
    network.isConnected: Boolean,
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

- id: Number. The video ID.
- title: String. The video title.
- videoUrl: String. The video URL.
- vttUrl: String. The subtitles URL.
- averageRating: Number. The average rating of the video.

### courses

It's an array containing the courses we retrieved from the backend. It contains every courses that the user subscribed to. It contains the following objects:

- id: Number. The course ID in the database.
- name: String. The course name.
- description: String. The course description.
- picture: String. The link to the course image.
- idteacher: Number. The course's teacher's id.
- creationdate: Date. The date of creation of the course.
- isig3: Boolean. If the course is for IG3.
- isig4: Boolean. If the course is for IG4.
- isig5: Boolean. If the course if for IG5.
- teacher: Object. The teacher's information.
- rating: Number. The rating the user gave.
- averageRating: Number. The average rating of the course.

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
