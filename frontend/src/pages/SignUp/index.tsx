import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="WatAqua" />

      <form>
        <h1>Create New Account</h1>
        <Input icon={FiUser} name="name" placeholder="Name" />
        <Input icon={FiMail} name="email" placeholder="Email" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Sign Up</Button>

      </form>

      <a href="login">
        <FiArrowLeft />
        Back to Sign In
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignUp;
