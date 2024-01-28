import { useNavigate } from 'react-router-dom';
import bg from '../assets/bg.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate('/dashboard');
  };

  return (
    <div className="h-screen relative">
      <div
        className="h-full w-full bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="h-full w-full bg-black opacity-50 absolute inset-0"></div>
      </div>

      <div className="h-full flex justify-center items-center relative z-5">
        <div className="text-center">
          <h1 className="text-white lg:text-8xl md:text-6xl sm:text-5xl text-4xl spacing-2 font-rale my-4">
            Search Weather For Your City
          </h1>
            <button className='bg-white p-3 rounded-xl text-xl px-4' onClick={handleSubmit}>Search City</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

