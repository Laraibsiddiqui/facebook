import React from 'react'
import Center from '../Center/Center'
import Main from '../Main/Main'
import Side from '../Side/Side';
import { CgMenuGridO } from "react-icons/cg";
import { IoIosPeople, IoMdTv, IoMdHome } from "react-icons/io";
import { BsFillGrid1X2Fill, BsMessenger, BsFillBellFill, BsFillEmojiSunglassesFill } from "react-icons/bs";
import { BiBriefcaseAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import './Index.css'





const Header = (props) => {


    // const user = JSON.parse(localStorage.getItem(name))

    // console.log('user', user)


    // var yasir = replace()
    const Navigate = useNavigate();
    // Navigate=replace(false)
    const backlogin = () => {
        localStorage.clear()
        Navigate("/", { replace: false });
        // props.Navigation.Navigate("/")
    }

    return (
        <div className='Face'>

            <div className='Header'>

                <div className='H-p1'>

                    <img id="logo" src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.facebook.com%2Fimages%2Ffb_icon_325x325.png' alt="facebook logo" />
                    <input id="search" type="search" placeholder="Search Facebook" />

                </div>


                <div className='H-p2'>

                    <div className="icon">
                        <i id="logo1"><IoMdHome /></i>
                    </div>
                    <div className="icon">
                        <i id="logo1"><IoIosPeople /></i>
                    </div>
                    <div className="icon">
                        <i id="logo1"><IoMdTv /></i>
                    </div>
                    <div className="icon">
                        <i id="logo1"><BiBriefcaseAlt /></i>
                    </div>
                    <div className="icon">

                        <i id="logo2"><BsFillGrid1X2Fill /></i>
                    </div>

                </div>
                <div className='H-p3'>


                    <div className="hlast" >
                        <i className="black"><CgMenuGridO /></i>
                    </div>
                    <div className="hlast" >
                        <i className="black"><BsMessenger /></i>
                    </div>
                    <div className="hlast">
                        <i className="black"><BsFillBellFill /></i>
                    </div>
                    <div className="hlast1">
                        <i className="black"><BsFillEmojiSunglassesFill /></i>
                        <div class="dropdown-content">
                            {/* <p>{ user.value }</p> */}
                            <p onClick={backlogin}>LogOut</p>
                            {/* <p></p> */}

                        </div>


                    </div>




                </div>


            </div>
            <div className='Main'>
                <div className='Box1'>

                    <Main />

                </div>
                <div className='Box2'>
                    <Center />
                </div>
                <div className='Box3'>
                    <Side />
                </div>

            </div>

        </div>
    )
}

export default Header