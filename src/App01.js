// import logo from "./logo.svg";
// import "./App.css";
import Header from "./props/Props_Header";
import Footer from "./props/Props_Footer";
import Section from "./props/Props_Section";

// const divEl = document.createElement('div')
// divEl.innerHTML = '한글은'
// divEl.append("<p>")
function App() {
  const name = "코리아it";

  return (
    <div>
      {/* 
        <img src="./image/img.png" alt="설명" data-src="js" class="box-img"/>
        // 내가만든 부품
      */}
      <Header name={name} subject="frontend" age={30} />
      {/* 
        Header( name, subject, age );
        Header( name, subject );
        Header( name );
        Header( );
      */}
      <Section age={19} />
      <Footer name={name} />
    </div>
  );
}

export default App;
