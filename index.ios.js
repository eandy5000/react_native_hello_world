//iOS build root
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/album_list';

const App = () => {
  return (
    <View>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('albums', () => App);
