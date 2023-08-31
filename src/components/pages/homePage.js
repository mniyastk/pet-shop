
import React from 'react'
import DogCarousal from '../DogCarousal'
import data from '../../data/corousalData.json'
import '../../styles/homePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
const HomePage = () => {
    
  return (
    <div className='IndexContainer' style={{width:"100vw"}}>
<DogCarousal data={data.home}/>
<h1  className='headings'>Shop by Pets</h1>
<ul style={{listStyle:"none" ,display:"flex" ,justifyContent:"space-around"}}>
    <li><img src='https://cdn.media.amplience.net/i/petsathome/sbpt-dog-fingerprints' alt='' /> <h3>Dog</h3></li>
    <li><img src='https://cdn.media.amplience.net/i/petsathome/sbpt-cat-fingerprintss' alt=''/> <h3>Cat</h3></li>
    <li><img src='https://cdn.media.amplience.net/i/petsathome/sbpt-puppy-fingerprints' alt=''/> <h3>Puppy</h3></li>
    <li><img src='https://cdn.media.amplience.net/i/petsathome/sbpt-kitten-tile' alt=''/> <h3>Kitten</h3></li>
    <li><img src='https://cdn.media.amplience.net/i/petsathome/sbpt-small-fingerprints' alt=''/> <h3>Small Animal</h3></li>
    <li><img src='https://cdn.media.amplience.net/i/petsathome/sbpt-fish-fingerprints' alt=''/> <h3>Fish</h3></li>
    <li><img src='https://cdn.media.amplience.net/i/petsathome/sbpt-reptile-tile' alt=''/> <h3>Reptile</h3></li>
    <li><img src='https://cdn.media.amplience.net/i/petsathome/sbpt-bird-fingerprints' alt=''/> <h3>Bird & Wildlife</h3></li>
</ul>
 <h3  className='headings'><FontAwesomeIcon icon={faPaw}/>Latest Offers</h3> <hr style={{width:"95%"}}/>
 <div className='imagesBox'>
 <img src='https://cdn.media.amplience.net/i/petsathome/hp-promo-pdd-august-jwbdogfoodv2/.webp?w=1600&' alt=''/>
 <img src='https://cdn.media.amplience.net/i/petsathome/hp-promo-pdd-august-sahutchesv2/.webp?w=1400&' alt=''/>
 <img src='https://cdn.media.amplience.net/i/petsathome/hp-promo-pdd-august-cattowers/.webp?w=1600&'alt=''/>
 <img src='https://cdn.media.amplience.net/i/petsathome/hp-promo-er-refresh-dark_2/.webp?w=640&' alt=''/>
 <img src='https://cdn.media.amplience.net/i/petsathome/hp-promo-vip-refresh_1/.webp?w=640&' alt=''/>
 <img src='https://cdn.media.amplience.net/i/petsathome/hp-promo-fleaandworm-july23/.webp?w=880&' alt=''/> 

 

 </div>
 <h3 className='headings'><FontAwesomeIcon icon={faPaw}/>Latest Updates </h3> <hr style={{width:"95%"}}/>
 <div className='latestUpdates'>
    <div className='timages'>
    <img src='https://cdn.media.amplience.net/i/petsathome/hp-promo-poppy-appeal/.webp?w=720&' alt=''/>
<img src='https://cdn.media.amplience.net/i/petsathome/hp-promo-halloween-2023/.webp?w=720&' alt=''/>
<img src='https://cdn.media.amplience.net/i/petsathome/hp-promo-petsbday-dog_1/.webp?w=720&' alt=''/>
    </div>
<div className='tipImageContainer'>
<div className='tips'>
<h3 className='tip'><FontAwesomeIcon icon={faPaw}/>Read our advice and top tips </h3> <hr style={{width:"95%"}}/>
<p>Take a look at Pet Talk, the place to read, watch, listen and learn about all things pet</p>
<img src='https://cdn.media.amplience.net/i/petsathome/hp-advice-header/.webp?w=600&' alt=''/>
</div>
<div className='imageCards'>
<div><img src='https://cdn.media.amplience.net/i/petsathome/pettalk-image-heatstrokedog/.webp?w=600&' alt=''/> <h5>Heatstroke in Dogs</h5> <hr/> <p>Learn more</p></div>
<div><img src='https://cdn.media.amplience.net/i/petsathome/pettalk-image-heatstrokecat/.webp?w=600&' alt=''/> <h5>Heatstroke in Cats</h5>  <hr/> <p>Learn more</p> </div>
<div><img src='https://cdn.media.amplience.net/i/petsathome/pettalk-image-keepdogscool/.webp?w=600&' alt=''/> <h5>How to keep dogs cool</h5>  <hr/> <p>Learn more</p> </div>
<div><img src='https://cdn.media.amplience.net/i/petsathome/pettalk-image-keepcatscool/.webp?w=600&' alt=''/> <h5>How to keep cats cool</h5>  <hr/> <p>Learn more</p> </div>
<div><img src='https://cdn.media.amplience.net/i/petsathome/pettalk-image-keepsacool/.webp?w=600&' alt=''/> <h5>How to keep your small animal cool in summer</h5>  <hr/> <p>Learn more</p> </div>
<div><img src='https://cdn.media.amplience.net/i/petsathome/pettalk-image-dogsincar/.webp?w=600&' alt=''/> <h5>Can you leave a dog in a car?</h5>  <hr/> <p>Learn more</p> </div>

</div>
</div>


 </div>
    </div>

  )
}

export default HomePage
