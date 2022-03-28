import { writable, derived } from "svelte/store";
import translations from "src/translate.js";

export const dict = writable();
export const locale = writable('us');
export const languages = Object.keys(translations);

const localizedDict = derived([dict, locale], ([dict, locale]) => {
  if (!dict || !locale) return;
  return (dict[locale]);
});

const getMessageFromLocalizedDict = (id, localizedDict) => {
  const splitId = id.split('.');
  let message = { ...localizedDict };
  splitId.forEach((partialId) => {
    message = message[partialId];
  });
  return (message);
}

const createMessageFormatter = (localizedDict) => (id) => getMessageFromLocalizedDict(id, localizedDict);

export const __ = derived(localizedDict, (localizedDict) => {
  return (createMessageFormatter(localizedDict));
});