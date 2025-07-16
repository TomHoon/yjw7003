"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import styles from "@/styles/Detail.module.scss";

interface Params {
  params: { idx: string };
}

export default function GiverDetail() {
  const params = useParams();
  const idx = params?.idx as string;

  const [info, setInfo] = useState<any>({});
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/board/detail/${idx}`
      );
      const response = await res.json();

      console.log(response);
      setInfo({ ...response.data });

      if (contentRef?.current) {
        contentRef.current.innerHTML = response?.data?.content || "통신오류";
      }
    };

    fetchApi();
  }, []);

  return (
    <div className="giver-content">
      <div className="auto">
        <div className="right-content">
          <div className="right-top">
            <h3 className={styles.title}>후원 및 기부</h3>
          </div>

          <article className="right-bottom">
            <div className="info-container">
              <div className="title">
                <h3>{info?.title}</h3>
              </div>
              <div className="sub-info">
                <dl>
                  <dt>작성자</dt>
                  <dd>관리자</dd>

                  <dt>등록일</dt>
                  <dd>{info?.createdAt?.split("T")[0]}</dd>
                </dl>
              </div>
            </div>

            <div className="info-content-container">
              <div className="auto">
                <div
                  className={`info-content ${styles.content}`}
                  ref={contentRef}
                >
                  <div className="giver-list-table"></div>
                </div>

                {info.fileUploadList?.length > 0 && (
                  <div className="info-content-footer">
                    <ul>
                      <li>첨부파일</li>
                      {info.fileUploadList.map((item: any, idx: number) => {
                        return (
                          <li key={idx}>
                            <a
                              href={`${process.env.NEXT_PUBLIC_API_URL}/${item.filePath}`}
                              target="_blank"
                              download={item}
                            >
                              {item?.fileName}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
