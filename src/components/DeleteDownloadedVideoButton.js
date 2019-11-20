import * as React from 'react';
import {Button} from 'react-native';
import videoCaching from '../utils/videoCaching';

export default DeleteDownloadedVideoButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonTitle: 'Delete',
        };
        this.deleteVideo = this.deleteVideo.bind(this);
    }

    deleteVideo =() => {
        videoCahing.deleteVideo(this.props.video, this.props.subtitles)
            .then(result => {
                if(result){
                    this.props.deleteVideo(this.props.video, this.props.subtitles);
                }
                Alert.alert('Success', 'Deleted!');
            })
            .catch(err => {
                console.log(err);
                Alert.alert('Error', 'Problem in te video deletion');

            });
    }

    render() {
        return (
            <Button
                title={this.state.buttonTitle}
                onPress={this.deleteVideo}
                color={colors.purple}
            />
        );
    }
}