import React, {useState} from "react";

import {SocialIcon as S} from "react-social-icons";

const socialIconsStyles = {
    width: "30px",
    height: "30px",

}

export default function SocialIcon({url}) {
    const [isHoovered, setIsHoovered] = useState(false);

    const changeIsHoovered = () => {
        setIsHoovered(old => (!old))
    }

    return <S onMouseEnter={changeIsHoovered}
              onMouseLeave={changeIsHoovered}
              bgColor={isHoovered ? 'orange' : 'gray'}
              style = {socialIconsStyles}
              url={url}/>
}