"use client";

import { MapPin, Bus, Car, Phone } from "lucide-react";
import styles from "@/styles/Location.module.scss";
import { useEffect, useRef } from "react";

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.naver?.maps) return;

      const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(37.791801, 127.0803647),
        zoom: 16,
      });

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.791801, 127.0803647),
        map,
      });
    };

    if (window.naver?.maps) {
      initMap();
    } else {
      window.addEventListener("naver-map-loaded", initMap);
      return () => window.removeEventListener("naver-map-loaded", initMap);
    }
  }, []);

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>오시는 길</h2>

      <section className={styles.mapSection}>
        <div
          id="map"
          ref={mapRef}
          style={{ width: "100%", height: "276px", border: "1px solid #ddd" }}
        />
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoItem}>
          <MapPin className={styles.icon} />
          <div>
            <h3>주소</h3>
            <p>경기도 양주시 고읍남로 191번길 70-5, 102호(광사동, 우진빌)</p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <Phone className={styles.icon} />
          <div>
            <h3>연락처</h3>
            <p>Tel : 031-846-7004</p>
            <p>Email : yjw7003@naver.com</p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <Bus className={styles.icon} />
          <div>
            <h3>대중교통 이용</h3>
            <p>지하철 경기도청북부청사역 하차 후, 8906번 버스 이용</p>
            <p>
              버스 8906, 유승한내들9단지.한양수자인2단지 하차 정류장에서 도보
              5분
            </p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <Car className={styles.icon} />
          <div>
            <h3>자가용 이용</h3>
            <p>네비게이션에서 "양주시여성장애인어울림센터" 검색</p>
            <p>센터 내 주차장 이용 가능</p>
          </div>
        </div>
      </section>
    </main>
  );
}
