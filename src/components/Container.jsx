import Stats from "./Stats";
import Textarea from "./Textarea";
import { useState } from "react";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

export default Container;