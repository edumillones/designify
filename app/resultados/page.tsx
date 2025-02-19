import { Suspense } from 'react'
import ResultsContent from './ResultsContent'

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  )
}