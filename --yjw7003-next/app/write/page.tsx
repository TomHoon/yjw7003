"use client";

import styles from "@/styles/Write.module.scss";
import { write } from "fs";
import { useRef, useState } from "react";

type OptionalFile = File | undefined | null | string | any;

export default function Write() {
  const [writeInfo, setWriteInfo] = useState({});
  const [attachedList, setAttachedList] = useState<OptionalFile[]>([]);
  const editorRef = useRef<HTMLDivElement>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const hiddenImageInput = useRef<HTMLInputElement>(null);

  const prevUploadImage = () => {
    hiddenImageInput.current?.click();
  };

  const prevUploadFile = () => {
    hiddenFileInput.current?.click();
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const img = document.createElement("img");

    const formData: any = new FormData();
    formData.append("file", e.target?.files?.[0]);

    const res = await fetch("https://tomhoon.my/api/v1/board/uploadImage", {
      method: "POST",
      body: formData,
    });

    const response = await res.json();

    if (editorRef.current) {
      const img = document.createElement("img");
      img.src = "https://tomhoon.my/" + response?.data?.imageURL;
      img.classList.add("editorImage");

      editorRef.current.appendChild(img);
    }
  };

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttachedList([...attachedList, e.target.files?.[0]]);
  };

  const removeFile = (fileIdx: number) => {
    const temp = [...attachedList];
    temp.splice(fileIdx, 1);
    setAttachedList([...temp]);
  };

  const goWrite = async () => {
    const memberId = localStorage.getItem("memberId");

    let info: any = {
      ...writeInfo,
      writer: memberId,
      content: editorRef.current?.innerHTML,
    };

    const 업로드파일리스트: any = [...attachedList];

    const formData = new FormData();
    const jsonStr = JSON.stringify(info);
    formData.append("board", new Blob([jsonStr], { type: "application/json" }));

    업로드파일리스트.forEach((item: string | Blob | any) => {
      formData.append("attachList", item);
    });

    const res = await fetch("https://tomhoon.my/api/v1/board/regist", {
      method: "POST",
      body: formData,
    });

    const response = await res.json();
  };

  return (
    <>
      <div className="auto">
        <article className="right-bottom">
          <div className="info-container">
            <div className={styles.titleArea}>
              <input
                type="text"
                className="write-title"
                placeholder="제목을 입력해주세요"
                onChange={(e) =>
                  setWriteInfo({ ...writeInfo, title: e.target.value })
                }
              />
            </div>
          </div>

          <div className="info-content-container">
            <div className="auto">
              <div className={styles.fileIconsContainer}>
                <ul className={styles.fileIcons}>
                  <li>
                    <img
                      src="/images/file.png"
                      alt=""
                      onClick={prevUploadImage}
                    />
                  </li>
                  <li>
                    <img
                      src="/images/paperclip.png"
                      alt=""
                      onClick={prevUploadFile}
                    />
                  </li>
                </ul>
              </div>
              <div className="info-content">
                {/* 에디터 */}
                <div
                  ref={editorRef}
                  className={styles.editor}
                  contentEditable="true"
                />
              </div>

              {/* input-image */}
              <input
                type="file"
                name=""
                id=""
                hidden
                ref={hiddenImageInput}
                onChange={(e) => uploadImage(e)}
              />
              {/* input-file */}
              <input
                type="file"
                name=""
                id=""
                hidden
                ref={hiddenFileInput}
                onChange={(e) => uploadFile(e)}
              />

              {attachedList.length > 0 && (
                <div className="info-content-footer">
                  <ul>
                    <li>첨부파일</li>

                    {attachedList.map((item: any, idx) => (
                      <li className={styles.fileInfo} key={idx}>
                        {item?.name}
                        <img
                          src="/images/x.png"
                          alt=""
                          onClick={() => removeFile(idx)}
                        />
                      </li>
                    ))}

                    {/* <li className={styles.fileInfo}>
                        <a
                          href="/pdf/기부금모금액수입명세서-공지용.pdf"
                          target="_blank"
                          download="/pdf/기부금모금액수입명세서-공지용.pdf"
                        >
                          기부금모금액수입명세서-공지용.pdf
                        </a>
                        <img src="/images/x.png" alt="" />
                      </li> */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </article>

        <div className={styles.writeBottom}>
          <button onClick={goWrite}>등록</button>
        </div>
      </div>
    </>
  );
}
