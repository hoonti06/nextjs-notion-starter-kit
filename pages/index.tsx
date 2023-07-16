// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import { clientConfig } from '@/lib/server/config'

import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import {getAllPosts} from '@/lib/notion'
import * as config from '@/lib/config'
// import { useConfig } from '@/lib/nobelium-config'
import React from "react";

export async function getStaticProps() {
  const posts = await getAllPosts({includePages: false})
  const postsToShow = posts.slice(0, config.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > config.postsPerPage
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext
    },
    revalidate: 1
  }
}

export default function Blog({postsToShow, page, showNext}) {
  // const { title, description } = useConfig()

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Container title={config.title} description={config.description}>
      {postsToShow.map(post => (
        <BlogPost key={post.id} post={post}/>
        // <NotionPage {...props} />
      ))}
      {showNext && <Pagination page={page} showNext={showNext}/>}
    </Container>
  )
}


// export default function NotionDomainPage(props) {
//   return <NotionPage {...props} />
// }
