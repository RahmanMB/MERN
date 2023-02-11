import React from "react";
import { Link } from "react-router-dom";
import male_avatar from "../assets/images/undraw_male_avatar.svg";
import styles from "../styles/Username.module.css";

const Username = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex h-screen'>
        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>Hello Again!</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>Explore More by connecting with us.</span>
          </div>

          <form className='py-1' action=''>
            <div className='profile flex justify-center py-4'>
              <img src={male_avatar} alt='avatar' />
            </div>

            <div className='textbox flex flex-col items-center gap-6'>
              <input type='text' placeholder='Username' />
              <button type='submit'> Let's Go </button>
            </div>

            <div className='text-center py-4'>
              <span className='text-gray-500'>
                Not a menber
                <Link className='text-red-500' to='/register'>
                  {" "}
                  Register Now{" "}
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Username;
