

//import { useRouter } from 'next/router'
//const router = useRouter();
<>
<button
      type="button"
      onClick={() => {
        router.push({
          pathname: `/product/car/${Item.description}`,
          query: { id: Item.id },
        })
      }}
    >
        {Item.description}
    </button>


    <h2>
  <Link href={{
      pathname: `/product/car/${title}`,
  }} as={`/product/car/${(Item.description)}`}>{Item.description}</Link>
</h2>


/*********************************************/
<Link
    href={{
        pathname: "episodes/[id]",
        query: {id: 847, title: visionCollege}
    }}
    as={`episodes/${episode.itunes.episode}-${kebabCase(episode.title)}`}
 >
... button stuff
</Link>


</div>
/*********************************************/
//in pages/episodes/[id].js
export  const getServerSideProps= (context)=> {
    console.log(context.query) 
    return {
        props: { 
           title: context.query.title //pass it to the page props
        }
    }
  }
  export async function getServerSideProps  (context) {
      console.log(context.query) 
      // returns { id: episode.itunes.episode, title: episode.title}
      
  
      //you can make DB queries using the data in context.query
      return {
          props: { 
             title: context.query.title //pass it to the page props
          }
      }
  }

  <Link href={{ pathname: '/about', query: { data: JSON.stringify(episode) } }}>
  <a>About us</a>
    </Link>
    Then in the routed component get the query from URL and parse it:
    const RoutedComponent = () => {
        useEffect(() => {
          const { data } = getQueryParams(window.location.search);
        }, []);
      };


      //************************************************

      // pages/[id].js

export async function getStaticProps(context) {
    const { params } = context;
    const id = params.id;

    const data = /* Fetching data with the id */

    return {
        props: data,
    }
}

// pages/[id].js

export async function getServerSideProps(context) {
    const { params } = context;
    const id = params.id;
  
    /* ... */
  }



</>



