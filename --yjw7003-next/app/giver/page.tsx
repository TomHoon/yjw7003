import Link from 'next/link';
import SubBanner from '@/components/SubBanner';

export default function Giver() {
  const items = [1, 2, 3];

  return (
    <>
      <div className="giver-content">
        <div className="auto">
          <div className="right-content">
            <div className="right-top">
              <h3>공지사항</h3>
            </div>

            <article className="right-bottom">
              <div className="right-bottom-title">
                <ul>
                  <li style={{ width: '20%' }}>번호</li>
                  <li style={{ width: '50%' }}>제목</li>
                  <li style={{ width: '20%' }}>등록일</li>
                </ul>
              </div>

              <div className="right-bottom-container">
                {items.map((item, idx) => (
                  <div className="right-bottom-item" key={`test-${idx}`}>
                    <Link href={`/giver/${item}`}>
                      <ul>
                        <li>공지</li>
                        <li>2024년 기부금 수입실적명세서</li>
                        <li>2025.04.28</li>
                      </ul>
                    </Link>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
