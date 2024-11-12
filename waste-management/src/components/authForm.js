import React, { useState } from 'react'; 
import { useAuth } from '../context/authContext'; // Corrigido o caminho para o contexto
import { useNavigate } from 'react-router-dom'; // Para redirecionar após o login
import { Formik, Field, Form, ErrorMessage } from 'formik'; // Formik para lidar com formulários
import * as Yup from 'yup'; // Para validação
import styled from 'styled-components'; // Importando styled-components

// Validação de formulário com Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Nome de usuário é obrigatório'),
  password: Yup.string().required('Senha é obrigatória')
});

// Estilos usando styled-components
const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const AuthForm = () => {
  const [errorMessage, setErrorMessage] = useState('');  // Mensagem de erro
  const { login } = useAuth();  // Função de login do contexto
  const navigate = useNavigate();  // Navegação após login bem-sucedido

  // Função chamada ao submeter o formulário
  const handleLogin = async (values) => {
    try {
      // Aqui você deve substituir pela lógica de autenticação real com sua API
      // Simulação de login com dados fictícios
      if (values.username === 'admin' && values.password === 'password') {
        const user = { 
          username: values.username, 
          role: 'admin', 
          token: 'fake-jwt-token' 
        };
        
        // Armazenar o token no localStorage para persistência
        localStorage.setItem('authToken', user.token);
        
        // Chamar o login do contexto para armazenar o usuário no estado global
        login(user);

        // Redirecionar para a página de coletas após o login
        navigate('/collections');
      } else {
        throw new Error('Nome de usuário ou senha inválidos');
      }
    } catch (error) {
      setErrorMessage(error.message);  // Exibir mensagem de erro caso falhe
    }
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        <Form>
          <div>
            <Field 
              name="username" 
              placeholder="Nome de usuário" 
            />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <Field 
              name="password" 
              type="password" 
              placeholder="Senha" 
            />
            <ErrorMessage name="password" component="div" />
          </div>

          {/* Exibe a mensagem de erro caso a autenticação falhe */}
          {errorMessage && <ErrorMessageStyled>{errorMessage}</ErrorMessageStyled>}

          <Button type="submit">Login</Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default AuthForm;
