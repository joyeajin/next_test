import { Card } from "./Card";
import "./page.css";

export default function about() {
  return (
    <>
      <div className="jumbotron">
        <h3 className="subTitle">서브타이틀</h3>
        <h1 className="mainTitle">메인타이틀</h1>
        <p className="mainSlogan">메인슬로건</p>
      </div>
      <div className="cardDeck">
        <h1 className="mainTitle">메인타이틀</h1>
        <div className="cards">
          <Card
            picture="사진1"
            mainTitle="카드1 메인타이틀"
            contents="카드1 내용 (100자 넘으면 ...으로)"
            link="/"
          />
          <Card
            picture="사진2"
            mainTitle="카드2 메인타이틀"
            contents="카드2 내용 (100자 넘으면 ...으로)"
            link="/"
          />
          <Card
            picture="사진3"
            mainTitle="카드3 메인타이틀"
            contents="카드3 내용 (100자 넘으면 ...으로)"
            link="/"
          />
        </div>
      </div>
    </>
  );
}
