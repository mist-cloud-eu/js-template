import { mistService } from "@mist-cloud-eu/mist-tools-ts";
import { handleEnglishGreeting } from "./english";
import { handleIntermediate } from "./interm";
import { handleSpanishGreeting } from "./spanish";

mistService({
  "english-action": (e) => {
    let messageId = e.messageId;
    let traceId = e.traceId;
    let payload = e.payload;
    handleEnglishGreeting(payload);
  },
  "spanish-action": (e) => {
    let messageId = e.messageId;
    let traceId = e.traceId;
    let payload = e.payload;
    handleSpanishGreeting(payload);
  },
  "intermediate-action": (e) => {
    let messageId = e.messageId;
    let traceId = e.traceId;
    let payload = JSON.parse(e.payload);
    handleIntermediate(payload.greeting, payload.recipient);
  },
});
