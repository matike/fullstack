import React from 'react'

const BlogForm = ({ addBlog, newTitle, handleTitleChange, newAuthor, handleAuthorChange, newUrl, handleUrlChange }) => (
  <form onSubmit={addBlog}>
    <div>
      Title
      <input
        type="text"
        name="Title"
        value={newTitle}
        onChange={handleTitleChange}
      />
    </div>
    <div>
        Author
      <input
        type="text"
        name="Author"
        value={newAuthor}
        onChange={handleAuthorChange}
      />
    </div>
    <div>
        Url
      <input
        type="text"
        name="Url"
        value={newUrl}
        onChange={handleUrlChange}
      />
    </div>
    <button type="submit">tallenna</button>
  </form>
)

export default BlogForm