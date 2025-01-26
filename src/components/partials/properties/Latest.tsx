import React from 'react'
import PropertySection from './PropertySection'
import { useProperties } from '@/lib/hooks/properties'

const Latest = () => {
  const { properties } = useProperties("/properties/latest?limit=5")
  return (
    <PropertySection title="Recemment ajoutés" properties={properties} />
  )
}

export default Latest