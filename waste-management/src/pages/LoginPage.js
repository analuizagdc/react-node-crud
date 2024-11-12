import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Nome de usuário obrigatório'),
      password: Yup.string().required('Senha obrigatória'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/auth/login', {
          username: values.username,
          password: values.password,
        });

        const { token, user } = response.data;
        login(token, user);
        navigate('/collections');
      } catch (error) {
        console.error('Erro ao fazer login', error);
      }
    },
  });

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}

        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
