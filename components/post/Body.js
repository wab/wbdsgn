import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  h1 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  pre {
    background: #122738;
    padding: 1rem;
    border-radius: 6px;
  }

  code {
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }
`;

function PostBody({ content }) {
  return <Wrapper dangerouslySetInnerHTML={{ __html: content }} />;
}

PostBody.propTypes = {
  content: PropTypes.string,
};

export default PostBody;
