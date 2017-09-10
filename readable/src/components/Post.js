import React from 'react'
import PropTypes from 'prop-types'


// const mockPost = {
//   "8xf0y6ziyjabvozdd253nd": {
//     id: '8xf0y6ziyjabvozdd253nd',
//     timestamp: 1467166872634,
//     title: 'This Post Has An Awesome Title!',
//     body: 'Everyone says so after all.',
//     author: 'CAT_in_the_HAT',
//     category: 'react',
//     voteScore: 3,
//     deleted: false
//   }
// }

//  !!!  should be a SFC !!!
// class Post extends Component {
//   render() {
//     return ( 
//       <div className='post'>
//         <h2></h2>
//       </div>
//     )
//   }
// }

const Post = ({ postDetails }) => (
  <div className='post'>
    <h2>{postDetails.title}</h2>
    <p>some more stuff</p>
  </div>
)

export default Post

Post.propTypes = {
  postDetails: PropTypes.object.isRequired 
}
