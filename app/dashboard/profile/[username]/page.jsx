const DashboardProfile = ({ params }) => {

  // > Ambil username dari params
  const { username } = params;

  return (
    <>
      <h1>Selamat Datang</h1>
      <p>Hello { username }, selaamt datang kembali</p>
    </>
  );
}

DashboardProfile.getLayoyt

export default DashboardProfile;
