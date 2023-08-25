
//select element 

let landingPage = document.querySelector('.landing-page');
// background random

let backgroundRandom = true;

let offImage;

// local storge colors

const storgeColors = localStorage.getItem('color-option')

if (storgeColors !== null) {
    document.documentElement.style.setProperty('--min--color', storgeColors);

    document.querySelectorAll('.color-list li').forEach(e => {
        e.classList.remove('active');

        if (e.dataset.color === storgeColors) {
            e.classList.add('active')
        };
    });
};

// local-storge photo-list and li move between photo

const storgePhoto = localStorage.getItem('option-photo');
const storgeLanding = localStorage.getItem('option-landing');

if (storgeLanding !== null) {
    landingPage.style.backgroundImage = storgeLanding
    console.log(storgeLanding);
};

if (storgePhoto !== null) {

    document.querySelectorAll('.photo-list li').forEach(active => {
        active.classList.remove('active');

        if (active.dataset.photo === storgePhoto) {

            active.classList.add('active')
        }
    })

}

// localStrong background

const backgroundLocal = localStorage.getItem('option-backgound');

if (backgroundLocal !== null) {
    document.querySelectorAll('.random span').forEach(e => {
        e.classList.remove('active')
    });
    if (backgroundLocal === 'true') {
        backgroundRandom = true;
        document.querySelector('.random .yes').classList.add('active');
    } else {
        backgroundRandom = false;
        document.querySelector('.random .no').classList.add('active');
    }


}

// toggle fa-spain and fa-cog

document.querySelector('.fa-cog').onclick = function () {
    //toggle class spin 

    this.classList.toggle('fa-spin')

    document.querySelector('.setting-box').classList.toggle('open')
}


//select list-photo li 

const photoLi = document.querySelectorAll('.photo-list li');

//remove class active and add class active when click element

photoLi.forEach(li => {

    li.addEventListener('click', function (e) {
        handelActive(e)

        // condition change image when click li

        let elementLi = e.target.dataset.photo

        if (e.target.dataset.photo == 0) {
            landingPage.style.backgroundImage = `url( ${arraryImage[0]})`;
            localStorage.setItem('option-landing', landingPage.style.backgroundImage = `url( ${arraryImage[0]})`);
        } else if (e.target.dataset.photo == 1) {
            landingPage.style.backgroundImage = `url( ${arraryImage[1]})`
            localStorage.setItem('option-landing', landingPage.style.backgroundImage = `url( ${arraryImage[1]})`);
        } else if (e.target.dataset.photo == 2) {
            landingPage.style.backgroundImage = `url( ${arraryImage[2]})`
            localStorage.setItem('option-landing', landingPage.style.backgroundImage = `url( ${arraryImage[2]})`);
        } else if (e.target.dataset.photo == 3) {
            landingPage.style.backgroundImage = `url( ${arraryImage[3]})`
            localStorage.setItem('option-landing', landingPage.style.backgroundImage = `url( ${arraryImage[3]})`);
        } else if (e.target.dataset.photo == 4) {
            landingPage.style.backgroundImage = `url( ${arraryImage[4]})`;
            localStorage.setItem('option-landing', landingPage.style.backgroundImage = `url( ${arraryImage[4]})`);
        };

        // setlocalstorge
        localStorage.setItem('option-photo', elementLi);
    });
});

// switch colors 

const colorsLi = document.querySelectorAll('.color-list li');

colorsLi.forEach(color => {

    // remove active from all element 

    color.addEventListener('click', function (e) {

        let colorMin = e.target.dataset.color;
        document.documentElement.style.setProperty('--min--color', colorMin);

        handelActive(e)

        // setLocalStorge
        localStorage.setItem('color-option', colorMin)


    })
})

//switch yes or no

const backSpans = document.querySelectorAll('.random span');

backSpans.forEach(span => {

    span.addEventListener('click', (e) => {
        handelActive(e)
        if (e.target.dataset.background === 'yes') {
            backgroundRandom = true;
            landingPage.style.backgroundImage = `url( ${arraryImage[0]} )`;;
            randomizImge();
            localStorage.setItem('option-backgound', true);
        } else {
            backgroundRandom = false;
            clearInterval(offImage);
            localStorage.setItem('option-backgound', false);
        }
    })
})

// creat array container image

