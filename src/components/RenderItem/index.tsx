import {TouchableOpacity, Text, ListRenderItemInfo} from 'react-native';
import {ICar} from '../../types/Car';

interface Props {
  item: ICar;
  handle: (value: ICar) => void;
}
export function RenderItem({item, index}: ListRenderItemInfo<ICar>) {
  return (
    <TouchableOpacity style={{marginVertical: 10, borderWidth: 1, padding: 5}}>
      <Text style={{fontSize: 20, color: '#000'}}>Index: {index}</Text>
      <Text style={{fontSize: 20, color: '#000'}}>Nome: {item.title}</Text>
      <Text style={{fontSize: 20, color: '#000'}}>Ano: {item.age}</Text>
      <Text style={{fontSize: 20, color: '#000'}}>Marca: {item.brand}</Text>
      <Text style={{fontSize: 20, color: '#000'}}>Preço: {item.brand}</Text>
    </TouchableOpacity>
  );
}
