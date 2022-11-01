import styled from "styled-components";

interface iPropsTypography {
  color?: string;
}

const Heading1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: var(--Color-${({ color = "gray-3" }: iPropsTypography) => color});
`;

const Heading2 = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: var(--Color-${({ color = "gray-3" }: iPropsTypography) => color});
`;
const Heading3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: var(--Color-${({ color = "gray-3" }: iPropsTypography) => color});
`;
const Text1 = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: var(--Color-${({ color = "gray-3" }: iPropsTypography) => color});
`;
const Text2 = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--Color-${({ color = "gray-3" }: iPropsTypography) => color});
`;
export { Heading1, Heading2, Heading3, Text1, Text2 };
