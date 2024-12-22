# UseRef HOOOK II  

Video playback speed
In the sandbox below, we have a <VideoPlayer> component that includes a playback speed control. Unfortunately, it doesn't work!

For context, here's how we can affect the playback speed of a <video> element in vanilla JavaScript:

 ## Live Demo 
  The live demo available here [codesandbox](https://codesandbox.io/s/2lbv3y?file=%2FVideoPlayer.js&utm_medium=sandpack)

## Acceptance Criteria:

When the user changes the "Playback speed" control and then plays the corresponding video, that video should play at the selected speed.
You should use the useRef hook to capture a ref to the <video> element.

## Code Example in js

```javascript
const videoElement = document.querySelector('#some-video');
videoElement.playbackRate = 2; // Play at 2x speed


