const defaultSetting = {
    slidesToShow: 4,
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

export default function SliderSetting() {
    if (window.innerWidth < 768) {
        return smallScreenSetting
    }else if(window.innerWidth <= 1024){
        return mediumScreenSetting
    }else{
        return defaultSetting
    }
}