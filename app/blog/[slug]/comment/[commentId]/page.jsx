const Comment = ({ params }) => {
  const { slug, commentId } = params;

  return (
    <>
      <h1>Detail: { slug }</h1>
      <p>
        Komentar: { commentId }
      </p>
    </>
  );
}

export default Comment;
