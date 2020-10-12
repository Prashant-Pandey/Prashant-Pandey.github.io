// window.addEventListener("load", (e) => {
// const loader = document.querySelector(".preloader");
// loader.remove();
//   let headerFontSize = 40;
//   const webTitle = document.getElementById("website-title");
//   webTitle.width = window.innerWidth - 50;
//   webTitle.height = headerFontSize * 2 + 5;
//   const webTitleCtx = webTitle.getContext('2d');
//   const headerText = '<Prashant Pandey/>';

//   let particleArray = [];
//   webTitleCtx.fillStyle = 'black';
//   webTitleCtx.font = headerFontSize + 'px Arial Black';
//   webTitleCtx.fillText(headerText, 0, headerFontSize);

//   let data = webTitleCtx.getImageData(0, 0, webTitle.width, webTitle.height);

//   class Particle {
//     constructor(x, y, size) {
//       this.x = x;
//       this.y = y;
//       this.size = size;
//       this.color = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
//     }
//     draw() {
//       webTitleCtx.beginPath();
//       webTitleCtx.fillStyle = this.color;
//       webTitleCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//       webTitleCtx.closePath();
//       webTitleCtx.fill();
//     }
//   }
//   function init() {
//     particleArray = [];
//     webTitleCtx.clearRect(0, 0, webTitle.width, webTitle.height);
//     for (let i = 0, i2 = data.height; i < i2; i++) {
//       for (let j = 0, j2 = data.width; j < j2; j++) {
//         if (data.data[(i * 4 * data.width) + (j * 4) + 3] > 128) {
//           let positionX = j, positionY = i;
//           new Particle(positionX * 1.5, positionY * 1.5, 0.4).draw();

//         }
//       }
//     }
//   }
//   init();

//   const projects = document.getElementById("projects-showcase");
// });

const particles = {
  "particles": {
    "number": {
      "value": 221,
      "density": {
        "enable": true,
        "value_area": 1736.2070190114673
      }
    },
    "color": {
      "value": "#919191"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 1,
        "height": 1
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "bottom-right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 179.82017982017982,
        "size": 40,
        "duration": 2,
        "opacity": 0.6153846153846154,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
};

window.addEventListener('load', async () => {
  const loader = document.querySelector(".preloader");
  loader.remove();
  const particles_canvas = await document.querySelector('#particles-js');
  particles_canvas.style.height = document.body.scrollHeight + 'px';
  // if (window.innerWidth < 1024) {
  //   particles_canvas.style.width = document.body.scrollWidth + 'px';
  // }

  particlesJS("particles-js", particles);

  console.log(await document.body.scrollHeight, document.body.scrollWidth);

  var modal = document.getElementById("contact_modal");

  // Get the button that opens the modal
  var btn = document.getElementById("contactMe");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    const successMsg = document.getElementById("form-success-message");
    successMsg.style.display = 'none';
    const errorMessage = document.getElementById("form-error-message");
    errorMessage.style.display = 'none';
    const form = document.getElementById('contact-form');
    form.style.display = 'flex';
  }

  document.getElementById('contact-form').addEventListener('submit', (e = new EventListenerObject()) => {
    e.preventDefault();
    console.log(e);
    const args = {
      name: e.target.fullname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value
    }

    console.log(args, e.target);
    fetch('https://formspree.io/prashant.pandey.dev@gmail.com', {
      method: 'post',
      body: JSON.stringify(args)
    }).then((res) => {
      const successMsg = document.getElementById("form-success-message");
      successMsg.style.display = 'flex';
      e.target.style.display = 'none';

      console.log(res);
    }).catch((err) => {
      const errorMessage = document.getElementById("form-error-message");
      errorMessage.style.display = 'flex';
      e.target.style.display = 'none';
      console.log(err);
    });

  });
})