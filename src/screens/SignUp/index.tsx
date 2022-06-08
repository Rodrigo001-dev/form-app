import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { Container } from './styles';

export function SignUp() {
  return (
    <Container>
      {/*
        o TouchableWithoutFeedback vai fazer com que quando o usuário clicar em
        qualquer lugar da tela vai fechar o teclado
      */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/*
          quando eu clico em qualquer input o KeyboardAvoidingView vai subir o
          form
        */}
        <KeyboardAvoidingView behavior="position" enabled>
          <>
            <Header />
            <Form />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container >
  );
}