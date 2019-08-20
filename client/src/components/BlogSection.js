import React from 'react'

const BlogSection = () => {

return(
<section class="blog-section spad">
  <div class="container">
    <div class="row">
      <div class="col-xl-9 col-lg-8 col-md-7">
        <div class="section-title text-white">
          <h2>Latest News</h2>
        </div>
        <ul class="blog-filter">
          <li><a href="#">Escape Rooms</a></li>
          <li><a href="#">Haunts</a></li>
          <li><a href="#">Immersives</a></li>
          <li><a href="#">Intersting Finds</a></li>
        </ul>

        <div class="blog-item">
          <div class="blog-thumb">
            <img src="./img/blog/1.jpg" alt=""/>
          </div>
          <div class="blog-text text-box text-white">
            <div class="top-meta">Today  in <a href="">Escape Rooms</a></div>
            <h3>This Game Was So Much Fun!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....</p>
            <a href="#" class="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#"/></a>
          </div>
        </div>

        <div class="blog-item">
          <div class="blog-thumb">
            <img src="./img/blog/2.jpg" alt=""/>
          </div>
          <div class="blog-text text-box text-white">
            <div class="top-meta">Oct 12 2019  /  in <a href="">Haunts</a></div>
            <h3>Wow incredible job Knotts!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....</p>
            <a href="#" class="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#"/></a>
          </div>
        </div>

        <div class="blog-item">
          <div class="blog-thumb">
            <img src="./img/blog/3.jpg" alt=""/>
          </div>
          <div class="blog-text text-box text-white">
            <div class="top-meta">September 15 2019 /  in <a href="">Haunts</a></div>
            <h3>Universal Did it Again!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....</p>
            <a href="#" class="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#"/></a>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-5 sidebar">
        <div id="stickySidebar">
          <div class="widget-item">
            <h4 class="widget-title">Trending</h4>
            <div class="trending-widget">
              <div class="tw-item">
                <div class="tw-thumb">
                  <img src="./img/blog-widget/1.jpg" alt="#"/>
                </div>
                <div class="tw-text">
                  <div class="tw-meta">Oct 5 2019  /  in <a href="">Haunts</a></div>
                  <h5>Queen Mary!</h5>
                </div>
              </div>
              <div class="tw-item">
                <div class="tw-thumb">
                  <img src="./img/blog-widget/2.jpg" alt="#"/>
                </div>
                <div class="tw-text">
                  <div class="tw-meta">Septmebr 28 2019 /  in <a href="">Haunts</a></div>
                  <h5>Hooray for Six Flags!</h5>
                </div>
              </div>
              <div class="tw-item">
                <div class="tw-thumb">
                  <img src="./img/blog-widget/3.jpg" alt="#"/>
                </div>
                <div class="tw-text">
                  <div class="tw-meta">September 19 /  in <a href="">Haunts</a></div>
                  <h5>The Best Little Haunt You Never Hear Of!</h5>
                </div>
              </div>
              <div class="tw-item">
                <div class="tw-thumb">
                  <img src="./img/blog-widget/4.jpg" alt="#"/>
                </div>
                <div class="tw-text">
                  <div class="tw-meta">Septmebr 4 2019 /  in <a href="">Escape Rooms</a></div>
                  <h5>A Nightmare On Elm Street - Escape Room Pop Up!</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="widget-item">
            <div class="categories-widget">
              <h4 class="widget-title">categories</h4>
              <ul>
                <li><a href="">Haunts by State</a></li>
                <li><a href="">Escape Rooms By State</a></li>
                <li><a href="">Immersives BY State</a></li>

              </ul>
            </div>
          </div>
          <div class="widget-item">
          <a href="#" class="add">
            <img src="./img/add.jpg" alt=""/>
          </a>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>
 )
}

export default BlogSection