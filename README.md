<div id="top"></div>

<div align="center">
  <a href="https://github.com/Zlvsky/React-Konva-moodboard">
    <img src="https://user-images.githubusercontent.com/45123514/161823611-5c0fdd2c-f2ba-4dfc-ad8d-48a141676325.png" alt="Logo" width="100" height="100">
  </a>

<h3 align="center">React Konva Moodboard</h3>

  <p align="center">
    This is pure front-end project builded in React
    <br />
    It uses React-Konva as main functionality
    <br />
    It is used for making custom moodboards with images
    <br />
    It can be used in business like home decor for helping understanding client's vision
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## Showcase of project

<h3>Adding local images to canvas</h3>
<p>Images can be uploaded to Konva stage via drag and drop or by clicking them.</p>
<img src="https://user-images.githubusercontent.com/45123514/161825740-a02a1abc-ba19-4369-b43c-12ec06ec24d3.gif" />
<br/>

<h3>Changing background of canvas</h3>
<p>React-Konva way of adding background is by creating "Rect" component at the very bottom of the elements and filling it with image</p>
<img src="https://user-images.githubusercontent.com/45123514/161825812-db3e0770-3a88-4cf7-a0bb-dea89abe2087.gif" />

<h3>Uploading custom images</h3>
<p>Application support custom uploaded images from local drive</p>
<p>Uploaded images are stored in localStorage of the browser</p>
<p>Because react renders were clearing images when tab was switched</p>
<img src="https://user-images.githubusercontent.com/45123514/161825885-fb48e6fd-2750-4b09-9c75-9ef448710ee0.gif" />

<h3>Exporting canvas to image</h3>
<p>Canvas image can be easilly exported to an image</p>
<img src="https://user-images.githubusercontent.com/45123514/161825938-b42c0a1c-4a0a-42d5-9c82-b64049b2b0c5.gif" />

<h3>Responsive showcase</h3>
<p>The biggest problem I had to deal with, was making Konva stage responsive</p>
<p>The problem was to keep canvas size synchronized with it's bitmap aswell with scale of images</p>
<p>When bitmap wasn't calculated, moving or resizng images wasn't possible</p>
<img src="https://user-images.githubusercontent.com/45123514/161825975-fb405e40-89c4-406e-87a7-ede33c8ceb34.gif" />

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [React-Konva](https://konvajs.org/docs/react/index.html)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Zlvsky/React-Konva-moodboard.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run app
   ```sh
   npm start
   ```
<p>To add local images, upload them to /public/images and declare them in /src/Data/items.json</p>

<p align="right">(<a href="#top">back to top</a>)</p>
