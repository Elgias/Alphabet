class AudioPlayer extends HTMLElement {
  constructor() {
    super();
    const template = `
    <style>
                @import url("dist/bootstrap5.0.0/css/bootstrap.min.css");
                button {
                  padding: 0;
                  border: 0;
                  cursor: pointer;
                  outline: none;
                  width: 40px;
                  height: 40px;
                }
                #audio-player-container {
                  box-sizing: border-box;
                  position: relative;
                  width: 100%;
                  background: inherit;
                  font-family: Arial, Helvetica, sans-serif;
                  --seek-before-width: 0%;
                  --volume-before-width: 100%;
                  --buffered-width: 0%;
                  letter-spacing: -0.5px;
                }
                #volume-slider {
                }
                #volume-slider::-webkit-slider-runnable-track {
                  background: rgba(0, 125, 181, 0.6);
                }
                #volume-slider::-moz-range-track {
                  background: rgba(0, 125, 181, 0.6);
                }
                #volume-slider::-ms-fill-upper {
                  background: rgba(0, 125, 181, 0.6);
                }
                #volume-slider::before {
                  width: var(--volume-before-width);
                }
                #mute-icon {
                }
                input[type="range"] {
                  position: relative;
                  -webkit-appearance: none;
                  width: 100px;
                  margin: 0;
                  padding: 0;
                  height: 19px;
                  outline: none;
                  background-color: inherit;
                }
                input[type="range"]::-webkit-slider-runnable-track {
                  width: 100%;
                  height: 3px;
                  cursor: pointer;
                  background: linear-gradient(
                    to right,
                    rgba(0, 125, 181, 0.6) var(--buffered-width),
                    rgba(0, 125, 181, 0.2) var(--buffered-width)
                  );
                }
                input[type="range"]::before {
                  position: absolute;
                  content: "";
                  top: 8px;
                  left: 0;
                  width: var(--seek-before-width);
                  height: 3px;
                  background-color: #007db5;
                  cursor: pointer;
                }
                input[type="range"]::-webkit-slider-thumb {
                  position: relative;
                  -webkit-appearance: none;
                  box-sizing: content-box;
                  border: 1px solid #007db5;
                  height: 15px;
                  width: 15px;
                  border-radius: 50%;
                  background-color: #fff;
                  cursor: pointer;
                  margin: -7px 0 0 0;
                }
                input[type="range"]:active::-webkit-slider-thumb {
                  transform: scale(1.2);
                  background: #007db5;
                }
                input[type="range"]::-moz-range-track {
                  width: 100%;
                  height: 3px;
                  cursor: pointer;
                  background: linear-gradient(
                    to right,
                    rgba(0, 125, 181, 0.6) var(--buffered-width),
                    rgba(0, 125, 181, 0.2) var(--buffered-width)
                  );
                }
                input[type="range"]::-moz-range-progress {
                  background-color: #007db5;
                }
                input[type="range"]::-moz-focus-outer {
                  border: 0;
                }
                input[type="range"]::-moz-range-thumb {
                  box-sizing: content-box;
                  border: 1px solid #007db5;
                  height: 15px;
                  width: 15px;
                  border-radius: 50%;
                  background-color: #fff;
                  cursor: pointer;
                }
                input[type="range"]:active::-moz-range-thumb {
                  transform: scale(1.2);
                  background: #007db5;
                }
                input[type="range"]::-ms-track {
                  width: 100%;
                  height: 3px;
                  cursor: pointer;
                  background: transparent;
                  border: solid transparent;
                  color: transparent;
                }
                input[type="range"]::-ms-fill-lower {
                  background-color: #007db5;
                }
                input[type="range"]::-ms-fill-upper {
                  background: linear-gradient(
                    to right,
                    rgba(0, 125, 181, 0.6) var(--buffered-width),
                    rgba(0, 125, 181, 0.2) var(--buffered-width)
                  );
                }
                input[type="range"]::-ms-thumb {
                  box-sizing: content-box;
                  border: 1px solid #007db5;
                  height: 15px;
                  width: 15px;
                  border-radius: 50%;
                  background-color: rgb(255, 255, 255);
                  cursor: pointer;
                }
                input[type="range"]:active::-ms-thumb {
                  transform: scale(1.2);
                  background: rgb(73, 6, 100);
                }

                #test--sound--play-arrow {
                  box-sizing: border-box;
                  border: 10px solid;
                  border-width: 30px 0 30px 56px;
                  border-color: transparent transparent transparent
                    rgb(73, 6, 100);
                  height: 60px;
                  width: 0px;
                  transition: border 0.1s ease-in;
                  cursor: pointer;
                }

                #test--sound--play-arrow.paused {
                  border-style: double;
                  border-width: 0px 0 0px 48px;
                  width: 4px;
                }
                .test--sound-block {
                  box-sizing: border-box;
                  height: 200px;
                }

                .test--sound--component {
                  box-sizing: border-box;
                  height: 250px;
                  width: 250px;

                  background-color: rgb(252, 252, 252);
                }
                .item--sound--play-block {
                  box-sizing: border-box;
                  height: 130px;
                }
              </style>
              <div class="row d-flex justify-content-center w-100">
                <div class="col-12">
                  <div
                    id="audio-player-container"
                    class="test--sound--component col-6 d-flex flex-column"
                  >
                    <audio src="" preload="metadata"></audio>
                    <div
                      class="item--sound--play-block d-flex justify-content-center align-items-center"
                    >
                      <div id="test--sound--play-arrow" class=""></div>
                    </div>
                    <div
                      id="audio"
                      class="px-3 py-2 flex-grow-1 d-flex align-items-center justify-content-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        fill="black"
                        width="40px"
                        height="40px"
                      >
                        <path d="M0 0h28v28H0z" fill="none" />
                        <path
                          fill="rgb(73, 6, 100)"
                          d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                        />
                      </svg>
                      <input
                        type="range"
                        id="volume-slider"
                        max="100"
                        value="100"
                      />
                    </div>
                  </div>
                </div>
              </div>
    `;
    const templateNode = document.createElement("template");
    templateNode.innerHTML = template;
    const templateContent = templateNode.content;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(templateContent.cloneNode(true));
  }

  connectedCallback() {
    everything(this);
  }
}

