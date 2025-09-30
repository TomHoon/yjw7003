"use client";

import styles from "@/styles/Introduction.module.scss";

export default function Introduction() {
  return (
    <main className={styles.main}>
      <section className={styles.imageSection}>
        <img src="/images/introduction.jpg" alt="복지관 소개 이미지" />
      </section>

      <section className={styles.greeting}>
        <h2>복지관 인사말</h2>
        <p>
          첫 발걸음을 내딛는 이 마음을 늘 간직하며, 지역사회와 함께 성장하고
          발전하는 복지관이 되겠습니다. 앞으로 복지관이 나아가는 길에 따뜻한
          동행이 되어주시길 바랍니다.
        </p>

        {/* 설립 배경 & 운영 철학 */}
        <div id="here">
          <h3>설립 배경</h3>
          <p>
            양주시여성장애인어울림센터는 여성 장애인분들이 지역사회 안에서 차별
            없이 존중받고, 스스로의 삶을 주체적으로 살아갈 수 있도록 돕기 위해
            설립되었습니다. 여성 장애인은 가정과 사회에서 복합적인 어려움에
            직면해 왔으며, 돌봄의 사각지대, 취업과 교육 기회의 제한, 문화·여가
            참여의 부족 등은 삶을 위축시키는 큰 요인으로 작용했습니다.
          </p>
          <p>
            이에 양주시는 지역사회와 함께, 여성 장애인의{" "}
            <span className={styles.highlight}>자립·참여·소통</span>을 보장하는
            안전망을 마련하고자 본 센터를 설립하였습니다.
          </p>

          <h3>운영 철학</h3>
          <ul className={styles.philosophyList}>
            <li>
              <span className={styles.highlight}>인권 존중</span> — 모든 여성
              장애인은 존엄과 권리를 가진 사회의 동등한 구성원임을 최우선 가치로
              삼습니다.
            </li>
            <li>
              <span className={styles.highlight}>자립 지원</span> — 단순한
              보호와 돌봄을 넘어, 스스로의 삶을 선택하고 결정할 수 있도록 교육과
              일자리, 역량 강화를 지원합니다.
            </li>
            <li>
              <span className={styles.highlight}>지역과의 어울림</span> —
              장애인과 비장애인이 함께 어울리는 포용적 공동체를 지향하며,
              지역사회와의 협력을 통해 지속 가능한 복지를 실현합니다.
            </li>
            <li>
              <span className={styles.highlight}>성평등 실현</span> —
              여성으로서, 장애인으로서 겪는 이중의 차별을 해소하고, 성평등한
              사회 환경을 조성하는 데 앞장섭니다.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.missionVision}>
        <div>
          <h3>미션</h3>
          <p>
            여성 장애인의 자립과 권익 향상을 지원하고, 모두가 함께 어울리는
            포용적 지역사회를 실현합니다.
          </p>
        </div>
        <div>
          <h3>비전</h3>
          <p>모든 세대가 함께 누리는 포용적 복지공동체 구축</p>
        </div>
      </section>

      <section className={styles.services}>
        <h2>주요 사업 및 서비스</h2>
        <ul>
          <li>일상생활 지원 서비스</li>
          <li>건강증진 프로그램 (운동, 인지활동 등)</li>
          <li>사회참여 및 여가활동 지원</li>
          <li>가족지원 서비스 및 상담</li>
        </ul>
      </section>
    </main>
  );
}
