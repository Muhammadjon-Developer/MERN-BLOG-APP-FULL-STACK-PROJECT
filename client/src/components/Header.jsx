import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-400 rounded-lg text-white'>Muhammadjons</span>
        Blog
      </Link>
      <form>
        <TextInput 
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch/>
      </Button>
      <div>
        <Button className='w-12 h-10 hidden sm:inline' color="gray" pill>
          <FaMoon/>
        </Button>
      </div>
    </Navbar>
  )
}

export default Header