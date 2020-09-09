import React, { useCallback, useRef, ChangeEvent } from 'react';
import { FiMail, FiUser, FiLock, FiCamera } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import api from '../../../../services/api';

import { useToast } from '../../../../hooks/toast';

import getValidationErros from '../../../../utils/getValidationErrors';

import Input from '../../../../components/Input/Text';
import Button from '../../../../components/Button';

import { useAuth } from '../../../../hooks/auth';
import { Container, Content, AvatarInput, InforData } from './styles';

interface RegisterFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { customer, updateCustomer } = useAuth();

  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val) => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Confirmação incorreta')
            .when('old_password', {
              is: (val) => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            }),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateCustomer(response.data);

        history.push('/dashboard');

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description:
            'Suas informações do perfil foram atualizadas com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Error na atualização',
          description: 'Ocorreu um erro ao atualizar perfil, tente novamente.',
        });
      }
    },
    [addToast, history, updateCustomer]
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/customers/avatar', data).then((response) => {
          updateCustomer(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado',
          });
        });
      }
    },
    [addToast, updateCustomer]
  );

  return (
    <Container>
      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: customer.name,
            email: customer.email,
          }}
          onSubmit={handleSubmit}
        >
          <div>
            <AvatarInput>
              <img src={customer.avatar_url} alt={customer.name} />
              <label htmlFor="avatar">
                <FiCamera />

                <input
                  type="file"
                  name="filename"
                  id="avatar"
                  onChange={handleAvatarChange}
                />
              </label>
            </AvatarInput>
            <InforData>
              <span>{customer.name}</span>
              <span>{customer.email}</span>
            </InforData>
          </div>

          <div>
            <h1>Meu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="old_password"
              icon={FiLock}
              type="password"
              placeholder="Senha atual"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />
            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmar senha"
            />

            <Button type="submit">Confirmar mudanças</Button>
          </div>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
