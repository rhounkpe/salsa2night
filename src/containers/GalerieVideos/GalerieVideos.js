import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import YTSearch from 'youtube-api-search';

const YOUTUBE_API = 'AIzaSyArACvC94CDo9fuoWNP4zZcr5A7OiphrYo';

// Stop on 27: detail component
class GalerieVideos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: YOUTUBE_API, term: 'Dj Karimou'}, videos => this.setState(
            {
                videos: videos,
                selectedVideo: videos[0]
            }
        ));        
    }


    render() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <SearchBar />
                    </Col>

                    <Col xs={12}>
                        <Row>
                            <Col md="7">
                                <VideoDetails video={this.state.selectedVideo} />
                            </Col>

                            <Col md="5">
                                <VideoList 
                                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                                    videos={this.state.videos}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GalerieVideos;