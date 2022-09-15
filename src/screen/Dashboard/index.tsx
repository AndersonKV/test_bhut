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
} from 'react-native';
import {api} from '../../api/api';
import {Indicator} from '../../components/Indicator';
import {Formik} from 'formik';
import {Input} from '../../components/Input';
import {validate} from '../../utils';
import {ICar} from '../../types/Car';

type RootStack = NativeStackScreenProps<RootStackParams>;

type RootStackParams = {
  PageNotFound: undefined;
};

export function ScreenDashBoard({route, navigation}: RootStack) {
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
      ToastAndroid.show('Requisição invalida', ToastAndroid.TOP);
    }
  }

  const DefaultView = () => {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>Nome: {car?.title}</Text>
        <Text style={styles.text}>Ano: {car?.age}</Text>
        <Text style={styles.text}>Marca: {car?.brand}</Text>
        <Text style={styles.text}>Preço: {car?.price}</Text>
      </View>
    );
  };

  const initials = {_id: '', title: '', brand: '', price: '', age: ''};

  const initialValues = {...car};
  const initialErrors = {...initials};

  async function onSubmit(values: any) {
    try {
      const formData = values as ICar;

      const res = await api.put('api/cars/' + formData._id, formData);

      if (res.data._id) {
        ToastAndroid.show('Dados atualizado', ToastAndroid.TOP);
      } else {
        ToastAndroid.show('Não foi possivel atualizar', ToastAndroid.TOP);
      }
    } catch (err) {
      ToastAndroid.show('Requisição invalida', ToastAndroid.TOP);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} enabled>
        {activeEditButton ? (
          <Formik
            initialValues={initialValues}
            initialErrors={initialErrors}
            validate={values => validate(values)}
            onSubmit={values => onSubmit(values)}>
            {({handleChange, handleSubmit, errors, touched, values}) => (
              <View style={styles.content}>
                <Input
                  label={'Nome'}
                  handleChange={handleChange('title')}
                  value={String(values.title)}
                  keyboardType={'default'}
                  placeholder={'digite o nome'}
                />

                {errors.title && touched.title ? (
                  <Text style={{fontSize: 16}}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>
                    {errors.title}
                  </Text>
                ) : null}

                <Input
                  label={'Ano'}
                  handleChange={handleChange('age')}
                  value={String(values.age)}
                  keyboardType={'numeric'}
                  placeholder={'digite o ano'}
                />

                {errors.age && touched.age ? (
                  <Text style={{fontSize: 16}}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>
                    {errors.age}
                  </Text>
                ) : null}

                <Input
                  label={'Marca'}
                  handleChange={handleChange('brand')}
                  value={String(values.brand)}
                  keyboardType={'default'}
                  placeholder={'digite a marca'}
                />

                {errors.brand && touched.brand ? (
                  <Text style={{fontSize: 16}}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>
                    {errors.brand}
                  </Text>
                ) : null}

                <Input
                  label={'Preço'}
                  handleChange={handleChange('price')}
                  value={String(values.price)}
                  keyboardType={'numeric'}
                  placeholder={'digite o preço'}
                />

                {errors.price && touched.price ? (
                  <Text style={{fontSize: 16}}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>
                    {errors.price}
                  </Text>
                ) : null}

                <Button onPress={handleSubmit} title="Atualizar" />
              </View>
            )}
          </Formik>
        ) : (
          <DefaultView />
        )}

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
            {!activeEditButton === true ? (
              <Indicator
                title="Deletar carro"
                background="#d9534f"
                color="white"
                navigate={handleDelete}
              />
            ) : null}
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
