import { Result } from '@/data/results';

declare global {
  interface Window {
    Kakao: any;
  }
}

export const initKakao = () => {
  if (typeof window !== 'undefined' && window.Kakao) {
    if (!window.Kakao.isInitialized()) {
      // TODO: 본인의 카카오 JavaScript 키로 교체하세요
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }
  }
};

export const shareToKakao = (result: Result, percentage: number) => {
  if (typeof window !== 'undefined' && window.Kakao) {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '🔥 퇴사각 측정기',
        description: `나의 퇴사각: ${percentage}% (${result.label} ${result.emoji})\n"${result.headline}"`,
        imageUrl: `${window.location.origin}/og-image.png`, // TODO: OG 이미지 추가
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '나도 측정하기',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    });
  }
};
