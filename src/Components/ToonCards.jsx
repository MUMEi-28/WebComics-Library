
export default function ToonCards(props)
{
    return (
        <article className="cards">
            <img src={props.image.src} alt="Image" width="250px" height="380px" />
            <p>{props.title}</p>
        </article>
    )
}