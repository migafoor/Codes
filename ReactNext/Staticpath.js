
export async function getStaticPaths() {
    return {
      paths: [
        { params: { ...t } }
      ],
      fallback: true // false or 'blocking'
    };
  }

  