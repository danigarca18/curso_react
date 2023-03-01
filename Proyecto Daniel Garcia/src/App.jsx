import useFetch from './hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaPosts from './components/post/TablaPost';

const App = () => {

  const { data:posts, loading:loadingPosts, error:errorPosts } = useFetch('https://jsonplaceholder.typicode.com/posts', 'GET')


  if(loadingPosts) {
    return <h1>Cargando...</h1>
  }

  return (
    <>
      <div className="container">
        <h1>Fetch API</h1>
        <div className="row">
          <div className="row">
            <div className="col-md-12">
              <TablaPosts posts={posts} />
            </div>
          </div>
        </div>
        
      </div>
    </>
  )

}

export default App