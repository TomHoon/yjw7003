'use client';

import React, { useState } from "react";

export default function Join(){

    const [memberId, setMemberId] = useState('');
    const [memberPw, setMemberPw] = useState('');
    const [memberDegree, setMemberDegree] = useState('');
    const [memberNickname, setMemberNickname] = useState('');
    const [memberIsSocial, setMemberIsSocial] = useState('N');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        console.log("요청 보냄:", { memberId, memberPw, memberDegree, memberNickname });


        const res = await fetch('http://localhost:22000/api/v1/member/join', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                memberId, 
                memberPw, 
                memberDegree, 
                memberNickname, 
                memberIsSocial: "N"
            }),
        });

        const text = await res.text();
        setMessage(text);
    }

    return(
        <div className="join-content">
            <div className="auto">
                <div className="right-content">
                    <div className="right-top">
                        <h3>회원가입</h3>
                    </div>

                    <article className="right-bottom">
                        <form onSubmit={handleSubmit} className="info-container">
                            <div className="title">
                                <label>아이디</label>
                                <input value={memberId} onChange={(e) => setMemberId(e.target.value)} />
                            </div>
                            <div className="title">
                                <label>비밀번호</label>
                                <input value={memberPw} onChange={(e) => setMemberPw(e.target.value)} />
                            </div>
                            <div className="title">
                                <label>등급</label>
                                <input value={memberDegree} onChange={(e) => setMemberDegree(e.target.value)} />
                            </div>
                            <div className="title">
                                <label>닉네임</label>
                                <input value={memberNickname} onChange={(e) => setMemberNickname(e.target.value)} />
                            </div>

                            <button type="submit">가입하기</button>
                        </form>

                        {message && (
                            <div className="info-content-footer">
                                <p>{message}</p>
                            </div>
                        )}
                    </article>
                </div>
            </div>
        </div>
    )
}