import { useCallback, useRef } from "react";
import useEventListener from "../useEventListener";

const CTRL_OR_META = "ctrlOrMetaKey";

const checkModifierInEvent = (event, modifier) => {
  if (event[modifier]) return true;
  if (modifier === CTRL_OR_META) {
    return event.ctrlKey || event.metaKey;
  }
  return false;
};
export default function useKeyEvent({
  keys = [],
  modifier,
  ref,
  callback,
  ignoreDocumentFallback = false,
  capture = false,
  preventDefault = false,
  stopPropagation = false,
  keyEventName = "keydown" // need keydown and not keyup to prevent scrolling with prevent default, for example during menu keyboard navigation
}) {
  const documentRef = useRef(document);
  const onKeyUpPress = useCallback(
    event => {
      const { key } = event;
      if (!keys.includes(key)) {
        return;
      }
      if (modifier && !checkModifierInEvent(event, modifier)) {
        return;
      }

      if (preventDefault) {
        event.preventDefault();
      }

      if (stopPropagation) {
        event.stopPropagation();
      }

      callback(event);
    },
    [callback, keys, preventDefault, stopPropagation, modifier]
  );

  let listenerRef;

  if (ref) {
    listenerRef = ref;
  } else if (ignoreDocumentFallback) {
    listenerRef = null;
  } else {
    listenerRef = documentRef;
  }

  useEventListener({
    eventName: keyEventName,
    callback: onKeyUpPress,
    ref: listenerRef,
    capture
  });
}

useKeyEvent.modifiers = {
  ALT: "altKey",
  META: "metaKey", // i.e. CMD key
  CTRL: "ctrlKey",
  SHIFT: "shiftKey",
  CTRL_OR_META
};
