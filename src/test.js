import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardAction
} from 'react-native-card-view';
import 

export default class CardExample extends Component {

  _renderTitle (title) {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 20}}>{title}</Text>
      </View>
    )
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this._renderTitle('Card Image')}
          <Card>
            {/*<CardImage>
              <Image
                style={{width: 256, height: 256}}
                source={{uri: 'https://getmdl.io/assets/demos/image_card.jpg'}}
              >
                <Text style={[styles.title, {alignSelf: 'center'}]}>Beautiful Girl</Text>
              </Image>
            </CardImage>*/}
            <CardAction>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {ToastAndroid.show('pressed', ToastAndroid.LONG)}}>
                  <Image
                    style={{width: 256, height: 256}}
                    source={{uri: 'https://getmdl.io/assets/demos/image_card.jpg'}}
                  >
                    <Text style={[styles.title, {alignSelf: 'center'}]}>Beautiful Girl</Text>
                  </Image>
              </TouchableOpacity>
            </CardAction>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
  card: {
    width: 300
  }
});
