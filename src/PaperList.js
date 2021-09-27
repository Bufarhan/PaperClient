import React from 'react'
import PaperItem from './PaperItem'

export default function paperList({papers}) {
    return (
        papers.map((item)=>{
            return <PaperItem key={item.id} paper={item}/>
       
        })
    )
}
