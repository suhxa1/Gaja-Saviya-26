import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { PredictResponse } from '../api';

type RiskSelection = {
  district: string;
  month: number;
  useRainfall: boolean;
  prediction: PredictResponse | null;
  updatedAt: number | null;
};

type RiskSelectionContextValue = {
  selection: RiskSelection;
  savePrediction: (
    prediction: PredictResponse,
    month: number,
    useRainfall: boolean
  ) => void;
};

const RiskSelectionContext = createContext<RiskSelectionContextValue | null>(null);

export const RiskSelectionProvider = ({ children }: React.PropsWithChildren) => {
  const [selection, setSelection] = useState<RiskSelection>({
    district: 'Anuradhapura',
    month: new Date().getMonth() + 1,
    useRainfall: true,
    prediction: null,
    updatedAt: null,
  });

  const savePrediction = useCallback(
    (prediction: PredictResponse, month: number, useRainfall: boolean) => {
      setSelection({
        district: prediction.district,
        month,
        useRainfall,
        prediction,
        updatedAt: Date.now(),
      });
    },
    []
  );

  const value = useMemo<RiskSelectionContextValue>(
    () => ({
      selection,
      savePrediction,
    }),
    [selection, savePrediction]
  );

  return (
    <RiskSelectionContext.Provider value={value}>
      {children}
    </RiskSelectionContext.Provider>
  );
};

export const useRiskSelection = () => {
  const value = useContext(RiskSelectionContext);
  if (!value) {
    throw new Error('useRiskSelection must be used inside RiskSelectionProvider');
  }
  return value;
};
