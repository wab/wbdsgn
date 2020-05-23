import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 1rem 0;
  height: 25vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

const Header = () => (
  <Wrapper>
    <div>
      <img src="/avataaars.png" alt="avatar" width="120" />
    </div>
    <p>jérôme boileux • frontend engineer</p>
    <blockquote>Responding to complexity with simplicity</blockquote>
  </Wrapper>
);

export default Header;
