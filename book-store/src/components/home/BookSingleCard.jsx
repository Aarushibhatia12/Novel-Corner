import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border-2 border-gray-300 rounded-lg p-4 m-4 relative hover:shadow-lg transition-shadow duration-300 ease-in-out'>
      <div className='flex justify-between items-start mb-2'>
        <h4 className='text-xs text-gray-400'>{book._id}</h4>
        <h2 className='px-3 py-1 bg-red-300 text-white rounded-full shadow-md'>
          {book.publishYear}
        </h2>
      </div>
      <div className='flex items-center gap-2 mb-2'>
        <PiBookOpenTextLight className='text-red-500 text-2xl' />
        <h2 className='text-lg text-gray-700 font-semibold'>{book.title}</h2>
      </div>
      <div className='flex items-center gap-2 mb-2'>
        <BiUserCircle className='text-red-500 text-2xl' />
        <h2 className='text-md text-gray-600'>{book.author}</h2>
      </div>
      <div className='flex justify-around items-center gap-4 mt-4 p-2 border-t border-gray-200'>
        <BiShow
          className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-200'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-500 hover:text-green-700 transition-colors duration-200' />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-500 hover:text-yellow-700 transition-colors duration-200' />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-500 hover:text-red-700 transition-colors duration-200' />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
