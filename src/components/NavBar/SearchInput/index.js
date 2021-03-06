import React from 'react';
import { Input } from 'antd';

import './styles.scss';

const { Search } = Input;

const SearchInput = () => {
  const onSearch = value => {
    console.log(value);
  };

  return (
    <Search
      placeholder="Nhập tên từ mới"
      onSearch={onSearch}
      enterButton
      onPressEnter={onSearch}
    />
  );
};
export default SearchInput;
