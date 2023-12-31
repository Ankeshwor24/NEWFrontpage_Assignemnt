import React from 'react'
import {MoreHorizontal} from 'react-feather';
import Card from "../Card/Card";


import './Board.css'
import Editable from '../Editable/Editable';


export default function Board() {
  return (
    <div className='board'>
        <div className='board_top'>
            <p className='board_top_title'>To Do<span>2</span></p>
            <MoreHorizontal />

        </div>
        <div className='board_cards custom-scroll'>
            <Card />
            <Card />
            <Editable displayClass="board_cards_add"
            text="Add Card"
            placeholder="Enter Card Title"/>
        </div>
    </div>
  );
}
