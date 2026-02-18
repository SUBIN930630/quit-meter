import { Result } from '@/data/results';

declare global {
  interface Window {
    Kakao: any;
  }
}

export const initKakao = () => {
  if (typeof window !== 'undefined' && window.Kakao) {
    if (!window.Kakao.isInitialized()) {
      const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
      if (kakaoKey) {
        window.Kakao.init(kakaoKey);
        console.log('Kakao SDK initialized:', window.Kakao.isInitialized());
      } else {
        console.error('Kakao JS Key is missing');
      }
    }
  }
};

export const shareToKakao = (result: Result, percentage: number) => {
  if (typeof window === 'undefined') return;

  // SDK 로드 확인
  if (!window.Kakao) {
    alert('카카오 SDK를 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
    return;
  }

  // SDK 초기화 확인 및 시도
  if (!window.Kakao.isInitialized()) {
    initKakao();

    // 초기화 후에도 실패한 경우
    if (!window.Kakao.isInitialized()) {
      alert('카카오 SDK 초기화에 실패했습니다. 페이지를 새로고침 해주세요.');
      console.error('Kakao SDK initialization failed. Check NEXT_PUBLIC_KAKAO_JS_KEY in .env');
      return;
    }
  }

  // Share 객체 확인
  if (!window.Kakao.Share) {
    alert('카카오톡 공유 기능을 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
    console.error('Kakao.Share is not available. Make sure the SDK is fully loaded.');
    return;
  }

  try {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '🔥 퇴사각 측정기',
        description: `나의 퇴사각: ${percentage}% (${result.label} ${result.emoji})\n"${result.headline}"`,
        imageUrl: 'https://quit-meter-app.vercel.app/og-image.png',
        link: {
          mobileWebUrl: 'https://quit-meter-app.vercel.app',
          webUrl: 'https://quit-meter-app.vercel.app',
        },
      },
      buttons: [
        {
          title: '나도 측정하기',
          link: {
            mobileWebUrl: 'https://quit-meter-app.vercel.app',
            webUrl: 'https://quit-meter-app.vercel.app',
          },
        },
      ],
    });
  } catch (error) {
    console.error('Kakao share error:', error);
    alert('공유하기에 실패했습니다. 다시 시도해주세요.');
  }
};