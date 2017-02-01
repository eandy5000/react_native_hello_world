import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import Button from './button';

const AlbumDetail = (props) => {
    const { title, artist, thumbnail_image, image, url } = props.album;

    return (
        <Card>
            <CardSection>
              <View style={styles.thumbnailContainer} >
                <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
              </View>
              <View style={styles.headerContentStyle} >
                <Text style={styles.headerText} >{ title }</Text>
                <Text>{ artist }</Text>
              </View>
            </CardSection>
            <CardSection>
                <Image 
                    style={styles.image}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now!
                </Button>
            </CardSection>
        </Card>
    );
 };

     const styles = {
        headerContentStyle: {
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        headerText: {
            fontSize: 18
        },
        thumbnailStyle: {
            height: 50,
            width: 50
        },
        thumbnailContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10
        },
        image: {
            height: 300,
            width: null,
            flex: 1
        }
    };

export default AlbumDetail;
