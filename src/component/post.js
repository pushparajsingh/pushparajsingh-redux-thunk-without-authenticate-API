import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { show_posts } from '../services/Actions/action'
import axios from 'axios'

export const Post = () => {
  const posts = useSelector((state) => state.cardItems.ReducerData)
  console.log(55, posts)
  const dispatch = useDispatch();

  useEffect(() => {
     axios.get("https://629dae743dda090f3c07dd7f.mockapi.io/fakeapi")
      .then(result => {
        console.log("hello world")
            dispatch(show_posts(result.data))
          }) },[]);
        
  return <div>
      {posts?.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <img src={item.avatar} alt="" />

          </div>
        )
      })}
    </div>
}
