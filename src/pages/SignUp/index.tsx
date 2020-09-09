import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidadetionErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo_fundo_azul.svg';

import Input from '../../components/Input/Text';
import Button from '../../components/Button';

import { Container, Content, AnimationConteiner, Background } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  level: 1 | 2 | 3;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        data.level = 2;

        await api.post('/customers', data);

        history.push('/signin');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon no CompreDiCasa',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidadetionErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        console.log(err);

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history]
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationConteiner>
          <Link to="/">
            <img src={logoImg} alt="Compre Di Casa" />
          </Link>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/signin">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </AnimationConteiner>
      </Content>
    </Container>
  );
};

export default SignUp;
