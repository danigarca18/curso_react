import { Button } from "react-bootstrap"

const ElementoPost = ({ post }) => {
    const {id, title, body} = post
    return (
        <div className="card m-2" key={id}>
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                <h5 className="card-title">{body}</h5>
                <Button onClick={ () => console.log(id) } variant="primary">Detalles</Button>
            </div>
        </div>
    )
}

export default ElementoPost
