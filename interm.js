import { postReplyEvent } from "./rapids";

export function handleIntermediate(greeting, recipient) {
  postReplyEvent(`${greeting}, ${recipient}!`);
}
