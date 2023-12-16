import React from 'react'
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

const DetailedView = ({selectedCard, setSelectedCard, modalIsOpen, setModalIsOpen}) => {

  const closeModal = () => {
    setSelectedCard(null);
    setModalIsOpen(false);
  };
  return (
    <>
    {/* Modal for Detailed View */}
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Detailed View"
      overlayClassName="fixed inset-0 backdrop-blur-sm opacity-100 flex items-center justify-center"
      className="modal bg-white rounded-lg overflow-hidden shadow-lg w-full md:w-2/3 mx-auto p-6"
    >
      {selectedCard && (
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-end mb-4">
            <button
              onClick={closeModal}
              className="focus:outline-none text-gray-600 hover:text-gray-800"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-indigo-600">
            {selectedCard.StartupName} - Detailed View
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-lg text-gray-700 font-semibold mb-2">Date:</p>
              <p className="text-lg text-gray-700 font-semibold mb-2">Industry Vertical:</p>
              <p className="text-lg text-gray-700 font-semibold mb-2">Sub Vertical:</p>
              <p className="text-lg text-gray-700 font-semibold mb-2">City Location:</p>
              <p className="text-lg text-gray-700 font-semibold mb-2">Investors Name:</p>
              <p className="text-lg text-gray-700 font-semibold mb-2">Investment Type:</p>
              <p className="text-lg text-gray-700 font-semibold mb-2">Amount In USD:</p>
            </div>
            <div>
              <p className="text-lg text-gray-800 mb-2">{selectedCard.Date ? selectedCard.Date : 'N/A'}</p>
              <p className="text-lg text-gray-800 mb-2">{selectedCard.IndustryVertical ? selectedCard.IndustryVertical : 'N/A'}</p>
              <p className="text-lg text-gray-800 mb-2">{selectedCard.SubVertical ? selectedCard.SubVertical : 'N/A'}</p>
              <p className="text-lg text-gray-800 mb-2">{selectedCard.CityLocation ? selectedCard.CityLocation : 'N/A'}</p>
              <p className="text-lg text-gray-800 mb-2">{selectedCard.InvestorsName ? selectedCard.InvestorsName : 'N/A'}</p>
              <p className="text-lg text-gray-800 mb-2">{selectedCard.InvestmentType ? selectedCard.InvestmentType : 'N/A'}</p>
              <p className="text-lg text-gray-800 mb-2">{selectedCard.AmountInUSD ? selectedCard.AmountInUSD : 'N/A'}</p>
            </div>
          </div>
        </div>
      )}
    </Modal>
    </>
)}

export default DetailedView