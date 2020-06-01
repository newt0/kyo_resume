import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">自己紹介</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#works">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article> */}

        <article
          id="skill"
          className={`${this.props.article === 'skill' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">スキル</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <ol>
          <li>JAMStackなメディア構築</li>
          <p>Nuxt.js×Contentfulが最も得意ですが、Gastby.jsやHugo、Vuepress等その他のフレームワークも一通り扱えます。</p>
          <li>Nuxt.js×FirestoreでSPA開発</li>
          <p>Nuxt.jsでSPA開発ができます。ただし、メインはフロントなので、高度なデーターフローの設計(TypescriptによるInterface設計等）は難しいです。</p>

          <li>Web制作・LP制作</li>
          <p>下記のように使い分けています。<ul><li>「数時間で一定クオリティ」<br></br>→HugoのThemeやGastby Staterを利用する</li><li>「1日~数日で効率よく任意のレイアウト」<br></br>→Vuetifyを使ってCSS極力書かない</li><li>「細部までデザインに拘る」<br></br>→Nuxt.jsでCSSガリガリ書く</li></ul></p>

          <li>インサイドセールス体制構築・最適化</li>
          <p>上流から下流まで一気通貫したインサイドセールス体制の構築・運用の最適化ができます。</p>
          <li>コンテンツマーケティング</li>
          <p>Tech系のリサーチレポートや、プログラミング解説記事を作成してきました。</p>
          </ol>
          {close}
        </article>

        <article
          id="experience"
          className={`${this.props.article === 'experience' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">経歴</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <ul>
            <li>
              <h3>ラグナロク株式会社<small>(2019年10月〜2020年7月)</small></h3>
              <h4>会社について</h4>
              <p>nanapiやコインチェック等出身のエンジニア・デザイナーで構成されており、極少人数での高速開発・リリースに強みを持っています。<br></br>B2B事業「MVP Now(最短2週間でのMVP納品)」や、自社サービスの開発(主にB2CのSNS)を行なっています。
              </p>
              <h5>業務内容</h5>
              <p>フォトコンテストアプリ<a href="https://camecon.me/" target="_blank">「Camecon」</a>のフロントエンドを担当しました。<br></br>Nuxt.js, Firebase, Scss, BEM等を採用。</p>
            </li>
            <li>
              <h3>Aidemy Inc<small>(2019年4月〜10月)</small></h3>
              <h4>会社について</h4>
              <p>東大発AIスタートアップです。ProgateのAI特化版のような学習プラットフォーム「Aidemy」を運営しており、そこで集めたユーザー数を参入障壁として
                <br></br>B2C事業「Aidemy Premium Plan(高単価プログラミングスクール）」
                <br></br>B2B事業「Aidemy Business(AI導入・内製化のコンサルティング)」
                <br></br>で収益化しています。
              </p>
              <h5>業務内容</h5>
              <p>B2C事業の事業開発を担当しました。
                <br></br>主にセールスですが、マーケティングやCS等全領域を担っていました。
                <br></br>
                <br></br>事業部が目標額を大幅にショート、さらに他の先輩社員が全員辞めてしまい営業が一人になった状況から、翌月に1800万と前月比約2倍と最高売上を達成し、さらに1Q(3ヶ月)の目標もクリアしました。
                <br></br>
                <br></br>またプレイヤーとして成果を出した後は組織としての再現性・持続性を得るために、セールスチーム立ち上げも採用から行いました。
              </p>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="portfolio"
          className={`${this.props.article === 'portfolio' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">ポートフォリオ</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <ol>
          <li><p><a href="https://camecon.me/" target="_blank">「Camecon」</a>誰でも参加できるフォトコンテストアプリ</p></li>
          <p>主にフロントエンドを担当。Nuxt.js, Firestorem, Scss, BEM等を採用。あえてCSSフレームワークを導入せず、デザインは全てCSSを自作しています。</p>

          <li><p><a href="https://newt0.netlify.app/" target="_blank">「ポートフォリオサイト]
          </a></p></li>
          <p>Gastby.js×Contentfulで制作。コンテンツ部分は全てContentfulで管理しています。</p>

          <li><p><a href="https://irongate.netlify.app/" target="_blank">「医師向けAIプログラミングメディア」</a></p></li>
          <p>Nuxt.js×Contentful(今後Vuetify導入して全面的に作り直し)。<p><a href="https://vuetifyblog-test.netlify.app/" target="_blank">リニューアルイメージ</a></p>
            東大医学部生へのヒアリングから「医師×AIプログラミング教育サービス」の着想を得て、Aidemy時代に手応え（従来のペルソナ外からの月300万円の売り上げ）を実感しました。
          </p>
          <li><p><a href="https://stayhomes.netlify.app/" target="_blank">「お家に在宅」
          </a></p></li>
          <p>Hugo×Forestry(Hugo専用のHeadless CMS)で制作（記事をまだ書いていません）。在宅勤務者がPCから見ることを想定したレイアウトです。</p>
          <li><p><a href="https://vuenuxt-tutorial.netlify.app/" target="_blank">「VueとNuxtをはじめから」</a>Vue.js/Nuxt.js初心者向けブログ</p></li>
          <p>Vuepressで構築(Vue/Nuxtについて扱うブログのため、あえてVuepress使ってます)。Qiita記事が予期せずNuxt.jsでSEO一位になり、この分野ならプログラミングスクールアフィで上位を狙えると感じました。
          </p>
          </ol>
          {close}
        </article>

        <article
          id="others"
          className={`${this.props.article === 'others' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">その他所属</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <ol>
          <li>早稲田大学社会科学部</li>
          <p>休学と留年繰り返して7年生です</p>
          <li>Kernel Hongo</li>
          <p>東大松尾研やSoftbank, Deep Core(VC)等によるAIインキュベーター施設。審査に合格してメンバーになりました</p>
          <li>MDN web doc翻訳チーム</li>
          <p>有志による翻訳活動。</p>
          <li>Gastby.jsドキュメント日本語化プロジェクト</li>
          <p>有志による翻訳活動。</p>
          </ol>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/kyohei_ai"
                target="_blank"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/burger.king.you" 
              target="_blank"
              className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/newt0"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
