import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  height: 100%;
  margin: auto;
`;

export const Main = styled.main`
  margin-top: 120px;

  display: flex;
  justify-content: space-between;
  gap: 20px;

  padding: 0 10px;
`;

export const FeedContainer = styled.div`
  flex: 1;
  background-color: #101018;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  overflow-y: scroll;

  max-height: 70vh;

  padding: 15px;

  @media(max-width: 640px) {
    max-height: 75vh;
  }

  ::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #101018;        /* color of the tracking area */
    border-radius: 10px;

  }

  ::-webkit-scrollbar-thumb {
    background-color: #101018;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid #26262e;  /* creates padding around scroll thumb */
  }
`;

export const SideBarContainer = styled.div`
  width: 200px;
  height: 300px;

  border-radius: 20px;

  background-color: #101018;

  @media(max-width: 640px) {
    display: none;
  }
`;