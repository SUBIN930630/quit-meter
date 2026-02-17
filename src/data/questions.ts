export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "월요일 아침, 알람이 울렸을 때 기분은?",
    options: [
      { text: "그냥 일어남", score: 1 },
      { text: "5분만... 하고 미룸", score: 2 },
      { text: "출근 생각에 눈 감고 싶음", score: 3 },
      { text: "아파서 못 간다고 할까 고민함", score: 4 },
    ],
  },
  {
    id: 2,
    question: "요즘 퇴근 후 주로 뭐 해요?",
    options: [
      { text: "운동/취미/약속", score: 1 },
      { text: "유튜브/넷플릭스 보다 잠듦", score: 2 },
      { text: "아무것도 안 하고 멍함", score: 3 },
      { text: "퇴근해도 일 생각남", score: 4 },
    ],
  },
  {
    id: 3,
    question: '최근 "이 일 왜 하지?" 생각한 적 있어요?',
    options: [
      { text: "거의 없음", score: 1 },
      { text: "가끔", score: 2 },
      { text: "자주", score: 3 },
      { text: "매일", score: 4 },
    ],
  },
  {
    id: 4,
    question: "야근 빈도는?",
    options: [
      { text: "거의 안 함", score: 1 },
      { text: "주 1~2회", score: 2 },
      { text: "주 3~4회", score: 3 },
      { text: "야근이 기본임", score: 4 },
    ],
  },
  {
    id: 5,
    question: "점심시간에 뭐 해요?",
    options: [
      { text: "동료랑 밥 먹고 산책", score: 1 },
      { text: "혼밥하고 쉼", score: 2 },
      { text: "밥 먹으면서 일함", score: 3 },
      { text: "점심 거르는 날도 많음", score: 4 },
    ],
  },
  {
    id: 6,
    question: "주말에 푹 쉬어도 월요일 컨디션은?",
    options: [
      { text: "충전 완료!", score: 1 },
      { text: "그럭저럭", score: 2 },
      { text: "쉰 것 같지 않음", score: 3 },
      { text: "주말에도 못 쉼", score: 4 },
    ],
  },
  {
    id: 7,
    question: "요즘 잠은 잘 자요?",
    options: [
      { text: "잘 잠", score: 1 },
      { text: "좀 뒤척임", score: 2 },
      { text: "자주 깸/잠들기 어려움", score: 3 },
      { text: "수면제 고민 중", score: 4 },
    ],
  },
  {
    id: 8,
    question: "칭찬받으면 기분이?",
    options: [
      { text: "기분 좋음", score: 1 },
      { text: "그냥 그럼", score: 2 },
      { text: "별 감흥 없음", score: 3 },
      { text: "오히려 부담됨", score: 4 },
    ],
  },
  {
    id: 9,
    question: "요즘 자주 하는 생각은?",
    options: [
      { text: "이번 주 뭐 먹지?", score: 1 },
      { text: "휴가 언제 쓰지?", score: 2 },
      { text: "이직해야 하나?", score: 3 },
      { text: "퇴사하면 뭐 하고 살지...", score: 4 },
    ],
  },
  {
    id: 10,
    question: "지금 이 테스트 왜 하고 있어요?",
    options: [
      { text: "심심해서/재미로", score: 1 },
      { text: "요즘 좀 지쳐서", score: 2 },
      { text: "진짜 번아웃인지 궁금해서", score: 3 },
      { text: "퇴사 전 마지막 확인...", score: 4 },
    ],
  },
];
