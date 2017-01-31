import React from 'react';
import { Text } from 'react-native';
import Card from './card';

const AlbumDetail = (props) => {
    const { title } = props.album;

    return (
        <Card>
            <Text>{ title }</Text>
        </Card>
    );
};

export default AlbumDetail;
