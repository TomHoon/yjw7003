'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import styles from '@/styles/Detail.module.scss';
import Modal from '@/components/Modal';

interface Params {
  params: { idx: string };
}

export default function GiverDetail() {
  const params = useParams();
  const idx = params?.idx as string;

  const [info, setInfo] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false);

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
        contentRef.current.innerHTML = response?.data?.content || '통신오류';
      }
    };

    fetchApi();
  }, []);

  const showAttached = (item: any) => {
    let filePath = item.filePath.replace('uploads/', '');

    const needEncoding = /[^a-zA-Z0-9_.\-\uAC00-\uD7A3]/.test(filePath);

    if (needEncoding) {
      filePath = encodeURIComponent(filePath);
    }

    const url = `${process.env.NEXT_PUBLIC_API_URL}/uploads/${filePath}`;
    location.href = url;
  };

  const deleteBoard = async (bno: Number) => {
    const isConfirmed = confirm('삭제하시겠습니까?');

   if (!isConfirmed) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/board/delete/${bno}`,
      {
        method: 'DELETE'
      }
    );

    if (res.status >= 400) {
      console.error('error ! ', res);
    } else {
      location.href = "/giver";
    }
  };

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
                  <dd>{info?.writer || '관리자'}</dd>

                  <dt>등록일</dt>
                  <dd>{info?.createdAt?.split('T')[0]}</dd>
                </dl>
              </div>
              <button
                className="giver-del-btn"
                onClick={() => deleteBoard(info.bno)}
              >
                삭제
              </button>
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
                            {/* <a
                              href={`${process.env.NEXT_PUBLIC_API_URL}/${item.filePath}`}
                              target="_blank"
                              download={item}
                            >
                              {item?.fileName}
                            </a> */}
                            <button
                              className={styles.attachedButton}
                              onClick={() => showAttached(item)}
                            >
                              {item?.fileName.replace('uploads/', '')}
                            </button>
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


      {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>정말 삭제하시겠습니까?</p>

        <button className={styles.modalDelBtn} onClick={() => deleteBoard}>
          확인
        </button>
      </Modal> */}
    </div>
  );
}
