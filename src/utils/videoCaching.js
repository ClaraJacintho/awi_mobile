import * as RNFS from 'react-native-fs';

function storeVideo(videoURL) {
    let filename = videoURL.substring(videoURL.lastIndexOf("/") + 1, videoURL.length);
    let path_name = RNFS.DocumentDirectoryPath + filename;

    RNFS.exists(path_name).then(exists => {
        if (exists) {
            throw new Error("Already downloaded");
        } else {
            RNFS.downloadFile({
                fromUrl: videoURL,
                toFile: path_name.replace(/%20/g, "_"),
                background: true
            }).promise.then(res => {
                return res;
            }).catch(err => {
                throw err;
            });
        }
    });
}

function retrieveVideo(filename) {
    return new Promise((resolve, reject) => {
        RNFS.readDir(RNFS.DocumentDirectoryPath)
            .then(result => {
                result.forEach(element => {
                    if (element.name === filename.replace(/%20/g, "_")) {
                        resolve(element.path);
                    }
                });
                resolve(null);
            })
            .catch(err => {
                reject(err);
            });
    });
}

export default {
    storeVideo,
    retrieveVideo,
};
