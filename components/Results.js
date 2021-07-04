import Image from 'next/image';
const Results = ({ fetchedResults }) => {
  return (
    <div className=' grid grid-cols-2 gap-4 sm:grid-cols-3  xl:flex flex-wrap mt-10 p-2 justify-center items-center'>
      {' '}
      {fetchedResults.map((res, index) => {
        const { overview, poster_path, title, release_date } = res;
        return (
          <div key={index} className='mb-8 '>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              width={300}
              height={300}
            />
            <div className='flex flex-col justify-between items-center mx-4 text-sm'>
              <div
                className='text-red-300 truncate w-24 text-center'
                title={title}
              >
                {title ? title : 'N/A'}
              </div>
              <div className='text-yellow-400'>
                {release_date ? release_date : '1991.09.11'}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
