import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import bgImage from "../assets/signup-bg.png";

// ===== 폰트 파일 불러오기 =====
import DNFBitBit from "../fonts/DNFBitBitTTF.ttf";
import JoyM from "../fonts/TJJoyofsingingM_TTF.ttf";

// ===== 전역 폰트 등록 =====
const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'DNFBitBitTTF';
    src: url(${DNFBitBit}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'JoyM';
    src: url(${JoyM}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

export default function Signin() {
  // ===== 상태 관리 =====
  const [id, setId] = useState(""); // 아이디 입력값
  const [isIdAvailable, setIsIdAvailable] = useState(null); // 아이디 사용 가능 여부
  const [password, setPassword] = useState(""); // 비밀번호 입력값
  const [passwordConfirm, setPasswordConfirm] = useState(""); // 비밀번호 확인 입력값
  const [isPasswordMatch, setIsPasswordMatch] = useState(null); // 비밀번호 일치 여부

  // 아이디 중복 확인
  const checkIdAvailability = () => {
    if (id === "test") {
      setIsIdAvailable(false); // 이미 사용 중
    } else {
      setIsIdAvailable(true); // 사용 가능
    }
  };

  // 비밀번호 확인 로직
  const handlePasswordConfirm = (value) => {
    setPasswordConfirm(value);
    setIsPasswordMatch(value === password && value.length > 0);
  };

  return (
    <Container>
      <FontStyles /> {/* 전역 폰트 적용 */}

      <Title>회원가입</Title>

      <Form>
        {/* 닉네임 입력 */}
        <InputBox placeholder="닉네임" />

        {/* 출생연도 입력 */}
        <div>
          <InputBox placeholder="출생연도" inputMode="numeric" maxLength={4} />
          <Helper>예) 2004</Helper>
        </div>

        {/* 아이디 입력 + 중복 확인 버튼 */}
        <div>
          <IdRow>
            <IdInput
              placeholder="아이디"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <CheckButton onClick={checkIdAvailability}>
              중복<br />확인
            </CheckButton>
          </IdRow>
          {/* 아이디 사용 가능 여부 메시지 */}
          {isIdAvailable !== null && (
            <Helper
              style={{
                color: isIdAvailable ? "#00CA98" : "#FF5656",
              }}
            >
              {isIdAvailable
                ? "사용 가능한 아이디입니다!"
                : "이미 사용 중입니다!"}
            </Helper>
          )}
        </div>

        {/* 비밀번호 입력 */}
        <InputBox
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 비밀번호 확인 입력 */}
        <div>
          <InputBox
            type="password"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={(e) => handlePasswordConfirm(e.target.value)}
          />
          {/* 비밀번호 일치 여부 메시지 */}
          {isPasswordMatch !== null && (
            <Helper
              style={{
                color: isPasswordMatch ? "#00CA98" : "#FF5656",
              }}
            >
              {isPasswordMatch
                ? "비밀번호가 일치합니다!"
                : "비밀번호가 일치하지 않습니다!"}
            </Helper>
          )}
        </div>

        {/* 가입하기 버튼 */}
        <SignUpButton>가입하기</SignUpButton>
      </Form>
    </Container>
  );
}

/* ===== styled-components 정의 ===== */

/* 전체 페이지 컨테이너 */
const Container = styled.div`
  width: 393px;
  height: 852px;
  background: url(${bgImage}) no-repeat center center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.25rem; /* 상 40px, 좌우 20px */
  margin: 0 auto;
`;

/* 페이지 제목 */
const Title = styled.h1`
  font-size: 3rem; /* 48px */
  color: #4CAF50;
  margin-top: 3.75rem; /* 60px */
  font-family: 'JoyM', sans-serif;
`;

/* 입력 폼 컨테이너 */
const Form = styled.div`
  width: 17.25rem; /* 276px */
  margin-top: 1.875rem; /* 30px */
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.875rem; /* 각 요소 간 30px 간격 */
`;

/* 기본 입력 박스 */
const InputBox = styled.input`
  width: 17.25rem; /* 276px */
  height: 3rem; /* 48px */
  box-sizing: border-box;
  border: 0.125rem solid #8F8F8F; /* 2px */
  border-radius: 0.625rem; /* 10px */
  font-size: 1rem;
  padding-left: 1rem;
  outline: none;
  font-family: 'JoyM', sans-serif;

  &::placeholder {
    font-family: 'JoyM', sans-serif;
  }
`;

/* 보조 텍스트 (예시, 경고, 성공 메시지) */
const Helper = styled.p`
  margin: 0;
  padding-top: 0.625rem; /* 10px */
  font-size: 1rem;
  text-align: left;
  font-family: 'JoyM', sans-serif;
`;

/* 아이디 입력 줄 (입력창 + 버튼) */
const IdRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem; /* 5px */
`;

/* 아이디 입력창 (폭 줄임) */
const IdInput = styled(InputBox)`
  width: 221px;
  flex: none;
`;

/* 중복 확인 버튼 */
const CheckButton = styled.button`
  width: 50px;
  height: 3rem;
  background-color: #32885D;
  color: #fff;
  font-size: 0.8125rem; /* 13px */
  border: none;
  border-radius: 0.625rem; /* 10px */
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.1;
  text-align: center;
  font-family: 'JoyM', sans-serif;
`;

/* 가입하기 버튼 */
const SignUpButton = styled.button`
  width: 217px;
  height: 58px;
  background-color: #66CE94;
  color: #fff;
  font-size: 32px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DNFBitBitTTF', sans-serif; /* 전용 폰트 */
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.30);
`;
