export const Note = ({ content, date, categories=[] }) => {
    return (
      <li>
        <p>{content}</p>
        <time>{date}</time>
        <ul>
            {categories.map((categorie)=>{
                return <li key={categorie}>{categorie}</li>
            })}
        </ul>
      </li>
    )
  }