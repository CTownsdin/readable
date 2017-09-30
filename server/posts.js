const clone = require('clone')

let db = {}

const defaultData = {
  '52c56115-a660-4a56-87f0-3b264e2ba0df': {
    id: '52c56115-a660-4a56-87f0-3b264e2ba0df',
    timestamp: 1506790258393,
    title: 'React is fun',
    body: 'React is fun.  It responds to changes in state.  React is closer to raw javascript compared to other frameworks.',
    author: 'react-fan',
    category: 'react',
    voteScore: 6,
    deleted: false
  },
  'bc89d677-cd93-4880-951b-de765bb9ba49': {
    id: 'bc89d677-cd93-4880-951b-de765bb9ba49',
    timestamp: 1507395058393,
    title: 'React is really fun',
    body: 'you know it is... really.',
    author: 'react-fan',
    category: 'react',
    voteScore: 0,
    deleted: false
  },
  'ecf65667-f644-4929-929d-8dcd7de37a2e': {
    id: 'ecf65667-f644-4929-929d-8dcd7de37a2e',
    timestamp: 1506185458393,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology. But there are some fantastic courses available online now that can accelerate learning.',
    author: 'getting-there-guy',
    category: 'redux',
    voteScore: 1,
    deleted: false
  },
  '7721ed7a-0ead-4e10-a6a0-9fe31b73d344': {
    id: '7721ed7a-0ead-4e10-a6a0-9fe31b73d344',
    timestamp: 1505580658393,
    title: 'Another post about Redux',
    body: 'Just kidding, I like cats.',
    author: 'too-many-cats',
    category: 'redux',
    voteScore: -2,
    deleted: false
  },
  '2899c7bf-c340-4a29-87d8-05bfc0b79d0a': {
    id: '2899c7bf-c340-4a29-87d8-05bfc0b79d0a',
    timestamp: 1504975858393,
    title: 'Seattle Runners - Checkout Greenlake',
    body: 'Are you a runner in the Seattle area?  You have to checkout Greenlake on a sunny spring morning!  Then get a coffee at Starbucks with your new friends. :)',
    author: 'Keep-on-moving-gal',
    category: 'running',
    voteScore: 3,
    deleted: false
  },
  '89f4bba1-358a-49af-a9e3-379b205695d1': {
    id: '89f4bba1-358a-49af-a9e3-379b205695d1',
    timestamp: 1504371058393,
    title: 'What shoes are best for trail running?',
    body: 'Hey guys, what shoes should I get?',
    author: 'shoeless-in-seattle',
    category: 'running',
    voteScore: 2,
    deleted: false
  }
}

function getData (token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByCategory (token, category) {
  return new Promise((res) => {
    let posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => posts[key].category === category && !posts[key].deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

function get (token, id) {
  return new Promise((res) => {
    const posts = getData(token)
    res(
      posts[id].deleted
        ? {}
        : posts[id]
    )
  })
}

function getAll (token) {
  return new Promise((res) => {
    const posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => !posts.deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

function add (token, post) {
  return new Promise((res) => {
    let posts = getData(token)

    posts[post.id] = {
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      voteScore: 1,
      deleted: false
    }

    res(posts[post.id])
  })
}

function vote (token, id, option) {
  return new Promise((res) => {
    let posts = getData(token)
    post = posts[id]
    switch (option) {
      case 'upVote':
        post.voteScore = post.voteScore + 1
        break
      case 'downVote':
        post.voteScore = post.voteScore - 1
        break
      default:
        console.log(`posts.vote received incorrect parameter: ${option}`)
    }
    res(post)
  })
}

function disable (token, id) {
  return new Promise((res) => {
    let posts = getData(token)
    posts[id].deleted = true
    res(posts[id])
  })
}

function edit (token, id, post) {
  return new Promise((res) => {
    let posts = getData(token)
    for (prop in post) {
      posts[id][prop] = post[prop]
    }
    res(posts[id])
  })
}

module.exports = {
  defaultData,
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  getAll
}
