import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { navigate } from 'gatsby';

const NotFoundPage = () => {

  useEffect(() => {
    navigate('/');
  }, []);

  return null;
}

export default NotFoundPage
