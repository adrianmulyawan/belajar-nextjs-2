"use client"

import Link from "next/link";
import { useState } from "react";
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const GithubProfile = () => {
  const [query, setQuery] = useState([]);
  const [username, setUsername] = useState('');

  const { data, error } = useSWR(`https://api.github.com/search/users?q=${username}`, fetcher);
  // console.info(data?.items, 'dara from api');

  const handleSearchForm = async (event) => {
    event.preventDefault();
    
    const dataInput = event.target[0].value;
    setUsername(dataInput);

    setQuery(data?.items);
    console.info(query, 'data from query');
  }

  return (
    <>
      <div className="container">
        <h1 className='text-center'>
          Github Profile
        </h1>

        <div className="search-github">
          <form onSubmit={ handleSearchForm }>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">@</span>
              <input type="text" className="form-control" placeholder="Username" />
              <button type='submit' className='btn btn-primary'>
                Find
              </button>
            </div>
          </form>

          <div className="my-3">
            {
              username && (
                <div className="row">
                  <table className="table table-responsive table-bordered">
                    <thead>
                      <tr>
                        <th scope="col" className='text-center'>No</th>
                        <th scope="col" className='text-center'>Username</th>
                        <th scope="col" className='text-center'>Profile</th>
                        <th scope="col" className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Jika reducer = fulfilled */}
                      {
                        query && (
                          query.map((data, index) => {
                            return (
                              <tr key={ data.id }>
                                <th scope="row" className='text-center'>
                                  { index += 1 }
                                </th>
                                <td className='text-center'>
                                  { data.login }
                                </td>
                                <td className='text-center'>
                                  { data.url }
                                </td>
                                <td className='text-center'>
                                  <Link className="btn btn-primary" href={`/find-profile/${data.login}`}>
                                    Detail
                                  </Link>
                                </td>
                              </tr>
                            )
                          })
                        )
                      }
                    </tbody>
                  </table>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubProfile;
