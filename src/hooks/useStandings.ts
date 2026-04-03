import { useState, useEffect, useCallback } from 'react';
import { Group } from '../types';
import { fetchStandings, invalidateCache } from '../services/api';

export interface UseStandingsResult {
  groups: Group[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useStandings(): UseStandingsResult {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (forceRefresh = false) => {
    setLoading(true);
    setError(null);
    if (forceRefresh) invalidateCache();
    try {
      const data = await fetchStandings();
      setGroups(data);
    } catch (e) {
      setError('Failed to load standings.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const refresh = useCallback(() => load(true), [load]);

  return { groups, loading, error, refresh };
}
