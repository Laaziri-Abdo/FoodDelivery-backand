import React from 'react';

const Header = () => {
  return (
    <div>
  
<header class="header">
        <div class="overlay">
            <img src="../src/assets/imgs/logo.svg"  class="logo" />
            <h1 class="subtitle">Welcome To Our Restaurant</h1>
            <h1 class="title">Really Fresh &amp; Tasty</h1> 
            <a class="btn btn-primary mt-3" href="#book-table">Order Now</a> 
        </div>      
    </header>
    </div>
  );
}

export default Header;
