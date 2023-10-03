(function () {
    const greenAir = document.getElementById('greenCard');
    const whiteAir = document.getElementById('whiteCard');
    const blueAir = document.getElementById('blueCard');
    const blackAir = document.getElementById('blackCard');
    const redAir = document.getElementById('redCard');
    const imgInsideDiv = cards.querySelectorAll('.colour__card');

    function addObjectCard(mainPhoto, extremlyPhoto, batteryPhoto, background) {
        const headPhone = {
            main: mainPhoto,
            extremly: extremlyPhoto,
            battery: batteryPhoto,
            style: background,
        }        
        return headPhone;
    }

    function toogleStyleCard(object, mainBg, extremelyImg, batteryImg) {
        mainBg.src = object.main;
        extremelyImg.src = object.extremly
        batteryImg.src = object.battery
        const styleElement = document.createElement('style');
        styleElement.innerHTML = `.header__content-images::before { ${object.style} }`;
        document.head.appendChild(styleElement);

        return mainBg.src, extremelyImg.src, batteryImg.src, styleElement;
    }


    document.addEventListener('DOMContentLoaded', function () {
        let mainBg = document.getElementById('mainImg');
        let extremelyImg = document.getElementById('extremelyImg');
        let batteryImg = document.getElementById('batteryImg');
        

        greenAir.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Плавная прокрутка
            });
            
            for(let img of imgInsideDiv) {
                img.style.display = 'inline-block';
            }

            let green = addObjectCard('./img/src/headPhones/green/AirPods-bg.png', './img/src/headPhones/green/extremely.png', './img/src/headPhones/green/battery.png', 'background: linear-gradient(180deg, #E0EEDD 0%, rgba(255, 255, 255, 0.00) 100%);')
            toogleStyleCard(green, mainBg, extremelyImg, batteryImg);           

            greenAir.style.display = 'none';
        })        
        whiteAir.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Плавная прокрутка
            });
            for(let img of imgInsideDiv) {
                img.style.display = 'inline-block';
            }
            let white = addObjectCard('./img/src/headPhones/white/AirPods-bg.png', './img/src/headPhones/white/extremely.png', './img/src/headPhones/white/battery.png', 'background: none')
            toogleStyleCard(white, mainBg, extremelyImg, batteryImg)

            whiteAir.style.display = 'none'            
        })
        blackAir.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Плавная прокрутка
            });
            for(let img of imgInsideDiv) {
                img.style.display = 'inline-block';
            }
            let black = addObjectCard('./img/src/headPhones/black/AirPods-bg.png', './img/src/headPhones/black/extremely.png', './img/src/headPhones/black/battery.png', 'background: linear-gradient(180deg, #858485 0%, rgba(255, 255, 255, 0.00) 100%);')
            toogleStyleCard(black, mainBg, extremelyImg, batteryImg)

            blackAir.style.display = 'none'           
        })
        blueAir.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Плавная прокрутка
            });
            for(let img of imgInsideDiv) {
                img.style.display = 'inline-block';
            }
            let blue= addObjectCard('./img/src/headPhones/blue/AirPods-bg.png', './img/src/headPhones/blue/extremely.png', './img/src/headPhones/blue/battery.png', 'background: linear-gradient(180deg, #C3D5E6 0%, rgba(255, 255, 255, 0.00) 100%);')
            toogleStyleCard(blue, mainBg, extremelyImg, batteryImg)

            blueAir.style.display = 'none'
            
        })
        redAir.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Плавная прокрутка
            });
            for(let img of imgInsideDiv) {
                img.style.display = 'inline-block';
            }
            let red = addObjectCard('./img/src/headPhones/red/AirPods-bg.png', './img/src/headPhones/red/extremely.png', './img/src/headPhones/red/battery.png', 'background: linear-gradient(180deg, #F6DEDA 0%, rgba(255, 255, 255, 0.00) 100%);')
            toogleStyleCard(red, mainBg, extremelyImg, batteryImg)

            redAir.style.display = 'none'            
        })
    })
})();