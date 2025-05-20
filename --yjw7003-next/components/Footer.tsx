import footerStyles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className="auto">
        <div className={footerStyles.footerContainer}>
          <div className={footerStyles.footerLeft}>
            <img src="/images/icon.png" alt="" />
          </div>

          <div className={footerStyles.footerRight}>
            <address>
              <p>
                양주시여성장애인어울림센터 주소: 경기도 양주시 고읍남로 191번길 70-5, 102호(광사동,
                우진빌)
              </p>
              <p>
                전화번호: 031-846-7003 팩스: 031-846-7004 <br />
                이메일: yjw7003@naver.com 휴대폰: 010-5731-1175
              </p>
              <p>Copyright ⓒ 양주시여성장애인어울림센터. All Rights Reserved.</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
