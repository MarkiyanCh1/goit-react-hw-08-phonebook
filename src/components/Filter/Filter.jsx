import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import { FilterWrapper, InputFilter } from './Filter.styles';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FilterWrapper>
      <h3>Find contacts by name</h3>
      <InputFilter
        type="text"
        value={filter}
        onChange={e => {
          dispatch(setFilter(e.target.value));
        }}
        placeholder="Enter name..."
      />
    </FilterWrapper>
  );
};

export default Filter;
