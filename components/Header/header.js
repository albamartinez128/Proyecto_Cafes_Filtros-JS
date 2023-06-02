import "./header.css";

export const header = () => {
  return `
      <header>
        <div class="logo">
          <img src="img/logo3.jpg" alt="logo">
        </div>
        <nav class="menu">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div class="shop">
        <i class="fa-solid fa-bag-shopping"></i> <span id="number-shop">0</span>
        </div>
        <div class="goToTop">
        <a href="#"><i class="fa-sharp fa-solid fa-arrow-up"></i></a>
        </div>
      </header>
  `;
};
