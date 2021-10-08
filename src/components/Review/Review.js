import React from 'react';
import './Review.scss';
class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewList: [],
    };
  }

  addReview = putReview => {
    if (putReview.key === 'Enter' && putReview.target.value !== '') {
      putReview.target.value = '';
      this.setState({
        reviewList: this.state.reviewList.concat(this.state.review),
        review: '',
      });
    }
  };

  handleReview = event => {
    this.setState({
      review: event.target.value,
    });
  };

  render() {
    const { reviewList } = this.state;
    return (
      <div className="Review">
        <div className="reviewTotal">
          <div className="reviewRate">
            <dl clannName="rateStars">
              <dt className="rateTotal">사용자 총 평점</dt>
              <dd className="averageRate">
                ⭐️⭐️⭐️⭐️⭐️
                <b>n</b>
                /5 점
              </dd>
              <em className="totalAmountReview">
                총<b>n</b>개 리뷰 기준
              </em>
            </dl>
          </div>
          <div className="reviewWrite">
            <div className="howManyStars">별점 평가 부분</div>
            <div className="commentWrite">
              <textarea
                name="comment"
                placeholder="
                크다란스튜디오를 이용해 주셔서 감사합니다. 리뷰는 품질개선과
                서비스향상에 도움이 됩니다."
              ></textarea>
            </div>
            <div className="privacyPolicy">
              <div className="privacyTitle">
                개인정보수집이용
                <label className="agreeOrNot">
                  {/* 둘중하나만체크되게 수정 */}
                  <input type="radio" name="agree" value="Y" checked />
                  <b>동의</b>
                </label>
                <label className="agreeOrNot">
                  <input type="radio" name="notAgree" value="N" />
                  <b>미동의</b>
                </label>
              </div>
              <table className="privacyTable">
                <colgroup>
                  <col width="200"></col>
                  <col width="250"></col>
                  <col width="130"></col>
                </colgroup>
                <thead className="tableHead">
                  <tr>
                    <th scope="col">목적</th>
                    <th scope="col">항목</th>
                    <th scope="col">보유기간</th>
                  </tr>
                </thead>
                <tbody className="tableBody">
                  <tr>
                    <td className="perpose">
                      <div className="privacyTxt">
                        게시판 서비스 제공 / 이용 고객 확인
                      </div>
                    </td>
                    <td className="items">
                      <div className="privacyTxt">
                        이름, 비밀번호, 작성내용, IP주소
                      </div>
                    </td>
                    <td className="hold">
                      <div className="privacyTxt">게시글 삭제시까지</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="agreeForFillOut">
                * 동의하셔야 서비스를 이용하실 수 있습니다.
              </div>
            </div>
          </div>
          <button
            className="button"
            onKeyPress={this.addReview}
            onChange={this.handleReview}
          >
            {/* 눌렀을때 로그인여부확인 안되어있으면 alert */}
            작성하기
          </button>
          <div className="reviewList">
            {/* 닉네임 ** 추가 해야함 */}
            {reviewList.map((userId, content, rating, createdAt) => {
              return (
                <ul className="reviewBlock" key={userId}>
                  <li className="createdReview">
                    <div className="starsAndData">
                      <span className="stars">{rating}⭐️⭐️⭐️⭐️⭐️</span>
                      <li className="userId">{userId}</li>
                      <li className="createdAt">{createdAt}</li>
                    </div>
                    <div className="content">
                      {content}
                      <div className="modifyAndDelete">
                        <span className="modify" href="#">
                          [수정]
                        </span>
                        <span className="delete" href="#">
                          [삭제]
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
