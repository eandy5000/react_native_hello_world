import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './album_detail';

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
             .then((response) => {
                 return this.setState({
                     albums: response.data
                 });
             });
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail album={album} key={album.image} />);
    }

    render() {    
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
