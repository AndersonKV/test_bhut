import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {api} from '../../api/api';
import {Indicator} from '../../components/Indicator';
import Routes from '../../routes';
import {ICar} from '../../types/Car';

type RootStack = NativeStackScreenProps<RootStackParams>;

type RootStackParams = {};
export function ScreenCar({route, navigation}: RootStack) {
  const [car, setCar] = useState<ICar>();
  const [changeUpdate, setChangeUpdate] = useState(false);

  useEffect(() => {
    const params = route.params as any;
    const values = params.item as ICar;

    if (values._id) {
      setCar(values);
      navigation.setOptions({title: values.title});
    } else {
      console.log('err');
    }
  }, []);

  async function handleDelete() {
    try {
      const res = await api.delete('api/cars/' + car?._id);

      console.log({id: res.data._id});
      if (res.data._id) {
        ToastAndroid.show('Carro deletado', ToastAndroid.TOP);
      } else {
        ToastAndroid.show('Não foi possivel deletar', ToastAndroid.TOP);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: 'whitesmoke'}}>
      <View
        style={{
          backgroundColor: 'white',
          margin: 20,
          padding: 10,
          alignContent: 'center',
          borderWidth: 1,
        }}>
        {!changeUpdate ? (
          <>
            <Text style={styles.text}>Nome: {car?.title}</Text>
            <Text style={styles.text}>Ano: {car?.age}</Text>
            <Text style={styles.text}>Marca: {car?.brand}</Text>
            <Text style={styles.text}>Preço: {car?.price}</Text>
          </>
        ) : (
          <>
            <View style={styles.updateInput}>
              <Text>Nome:</Text>
              <TextInput
                value={car?.title}
                style={{flex: 1, backgroundColor: 'whitesmoke'}}
              />
            </View>
            <View style={styles.updateInput}>
              <Text>Ano:</Text>
              <TextInput value={car?.age.toString()} />
            </View>
            <View style={styles.updateInput}>
              <Text>Marca:</Text>
              <TextInput value={car?.title} />
            </View>
            <View style={styles.updateInput}>
              <Text>Preço:</Text>
              <TextInput value={car?.brand} />
            </View>
          </>
        )}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={{width: '40%'}}>
          <Indicator
            title="Atualizar carro"
            background="#ec971f"
            color="white"
            navigate={() => setChangeUpdate(!changeUpdate)}
          />
        </View>
        <View style={{width: '40%'}}>
          <Indicator
            title="Deletar carro"
            background="#d9534f"
            color="white"
            navigate={handleDelete}
          />
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  updateInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
