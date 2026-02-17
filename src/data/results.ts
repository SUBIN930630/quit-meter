export type ResultType = 'safe' | 'caution' | 'danger' | 'critical';

export interface Result {
  type: ResultType;
  emoji: string;
  label: string;
  color: string;
  bgColor: string;
  headline: string;
  description: string;
  advice: string;
}

export const results: Record<ResultType, Result> = {
  safe: {
    type: 'safe',
    emoji: '🟢',
    label: '안전',
    color: 'text-green-500',
    bgColor: 'bg-green-500',
    headline: '아직 멀쩡해요, 근데 과신 금지',
    description: '지금은 괜찮아 보이지만, 번아웃은 갑자기 와요. 지금처럼 적당히 쉬면서 페이스 유지하세요.',
    advice: '건강할 때 건강 챙기기',
  },
  caution: {
    type: 'caution',
    emoji: '🟡',
    label: '주의',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500',
    headline: '슬슬 노란불 들어왔어요',
    description: '지금 무리하면 금방 지쳐요. 이번 주 안에 반차라도 쓰세요. 진심으로요.',
    advice: '쉬는 것도 능력입니다',
  },
  danger: {
    type: 'danger',
    emoji: '🟠',
    label: '위험',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500',
    headline: '지금 쉬어야 해요, 진짜로',
    description: '이미 몸과 마음이 신호 보내고 있어요. 휴가 쓰기 어려우면 병원이라도 가세요.',
    advice: '회사는 당신 없어도 돌아가요',
  },
  critical: {
    type: 'critical',
    emoji: '🔴',
    label: '심각',
    color: 'text-red-500',
    bgColor: 'bg-red-500',
    headline: '사직서 어디 뒀더라...',
    description: '번아웃 거의 확정이에요. 지금 버티는 게 오히려 손해일 수 있어요. 진지하게 쉬거나, 진지하게 나가거나.',
    advice: '이직은 도망이 아니에요',
  },
};

export const getResultType = (score: number): ResultType => {
  if (score <= 17) return 'safe';
  if (score <= 25) return 'caution';
  if (score <= 33) return 'danger';
  return 'critical';
};

export const getPercentage = (score: number): number => {
  // 10~40점 → 0~100%
  return Math.round(((score - 10) / 30) * 100);
};
