import jslogo from '../../assets/technos/js.png';
import fblogo from '../../assets/technos/firebase.png';
import angularlogo from '../../assets/technos/angular.png';
import mongodblogo from '../../assets/technos/mongodb.png';
import reactlogo from '../../assets/technos/react.png';
import sasslogo from '../../assets/technos/sass_0.png';

const TechList = () => {
  const techs = [
    {
      title: 'Javascript',
      image: jslogo
    },  
    {
      title: 'Angular',
      image: angularlogo
    },
    {
      title: 'React',
      image: reactlogo
    },
    {
      title: 'Firebase',
      image: fblogo
    },
    {
      title: 'MongoDB',
      image: mongodblogo
    },
    {
      title: 'SASS',
      image: sasslogo
    }
  ]

  return (
    <div className="techs">
      {techs.map((item,id)=> 
        <div className="tech" key={id}>
            <img src={item.image} alt="logo" />
            <p>{item.title}</p>
        </div>
      )}
    </div>
    
   
  )
}

export default TechList;

