'use client';

import { useState, useEffect } from 'react';
import { questions } from '@/data/questions';
import { results, getResultType, getPercentage, Result } from '@/data/results';
import { initKakao, shareToKakao } from '@/lib/kakao';
import {
  trackTestStart,
  trackQuestionAnswer,
  trackTestComplete,
  trackShare,
  trackRetry,
} from '@/lib/gtag';

type Screen = 'start' | 'question' | 'loading' | 'result';

export default function Home() {
  const [screen, setScreen] = useState<Screen>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    initKakao();
  }, []);

  const handleStart = () => {
    trackTestStart();
    setScreen('question');
    setCurrentQuestion(0);
    setScores([]);
  };

  const handleAnswer = (score: number) => {
    const newScores = [...scores, score];
    setScores(newScores);
    trackQuestionAnswer(currentQuestion + 1, score);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 마지막 질문 - 로딩 화면으로
      setScreen('loading');

      // 점수 계산
      const totalScore = newScores.reduce((sum, s) => sum + s, 0);
      const resultType = getResultType(totalScore);
      const pct = getPercentage(totalScore);

      // 1.5초 후 결과 표시
      setTimeout(() => {
        setResult(results[resultType]);
        setPercentage(pct);
        trackTestComplete(resultType, pct);
        setScreen('result');
      }, 1500);
    }
  };

  const handleShare = () => {
    if (result) {
      trackShare('kakao');
      shareToKakao(result, percentage);
    }
  };

  const handleRetry = () => {
    trackRetry();
    setScreen('start');
    setCurrentQuestion(0);
    setScores([]);
    setResult(null);
    setPercentage(0);
  };

  // 시작 화면
  if (screen === 'start') {
    return (
      <div className="card max-w-md w-full text-center fade-in">
        <div className="text-6xl mb-4">🔥</div>
        <h1 className="text-3xl font-bold mb-2">퇴사각 측정기</h1>
        <p className="text-gray-500 mb-8">"나 지금 버틸 만해...?"</p>

        <button onClick={handleStart} className="btn-primary mb-4">
          테스트 시작하기
        </button>

        <p className="text-sm text-gray-400">10문항 · 1분 소요</p>
      </div>
    );
  }

  // 질문 화면
  if (screen === 'question') {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="card max-w-md w-full fade-in">
        {/* 프로그레스바 */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>진행중</span>
            <span>
              {currentQuestion + 1}/{questions.length}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-600 progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 질문 */}
        <div className="mb-6">
          <span className="text-purple-600 font-bold">Q{question.id}.</span>
          <h2 className="text-xl font-bold mt-1">{question.question}</h2>
        </div>

        {/* 선택지 */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.score)}
              className="option-button"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 로딩 화면
  if (screen === 'loading') {
    return (
      <div className="card max-w-md w-full text-center fade-in">
        <div className="text-4xl mb-4 spinner">🔄</div>
        <h2 className="text-xl font-bold mb-2">분석 중...</h2>
        <p className="text-gray-500">당신의 퇴사각을 계산하고 있어요</p>
      </div>
    );
  }

  // 결과 화면
  if (screen === 'result' && result) {
    return (
      <div className="card max-w-md w-full text-center fade-in">
        {/* 결과 타입 */}
        <div className="mb-4">
          <span className="text-5xl">{result.emoji}</span>
        </div>

        <div
          className={`inline-block px-4 py-1 rounded-full text-white text-sm font-bold mb-2 ${result.bgColor}`}
        >
          {result.label}
        </div>

        {/* 퍼센트 */}
        <div className="text-4xl font-bold mb-4">{percentage}%</div>

        {/* 헤드라인 */}
        <h2 className="text-xl font-bold mb-4">"{result.headline}"</h2>

        {/* 설명 */}
        <p className="text-gray-600 mb-4 leading-relaxed">{result.description}</p>

        {/* 조언 */}
        <p className={`font-medium mb-8 ${result.color}`}>"{result.advice}"</p>

        {/* 버튼들 */}
        <div className="space-y-3">
          <button onClick={handleShare} className="btn-kakao">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.82 5.31 4.56 6.73-.16.57-.58 2.07-.67 2.39-.11.4.15.39.31.28.13-.08 2.04-1.38 2.87-1.94.63.09 1.28.14 1.93.14 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
            </svg>
            카카오톡 공유하기
          </button>

          <button onClick={handleRetry} className="btn-secondary">
            다시 하기
          </button>
        </div>

        {/* 면책 문구 */}
        <p className="text-xs text-gray-400 mt-6">
          이 테스트는 재미를 위한 것이며, 전문적인 진단을 대체하지 않습니다.
          <br />
          정말 힘드시다면 전문가 상담을 권합니다.
        </p>

        {/* 광고 영역 (placeholder) */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg text-gray-400 text-sm">
          광고 영역
        </div>
      </div>
    );
  }

  return null;
}
