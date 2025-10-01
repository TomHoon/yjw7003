"use client";

import { useState } from "react";
import { User, Lock, Tag, Shield } from "lucide-react";
import styles from "@/styles/Signup.module.scss";

export default function Signup() {
  const [form, setForm] = useState({
    memberId: "",
    memberPw: "",
    confirmPassword: "",
    memberNickname: "",
    memberDegree: "user",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError(""); // 입력 시 에러 초기화
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.memberPw !== form.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    console.log("회원가입 데이터:", form);
    // TODO: API 연동
    const param = { ...form };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/member/join`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(param),
      }
    );

    if (res.ok) {
      location.href = "/login";
    }
  };

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>회원가입</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* 아이디 */}
        <div className={styles.inputGroup}>
          <User className={styles.icon} />
          <input
            type="text"
            name="memberId"
            placeholder="아이디"
            value={form.memberId}
            onChange={handleChange}
            required
          />
        </div>

        {/* 비밀번호 */}
        <div className={styles.inputGroup}>
          <Lock className={styles.icon} />
          <input
            type="password"
            name="memberPw"
            placeholder="비밀번호"
            value={form.memberPw}
            onChange={handleChange}
            required
          />
        </div>

        {/* 비밀번호 확인 */}
        <div className={styles.inputGroup}>
          <Lock className={styles.icon} />
          <input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* 닉네임 */}
        <div className={styles.inputGroup}>
          <Tag className={styles.icon} />
          <input
            type="text"
            name="memberNickname"
            placeholder="닉네임"
            value={form.memberNickname}
            onChange={handleChange}
            required
          />
        </div>

        {/* 등급 */}
        <div className={styles.inputGroup}>
          <Shield className={styles.icon} />
          <select
            name="memberDegree"
            value={form.memberDegree}
            onChange={handleChange}
          >
            <option value="user">일반</option>
            <option value="admin">관리자</option>
          </select>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submitBtn}>
          회원가입
        </button>
      </form>
    </main>
  );
}
