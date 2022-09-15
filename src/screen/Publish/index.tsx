import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
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
import {CarDTO} from '../../types/Car';
import {Formik} from 'formik';
import {Input} from '../../components/Input';
import {validate} from '../../utils';

export function ScreenPublish() {
  const initials = {title: '', brand: '', price: '', age: ''};
  const initialValues = {...initials};
  const initialErrors = {...initials};

  async function onSubmit(values: CarDTO) {
    try {
      const formData = values;

      const res = await api.post('api/cars', formData);

      if (res.status === 200 && res.data._id) {
        ToastAndroid.show('Publicação feita com sucesso', ToastAndroid.TOP);
      }
    } catch (err) {
      ToastAndroid.show('Requisição invalida', ToastAndroid.TOP);

      console.log(err);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} enabled>
        <View style={styles.content}>
          <Formik
            initialValues={initialValues}
            initialErrors={initialErrors}
            validate={values => validate(values)}
            onSubmit={values => onSubmit(values)}>
            {({handleChange, handleSubmit, errors, touched, values}) => (
              <View>
                <Input
                  label={'Nome'}
                  handleChange={handleChange('title')}
                  value={values.title}
                  placeholder={'digite o nome'}
                  keyboardType={'default'}
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
                  value={values.age}
                  placeholder={'digite o ano'}
                  keyboardType={'numeric'}
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
                  value={values.brand}
                  placeholder={'digite a marca'}
                  keyboardType={'default'}
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
                  value={values.price}
                  keyboardType={'numeric'}
                  placeholder={'digite o preço'}
                />

                {errors.price && touched.price ? (
                  <Text style={{fontSize: 16}}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>*</Text>
                    {errors.price}
                  </Text>
                ) : null}

                <Button onPress={handleSubmit} title="Enviar" />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    justifyContent: 'center',
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
