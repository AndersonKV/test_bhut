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
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {api} from '../../api/api';
import {Indicator} from '../../components/Indicator';
import Routes from '../../routes';
import {ICar} from '../../types/Car';
import {Formik} from 'formik';
import {Input} from '../../components/Input';
import {onlyNumbers} from '../../utils';

type RootStack = NativeStackScreenProps<RootStackParams>;

type RootStackParams = {
  PageNotFound: undefined;
};

export function ScreenCar({route, navigation}: RootStack) {
  const [car, setCar] = useState<ICar>();
  const [activeEditButton, setActiveEditButton] = useState(false);

  useEffect(() => {
    const params = route?.params as any;
    const values = params.item as ICar;

    if (values?._id) {
      setCar(values);
      navigation.setOptions({title: values.title});
    } else {
      navigation.navigate('PageNotFound');
      console.log('err');
    }
  }, []);

  async function handleDelete() {
    try {
      const res = await api.delete('api/cars/' + car?._id);

      if (res.data._id) {
        ToastAndroid.show('Carro deletado', ToastAndroid.TOP);
      } else {
        ToastAndroid.show('Não foi possivel deletar', ToastAndroid.TOP);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdate() {
    try {
      const formData = car;

      const res = await api.put('api/cars/' + car?._id, formData);

      if (res.data._id) {
        ToastAndroid.show('Dados atualizado', ToastAndroid.TOP);
      } else {
        ToastAndroid.show('Não foi possivel atualizar', ToastAndroid.TOP);
      }
    } catch (err) {
      ToastAndroid.show('Error, não foi possivel atualizar', ToastAndroid.TOP);
    }
  }

  const DefaultView = () => {
    return (
      <View>
        <Text style={styles.text}>Nome: {car?.title}</Text>
        <Text style={styles.text}>Ano: {car?.age}</Text>
        <Text style={styles.text}>Marca: {car?.brand}</Text>
        <Text style={styles.text}>Preço: {car?.price}</Text>
      </View>
    );
  };

  function handleChange(value: string | number, action: string) {
    const isActionEqualPriceOrBrand =
      action === 'price' || action === 'age' ? true : false;

    if (onlyNumbers(value) && isActionEqualPriceOrBrand) {
      setCar({...car, [action]: value} as ICar);
    }

    if (!isActionEqualPriceOrBrand) {
      setCar({...car, [action]: value} as ICar);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} enabled>
        <View style={styles.content}>
          {activeEditButton ? (
            <>
              <Input
                label={'Nome'}
                actionName={'title'}
                handleChange={handleChange}
                value={String(car?.title)}
              />

              <Input
                label={'Ano'}
                actionName={'age'}
                handleChange={handleChange}
                value={Number(car?.age)}
              />

              <Input
                label={'Marca'}
                actionName={'brand'}
                handleChange={handleChange}
                value={String(car?.brand)}
              />

              <Input
                label={'Preço'}
                actionName={'price'}
                handleChange={handleChange}
                value={Number(car?.price)}
              />
            </>
          ) : (
            <DefaultView />
          )}
        </View>

        <View style={styles.contentButton}>
          <View style={{width: '40%'}}>
            <Indicator
              title={activeEditButton ? 'Voltar' : 'Abrir editor'}
              background="#ec971f"
              color="white"
              navigate={() => setActiveEditButton(!activeEditButton)}
            />
          </View>
          <View style={{width: '40%'}}>
            {activeEditButton ? (
              <Indicator
                title="Atualizar"
                background="#337ab7"
                color="white"
                navigate={handleUpdate}
              />
            ) : (
              <Indicator
                title="Deletar carro"
                background="#d9534f"
                color="white"
                navigate={handleDelete}
              />
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