const arraryImage = ['https://im0-tub-tr.yandex.net/i?id=cab53a6a0102d218541c2bcb43235cf0&n=13', 'https://www.jengal.com/wp-content/uploads/2019/02/Web-Tasar%C4%B1m-Fiyatlar%C4%B1n%C4%B1-Belirleyen-Unsurlar-Nelerdir.jpg', 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/dbe43222838221.563192ec651f8.jpg', 'https://www.tokkoro.com/picsup/5496034-web-wallpapers.jpg', 'https://www.ypo.hu/images/2.jpg'];

function randomizImge() {
    if (backgroundRandom === true) {
        offImage = setInterval(() => {
            let imageRandom = Math.floor(Math.random() * arraryImage.length);
            landingPage.style.backgroundImage = `url( ${arraryImage[imageRandom]})`
        }, 1000)
    }
};

randomizImge();

//select element arrow 

const arrowRight = document.querySelector('.fa-angle-right');
const arrowLeft = document.querySelector('.fa-angle-left');
let counter = 0;

let arraryImg = ['https://elblogderigo.info/wp-content/uploads/2019/04/webntn24.us_.jpg', 'http://www.taica.in/images/bg/01.jpg', 'https://www.ipexgroup.com/wp-content/uploads/2018/11/IPEX-Image2.jpg', 'https://www.hurajansmedya.com/uploads/editor/fa195e12a1d4d04899947ee94.png'];

const spanOne = document.querySelector('.arrow .s-one')
arrowRight.onclick = () => {
    spanOne.style.width = '100%';
    spanTow.style.width = '0';
    if (counter === arraryImg.length - 1) {
        counter = 0;
    }

    landingPage.style.backgroundImage = `url( ${arraryImg[counter++]} )`;

};
const spanTow = document.querySelector('.arrow .s-tow');

arrowLeft.onclick = () => {
    spanTow.style.width = '100%';
    spanOne.style.width = '0';
    if (counter === 0) {
        counter = 4;
    }
    counter--
    landingPage.style.backgroundImage = `url( ${arraryImg[counter]} )`;
};


// when scroll show active elements bulltes

const scrolls = document.querySelectorAll('.scroll');

window.onscroll = function () {

    const windowScrollTop = this.pageYOffset + 2;

    scrolls.forEach(scroll => {

        if (windowScrollTop > scroll.offsetTop) {
            let customAttr = scroll.getAttribute('data-scroll');
            document.querySelectorAll('.links li a.active').forEach(active => {
                active.classList.remove('active')
            });
            document.querySelectorAll('.links li a[data-scroll="' + customAttr + '"]').forEach(active => {
                active.classList.add('active');
            });
            document.querySelectorAll('.tooltip.active').forEach(active => {
                active.classList.remove('active')
            });

            document.querySelectorAll('.tooltip[data-scroll="' + customAttr + '"]').forEach(active => {
                active.classList.add('active')
            });
        }

    })

    let ourSkills = document.querySelector('.skills');

    let SkillesOffsetTop = ourSkills.offsetTop;

    let skillesOffsetHeight = ourSkills.offsetHeight;

    let windowHeight = this.innerHeight;

    if (windowScrollTop > SkillesOffsetTop) {
        let allSkilles = document.querySelectorAll('.skills-box .skills-progress span');

        allSkilles.forEach(skill => {
            skill.style.width = skill.dataset.progress
        });
    }
};

// create popup with image

let galleryImages = document.querySelectorAll('.gellary img');


galleryImages.forEach(img => {
    img.addEventListener('click', (e) => {

        //create Element overlay

        let overLay = document.createElement('div');

        // add class overLay

        overLay.classList.add('poupe-overlay');

        // append overlay to body

        let body = document.body;

        body.appendChild(overLay);

        // create Element poupe box

        let poupeBox = document.createElement('div');

        poupeBox.classList.add('box-image');

        // poupeBox append overLay

        overLay.appendChild(poupeBox);

        // create element image

        let imgPoupe = document.createElement('img');

        poupeBox.appendChild(imgPoupe);

        imgPoupe.src = img.src;

        if (img.alt !== null) {

            // create Element h3

            let h3 = document.createElement('h3');

            let textH3 = document.createTextNode(img.alt);

            // textH3 append to popupeBox;

            poupeBox.appendChild(textH3)
        }

        //create buttonClose 

        let buttonClose = document.createElement('span');

        buttonClose.classList.add('button-close')
        let xButton = document.createTextNode('x');

        buttonClose.appendChild(xButton);

        poupeBox.appendChild(buttonClose);

    })
})

// close overlay

document.addEventListener('click', function (e) {
    if (e.target.className == "button-close") {

        // e.target.parentNode.remove()
        document.querySelector('.poupe-overlay').remove()
    }
})

// select All bullte

const allBullet = document.querySelectorAll('.nav-bullets .bullet');

//scroll elemntes ul 

const UlLinks = document.querySelectorAll('.links  a');

function scrollto(elements) {
    elements.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.scroll).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}
scrollto(UlLinks);
scrollto(allBullet);

//handel active

function handelActive(ev) {

    ev.target.parentElement.querySelectorAll('.active').forEach(e => {
        e.classList.remove('active')
    })

    // add active class on self

    ev.target.classList.add('active');

}


//select option bullets span

const optionBullets = document.querySelectorAll('.bullets-option span');

const localOptionBullets = localStorage.getItem('optionBullets');

if (localOptionBullets !== null) {
    optionBullets.forEach(span => {
        span.classList.remove('active')
    })

    if (localOptionBullets === 'none') {
        document.querySelector('.nav-bullets').style.display = "none";
        document.querySelector('.bullets-option .no').classList.remove('active')
    } else {
        document.querySelector('.nav-bullets').style.display = "block";
        document.querySelector('.bullets-option .yes').classList.add('active')
    }
}

optionBullets.forEach(span => {
    span.addEventListener('click', (e) => {
        if (span.dataset.display === "hide") {
            document.querySelector('.nav-bullets').style.display = "none";
            localStorage.setItem('optionBullets', 'none')
        } else {
            document.querySelector('.nav-bullets').style.display = "block";
            localStorage.setItem('optionBullets', 'block')
        }
        handelActive(e);
    })
})



//select element resert-option

document.querySelector('.reset-option').onclick = function () {

    localStorage.clear();
    // localStorage.removeItem('optionBullets');
    // localStorage.removeItem('option-backgound');
    // localStorage.removeItem('color-option');
    // localStorage.removeItem('option-landing');
    window.location.reload();
}

// toggle menu

const menu = document.querySelector('.toggle-menu');

const tLinks = document.querySelector('.links');

menu.onclick = function (e) {
    e.stopPropagation()
    this.classList.toggle('menu-active')
    tLinks.classList.toggle('open')
}

document.addEventListener('click', (e) => {
    if (e.target !== menu && e.target !== tLinks) {
        if (tLinks.classList.contains('open')) {

            menu.classList.toggle('menu-active')
            tLinks.classList.toggle('open')
        }

    }
})

tLinks.onclick = function (e) {
    e.stopPropagation()
}







