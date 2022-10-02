import React from 'react'
import './Index.css'
import { BsCameraReelsFill, BsImages, BsFillEmojiSunglassesFill, BsFillPeopleFill } from "react-icons/bs";
import Main from '../Main/Main'




const Center = () => {



    return (


        <div className="box2">


            <div className="box">

                <div className='Reel'>
                    <div className='Video' >Stories</div>
                    <div className='Video' >Reels</div>
                    <div className='Video' >Rooms</div>
                </div>
                <div className='Status'>

                    <div className='Story1'>

                        <div className='DP'></div>

                        <div class="p1_type_2">
                            <button class="bttn_1">+</button>
                            <p class="creat_story">Creat story</p>
                        </div>

                    </div>
                    <div className='Story'><div className='Span'></div></div>
                    <div className='Story'><div className='Span'></div></div>
                    <div className='Story'><div className='Span'></div></div>
                </div>




            </div>
            <div className="past">
                <div className="one">
                    <div className="row2">
                        {/* <img className="profile1" src="Images fb/profile png.png" /> */}
                        <i className="profile1" ><BsFillPeopleFill /></i>
                    </div>
                    <div id="input">
                        <input className="input2" type="textarea" placeholder="What's On Your Mind, Laraib!" />
                    </div>
                </div>
                <div className="up">
                    <p className="up1"><i className="up2"><BsCameraReelsFill /></i> Live Video</p>
                    <p className="up1"><i className="up2"><BsImages /></i> Photo/Video</p>
                    <p className="up1"><i className="up2"><BsFillEmojiSunglassesFill /></i> Feeling/Activity</p>

                </div>
            </div>
            <div className="galti">
                <div className="post">
                    <div className="post1">
                        <div>
                            <img className="post2" src="Images fb/friends.png" />
                        </div>
                        <div className="t1">
                            <div className="t2">Laraib Riaz</div>
                            <div className="t3">
                                <div className="t4">10h.</div>
                                <div><img id="t5" src="Images fb/blue messnegr.png" /></div>
                            </div>
                        </div>
                        <div className="update">Update His Profile Picture</div>
                        <p className="dot">...</p>
                    </div>
                    <div className="dp">
                        <img className="dp1" src="Images fb/profile png.png" />
                    </div>
                </div>
                <div className="bor">
                    <div className="bor1">
                        <img className="like" src="Images fb/like.jpg" /><span className="likes">10</span>
                    </div>
                    <div className="comnt">
                        Comments
                    </div>
                </div>
                <div className="border">
                    <div className="border2">
                        <div className="click"><img id="like" src="Images fb/like.jpg" /><span id="span">Like</span></div>
                        <div className="comment"><img id="comment" src="Images fb/comment.png" /><span id="span">
                            Comment</span></div>
                        <div className="share">
                            <img id="share" src="Images fb/shares.png" /><span id="span"> Share</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>



    )
}

export default Center