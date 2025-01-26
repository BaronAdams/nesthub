import React from 'react'
import PropertySection from './PropertySection'
import { useProperties } from '@/lib/hooks/properties'

const Recommended = () => {
  const { isLoading, properties } = useProperties("/properties/recommanded?limit=5")

  if(isLoading){
    return(<>{"Loading...."}</>)
  }
  return (
    <PropertySection title="Recommandés pour vous" properties={properties}  />
  )
}

export default Recommended