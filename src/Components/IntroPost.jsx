import React, { useEffect } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

function IntroPost() {
  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    GlobalAPI.getPost.then(resp => {
      console.log(resp)
    })
  }
  return (
    <div>IntroPost</div>
  )
}

export default IntroPost