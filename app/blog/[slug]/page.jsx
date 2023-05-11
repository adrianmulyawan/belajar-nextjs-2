const BlogDetail = ({ params }) => {

  const { slug } = params

  return (
    <>
      <h1>Detail Blog: { slug } </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis velit dolorum nam, eveniet quidem ullam commodi? Modi incidunt inventore blanditiis temporibus et, dolorem dignissimos odit in ducimus hic rerum id laborum aperiam mollitia voluptate totam quae! Neque quia sint voluptas quae cupiditate delectus qui! Nam iste reiciendis aut nisi necessitatibus.</p>
    </>
  );
}

export default BlogDetail;
