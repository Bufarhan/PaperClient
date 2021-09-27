import React from 'react'
import { Card } from 'react-bootstrap'

export default function PaperItem({paper}) {
    return (
        <Card style={{color:"#000"}} className="m-1 shadow-sm">
        <Card.Body>
           <label> {paper.title}</label>
           <label> {paper.referenceCount}</label>
        <Card.Footer>
        <span  > {paper.auther}</span>
        <span  > {paper.datePublished}</span>

        </Card.Footer>
        </Card.Body>
        </Card>
    )
}
