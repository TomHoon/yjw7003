interface Params {
  params: { idx: string };
}

export default function GiverDetail({ params }: Params) {
  const idx = params.idx ?? 0;

  return (
    <div className="giver-content">
      <div className="auto">
        <div className="right-content">
          <div className="right-top">
            <h3>공지사항</h3>
          </div>

          <article className="right-bottom">
            <div className="info-container">
              <div className="title">
                <h3>2024년 기부금 수입실적명세서</h3>
              </div>
              <div className="sub-info">
                <dl>
                  <dt>작성자</dt>
                  <dd>관리자</dd>

                  <dt>등록일</dt>
                  <dd>2025.04.28</dd>
                </dl>
              </div>
            </div>

            <div className="info-content-container">
              <div className="auto">
                <div className="info-content">
                  <div className="giver-list-table"></div>
                </div>

                <div className="info-content-footer">
                  <ul>
                    <li>첨부파일</li>
                    <li>
                      <a
                        href="/pdf/기부금모금액수입명세서-공지용.pdf"
                        target="_blank"
                        download="/pdf/기부금모금액수입명세서-공지용.pdf"
                      >
                        기부금모금액수입명세서-공지용.pdf
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
