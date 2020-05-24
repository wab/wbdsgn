import PropTypes from 'prop-types';

function PostBody({ content }) {
  return (
    <div
      className="max-w-xl mx-auto py-6 text-justify"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

PostBody.propTypes = {
  content: PropTypes.string,
};

export default PostBody;
