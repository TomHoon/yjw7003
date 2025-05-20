import Image from 'next/image';

export default function MainNavi() {
  return (
    <div className="mainNavi">
      <div className="auto">
        <ul>
          <li>
            <a href="">
              <img src="/images/guide.png" alt="" />
              <span>이용안내</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/images/사업안내.png" alt="" />
              <span>사업안내</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/images/자원봉사신청.png" alt="" />
              <span>자원봉사신청</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/images/후원신청.png" alt="" />
              <span>후원신청</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/images/소식지.png" alt="" />
              <span>소식지</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
