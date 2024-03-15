function Lists() {
    const lists = ["Paris", "London", "Rabat"]
  
    return (
      lists.map( (item) => {
      return <p key={item}> {item} </p>})
    )
  }

export default Lists;