import React from 'react'
import PropertySection from './PropertySection'
import { useProperties } from '@/lib/hooks/properties'

const Trending = () => {
  const { properties } = useProperties("/properties/trending?limit=5")
  return (
    <PropertySection title="En vedette" properties={properties} />
  )
}

export default Trending