const everything = function (element) {
  const shadow = element.shadowRoot;

  const audioPlayerContainer = shadow.getElementById("audio-player-container");
  const playIconContainer = shadow.getElementById("test--sound--play-arrow");
  const volumeSlider = shadow.getElementById("volume-slider");
  const audio = shadow.querySelector("audio");
  let playState = "play";

  let requestAnimationFrameHandlerNum = null;

  audio.src = element.getAttribute("data-src");
  audio.isLoop = element.getAttribute("data-loop");

  if (audio.isLoop == "true") audio.setAttribute("loop", "loop");

  const whilePlaying = () => {
    requestAnimationFrameHandlerNum = requestAnimationFrame(whilePlaying);
  };

  const showRangeProgress = (rangeInput) => {
    audioPlayerContainer.style.setProperty(
      "--volume-before-width",
      (rangeInput.value / rangeInput.max) * 100 + "%"
    );
  };

  playIconContainer.addEventListener("click", () => {
    if (playState === "playing") {
      audio.pause();
      requestAnimationFrame(whilePlaying);
    } else if (playState === "paused") {
      audio.play();
      cancelAnimationFrame(requestAnimationFrameHandlerNum);
    } else {
      audio.play();
    }
  });

  audio.addEventListener("playing", () => {
    playState = "playing";
    playIconContainer.classList.toggle("paused");
  });
  audio.addEventListener("pause", () => {
    playState = "paused";
    playIconContainer.classList.toggle("paused");
  });
  audio.addEventListener("ended", () => {
    playState = "ended";
    //не вызываем playIconContainer.classList.toggle('paused'); ибо перед ended вызывается pause
  });

  volumeSlider.addEventListener("input", (e) => {
    const value = e.target.value;
    showRangeProgress(e.target);
    audio.volume = value / 100;
  });

  function mutationCallback(mutationList) {
    mutationList.forEach(function (mutation) {
      switch (mutation.type) {
        case "attributes":
          audio.src = mutation.target.getAttribute(mutation.attributeName);
          break;
      }
    });
  }

  var observer = new MutationObserver(mutationCallback);
  observer.observe(element, {
    attributes: true,
  });
};

customElements.define("audio-player", AudioPlayer);
