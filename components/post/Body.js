import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

function PostBody({ content }) {
  return <Wrapper dangerouslySetInnerHTML={{ __html: content }} />;
}

PostBody.propTypes = {
  content: PropTypes.string,
};

export default PostBody;
