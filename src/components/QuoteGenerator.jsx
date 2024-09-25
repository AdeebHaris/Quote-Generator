import React from 'react';

function QuoteGenerator({ currentQuote }) { 

  return (
    <div className='p-4'>
      <h2 className='text-center'>{currentQuote}</h2>
    </div>
  );
}

export default QuoteGenerator;
  