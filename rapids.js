import { postToRapids } from "@mist-cloud-eu/mist-tools-ts";

export function postIntermediateEvent(body) {
  postToRapids("intermediate", JSON.stringify(body));
}
export function postReplyEvent(body) {
  postToRapids("reply", body);
}
