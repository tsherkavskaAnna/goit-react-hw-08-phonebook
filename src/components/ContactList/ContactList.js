import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useGetContactsQuery } from 'redux/contacts/contacts-slice';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactItem } from './ContactItem';


const ContactList = () => {
  const { data: contacts, isLoading, refetch } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);
  
  const normalizedFilter = filter.toLowerCase().trim();
  const visibleContacts = contacts?.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  useEffect(() => {

    if(isLoggedIn) {
      refetch();
    }
  }, [refetch, isLoggedIn])
    
  return (
      <div className={s.container}>
      <ul className={s.contactsList}>
        {isLoading && <p>Loading...</p>}
        {visibleContacts && visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              id={id}
            />
          );
        })}
      </ul>
      </div>
    );
  };
  
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };
  
  export default ContactList;