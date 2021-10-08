import React from 'react';
import './Review.scss';
class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      review: '',
      starRating: 0,
      reviewList: [],
      isPolicyDetail: false,
      agreePolicy: { agreePolicyRadio: true, notAgreePolicyRadio: false },
    };
  }

  createNewReview = e => {
    e.preventDefault();
    const { agreePolicy, starRating, review } = this.state;
    if (agreePolicy.notAgreePolicyRadio)
      return alert('약관에 동의가 필요합니다.');
    else if (starRating === 0) return alert('별점을 선택해주세요');
    else if (review === '') return alert('리뷰 내용을 입력해주세요.');
    this.setState({
      reviewList: [
        ...this.state.reviewList,
        { content: this.state.review, rating: +this.state.starRating },
      ],
      review: '',
    });
  };

  handelInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  decideStarRating = num => {
    let star = '';
    for (let i = 0; i < num; i++) {
      star += '★';
    }
    return star;
  };

  showPolicyDetail = () => {
    const { isPolicyDetail } = this.state;
    this.setState({ isPolicyDetail: !isPolicyDetail });
  };

  checkPolicyRadio = e => {
    const { agreePolicy } = this.state;
    this.setState({
      agreePolicy: {
        agreePolicyRadio: !agreePolicy.agreePolicyRadio,
        notAgreePolicyRadio: !agreePolicy.notAgreePolicyRadio,
      },
    });
  };

  render() {
    const { reviewList, isPolicyDetail, agreePolicy } = this.state;
    return (
      <div className="Review">
        {console.log(this.state.agreePolicy)}
        <div className="reviewInner">
          <h1 className="reviewTitle">REVIEW</h1>
          <div className="reviewRate">
            <div className="userRateWrap">
              <p className="rateTotal">사용자 총 평점</p>
              <p className="totalAmountReview">
                (총<b>n</b>개 리뷰 기준)
              </p>
            </div>
            <div className="averageRate">
              <div class="wrapStar">
                <div class="starRating">
                  <span
                    className="innerStarRating"
                    style={{ width: '30%' }}
                  ></span>
                </div>
                <h2>
                  <b>n</b>
                  /5 점
                </h2>
              </div>
            </div>
          </div>
          <div className="reviewWrite">
            <form className="reviewForm">
              <div className="howManyStars">
                <select
                  name="starRating"
                  className="starSelector"
                  onChange={this.handelInputChange}
                >
                  <option value="" selected>
                    -- 별점 선택 --
                  </option>
                  <option value="1">★️</option>
                  <option value="2">★★</option>
                  <option value="3">★★★️</option>
                  <option value="4">★★★★️</option>
                  <option value="5">★★★★★</option>
                </select>
              </div>
              <textarea
                className="reviewInput"
                value={this.state.review}
                name="review"
                placeholder="
                크다란을 이용해 주셔서 감사합니다. 리뷰는 품질개선과
                서비스향상에 도움이 됩니다."
                onChange={this.handelInputChange}
              ></textarea>
              <button
                className="reviewSubmitButton"
                onClick={this.createNewReview}
              >
                {/* 눌렀을때 로그인여부확인 안되어있으면 alert -> 백엔드 연결시 추가해야함*/}
                리뷰 등록
              </button>
            </form>
            <div className="privacyPolicy">
              <div className="privacyTitle">
                <p className="privacyTitleInner">
                  <b>개인정보수집이용</b>
                  <u onClick={this.showPolicyDetail}>자세히 보기</u>
                </p>

                <div class="privacyRadioBox">
                  <input
                    type="radio"
                    name="agree"
                    value="1"
                    checked={agreePolicy.agreePolicyRadio}
                    id="agreePolicyRadio"
                    onChange={this.checkPolicyRadio}
                  />
                  <label className="agreeOrNot" htmlFor="agreePolicyRadio">
                    <b>동의</b>
                  </label>
                  <input
                    type="radio"
                    name="agree"
                    value="0"
                    checked={agreePolicy.notAgreePolicyRadio}
                    id="notAgreePolicyRadio"
                    onChange={this.checkPolicyRadio}
                  />
                  <label className="agreeOrNot" htmlFor="notAgreePolicyRadio">
                    <b>미동의</b>
                  </label>
                </div>
              </div>
              {isPolicyDetail ? (
                <>
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
                </>
              ) : null}
            </div>
          </div>

          {/* 닉네임 ** 추가 해야함 */}
          <div className="reviewList">
            {reviewList.length > 0 ? (
              reviewList.map((review, index) => {
                return (
                  <ul className="reviewBlock" key={review.userId}>
                    <li className="createdReview">
                      <div className="starsAndData">
                        <span className="stars">
                          {this.decideStarRating(review.rating)}
                        </span>
                        <div className="reviewUserInfo">
                          <span className="userId">
                            서버에서 받아올 아이디 {review.userId}
                          </span>
                          <span className="createdAt">
                            서버에서 받아올 시간 {review.createdAt}
                          </span>
                        </div>
                      </div>
                      <div className="reviewContent">
                        <textarea
                          className="reviewContentText"
                          defaultValue={review.content}
                          readOnly
                        ></textarea>
                        <div className="modifyAndDelete">
                          <span className="modify">[수정]</span>
                          <span className="delete">[삭제]</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                );
              })
            ) : (
              <p>리뷰가 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
