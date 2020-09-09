import React, { useEffect, useState, useCallback } from 'react';

import {
  FiEdit,
  FiTrash2,
  FiPlusCircle,
  FiCheckCircle,
  FiCircle,
} from 'react-icons/fi';

import api from '../../../../services/api';

import Button from '../../../../components/Button';
import Recipient from './recipient';

import {
  Container,
  Header,
  Content,
  SelectPrimary,
  Btn,
  CreateNewAddress,
  AddressRep,
} from './styles';

interface AddressData {
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

interface AddressNewRepo {
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

interface EditProp {
  status: boolean;
  id?: string;
}

interface SelectProp {
  selected: boolean;
  id?: string;
}

const Address: React.FC = () => {
  const [address, setAddress] = useState<AddressNewRepo[]>([]);
  const [edit, setEdit] = useState<EditProp>({ status: false });

  useEffect(() => {
    function loadAddress(): void {
      api.get<AddressData[]>('/address').then((response) => {
        setAddress(response.data);
        Object.keys(response.data).length === 0 && setEdit({ status: true });
      });
    }

    loadAddress();
  }, []);

  const handleEdit = useCallback((id) => {
    setEdit({ status: true, id });
  }, []);

  const callbackChangeEdit = useCallback((status) => {
    setEdit({ status });
  }, []);

  const callbackCreateNewAddress = useCallback(
    (newAddressRep) => {
      const newAddress: AddressNewRepo[] = [];

      newAddress.push(...address, newAddressRep);
      setAddress(newAddress);
    },
    [address]
  );

  const handleDelete = useCallback(
    (id) => {
      api.delete(`/address/${id}`).finally(() => {
        const newAddress = address.filter((a) => a.id !== id);
        setAddress(newAddress);
      });
    },
    [address]
  );

  const handleNewAddress = useCallback(() => {
    setEdit({ status: true });
  }, []);

  const handleSelected = useCallback(
    (id) => {
      const newAddress: AddressNewRepo[] = [];
      address.map((item: AddressNewRepo) => {
        return newAddress.push({
          ...item,
          ...(item.id === id ? { selected: true } : { selected: false }),
        });
      });

      const selectedFunc = {
        id,
        selected: true,
      };

      setAddress(newAddress);

      api.put('/address', selectedFunc);
    },
    [address]
  );

  return (
    <>
      {edit.status ? (
        <Recipient
          id={edit.id}
          editCallback={callbackChangeEdit}
          createAddressCallback={callbackCreateNewAddress}
        />
      ) : (
        <Container>
          {address
            .sort((item) => (item.selected === true ? -1 : 1))
            .map((item) => (
              <AddressRep key={item.id}>
                <Header className={item.selected === true ? 'selected' : ''}>
                  <strong>
                    Endereço <small>{item.cep && ` - ${item.cep}`}</small>
                  </strong>

                  <div>
                    <Btn onClick={() => handleEdit(item.id)}>
                      <FiEdit size={22} />
                    </Btn>

                    <Btn onClick={() => handleDelete(item.id)}>
                      <FiTrash2 size={22} />
                    </Btn>
                  </div>
                </Header>
                <Content>
                  <span>{item.name_recipient}</span>
                  <p>
                    {item.street}, {item.number} - {item.complement}
                  </p>
                  <p>
                    {item.cep} - {item.neighborhood}
                  </p>
                  <p>
                    {item.city}/{item.state}
                  </p>
                </Content>
                <SelectPrimary>
                  {item.selected ? (
                    <Button disabled>
                      <FiCheckCircle size={22} />
                      Endereço selecionado
                    </Button>
                  ) : (
                    <Button onClick={() => handleSelected(item.id)}>
                      <FiCircle size={22} />
                      Selecionar como principal
                    </Button>
                  )}
                </SelectPrimary>
              </AddressRep>
            ))}

          <CreateNewAddress onClick={() => handleNewAddress()}>
            <FiPlusCircle size={45} />
            Adicionar novo endereço
          </CreateNewAddress>
        </Container>
      )}
    </>
  );
};

export default Address;
