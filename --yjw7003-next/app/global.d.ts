export {};

declare global {
  interface Window {
    naver: typeof naver;
  }

  // naver 객체 타입 최소 정의 (필요한 것만)
  namespace naver {
    namespace maps {
      class LatLng {
        constructor(lat: number, lng: number);
      }
      class Map {
        constructor(el: HTMLElement, options?: any);
      }
      class Marker {
        constructor(options: { position: LatLng; map: Map });
      }
      class InfoWindow {
        constructor(options: { content: string });
        open(map: Map, marker: Marker): void;
      }
    }
  }
}
