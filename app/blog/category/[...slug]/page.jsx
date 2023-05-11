const BlogCategoryDetail = ({ params }) => {
  // > Ambil semua data yang kirim sebagai parameter
  const { slug } = params;

  // > Loop datanya
  const dataSlug = slug.map((data) => `${data} `);

  return (
    <>
      <h1>Ini adalah halaman detail blog category</h1>
      <p>Datanya: { dataSlug }  </p>
    </>
  );
}

export default BlogCategoryDetail;
