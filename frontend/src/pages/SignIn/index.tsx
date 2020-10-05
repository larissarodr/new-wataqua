import React from 'react';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="WatAqua" />

      <form>
        <h1>Sign In</h1>
        <Input icon={FiUser} name="username" placeholder="Username" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Sign In</Button>

        <a href="forgot">Forgot password</a>
      </form>

      <a href="login">
        <FiLogIn />
        Create Account
      </a>
    </Content>
  </Container>
);

export default SignIn;
