import React from 'react';
import { Select as AntSelect } from 'antd';

const { Option } = AntSelect;

const Select = ({ options, onChange, value, placeholder }) => {
    return (
        < AntSelect value = { value } onChange = { onChange } placeholder = { placeholder } style = {{ width: '150px', borderColor:'black' }}>
            {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </AntSelect>
        
    )
}

export default Select;