'use client';

import LoginStyles from '@/styles/Login.module.css';

export default function Login() {
  return (
    <>
      <div className="auto">
        <div className={`${LoginStyles.loginContentsWrapper}`}>
          {/* <h2>로그인</h2> */}

          <div className={LoginStyles.loginForm}>
            <dl>
              <dt>회원 로그인 </dt>
              <dd>양주시여성장애인어울림센터, 사회의 따뜻함을 전하는 복지를 하겠습니다.</dd>
            </dl>

            <div className={`${LoginStyles.flexContainer} ${LoginStyles.flexLeft}`}>
              <div className={LoginStyles.flexItem}>
                <input type="text" />
                <input type="password" />
              </div>

              <div className={LoginStyles.flexItem}>
                <button>로그인</button>
              </div>
            </div>

            <div className={LoginStyles.joinBtnsWrapper}>
              <div className={LoginStyles.joinBtnsItem}>
                <span>회원이 아니신가요?</span>
                <button>회원가입</button>
              </div>

              <div className={LoginStyles.joinBtnsItem}>
                <span>아이디 비밀번호를 잊으셨나요?</span>
                <button>ID/PW찾기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
