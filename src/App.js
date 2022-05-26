import logo from './logo.svg';
import Card from './Card';
// import './App.css';
import Sdata from './Sdata';
// import './Card.css';

// console.log(Sdata[0].title);


function App() {


  return (
    <div className="App">

      <h1 className='heading'>List Of Top 5 WebSeries to Binge Watch in 2022</h1>

      < Card
        imgSrc = {Sdata[0].imgSrc}
        streamingPlatform = {Sdata[0].streamingPlatform}
        title = {Sdata[0].title}
        redirect = {Sdata[0].redirect}
      />
      < Card
        imgSrc = {Sdata[1].imgSrc}
        streamingPlatform = {Sdata[1].streamingPlatform}
        title = {Sdata[1].title}
        redirect = {Sdata[1].redirect}
      />
      < Card
        imgSrc = {Sdata[2].imgSrc}
        streamingPlatform = {Sdata[2].streamingPlatform}
        title = {Sdata[2].title}
        redirect = {Sdata[2].redirect}
      />
      < Card 
        imgSrc = {Sdata[3].imgSrc}
        streamingPlatform = {Sdata[3].streamingPlatform}
        title = {Sdata[3].title}
        redirect = {Sdata[3].redirect}
      />
      < Card
        imgSrc = {Sdata[4].imgSrc}
        streamingPlatform = {Sdata[4].streamingPlatform}
        title = {Sdata[4].title}
        redirect = {Sdata[4].redirect}
      />
    </div>
  );
}

export default App;
