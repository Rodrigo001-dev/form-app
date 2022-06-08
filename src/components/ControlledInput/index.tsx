import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Input, InputProps } from '../Input';

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
};

export function ControlledInput({ control, name, ...rest }: Props) {
  return (
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
  );
};