import CardItem from "./CardItem"
function CardsList(props) {
  const { works } = props
  return (
    <div>
      {works.map((item, id) =>
        
        <CardItem
          key={id}
          work = {item}
        />
      )}
    </div>
  )
}

export default CardsList