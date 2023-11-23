import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="www.linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="www.github.com" target='_blank'><FaGithub/></a>
        <a href="www.facebook.com" target='_blank'><IoLogoFacebook/></a>
    </div>
  )
}

export default HeaderSocials