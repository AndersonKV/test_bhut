import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, FlatList, ListRenderItemInfo} from 'react-native';
import {api} from '../../api/api';
import {CarItem} from '../../components/RenderItem';
import {DataCar} from '../../types/Car';

type RootStack = NativeStackScreenProps<RootStackParams>;

type RootStackParams = {
  Dashboard: {
    item: DataCar;
  };
};

export default function ScreenList({navigation}: RootStack) {
  const [cars, setCars] = useState<DataCar[]>();

  useEffect(() => {
    async function init() {
      try {
        const res = await api.get('api/cars');

        setCars(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    init();
  }, []);

  const navigate = (item: DataCar) => {
    navigation.navigate('Dashboard', {item});
  };

  const ITEM_HEIGHT = 40;

  const renderItem = useCallback(
    ({item, index}: ListRenderItemInfo<DataCar>) => (
      <CarItem index={index} item={item} navigate={navigate} />
    ),
    [],
  );

  const keyExtractor = useCallback((item: DataCar) => item._id, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        keyExtractor={keyExtractor}
        data={cars}
        removeClippedSubviews={false}
        maxToRenderPerBatch={40}
        windowSize={30}
        updateCellsBatchingPeriod={50}
        initialNumToRender={20}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        renderItem={renderItem}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatList: {
    margin: 20,
    height: 300,

    borderColor: '#d3d3d3',
    shadowColor: '#000',
    zIndex: 10,
  },
});
