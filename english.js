import { postIntermediateEvent } from "./rapids";

export function handleEnglishGreeting(recipient) {
  postIntermediateEvent({ greeting: "Hello", recipient });
}
