// "use cliet" => mengubah server component -> client component

// > Server Component
// => Saat kita konsol di server component.
// => Maka data yang ditampilkan ini akan ditampilkan didalam console terminal.
// => Disini browser tidak akan mengolah datanya (tidak ada state / ui).

// > Karakteristik Server Component
// => Biasanya tidak ada interaksi dengan user.
// => Statis.
// => Menampilkan data.
// => Secara performa lebih cepat.
const Blogs = ({ data }) => {
  console.info(data, '=> datanya');

  return (
    <>
      <div className="data">
        page { data }
      </div>
    </>
  );
}

export default Blogs;
