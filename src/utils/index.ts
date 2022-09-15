import { ValidateCarDTO, PostError } from '../types/Car';

export function onlyNumbers(str: any) {
  return /^[0-9]+$/.test(str);
}

export function validate(val: any) {
  const values = val as ValidateCarDTO;

  const err = {} as PostError;

  if (String(values.title).trim().length === 0) {
    err.title = 'nome não pode estar vazio';
  }

  if (onlyNumbers(values.age) === false) {
    err.age = 'digite o ano corretamente';
  }

  if (String(values.brand).trim().length === 0) {
    err.brand = 'marca não pode estar vazio';
  }

  if (onlyNumbers(values.price) === false) {
    err.price = 'digite o valor corretamente';
  }

  return err;
}
