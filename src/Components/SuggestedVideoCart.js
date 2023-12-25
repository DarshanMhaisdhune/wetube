import React from 'react'

const SuggestedVideoCart = ({data}) => {

  const { snippet, statistics }= data  ;
  const { channelTitle, title, thumbnails }= snippet;  
  //  console.log(data);

  function formatNumber (num) {
    var suffix = "";
    if (num >= 1000000000) {
      num = num / 1000000000;
      suffix = "B";
    } else if (num >= 1000000) {
      num = num / 1000000;
      suffix = "M";
    } else if (num >= 1000) {
      num = num / 1000;
      suffix = "K";
    }
    return num.toFixed (2) + suffix;
  }


  return (
    <div className='flex p-2 hover:bg-gray-950 rounded-md mx-1'>
        <div className='w-2/5'>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
        </div>
        <div className='w-3/5 px-2'>
            <p className='text-white'>{title}</p>
            <p className='text-gray-400 font-medium'>{channelTitle}</p>
             <span className='text-gray-400'>{formatNumber(statistics.viewCount)} views</span>
        </div>
    </div>
  )
}

export default SuggestedVideoCart;