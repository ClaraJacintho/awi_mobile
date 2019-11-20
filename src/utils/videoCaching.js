import * as RNFS from 'react-native-fs';

/**
 * Stores a video along with its VTT file.
 * @param videoURI the video to download
 * @param subtitlesURI the subtitles to download
 * @return {Promise<{videoName: String, subtitlesName: null}|{videoName: String, subtitlesName: String}>} The resulting names to store.
 */
async function storeVideo(videoURI, subtitlesURI = null) {
  const videoName = videoURI.substring(
    videoURI.lastIndexOf('/') + 1,
    videoURI.length,
  );
  const videoPath = (RNFS.DocumentDirectoryPath + '/' + videoName).replace(
    /%20/g,
    '_',
  );

  const download = (uri, path) => {
    return RNFS.downloadFile({
      fromUrl: uri,
      toFile: path,
      background: true,
    }).promise;
  };
  console.log('Downloading');
  const exists = await RNFS.exists(videoPath);
  if (exists) {
    throw new Error('Already downloaded');
  } else if (subtitlesURI == null) {
    await download(videoURI, videoPath);
    return {
      videoName: videoName,
      subtitlesName: null,
    };
  } else {
    const subName = subtitlesURI.substring(
      subtitlesURI.lastIndexOf('/') + 1,
      subtitlesURI.length,
    );
    const subPath = (RNFS.DocumentDirectoryPath + '/' + subName).replace(
      /%20/g,
      '_',
    );

    await Promise.all([
      download(videoURI, videoPath),
      download(subtitlesURI, subPath),
    ]);
    return {
      videoName: videoName,
      subtitlesName: subName,
    };
  }
}

/**
 * Retrieved the video and subtitles paths.
 * @param {{videoName: String, subtitlesName: String}} video object containing the video name and the subtitles name file.
 * @return {Promise<{videoURI: String, subtitlesURI: null}|{videoURI: String, subtitlesURI: String}>} The different results.
 */
async function retrieveVideoPath(video) {
  return new Promise((resolve, reject) => {
    const videoPath =
      RNFS.DocumentDirectoryPath + '/' + video.videoName.replace(/%20/g, '_');
    const subPath =
      video.subtitlesName !== null
        ? RNFS.DocumentDirectoryPath +
          '/' +
          video.subtitlesName.replace(/%20/g, '_')
        : null;

    RNFS.exists(videoPath)
      .then(videoExists => {
        if (videoExists) {
          if (video.subtitlesName !== null) {
            return RNFS.exists(subPath);
          } else {
            resolve({
              videoURI: videoPath,
              subtitlesURI: null,
            });
          }
        } else {
          reject(new Error('File is not present'));
        }
      })
      .then(subExists => {
        if (subExists) {
          resolve({
            videoURI: videoPath,
            subtitlesURI: subPath,
          });
        } else {
          reject(new Error('File is not present'));
        }
      })
      .catch(err => reject(err));
  });
}

/**
 * Deletes a video from the cache, and if applicable, its subtitles file.
 * @param  {String}  videoName video the video name as stored in the cache.
 * @param {String} subtitlesName the subtitles as stored in the cache.
 * @return {Promise<Boolean>} True if complete, false if error.
 */
function deleteVideo(videoName, subtitlesName) {
  return new Promise((resolve, reject) => {
    const videoPath =
      RNFS.DocumentDirectoryPath + '/' + videoName.replace(/%20/g, '_');

    if (video.subtitlesName !== null) {
      const subPath =
        RNFS.DocumentDirectoryPath +
        '/' +
        subtitlesName.replace(/%20/g, '_');
      Promise.all([RNFS.unlink(videoPath), RNFS.unlink(subPath)])
        .then(() => resolve(true))
        .catch(err => reject(err));
    } else {
      RNFS.unlink(videoPath)
        .then(() => resolve(true))
        .catch(err => reject(err));
    }
  });
}

export default {
  storeVideo,
  retrieveVideoPath,
  deleteVideo,
};
