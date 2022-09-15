import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Button,
  TextInput,
} from 'react-native';
import {api} from '../../api/api';
import {Indicator} from '../../components/Indicator';
import {Formik} from 'formik';
import {Input} from '../../components/Input';
import {validate} from '../../utils';
import {ICar} from '../../types/Car';
import {TouchableOpacity} from 'react-native-gesture-handler';

type RootStack = NativeStackScreenProps<RootStackParams>;

type RootStackParams = {
  PageNotFound: undefined;
};

export function ScreenFindCar({route, navigation}: RootStack) {
  const [car, setCar] = useState<ICar | null>();
  const [copyId, setCopiId] = useState<string>();

  async function handleSubmit() {
    try {
      if (copyId && copyId.length === 0) {
        return;
      }

      const res = await api.get('api/cars/' + copyId);

      if (res.data._id) {
        setCar(res.data);
        ToastAndroid.show('Sucesso', ToastAndroid.TOP);
      }
    } catch (err) {
      console.log(err);
      ToastAndroid.show('Requisição invalida', ToastAndroid.TOP);
    }
  }

  function handleClear() {
    setCopiId('');
    setCar(null);
  }
  return (
    <View style={{padding: 30, flex: 1}}>
      <TextInput
        value={copyId}
        onChangeText={text => setCopiId(text)}
        placeholder={'cole o id'}
        style={{backgroundColor: 'white'}}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '50%'}}>
          <Button title="procurar" onPress={handleSubmit} />
        </View>

        <View style={{width: '50%'}}>
          <Button color={'gray'} title="clear" onPress={handleClear} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Nome: {car?.title}</Text>
        <Text style={styles.text}>Ano: {car?.age}</Text>
        <Text style={styles.text}>Marca: {car?.brand}</Text>
        <Text style={styles.text}>Preço: {car?.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#000',
    borderBottomWidth: 1,
  },

  content: {
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    alignContent: 'center',
    borderWidth: 1,
  },
  contentButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
