'use client';

import LoginStyles from '@/styles/Login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({ memberId: '', memberPw: '' });
  const router = useRouter();

  const goLogin = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/member/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      }
    );

    const result = await res.json();

    if (res.status >= 400) {
      alert(result?.message || '에러발생');
    } else {
      localStorage.setItem('memberId', loginInfo.memberId);
      location.href = '/';
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

              <dd>
                양주시여성장애인어울림센터, 사회의 따뜻함을 전하는 복지를
                하겠습니다.
              </dd>
            </dl>

            <div
              className={`${LoginStyles.flexContainer} ${LoginStyles.flexLeft}`}
            >
              <div className={LoginStyles.flexItem}>
                <input
                  type="text"
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, memberId: e.target.value })
                  }
                />
                <input
                  type="password"
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, memberPw: e.target.value })
                  }
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
