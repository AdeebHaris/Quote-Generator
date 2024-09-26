import './App.css';
import QuoteGenerator from './components/QuoteGenerator';
import useFetch from './Hooks/useFetch';
import { useState, useEffect } from 'react';

function App() {
  const response = useFetch('https://dummyjson.com/quotes');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    if (response && response.quotes) {
      // Set the initial quote when response is ready
      setCurrentQuote(response.quotes[currentIndex].quote);
    }
  }, [response, currentIndex]);

  const handleNext = () => {
    if (response && response.quotes) {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % response.quotes.length;
        setCurrentQuote(response.quotes[newIndex].quote);
        return newIndex;
      });
    } else {
      console.log("Quotes are not available yet.");
    }
  };

  useEffect(() => {
    console.log('Response:', response);
  }, [response]);

  return (
    <>
    <div className='row  mt-5'>
      <div className='col-md-4'></div>
      <div className='col-md-4 d-flex flex-column align-items-center justify-content-center'>
      <h1 className='text-center'>Daily Motivations</h1>
      <QuoteGenerator currentQuote={currentQuote} />
      <button className='btn btn-info ' style={{color:"white"}} onClick={handleNext}>Next</button>
      </div>
      <div className='col-md-4'></div>
    </div>
     
    </>
  );
}

export default App;
