import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';

import { Input, InputProps } from '../Input';
import { Error } from './styles';

// estendendo as InputProps para não ter que repetir tudo e as próprias Props dele
type Props = InputProps & {
  /*
    eu preciso dizer para o input que ele é um input controlado pelo react-hook-form
    ou seja, ele não vai utilizar um estado normal, por isso o control
  */
  control: Control<any>;
  // cada input tem que ser único no formulário para ser possível resgatar as
  // informações de uma vez só, por isso o name
  name: string;
  error?: FieldError;
};

export function ControlledInput({ control, name, error, ...rest }: Props) {
  return (
    <>
      {/* o Controller vai controlar o conteúdo de cada Input sem utilizar estado */}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />

      {
        error && <Error>{error.message}</Error>
      }

    </>
  );
};