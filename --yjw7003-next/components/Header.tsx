'use client';

import { useAuth } from '@/app/auth-context';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { isLoggedIn, login, logout } = useAuth();

  console.log('isLoggedIn >>> ', isLoggedIn);

  return (
    <header>
      <div className="auto">
        <div className="flex-container">
          <a href="/">
            <img src="/images/icon.png" alt="" className="logo" />
          </a>
          <ul>
            <li>사업안내</li>
            <li>이용안내</li>
            <li>
              <Link href="/giver">후원 및 기부</Link>
            </li>
            <li>교육</li>
            <li>복지관 소개</li>
          </ul>
          <div className="userBtns">
            <Link href="/login">
              <button>{isLoggedIn ? '로그아웃' : '로그인'}</button>
            </Link>
            {!isLoggedIn && <button>회원가입</button>}
          </div>
        </div>
      </div>
    </header>
  );
}
