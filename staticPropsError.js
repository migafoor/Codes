export const getStaticProp = async () => {
    try {
      const { data, errors } = await someQuery();
      if (errors || !data) {
        return { notFound: true };
      }
      return { props: { data } };
    } catch {
      return { notFound: true };
    }
  };
  export const getStaticProps = async () => {
    try {
      const { data, errors } = await getDataWithimageByMId(BishopMId);
      if (errors || !data) {
        return { notFound: true };
      }
      return { props: { data } };
    } catch (error) {
      return { notFound: true };
    }
  };