import ElementoPost from "./ElementoPost"

const TablaPost = ({posts}) => {
    return (
        <>
        {
            posts && posts.map( (post) =>  {
            return (
                <ElementoPost key={post.id} post={post} />
            )
            })
        }
        </>
    )
}

export default TablaPost