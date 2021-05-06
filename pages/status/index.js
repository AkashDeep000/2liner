import { useSWRInfinite } from 'swr'
import { useRef, useEffect } from 'react'

import fetcher from '../../libs/fetch'
import useOnScreen from '../../hooks/useOnScreen'
const Build = process.env.CONFIG_BUILD_ID;
const PAGE_SIZE = 20

const getKey = (pageIndex, previousPageData, pageSize) => {
  if (previousPageData && !previousPageData.length) return null // reached the end

  return `https://modapk.vercel.app/_next/data/${Build}/status/${
    pageIndex + 2
  }.json`
}

export default function ({ datee }) {
  const ref = useRef()
  

  const isVisible = useOnScreen(ref)

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (...args) => getKey(...args, PAGE_SIZE),
    fetcher
  )

  const issues = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = size === PAGE_SIZE
  const isRefreshing = isValidating && data && data.length === size

  useEffect(() => {
    if (isVisible && !isReachingEnd && !isRefreshing) {
      setSize(size + 1)
    }
  }, [isVisible, isRefreshing])

//for static time

  return (
    <>
  {datee.map((dateee) => {
        return (
     <p key={dateee.id} style={{color: '#282526cd', margin: '6px 0', height: 50 }}>
            - {dateee.title}
          </p>
                  )
      })}
    <div style={{ fontFamily: 'sans-serif' }}>
               

     
      {isEmpty ? <p>Yay, no issues found.</p> : null}
      {issues.map((issue) => {
        return (
          <p key={issue.id} style={{ margin: '6px 0', height: 50 }}>
            - {issue.title}
          </p>
        )
      })}
      <div ref={ref}>
        {isLoadingMore ? (<div className="spinner" role="spinner"><div className="spinner-icon"></div></div>) : isReachingEnd ? 'no more issues' : ''}
      </div>
    </div>
    
   </>
  )
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://modapk.vercel.app/_next/data/${Build}/status/1.json`)
  const datee = await res.json()

  // Pass data to the page via props
  return { props: { datee }, revalidate: 60}
}
