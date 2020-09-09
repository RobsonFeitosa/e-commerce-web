import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FiUser, FiMapPin } from 'react-icons/fi';
import {
  FaHome,
  FaMapMarkedAlt,
  FaInfoCircle,
  FaMapPin,
  FaCity,
  FaFlag,
  FaAngleLeft,
} from 'react-icons/fa';
import { TiSortNumerically } from 'react-icons/ti';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Cep from 'cep-promise';
import api from '../../../../../services/api';

import { useToast } from '../../../../../hooks/toast';
import { useAuth } from '../../../../../hooks/auth';
import getValidationErros from '../../../../../utils/getValidationErrors';

import InputText from '../../../../../components/Input/Text';
import Select from '../../../../../components/Input/Select';
import Button from '../../../../../components/Button';

import { Container, ContentResult, BackTo, Header } from './styles';

interface IIAddressDataRegister {
  id: string;
  customer_id: string;
  selected: boolean;
  name_recipient: string;
  typeaddress: string;
  what_type: string;
  cep: string;
  infor_ref: string;
  number: number;
  complement: string;
  city: string;
  neighborhood: string;
  state: string;
  street: string;
}

interface IAddressData {
  city: string;
  neighborhood: string;
  state: string;
  street: string;
}

interface IAddressNewRepo {
  id: string;
  name_recipient: string;
  selected: boolean;
  typeaddress: string;
  cep: string;
  infor_ref: string;
  number: number;
  complement: string;
  city: string;
  neighborhood: string;
  state: string;
  street: string;
}

interface IEditProps {
  id?: string;
  editCallback: (status: boolean) => void;
  createAddressCallback: (AddressNew: IAddressNewRepo) => void;
}

const Recipient: React.FC<IEditProps> = ({ id, ...props }) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { customer } = useAuth();
  const [register, setRegister] = useState<IIAddressDataRegister | null>(null);
  const [address, setAddress] = useState<IAddressData | null>(null);
  const [existAddress, setExistAddress] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      api.get(`/address/${id}`).then((add) => {
        setRegister(add.data);

        formRef.current?.setData(add.data);
      });
    }

    api.get('/address').then((add) => {
      setExistAddress(!!add.data.length);
    });
  }, [id]);

  const initialData = {
    name_recipient: register?.name_recipient,
    typeaddress: register?.typeaddress,
    what_type: register?.what_type,
    cep: register?.cep,
    number: register?.number,
    infor_ref: register?.infor_ref,
    complement: register?.complement,
    street: address?.street,
    state: address?.state,
    city: address?.city,
    neighborhood: address?.neighborhood,
  };

  const options = [
    { value: 'apartamento', label: 'apartamento' },
    { value: 'casa', label: 'casa' },
    { value: 'comercial', label: 'comercial' },
    { value: 'outro', label: 'outro' },
  ];

  const handleChangeCep = useCallback((cep) => {
    Cep(cep)
      .then((response) => {
        if (response) {
          return setAddress(response);
        }
        return false;
      })
      .catch((err) => {
        return err;
      });
  }, []);

  const handleSubmit = useCallback(
    async (data: IIAddressDataRegister) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name_recipient: Yup.string().required('Nome obrigatório'),
          typeaddress: Yup.string().required('Tipo obrigatório'),
          cep: Yup.string(),
          street: Yup.string().required('Endereço obrigatório'),
          infor_ref: Yup.string(),
          number: Yup.string().required('Numero obrigatório'),
          neighborhood: Yup.string().required('Bairro obrigatório'),
          city: Yup.string().required('Cidade obrigatória'),
          state: Yup.string().required('Estado obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name_recipient,
          typeaddress,
          cep,
          street,
          complement,
          infor_ref,
          number,
          neighborhood,
          city,
          state,
        } = data;

        const formData = {
          customer_id: customer.id,
          selected: !existAddress,
          name_recipient,
          street,
          type_address: typeaddress,
          complement,
          infor_ref,
          what_type: 'campo opcional',
          cep,
          number,
          neighborhood,
          city,
          state,
        };

        const newAddress = await api.post<IIAddressDataRegister>(
          '/address',
          formData
        );

        props.createAddressCallback(newAddress.data);

        props.editCallback(false);

        window.scrollTo(0, 0);

        addToast({
          type: 'success',
          title: 'Endereço cadastrado!',
          description:
            'Suas informações de endereço foram cadastrado com sucesso!',
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
          description:
            'Ocorreu um erro ao atualizar seu endereço, tente novamente.',
        });
      }
    },
    [addToast, customer.id, props, existAddress]
  );

  const handleGoToBack = useCallback(() => {
    props.editCallback(false);
  }, [props]);

  return (
    <>
      <Container>
        <Header>
          <span>
            {!!register === true
              ? 'Fazer alterações'
              : 'Cadastrar novo endereço'}
          </span>
          <BackTo onClick={() => handleGoToBack()}>
            <FaAngleLeft size={24} />
            Voltar
          </BackTo>
        </Header>
        <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
          <div className="group">
            <span>Nome do destinatário</span>
            <InputText
              name="name_recipient"
              icon={FiUser}
              placeholder="Quem irá receber"
            />
          </div>

          <div className="group">
            <span>Tipo de endereço</span>
            <Select
              options={options}
              name="typeaddress"
              icon={FaHome}
              placeholder="selecione um tipo"
            />
          </div>

          <div className="group">
            <span>Cep</span>
            <InputText
              name="cep"
              icon={FiMapPin}
              placeholder="Insira um cep"
              onChange={(e) => handleChangeCep(e.target.value)}
              mask="11.111-111"
            />
          </div>

          <div className="set2-20right">
            <div className="group">
              <span>Endereço</span>
              <InputText
                name="street"
                icon={FaMapMarkedAlt}
                placeholder="Digite seu endereço"
              />
            </div>
            <div className="group">
              <span>Número</span>
              <InputText
                name="number"
                icon={TiSortNumerically}
                placeholder="N. de casa"
              />
            </div>
          </div>

          <div className="group">
            <span>Informações de referência</span>
            <InputText
              name="infor_ref"
              icon={FaInfoCircle}
              placeholder="Mais informações"
            />
          </div>

          <div className="group">
            <span>Complemento</span>
            <InputText
              name="complement"
              icon={FaInfoCircle}
              placeholder="Mais informações"
            />
          </div>

          <div className="group">
            <span>Bairro</span>
            <InputText
              name="neighborhood"
              icon={FaMapPin}
              placeholder="Digite seu endereço"
            />
          </div>

          <div className="set2-50right">
            <div className="group">
              <span>Cidade</span>
              <InputText
                name="city"
                icon={FaCity}
                placeholder="Informe sua cidade"
              />
            </div>
            <div className="group">
              <span>Estado</span>
              <InputText
                name="state"
                icon={FaFlag}
                placeholder="Informe seu estado"
              />
            </div>
          </div>

          <Button type="submit">Confirmar mudanças</Button>
        </Form>
        <ContentResult>{register?.name_recipient}</ContentResult>
      </Container>
    </>
  );
};

export default Recipient;
