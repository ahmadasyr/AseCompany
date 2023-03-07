import React, { Component } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default class Paginations extends Component {
  render() {
    const _num = this.props.num;
    const set = this.props.set;
    const page = parseInt(_num, 10) || 1;
    const totalPages = Math.ceil(this.props.blogs / 6);
    const pagesToShow = 5;
    const startPage = Math.max(1, page - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);
    const pages = [];
    console.log(startPage, endPage)
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return (
      <>
        <div className="page-navigation-wrap mt-4">
          <div className="page-navigation mx-auto">
            <button onClick={ _num !== startPage ? (e) => { set(_num - 1)} : null} className="page-go page-prev border-none">
              <AiOutlineArrowLeft />
            </button>
            <ul className="page-navigation-nav">
              {pages.map((p) => (
                <li key={p} className={p === page ? 'active' : null}>
                  <button onClick={(e) => {set(p)}} className="page-go-link border-none">
                    {p}
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={_num !== endPage ? (e) => {set(_num + 1) }: null} className="page-go page-next border-none">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </>
    );
  }
}
