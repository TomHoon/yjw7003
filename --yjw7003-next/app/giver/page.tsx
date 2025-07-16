"use client";

import Link from "next/link";
import SubBanner from "@/components/SubBanner";
import styles from "@/styles/Giver.module.css";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation';


export default function Giver() {
  const [boardList, setBoardList] = useState([]);
  const [pages, setPages] = useState<number[]>([]);
  const [groupBtn, setGroupBtn] = useState<any>({})
  const [startPage, setStartPage] = useState<number>(0);
  
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isLogged = window.localStorage.getItem("memberId");

  useEffect(() => {
    const getBoardList = async () => {
      const currentPage = searchParams?.get('page') || 1;
      const res = await fetch(`http://192.168.0.10:33000/api/v1/board/list?page=${currentPage}`);
      const response = await res.json();

      setBoardList(response.data.dtoList);

      setGroupBtn({
        hasNextGroup: response.data?.hasNextGroup,
        hasPreviousGroup: response.data?.hasPreviousGroup
      });

      const startPage = response.data?.startPage;
      setStartPage(startPage);

      let pages:number[] = [];
      let maxPage = Math.min(startPage + 9, response.data?.totalPages) - response.data?.currentGroup * 10;

      console.log('maxPage ', maxPage)

      for (let i = 0; i < maxPage; i ++) {
        pages = [...pages, startPage + i];
      }
  
      setPages([...pages]);
    }

    getBoardList();
  }, []);

  const goPrev = () => {
    if (startPage == 1) return;

    location.href = `${pathname}?page=${startPage - 10}`;
  }
  
  const goNext = () => {

    location.href = `${pathname}?page=${startPage + 10}`;
  }

  const goList = (page:number) => {
    
    location.href = `${pathname}?page=${page}`;
  }

  return (
    <>
      <div className="giver-content">
        <div className="auto">
          <div className={styles.content}>
            <div className="right-top">
              <h3>공지사항</h3>
            </div>

            <article className="right-bottom">
              <div className="right-bottom-title">
                <ul>
                  <li style={{ width: "20%" }}>번호</li>
                  <li style={{ width: "50%" }}>제목</li>
                  <li style={{ width: "20%" }}>등록일</li>
                </ul>
              </div>

              <div className="right-bottom-container">
                    {
                      boardList.map((item:any, idx) => {
                        return (
                          <div className="right-bottom-item" key={`test-${idx}`}>
                            <Link href={`/giver/${item?.bno}`} key={idx}>
                              <ul>
                                <li>공지</li>
                                <li className={styles.title}>{item?.title || `게시글 ${idx}`}</li>
                                <li>{item?.createdAt.split('T')[0]}</li>
                              </ul>
                            </Link>
                          </div>
                        )
                      })
                    }
                    
              </div>
            </article>

            <div className={styles.pageArea}>
              <ul>
                {
                  groupBtn?.hasPreviousGroup &&
                  <li onClick={goPrev}>
                    &lt;
                  </li>

                }
              {
                pages.map((item:any, idx:number) => {
                  return (
                   <li onClick={() => goList(item)}>
                    {item}
                   </li> 
                  )
                })
              }
              {
                groupBtn?.hasNextGroup &&
                <li onClick={goNext}>
                  &gt;
                </li>
              }
              </ul>
            </div>

            {isLogged && (
              <Link href={`/write`}>
                <button className={styles.writeBtn}>
                  글쓰기
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
