declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// 페이지뷰 트래킹
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

// 이벤트 트래킹
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// 주요 이벤트들
export const trackTestStart = () => {
  event({
    action: 'test_start',
    category: 'engagement',
  });
};

export const trackQuestionAnswer = (questionId: number, score: number) => {
  event({
    action: 'question_answer',
    category: 'engagement',
    label: `Q${questionId}`,
    value: score,
  });
};

export const trackTestComplete = (resultType: string, percentage: number) => {
  event({
    action: 'test_complete',
    category: 'conversion',
    label: resultType,
    value: percentage,
  });
};

export const trackShare = (method: string) => {
  event({
    action: 'share',
    category: 'engagement',
    label: method,
  });
};

export const trackRetry = () => {
  event({
    action: 'retry',
    category: 'engagement',
  });
};
