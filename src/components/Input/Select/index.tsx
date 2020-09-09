import React, { useEffect, useRef, useState, useCallback } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

const Select: React.FC<Props> = ({ options, name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: undefined,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }

          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }

        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  const colourStyles = {
    container: (styles: any) => {
      return {
        ...styles,
        color: '#fff',
        position: 'absolute',
        left: 0,
        top: 7,
        width: '100%',
        zIndex: 2,
      };
    },
    menuList: () => ({
      backgroundColor: 'transparent',
    }),
    control: (styles: any, { selectProps: { width } }: any) => ({
      ...styles,
      width,
      border: 0,
      boxShadow: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      color: '#fff',
      padding: 0,
      paddingLeft: 51,
      paddingRight: 12,
    }),
    option: (styles: any, { data, isDisabled, isSelected }: any) => {
      return {
        ...styles,
        color: '#c7c7c7',
        opacity: 1,
        backgroundColor: 'transparent',
        cursor: isDisabled ? 'not-allowed' : 'pointer',

        ':hover': {
          ...styles[':hover'],
          color: '#e2c30a',
        },

        ':active': {
          ...styles[':active'],
          color: '#002357',
        },
      };
    },
    singleValue: () => {
      const transition = 'opacity 300ms';

      return { transition };
    },
    placeholder: (styles: any) => {
      return { ...styles, color: '#666360' };
    },
    valueContainer: (styles: any, state: any) => {
      return {
        ...styles,
        padding: 0,
        color: state.selectOption ? '#ffffffee' : '',
      };
    },
    indicatorSeparator: (styles: any) => {
      return { ...styles, opacity: 0.2, marginRight: 12 };
    },
    menu: (styles: any) => {
      return { ...styles, padding: 15, backgroundColor: '#002357' };
    },
  };

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}

      <ReactSelect
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        width="100%"
        options={options}
        styles={colourStyles}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#f91818" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Select;
