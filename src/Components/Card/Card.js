import React from 'react'
import { CheckSquare, Clock, MoreHorizontal} from "react-feather";
import Chip from "../Chip/Chip"

import './Card.css'

export default function Card() {
  return (
    <div className="card">
        <div className='card_top'>
            <div className='card_top_labels'>
                <Chip text="Frontend" color="green" />
            </div>
            <MoreHorizontal />
        </div>
        <div className='card_title'>
            I have to attend meeting.
        </div>
        <div className='card_footer'>
            <p>
                <Clock />
                29 Sept
            </p>
            <p>
                <CheckSquare />
                1/4
            </p>
        </div>
      
    </div>
  )
}
