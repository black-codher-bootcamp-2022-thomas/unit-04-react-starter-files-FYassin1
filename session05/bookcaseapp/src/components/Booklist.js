import books from '../models/data.json';
import Bookitem from '../models/bookItem';
import Book from './Book';


function BookList() {
    return <Book book={Book}/>;

}

export default  BookList;

