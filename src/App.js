import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

    <nav class="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
        <div class="container">
            <div class="navbar-translate">
                <a class="navbar-brand" rel="tooltip" title="4wines" data-placement="bottom" target="_blank">
                    4wines
                    <img src="https://image.ibb.co/cv4NtU/wineglass2.png" 
                         alt="wineglass2" 
                         border="0"
                         
                    />
                </a>

                
                <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse justify-content-end" data-nav-image="./assets/img/blurred-image-1.jpg">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <a class="nav-link" rel="tooltip" title="Follow us on Github" data-placement="bottom" href="https://github.com/april9288/4wines" target="_blank">
                            <i class="fa fa-github"></i>
                            <p class="d-lg-none d-xl-none">Github</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="tooltip" title="Follow us on Linkedin" data-placement="bottom" href="https://www.linkedin.com/" target="_blank">
                            <i class="fa fa-linkedin"></i>
                            <p class="d-lg-none d-xl-none">Linkedin</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="wrapper">
        <div class="page-header clear-filter" filter-color="">
            <div class="page-header-image video_container" data-parallax="false">
                <img class="bg-wine" src = "photos/winebg.jpg" alt = "wine bg"/>

            </div>
            <div class="container">
                <div class="content-center brand">
                    <h1 id="discover">4WINES is a place where you start wine</h1>
                </div>
            </div>
        </div>
    </div>


        <div class="main">
            <div class="section section-basic">
                <div class="container text-center mt-5">                
                <section>
                    <h1 style="padding:5%; margin-bottom: 0">How it works</h1>
                </section>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;




