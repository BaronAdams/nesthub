import React from 'react'
import PropertySection from './PropertySection'
import { properties } from '@/data'

const DefaultProperties = () => {
  return (
    <PropertySection title="Propriétés par défaut" properties={properties}  />
  )
}

export default DefaultProperties