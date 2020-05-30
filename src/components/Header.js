import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Kyohei's Resume Site</h1>
        <p>
        「見やすく、更新できる」Kyoheiの履歴書です。{' '}
          <br />
          興味のある項目をNavメニューから開いてください。
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            自己紹介
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('skill')
            }}
          >
            スキル
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('experience')
            }}
          >
            経歴
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('portfolio')
            }}
          >
            ポートフォリオ
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('others')
            }}
          >
            その他所属
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
