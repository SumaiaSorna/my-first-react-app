import "./App.css";

// Step 1 - Declare your component as a function
const App = () => {
  // React components always have to return JSX (HTML)
  return (
    <div>
      <header class="header">
        <nav class="nav-container">
          <div class="nav-links-container">
            <div class="nav-link">
              <a href="#">Home</a>
            </div>
            <div class="nav-link">
              <a href="#">Series</a>
            </div>
            <div class="nav-link">
              <a href="#">Films</a>
            </div>
            <div class="nav-link">
              <a href="#">New & Popular</a>
            </div>
            <div class="nav-link">
              <a href="#">My List</a>
            </div>
            <div class="nav-link">
              <a href="#">Watch Again</a>
            </div>
          </div>

          <div class="nav-links-profile">
            <a href="#">
              <img
                src="https://github.com/surajverma2587/codeflix-html-css/blob/main/assets/images/profile.png?raw=true"
                alt="user profile red smiley face"
                class="thumbnail-image"
              />
            </a>
          </div>
        </nav>
      </header>
      <div class="banner">
        <h1 class="title">Codeflix</h1>
        <div class="banner-info">
          <a class="btn">Explore Now</a>
        </div>
      </div>
      <main>
        <section>
          <h2 class="sub-title">UK Top 5</h2>
          <div class="movies-container">
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
          </div>
        </section>
        <section>
          <h2 class="sub-title">Popular</h2>
          <div class="movies-container">
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
            <div class="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                alt="gemini man movie 2019"
              />
              <div class="movie-year">2019</div>
              <div class="movie-price">$</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Step 2 - export your component
export default App;
