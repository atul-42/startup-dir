
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Search from './Search';
import Pagination from './Pagination';
import Card from './Card';
import DetailedView from './DetailedView';
import Spinner from './Spinner';

Modal.setAppElement('#root');

const Cards = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(25);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3001/api/data', {
          params: {
            industry: selectedIndustry,
            search: searchTerm,
            page: currentPage,
            pageSize: cardsPerPage
          }
        });
        console.log('Response from server:', response.data);
        setData(response.data.items);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedIndustry, searchTerm, currentPage, cardsPerPage]);

  const handleFilterChange = (industry) => {
    setSelectedIndustry(industry);
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = (card) => {
    setSelectedCard(card);
    setModalIsOpen(true);
  };


  return (
    <div className='container mx-auto' id='viewStartupsSection'>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      {/* Cards */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">

          {/* ------------------ Filter dropdown ------------------ */}
          <div className="mb-4 md:mb-0">
            <label className="text-lg text-gray-700 font-semibold mb-2">Filter by Industry Type:</label>
            <select
              value={selectedIndustry}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring focus:border-indigo-300"
            >
              <option value="">All Industries</option>
              <option value="Technology">Technology</option>
              <option value="Consumer Internet">Consumer Internet</option>
              <option value="eCommerce">eCommerce</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Logistics">Logistics</option>
              <option value="Others">Others</option>
            </select>
          </div>


          {/* ---------------------Pagination UI components at the top-------------------- */}
          <div className="flex justify-between md:mr-4 gap-3 items-center">
            <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
          </div>


          {/* ---------------------------Cards Per Page Dropdown---------------------------- */}
          <div className="mb-4 md:mb-0">
            <label className="text-lg text-gray-700 font-semibold mb-2">Cards Per Page:</label>
            <select
              value={cardsPerPage}
              onChange={(e) => setCardsPerPage(Number(e.target.value))}
              className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring focus:border-indigo-300"
            >
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
              <option value={data.length}>All</option>
            </select>
          </div>
        </div>


        {/* -------------------------Display current cards------------------ */}
        {/* {loading && <Spinner />} */}
        {loading ? <Spinner /> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((card) => (
            <div key={card.SNo} onClick={() => openModal(card)} className="cursor-pointer">
              <Card card={card} />
            </div>
          ))}
        </div>)}

        {/* ----------------------Pagination UI components at the bottom--------------------------- */}
        <div  className="flex justify-center items-center mt-4 gap-3">
            <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
        </div>

        {/* ----------------------Detail View of cards in popup--------------------------- */}
        <DetailedView selectedCard={selectedCard} setSelectedCard={setSelectedCard} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  )
}

export default Cards;