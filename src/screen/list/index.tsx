import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native';
import {api} from '../../api/api';
import {ICar} from '../../types/Car';

type RootStack = NativeStackScreenProps<RootStackParams>;

type RootStackParams = {
  Car: {
    item: ICar;
  };
};

export default function ScreenList({navigation}: RootStack) {
  const [cars, setCars] = useState<ICar[]>();

  console.log('teste');
  useEffect(() => {
    async function init() {
      try {
        const res = await api.get('api/cars');

        console.log(res.data.length);
        setCars(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    init();
  }, []);

  const navigate = (item: ICar) => {
    navigation.navigate('Car', {item});
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
      }}>
      <FlatList
        style={styles.flatList}
        keyExtractor={item => item._id.toString()}
        data={cars}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{marginVertical: 10}}
            onPress={() => navigate(item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
  },
  clearButton: {
    width: 80,
    borderRadius: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: '#d3d3d3',
    borderWidth: 2,
    marginVertical: 24,
    padding: 8,
  },
  clearText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  boxMessage: {
    alignItems: 'center',
    borderColor: '#000',
    paddingVertical: 10,
  },
  flatList: {
    marginVertical: 20,
    height: 300,

    borderColor: '#d3d3d3',
    shadowColor: '#000',
    zIndex: 10,
  },
  textSpan: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
