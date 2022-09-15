import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {DataCar} from '../../types/Car';

interface Props {
  navigate: (value: DataCar) => void;
  item: DataCar;
  index: Number;
}

export function CarItem({item, index, navigate}: Props) {
  return (
    <TouchableOpacity
      onPress={() => navigate(item)}
      style={{marginVertical: 10, borderWidth: 1, padding: 5}}>
      <Text style={{fontSize: 20, color: '#000'}}>
        Index: {index.toString()}
      </Text>
      <Text style={{fontSize: 20, color: '#000'}}>Nome: {item.title}</Text>
      <Text style={{fontSize: 20, color: '#000'}}>Ano: {item.age}</Text>
      <Text style={{fontSize: 20, color: '#000'}}>Marca: {item.brand}</Text>
      <Text style={{fontSize: 20, color: '#000'}}>Preço: {item.price}</Text>
    </TouchableOpacity>
  );
}
