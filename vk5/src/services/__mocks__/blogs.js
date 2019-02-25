const blogs = [
  { title: 'Ensimmäinen testiblogi',
    author: 'Testikirjoittaja',
    likes: 4
  },
  { title: 'Toinen testiblogi',
    author: 'Testikirjoittaja',
    likes: 12
  },
  { title: 'Kolmas testiblogi',
    author: 'Testikirjoittaja',
    likes: 0
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll }