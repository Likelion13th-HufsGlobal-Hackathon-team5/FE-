// src/pages/login.jsx
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

// ===== 이미지 & 폰트 불러오기 =====
import bgImage from "../assets/signup-bg.png";
import yong from "../assets/login-yong.png";
import cloud from "../assets/구름.png";
import miniCloud from "../assets/미니구름.png";
import titleImg from "../assets/요기용인.png";

import JoyB from "../fonts/TJJoyofsingingB_TTF.ttf";  // Bold 폰트
import JoyM from "../fonts/TJJoyofsingingM_TTF.ttf";  // Medium 폰트

// ===== 전역 폰트 등록 =====
const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'JoyB';
    src: url(${JoyB}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'JoyM';
    src: url(${JoyM}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

export default function Login() {
  const nav = useNavigate();

  return (
    <Stage>
      <Container>
        <FontStyles />

        {/* 페이지 상단 타이틀 이미지 */}
        <Title src={titleImg} alt="요기용in" />

        {/* 아이디 / 비밀번호 입력 폼 */}
        <Form>
          <InputBox placeholder="아이디를 입력해주세요." />
          <InputBox type="password" placeholder="비밀번호를 입력해주세요." />
        </Form>

        {/* 로그인 / 회원가입 버튼 */}
        <Buttons>
          <LoginBtn type="button">로그인</LoginBtn>
          <SignupBtn type="button" onClick={() => nav("/signin")}>
            회원가입
          </SignupBtn>
        </Buttons>

        {/* 배경 장식 요소 */}
        <Cloud src={cloud} alt="구름" />
        <MiniCloud src={miniCloud} alt="미니 구름" />

        {/* 말풍선 */}
        <SpeechBubble>
          용인 축제<br />알려줄게용! 
        </SpeechBubble>

        {/* 용 캐릭터 */}
        <Yong src={yong} alt="용" />
      </Container>
    </Stage>
  );
}

/* ===== 레이아웃 & 스타일 ===== */

/* 전체 화면을 중앙 정렬하는 래퍼 */
const Stage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 메인 컨테이너 */
const Container = styled.div`
  position: relative;
  width: 24.5625rem;  /* 393px */
  height: 53.25rem;   /* 852px */
  background: url(${bgImage}) no-repeat center center;
  background-size: contain;
  padding: 2.5rem 1.25rem; /* 40px 20px */
  overflow: hidden;
`;

/* 타이틀 로고 */
const Title = styled.img`
  position: absolute;
  top: 7.5rem; /* 96px */
  left: 50%;
  transform: translateX(-50%);
  width: 18rem; /* 288px */
  height: auto;
  z-index: 3;
  pointer-events: none;
`;

/* 폼 영역 */
const Form = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 15rem; /* 240px */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem; /* 20px */
`;

/* 입력 박스 */
const InputBox = styled.input`
  width: 19rem;
  height: 3.5rem;
  border: 0.125rem solid #8F8F8F; /* 2px */
  border-radius: 0.625rem; /* 10px */
  font-size: 1.125rem; /* 18px */
  padding-left: 1rem; /* 16px */
  outline: none;
  font-family: 'JoyM', sans-serif;

  &::placeholder {
    font-family: 'JoyM', sans-serif;
  }
`;

/* 버튼 그룹 */
const Buttons = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9375rem; /* 15px */
`;

/* 버튼 공통 스타일 */
const baseBtn = `
  width: 8.125rem; /* 130px */
  height: 3.25rem;
  border-radius: 6.25rem; /* 100px */
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JoyB', sans-serif;
  font-size: 1.125rem; /* 18px */
  box-shadow: 0.125rem 0.125rem 0 rgba(0,0,0,0.5);
`;

/* 로그인 버튼 */
const LoginBtn = styled.button`
  ${baseBtn}
  background: #66CE94;
  color: #fff;
`;

/* 회원가입 버튼 */
const SignupBtn = styled.button`
  ${baseBtn}
  background: #FCFAF0;
  color: #000;
`;

/* 큰 구름 */
const Cloud = styled.img`
  position: absolute;
  left: -1rem; /* -16px */
  bottom: 0;
  width: 30rem; /* 480px */
  z-index: 1;
`;

/* 작은 구름 */
const MiniCloud = styled.img`
  position: absolute;
  right: 0.5rem; /* 8px */
  bottom: 0;
  width: 13rem; /* 208px */
  z-index: 1;
`;

/* 말풍선 */
const SpeechBubble = styled.div`
  position: absolute;
  right: 1.2rem;
  bottom: 12rem;
  background: #00C674;
  color: #fff;
  padding: 1rem 1.75rem;
  border-radius: 100rem;
  font-family: 'JoyM', sans-serif;
  font-size: 1rem;
  line-height: 1.4;
  z-index: 3;
  white-space: pre-line;
  transform: rotate(12deg); /* 말풍선 자체 회전 */

  &::after {
    content: '';
    position: absolute;
    bottom: -0.6rem; /* 회전 후 살짝 조정 */
    left: 1.5rem;    /* 회전 후 꼬리 위치 조정 */
    border-width: 0.6rem;
    border-style: solid;
    border-color: #00C674 transparent transparent transparent;
    transform: rotate(-18deg); /* 꼬리는 반대로 회전해서 글씨와 맞춤 */
  }
`;


/* 용 캐릭터 */
const Yong = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  z-index: 2;
`;
