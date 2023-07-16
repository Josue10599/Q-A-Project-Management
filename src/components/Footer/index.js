import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.utfpr.edu.br/">
        <img src="https://www.utfpr.edu.br/icones/cabecalho/logo-utfpr/@@images/efcf9caf-6d29-4c24-8266-0b7366ea3a40.png" alt="Logo UTFPR"/>
      </a>
      <p>
        Aplicação elaborada pelos alunos do curso de 
        MBA de Engenharia de Software para a matéria de 
        Gestão de Projetos de Software.
        {' '}
        a
        {' '}
        <a href="http://pos-graduacao-ead.cp.utfpr.edu.br/engenharia-de-software/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
