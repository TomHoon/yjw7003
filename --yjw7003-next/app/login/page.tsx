'use client';

import LoginStyles from '@/styles/Login.module.css';
import { useRouter } from 'next/navigation';
import { use, useRef, useState } from 'react';
import { useAuth } from '../auth-context';

export default function Login() {
  const { isLoggedIn, login, logout } = useAuth();

  const [loginInfo, setLoginInfo] = useState({});
  const router = useRouter();

  const goLogin = async () => {
    // const url = 'http://localhost:22000/api/v1/member/login';
    const url = 'http://localhost:22000/api/v1/member/set-cookie';
    const method = 'GET';

    try {
      const res = await fetch(url, {
        credentials: 'include',
        method,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        // body: JSON.stringify(loginInfo),
      });

      if (res.status == 200) {
        router.push('/');
        login();
      } else {
        alert('로그인 실패');
      }
    } catch (e) {
      console.error(e);
    }
  };

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
                <input
                  type="text"
                  onChange={(e) => setLoginInfo({ ...loginInfo, memberId: e.target.value })}
                />
                <input
                  type="password"
                  onChange={(e) => setLoginInfo({ ...loginInfo, memberPw: e.target.value })}
                />
              </div>

              <div className={LoginStyles.flexItem}>
                <button onClick={goLogin}>로그인</button>
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
