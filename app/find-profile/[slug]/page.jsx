import Link from "next/link";
import { Suspense } from "react";

// > Fetching di Server Component
const getDataUser = async (param) => {
  const response = await fetch(`https://api.github.com/users/${param}`);
  return response.json();
};

const getDataRepos = async (param) => {
  const response = await fetch(`https://api.github.com/users/${param}/repos`);
  await new Promise((r) => setTimeout(r,2000));
  return response.json();
}

const GetRepos = async ({ slug }) => {
  const dataRepo = await getDataRepos(slug);

  return (
    <>
      {/* Repositories */}
      <div className="card my-3 p-2">
        <div className="row">
          {
            dataRepo && (
              dataRepo.map((data) => {
                return (
                  <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          { data.name }
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          { data.full_name }
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted">
                          Owner: { data.owner.login }
                        </h6>
                        <Link href={ `https://github.com/${data.full_name}/` } target="__blank" className="btn btn-primary">
                          Show Repository
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
      </div>
    </>
  );
};

const GithubDetailProfile = async ({ params }) => {
  // > panggil method getDataUser dan getDataRepos
  const dataUser = await getDataUser(params.slug);

  return (
    <>
      <div className="container-fluid">
        <div className="detail-user">
          <div className="card p-3">
            <h4>Profile</h4>
            <hr />

            {/* Profile */}
            <div className="card my-3">
              <div className="card-body">
                <h5 className="card-title">
                  { dataUser.name }
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  { dataUser.location }
                </h6>
                <p className="card-text">
                  Bio: { dataUser.bio }
                </p>
                <div className="follower-following">
                  <span>
                    Followers: { dataUser.followers }
                  </span> 
                  <span> | </span>
                  <span>
                    Following: { dataUser.following }
                  </span>
                </div>
              </div>
            </div>

            <h4>Repositories</h4>
            <hr />

            <Suspense fallback={ <div>Data Loading</div> }>
              <GetRepos slug={ params.slug } />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubDetailProfile;
