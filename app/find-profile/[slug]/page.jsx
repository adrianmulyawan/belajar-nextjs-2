// > Fetching di Server Component
const getData = async (param) => {
  const response = await fetch(`https://api.github.com/users/${param}`);
  return response.json();
};

const GithubDetailProfile = async ({ params }) => {
  // > panggil method getData 
  const data = await getData(params.slug);
  console.info(data, 'data ni');

  return (
    <>
      <div className="container">
        <div className="detail-user">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              { data.name }
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              { data.location }
            </h6>
            <p className="card-text">
              Bio: { data.bio }
            </p>
            <div className="follower-following">
              <span>
                Followers: { data.followers }
              </span> 
              <span> | </span>
              <span>
                Following: { data.following }
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default GithubDetailProfile;
