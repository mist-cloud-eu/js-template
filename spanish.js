import { postIntermediateEvent } from "./rapids";

export function handleSpanishGreeting(recipient) {
  postIntermediateEvent({ greeting: "Hola", recipient });
}
