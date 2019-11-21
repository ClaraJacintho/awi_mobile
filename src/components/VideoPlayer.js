import * as React from 'react';
import Video, {TextTrackType} from 'react-native-video';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.getTextTracks = this.getTextTracks.bind(this);
    console.log('Video' + this.props.videoURI);
    console.log('Subs ' + this.props.subtitlesURI);
  }

  getTextTracks = () => {
    if (this.props.subtitlesURI !== null) {
      return [
        {
          title: 'English CC',
          language: 'en',
          type: TextTrackType.VTT,
          uri: this.props.subtitlesURI,
        },
      ];
    } else {
      return [];
    }
  };

  render() {
    return (
      <Video
        source={{uri: this.props.videoURI}}
        style={this.props.style}
        ref={ref => {
          this.player = ref;
        }}
        controls
        playWhenInactive
        resizeMode={'contain'}
        fullScreen={'true'}
        textTracks={this.getTextTracks()}
      />
    );
  }
}
