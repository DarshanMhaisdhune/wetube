import { CiFaceSmile } from "react-icons/ci";

const VideoCart = ({ info }) => {
    // console.log(info);    

    const { snippet, statistics }= info  ;
    const { channelTitle, title, thumbnails }= snippet;    
    
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
    <div className='m-2 hover:bg-gray-950 rounded-lg'>
        <div>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
        </div>
        <div className= 'flex text-white'>     
            <div className="m-2 pt-2">
            <CiFaceSmile size={34} />
            </div>     
            <div>
            <p className='font-medium m-1 '>{title}</p>           
            <p className='text-gray-400 mt-1 font-medium'>{channelTitle}</p>
            <span className=' text-gray-400'>{formatNumber(statistics.viewCount)} views</span>
            </div>
          
        </div>
    </div>
  )
}

export default VideoCart;