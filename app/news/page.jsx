// > karena default nextjs 13 adalah server component
// > kita perlu ubah ke client component
// => dengan menambahkan "use client"
"use client"

// > import method "useSearchParams" dari module next/navigation
import { useSearchParams } from 'next/navigation'

const News = ({ params }) => {
  // > insialisasi method useSearchParams() kedalam variable searchParams
  const searchParams = useSearchParams();

  // > cari query parameter dengan nama news dan limit
  const news = searchParams.get('news');
  const limit = searchParams.get('limit');

  return (
    <>
      <h1>Ini adalah halaman utama news</h1>
      <p>
        News: { news } - Limit: { limit }
      </p>
    </>
  );
}

export default News;
