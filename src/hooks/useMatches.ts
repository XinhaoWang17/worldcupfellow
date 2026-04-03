import { useState, useEffect, useCallback } from 'react';
import { Match } from '../types';
import { fetchMatches, invalidateCache } from '../services/api';

export interface UseMatchesResult {
  matches: Match[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useMatches(): UseMatchesResult {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (forceRefresh = false) => {
    setLoading(true);
    setError(null);
    if (forceRefresh) invalidateCache();
    try {
      const data = await fetchMatches();
      setMatches(data);
    } catch (e) {
      setError('Failed to load matches.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const refresh = useCallback(() => load(true), [load]);

  return { matches, loading, error, refresh };
}
