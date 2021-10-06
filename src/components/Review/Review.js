import React from 'react';
import './Review.scss';
class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewList: [],
    };
  }

  render() {
    const { reviewList } = this.state;
    return (
      <div className="reviewTotal">
        <div className="reviewHeader">
          <h3>REVIEW</h3>
        </div>
        <div className="reviewMail">
          <ul clannName="rateStars">
            <li>사용자 총 평점</li>
            <li>
              <b>n</b>
              /5 점
            </li>
          </ul>
        </div>
        <div className="reviewWrite">
          <form>
            <textarea name="">
              크다란스튜디오를 이용해 주셔서 감사합니다. 리뷰는 품질개선과
              서비스향상에 도움이 됩니다.
            </textarea>
          </form>
          <form>
            <div className="privacyPolicy">
              개인정보수집이용
              <label>
                <input type="round" name="agree" value="Y" checked>
                  동의
                </input>
              </label>
              <label>
                <input type="round" name="notAgree" value="N">
                  미동의
                </input>
              </label>
              <table className="privacyTable">
                <thead>
                  <tr>
                    <th scope="col">목적</th>
                    <th scope="col">항목</th>
                    <th scope="col">보유기간</th>
                  </tr>
                </thead>
                <tbody>
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
                  <div className="formTxt">
                    * 동의하셔야 서비스를 이용하실 수 있습니다.
                  </div>
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div className="reviewList">
          {/* 닉네임 **, 날짜 추가 해야함 */}
          {reviewList.map((id, comment, score) => {
            return (
              <li className="review" key={id}>
                {(id, comment, score)}
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Review;
