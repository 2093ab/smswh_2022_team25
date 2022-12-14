import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <div style={{ width: '100%' }}>
              <p>๐ค๋ฉํ๋ฒ์ค ์ ํ๊ฒฝ ์บ ํ์ธ๐ค</p>
              <h4>Worldwide, available</h4>
            </div>
          </div>
          <div className="email">
            <h4>๐metaverseenvironment@naver.com๐</h4>
          </div>
        </div>
        <div className="right">
          <h4>์ฌ์ดํธ ์ค๋ช</h4>
          <p>
            ๋ฉํ๋ฒ์ค ๊ฒ์์ ํตํด ํ๊ฒฝ์ ๋ํด์ ์๊ฐํด๋ณผ ์ ์๋ ์๊ฐ์
            ์ ๊ณตํฉ๋๋ค.<br></br>
            ๋์๊ฐ ํ๊ฒฝ๊ณผ ๊ณต์กดํ๋ ์ธ์์ ๊ฟ๊พธ์ด์.
          </p>

          <br></br>
          <p>
            &copy; Designed By <span className="colors"> TEAM 25 </span> || All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
