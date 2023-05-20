import Heading from '../../components/Heading'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import {contactType} from '../../types'
import { FC } from "react";

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if(!data){
    return {
      notFound: true,
    }
  }
  return {
    props: {contacts: data}
  }
}

type ContactsProps = {
  contacts: [contactType]
}

const Contacts:FC<ContactsProps> = ({contacts}) => {

  return(
    <>
    <Heading text="Contacts list"/>
    <ul>
        {contacts && contacts.map(({id, name, email}) => (
            <li key={id}><Link href={`contacts/${id}`}><strong>{name}</strong>({email})</Link> </li>
        ))}
    </ul>
    </>
  )
}
  
export default Contacts;