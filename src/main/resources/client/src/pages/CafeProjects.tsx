import React, {FunctionComponent, useCallback, useEffect, useRef, useState} from "react";
import axios from "axios";
import {CardPulseLoading} from "../components/CardPulseLoading";

type UserListResponse = {
  data: User[],
  limit: number,
  page: number,
  total: number
}

type User = {
  id: string,
  title: string,
  firstName: string,
  lastName: string,
  picture: string
}

export const CafeProjectsPage: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [limit, setLimit] = useState(30)
  const [users, setUsers] = useState<User[]>([]);
  const observer = useRef<IntersectionObserver>();
  const lastUserElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevState => prevState + 1)
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    setLoading(true);
    callApi().then();
  }, [pageNumber]);

  async function callApi() {
    const response = await axios.get<UserListResponse>(`https://dummyapi.io/data/v1/user?limit=${limit}&page=${pageNumber}`,
      {
        headers: {'app-id': '6253a4295e5c7da26e06803f'}
      });
    setLoading(false);
    const userListResp = response.data as UserListResponse;
    setHasMore((pageNumber + 1) * limit < userListResp.total);
    setUsers(prevState => {
      return [...prevState, ...userListResp.data]
    })
  }

  return (
    <div className="flex flex-col space-y-2 text-lg">
      {!users.length ? <CardPulseLoading/> :
        users.map((user, index) => {
          if (users.length === index + 1) {
            return <div ref={lastUserElementRef} key={user.id}>selam
              - {user.title} - {user.firstName + ' ' + user.lastName}</div>
          } else {
            return <div key={user.id}>{index} - selam - {user.title} - {user.firstName + ' ' + user.lastName}</div>
          }
        })}
      {loading && <div className="mt-7">Loading...</div>}
    </div>
  );
}
