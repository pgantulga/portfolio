

const TechList = () => {
  const techs = [
    {
      title: 'Javascript',
      image: './src/assets/technos/js.png'
    },  
    {
      title: 'Angular',
      image: '/src/assets/technos/angular.png'
    },
    {
      title: 'React',
      image: '/src/assets/technos/react.png'
    },
    {
      title: 'Firebase',
      image: '/src/assets/technos/firebase.png'
    },
    {
      title: 'Angular',
      image: '/src/assets/technos/mongodb.png'
    },
    {
      title: 'Angular',
      image: '/src/assets/technos/sass_0.png'
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

