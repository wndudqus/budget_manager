import React, { useEffect } from 'react'

export default function BudgetItem({item}) {
    const{useage,cost}=item;
    return (
        <div>
             <hr/>
            <span>{useage}:</span>
            <span>{cost}</span>
           
        </div>
    )
}
