import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStandings } from '../../src/hooks/useStandings';
import { useTheme } from '../../src/hooks/useTheme';
import GroupTable from '../../src/components/GroupTable';
import LoadingSpinner from '../../src/components/LoadingSpinner';
import ErrorBanner from '../../src/components/ErrorBanner';

const GROUP_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'] as const;

export default function StandingsScreen() {
  const colors = useTheme();
  const { groups, loading, error, refresh } = useStandings();
  const [refreshing, setRefreshing] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  const displayedGroups = selectedGroup
    ? groups.filter((g) => g.letter === selectedGroup)
    : groups;

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
        <View>
          <Text style={styles.headerTitle}>📊 积分榜</Text>
          <Text style={styles.headerSub}>2026 FIFA 世界杯 · 12 组</Text>
        </View>
      </View>

      {/* Group filter */}
      <View style={[styles.groupFilterWrap, { backgroundColor: colors.background }]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.groupFilterRow}
        >
          <TouchableOpacity
            onPress={() => setSelectedGroup(null)}
            style={[
              styles.groupChip,
              selectedGroup === null
                ? { backgroundColor: colors.primary }
                : { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 },
            ]}
          >
            <Text
              style={[
                styles.groupChipText,
                { color: selectedGroup === null ? '#FFFFFF' : colors.textSecondary },
              ]}
            >
              全部
            </Text>
          </TouchableOpacity>

          {GROUP_LETTERS.map((letter) => {
            const active = selectedGroup === letter;
            return (
              <TouchableOpacity
                key={letter}
                onPress={() => setSelectedGroup(active ? null : letter)}
                style={[
                  styles.groupChip,
                  active
                    ? { backgroundColor: colors.accent }
                    : { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 },
                ]}
              >
                <Text
                  style={[
                    styles.groupChipText,
                    { color: active ? '#000000' : colors.textSecondary },
                  ]}
                >
                  {letter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Content */}
      {loading && !refreshing ? (
        <LoadingSpinner message="加载积分榜中…" />
      ) : error && groups.length === 0 ? (
        <ErrorBanner message={error} onRetry={handleRefresh} />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              tintColor={colors.accent}
              colors={[colors.accent]}
            />
          }
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {displayedGroups.length === 0 && (
            <View style={styles.emptyContainer}>
              <Text style={[styles.emptyText, { color: colors.textMuted }]}>
                暂无数据
              </Text>
            </View>
          )}
          {displayedGroups.map((group) => (
            <GroupTable key={group.letter} group={group} />
          ))}

          {/* Tournament info footer */}
          <View style={[styles.footer, { borderTopColor: colors.borderLight }]}>
            <Text style={[styles.footerText, { color: colors.textMuted }]}>
              🏆 2026 FIFA World Cup™ · 美国 加拿大 墨西哥
            </Text>
            <Text style={[styles.footerText, { color: colors.textMuted }]}>
              2026.6.11 – 7.19 · 48支球队 · 104场比赛
            </Text>
            <Text style={[styles.footerSub, { color: colors.textMuted }]}>
              数据来源：wc2026api.com
            </Text>
          </View>
        </ScrollView>
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
    marginTop: 2,
  },
  groupFilterWrap: {
    paddingVertical: 10,
  },
  groupFilterRow: {
    paddingHorizontal: 16,
    gap: 8,
  },
  groupChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    minWidth: 44,
    alignItems: 'center',
  },
  groupChipText: {
    fontSize: 13,
    fontWeight: '700',
  },
  scrollContent: {
    paddingTop: 4,
    paddingBottom: 30,
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 15,
  },
  footer: {
    marginTop: 8,
    marginHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderTopWidth: 1,
    gap: 4,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
  },
  footerSub: {
    fontSize: 10,
    marginTop: 4,
  },
});
