import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyledText } from "src/components/atoms/styled_text";
import { StyledView } from "src/components/atoms/styled_view";

export default function App() {
  return (
    <StyledView util={["mt-5"]}>
      <StatusBar style="auto" />
      <StyledView util={["shadow-sm", "bg-white", "rounded", "justify-center", "mx-3", "my-3", "p-3"]}>
        <StyledText util={["h1", "mb-2"]}>Example Card</StyledText>
        <StyledText util={["text-gray600"]}>
          This is an example of some test. Aute labore consectetur officia
          nostrud. Adipisicing do consectetur nulla in cillum nisi et nostrud
          magna commodo non veniam fugiat laborum. Eiusmod mollit minim eu ea
          ullamco cupidatat ullamco exercitation.
        </StyledText>
      </StyledView>
    </StyledView>
  );
}


