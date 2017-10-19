const clone = require('clone')

let db = {}

const defaultData = {
  '894tuq4ut84ut8v4t8wun89g': {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: '52c56115-a660-4a56-87f0-3b264e2ba0df',
    timestamp: 1468166872634,
    body: 'Hi there! I like react too! Comment.',
    author: 'yuppers',
    voteScore: 9,
    deleted: false,
    parentDeleted: false
  },
  '8tu4bsun805n8un48ve89': {
    id: '8tu4bsun805n8un48ve89',
    parentId: '52c56115-a660-4a56-87f0-3b264e2ba0df',
    timestamp: 1469479767190,
    body: 'Psssh, obvious post is obvious, Comment',
    author: 'mrSerious',
    voteScore: -1,
    deleted: false,
    parentDeleted: false
  },
  '8tu4bsun777n8un48ve89': {
    id: '8tu4bsun777n8un48ve89',
    parentId: '52c56115-a660-4a56-87f0-3b264e2ba0df',
    timestamp: 1470479767190,
    body: 'Psssh, obvious post is obvious, AGAIN, Comment',
    author: 'mrSerious',
    voteScore: -3,
    deleted: false,
    parentDeleted: false
  }
}

function getData (token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByParent (token, parentId) {
  return new Promise((res) => {
    let comments = getData(token)
    let keys = Object.keys(comments)
    filtered_keys = keys.filter(key => comments[key].parentId === parentId && !comments[key].deleted)
    res(filtered_keys.map(key => comments[key]))
  })
}

function get (token, id) {
  return new Promise((res) => {
    const comments = getData(token)
    res(
      comments[id].deleted || comments[id].parentDeleted
        ? {}
        : comments[id]
      )
  })
}

function add (token, comment) {
  return new Promise((res) => {
    let comments = getData(token)

    comments[comment.id] = {
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId,
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }

    res(comments[comment.id])
  })
}

function vote (token, id, option) {
  return new Promise((res) => {
    let comments = getData(token)
    comment = comments[id]
    switch (option) {
      case 'upVote':
        comment.voteScore = comment.voteScore + 1
        break
      case 'downVote':
        comment.voteScore = comment.voteScore - 1
        break
      default:
        console.log(`comments.vote received incorrect parameter: ${option}`)
    }
    res(comment)
  })
}

function disableByParent (token, post) {
  return new Promise((res) => {
    let comments = getData(token)
    keys = Object.keys(comments)
    filtered_keys = keys.filter(key => comments[key].parentId === post.id)
    filtered_keys.forEach(key => comments[key].parentDeleted = true)
    res(post)
  })
}

function disable (token, id) {
  return new Promise((res) => {
    let comments = getData(token)
    comments[id].deleted = true
    res(comments[id])
  })
}

function edit (token, id, comment) {
  return new Promise((res) => {
    let comments = getData(token)
    for (prop in comment) {
      comments[id][prop] = comment[prop]
    }
    res(comments[id])
  })
}

module.exports = {
  get,
  getByParent,
  add,
  vote,
  disableByParent,
  disable,
  edit
}
