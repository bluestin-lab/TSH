import styled from "styled-components/macro";

interface PaginationProps {
  active: boolean;
}

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 56px;
`;

export const Ellipsis = styled.span`
  margin: 0 6px;
`;

export const EdgeButtonWrapper = styled.span<PaginationProps>`
  margin: 0 20px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#9194A5" : "inherit")};
  pointer-events: ${({ active }) => (active ? "none" : "auto")};
`;

export const NumberWrapper = styled.span<PaginationProps>`
  margin: 0 8px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#4460F7" : "inherit")};
  pointer-events: ${({ active }) => (active ? "none" : "auto")};
`;
