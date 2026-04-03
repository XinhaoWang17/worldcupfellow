import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Match } from '../../src/types';
import { useMatches } from '../../src/hooks/useMatches';
import { useTheme } from '../../src/hooks/useTheme';
import MatchCard from '../../src/components/MatchCard';
import LoadingSpinner from '../../src/components/LoadingSpinner';
import ErrorBanner from '../../src/components/ErrorBanner';

// ─────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────

const STAGES = ['全部', '小组赛', '淘汰赛'] as const;
type StageFilter = (typeof STAGES)[number];

const GROUPS = ['全部', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'] as const;
type GroupFilter = (typeof GROUPS)[number];

function formatSectionDate(isoDate: string): string {
  try {
    const d = new Date(isoDate);
    return d.toLocaleDateString('zh-CN', {
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
  } catch {
    return isoDate;
  }
}

function matchDateKey(isoDate: string): string {
  try {
    const d = new Date(isoDate);
    return d.toISOString().slice(0, 10); // "YYYY-MM-DD"
  } catch {
    return isoDate;
  }
}

function groupMatchesByDate(matches: Match[]): { title: string; dateKey: string; data: Match[] }[] {
  const map = new Map<string, Match[]>();
  for (const match of matches) {
    const key = matchDateKey(match.date);
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(match);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, data]) => ({
      title: formatSectionDate(data[0].date),
      dateKey: key,
      data,
    }));
}

// ─────────────────────────────────────────────────
// Filter chips
// ─────────────────────────────────────────────────

function FilterChips<T extends string>({
  options,
  selected,
  onSelect,
}: {
  options: readonly T[];
  selected: T;
  onSelect: (v: T) => void;
}) {
  const colors = useTheme();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.filterRow}
    >
      {options.map((opt) => {
        const active = opt === selected;
        return (
          <TouchableOpacity
            key={opt}
            onPress={() => onSelect(opt)}
            style={[
              styles.chip,
              active
                ? { backgroundColor: colors.primary }
                : { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 },
            ]}
          >
            <Text
              style={[
                styles.chipText,
                { color: active ? '#FFFFFF' : colors.textSecondary },
              ]}
            >
              {opt === '全部' ? opt : opt.length === 1 ? `组 ${opt}` : opt}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

// ─────────────────────────────────────────────────
// Section header
// ─────────────────────────────────────────────────

function SectionHeader({ title }: { title: string }) {
  const colors = useTheme();
  return (
    <View style={[styles.sectionHeader, { backgroundColor: colors.sectionHeader }]}>
      <Text style={[styles.sectionHeaderText, { color: colors.sectionHeaderText }]}>
        {title}
      </Text>
    </View>
  );
}

// ─────────────────────────────────────────────────
// Main screen
// ─────────────────────────────────────────────────

export default function ScheduleScreen() {
  const colors = useTheme();
  const { matches, loading, error, refresh } = useMatches();
  const [refreshing, setRefreshing] = useState(false);
  const [stageFilter, setStageFilter] = useState<StageFilter>('全部');
  const [groupFilter, setGroupFilter] = useState<GroupFilter>('全部');

  const handleRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  const filtered = useMemo(() => {
    return matches.filter((m) => {
      if (stageFilter === '小组赛' && m.stage !== 'Group') return false;
      if (stageFilter === '淘汰赛' && m.stage === 'Group') return false;
      if (groupFilter !== '全部' && m.group !== groupFilter) return false;
      return true;
    });
  }, [matches, stageFilter, groupFilter]);

  const sections = useMemo(() => groupMatchesByDate(filtered), [filtered]);

  const liveCount = matches.filter((m) => m.status === 'live').length;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={['top']}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.headerBackground}
      />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.headerBackground }]}>
        <View style={styles.headerTitleRow}>
          <Text style={styles.headerTitle}>⚽ 赛程</Text>
          <Text style={styles.headerSub}>2026 FIFA 世界杯</Text>
        </View>
        {liveCount > 0 && (
          <View style={[styles.liveBadge, { backgroundColor: colors.liveIndicator }]}>
            <Text style={styles.liveBadgeText}>● {liveCount} 场进行中</Text>
          </View>
        )}
      </View>

      {/* Stage filter */}
      <View style={[styles.filterContainer, { backgroundColor: colors.background }]}>
        <FilterChips options={STAGES} selected={stageFilter} onSelect={(v) => {
          setStageFilter(v);
          setGroupFilter('全部');
        }} />
        {stageFilter !== '淘汰赛' && (
          <FilterChips options={GROUPS} selected={groupFilter} onSelect={setGroupFilter} />
        )}
      </View>

      {/* Content */}
      {loading && !refreshing ? (
        <LoadingSpinner message="加载赛程中…" />
      ) : error && matches.length === 0 ? (
        <ErrorBanner message={error} onRetry={handleRefresh} />
      ) : sections.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, { color: colors.textMuted }]}>暂无赛事</Text>
        </View>
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MatchCard match={item} />}
          renderSectionHeader={({ section }) => (
            <SectionHeader title={section.title} />
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              tintColor={colors.accent}
              colors={[colors.accent]}
            />
          }
          contentContainerStyle={styles.listContent}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitleRow: {
    gap: 2,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  headerSub: {
    color: '#A8BFDC',
    fontSize: 11,
    letterSpacing: 0.5,
  },
  liveBadge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  liveBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  filterContainer: {
    paddingTop: 10,
    paddingBottom: 4,
    gap: 6,
  },
  filterRow: {
    paddingHorizontal: 16,
    gap: 8,
    paddingBottom: 4,
  },
  chip: {
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 20,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 15,
  },
});
