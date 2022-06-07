
const defaultSetting = {
    slidesToShow: 5,
    centerMode: true,
    arrows: false
}

const mediumScreenSetting = {
    slidesToShow: 2,
    centerMode: true,
    arrows: false
}
const smallScreenSetting = {
    slidesToShow: 1,
    centerMode: true,
    arrows: false
}

export default function setSlider() {
    if (window.innerWidth < 768) {
        return smallScreenSetting
    }else if(window.innerWidth <= 1024){
        return mediumScreenSetting
    }else{
        return defaultSetting
    }
}

