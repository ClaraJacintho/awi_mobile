import * as RNFS from 'react-native-fs';

function storeVideo(videoURL) {
    return new Promise((resolve, reject) => {
        const filename = videoURL.substring(videoURL.lastIndexOf("/") + 1, videoURL.length);
        const path_name = (RNFS.DocumentDirectoryPath + '/' + filename).replace(/%20/g, "_");

        RNFS.exists(path_name).then(exists => {
            if (exists) {
                reject(Error("Already downloaded"));
            } else {
                console.log("Downloading");
                RNFS.downloadFile({
                    fromUrl: videoURL,
                    toFile: path_name,
                    background: true
                }).promise.then(res => {
                    console.log(res);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            }
        }).catch(err => {
            reject(err);
        });
    });
}

function retrieveVideoPath(filename) {
    return new Promise((resolve, reject) => {
        const path = RNFS.DocumentDirectoryPath + '/' + filename.replace(/%20/g, "_");
        RNFS.exists(path)
            .then((exists) => {
                if(exists) resolve(path);
                else reject(new Error("File is not present"))
            });
    });
}

function deleteVideo(filename) {
    return new Promise((resolve, reject) => {
        const path = RNFS.DocumentDirectoryPath + '/' + filename.replace(/%20/g, "_");

        return RNFS.unlink(path)
            .then(() => {
                resolve(true);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

export default {
    storeVideo,
    retrieveVideoPath,
    deleteVideo,
};
