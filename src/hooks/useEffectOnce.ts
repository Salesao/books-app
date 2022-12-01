import { EffectCallback, useEffect } from "react";

// эффект сробатывает лишь один раз при монтировании компонента
export const useEffectOnce = (effect: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
};
