import "./styles.css";

// * Ao passar uma propriedade pro componente em classe ele cria um objeto dentro do this.props
// * this.props = {title: "Exemplo", provider: "NASA"}

// * Componente Funcional --> Recebe props como parâmetro da função --> Para ocultar props. utiliza-se desestruturação

export function Article({ title, provider, description, thumbnail, url }) {
  return (
    <article id="article">
      <img src={thumbnail} alt={title} />
      <div className="article-infos">
        <h2><a href={url} target="blank">{title}</a></h2>
        <h3>{provider}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
