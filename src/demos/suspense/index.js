import React, { Suspense, lazy } from 'react'

const LazyComp = lazy(() => import('./lazy.js'))

let data = ''
let promise = ''
function requestData() {
  if (data) return data
  if (promise) throw promise
  promise = new Promise(resolve => {
    setTimeout(() => {
      data = 'Data resolved'
      resolve()
    }, 3000)
  })
  throw promise
}

function SuspenseComp() {
  const data = requestData()

  return <p>{data}</p>
}

export default () => (
  <Suspense fallback="loading data">
    <SuspenseComp />
    <LazyComp />
  </Suspense>
)
