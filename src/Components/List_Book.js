import React, {Component} from 'react'
import BookShelf from './Book_Shelf'
import {Link} from 'react-router-dom'


class ListBook extends Component {

  render() {
    const {books,shelves,onChange} = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
              {shelves.map(shelf => (<BookShelf books={books.filter((book) => (book.shelf === shelf.key))} title={shelf.name} onChangeShelf={onChange}/>))}

          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBook;