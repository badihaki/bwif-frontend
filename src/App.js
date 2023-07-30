import './App.css';
import { useEffect, useState } from 'react';
import SignupLoginComponent from './Components/LogInSignUp';

function App() {
  
  
  const [user, setUser] = useState(null);
  
  useEffect(()=>{
    fetch("/hello").then(r=>r.json()).then(data=>console.log(data))
  })
  return(
    <div id='app'>
      { /*<SignupLoginComponent />*/ }
      <div id='navigation'>
        <ul>
          <li className='link'>
            User's Kitchen
          </li>
          <li className='link'>
            User's Feed
          </li>
          <li className='link'>
            Search Recipes
          </li>
        </ul>
        <span id='profile-link' className='link'>
            User Profile
          </span>
      </div>
      <div id='content'>
        <h4>Content</h4>
        <div id='content-navigation'>
          <ul>
            <li className='nav-link'>Nav-Link</li>
            <li className='nav-link'>Nav-Link</li>
            <li className='nav-link'>Nav-Link</li>
            <li className='nav-link'>Nav-Link</li>
          </ul>
        </div>
        <div id='main-content'>
          <p className='stuff'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum nisl nunc, sed finibus justo pulvinar eget. Aenean quis sagittis ipsum. Suspendisse faucibus scelerisque lacus. Mauris sed mauris viverra, hendrerit turpis quis, consequat ligula. Nunc tristique velit libero, finibus eleifend turpis tempor at. Maecenas tincidunt condimentum nisl et blandit. Pellentesque vel posuere justo. Suspendisse nec dolor lacus. Maecenas posuere, lectus eget varius faucibus, velit nisi auctor neque, non condimentum tortor ex et justo. Etiam finibus in urna vel dictum. Mauris nec mollis dolor. Aliquam odio nulla, ullamcorper ullamcorper tellus quis, tristique condimentum massa. Mauris ac mattis enim. Suspendisse a vehicula augue. Quisque aliquet ligula in efficitur dapibus. Nulla pretium suscipit diam, id rhoncus massa dignissim id.
          <br />
            Pellentesque euismod sollicitudin vehicula. Mauris laoreet at velit quis malesuada. Pellentesque elementum dui quis nibh ornare porta. Nam dictum iaculis elit sed dictum. Maecenas tempor dictum malesuada. Phasellus at dolor felis. Sed mattis odio ut leo vehicula, sit amet tincidunt mauris fringilla. In hac habitasse platea dictumst. Suspendisse potenti. Aliquam quis nulla ut mauris semper mattis. Aliquam porttitor elit id rutrum pharetra. Vestibulum at finibus enim, nec porttitor augue. Nam finibus et nulla at posuere. Pellentesque neque dolor, accumsan a felis eu, rutrum interdum est. Quisque id tellus egestas, mattis eros id, interdum erat.
          <br />
          Morbi et vestibulum magna. Aliquam ultrices elementum sodales. Proin a hendrerit sapien. Phasellus ac dignissim urna. Pellentesque quis tellus eget ante iaculis maximus. Quisque lacinia diam eget elit mattis pulvinar. Vivamus at quam nunc. Vestibulum felis massa, dignissim nec ornare id, aliquet sed diam. Nulla facilisi. Vivamus feugiat laoreet egestas. Ut a varius elit, non hendrerit lorem.
          <br />
          Ut lobortis vel elit tempor maximus. Morbi ac euismod enim. Donec quis orci nulla. Maecenas malesuada, ex id feugiat semper, orci metus pulvinar leo, in ornare sem dui venenatis lectus. Nam sed ornare ipsum. Donec sollicitudin eu lorem non gravida. Sed nec risus ac ipsum fringilla tincidunt molestie sed justo. Donec luctus eget odio at cursus. Integer sed orci condimentum ex accumsan dictum sed eget nunc. Proin eget nunc est. Morbi pretium elit id purus gravida laoreet. Etiam rutrum neque enim, eget bibendum dolor dapibus quis. Nam fermentum auctor gravida.
          </p>
        </div>
      </div>
      <div></div>
      
    </div>
  )
}

export default App;
