import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Group, Standing } from '../types';
import { useTheme } from '../hooks/useTheme';

interface Props {
  group: Group;
}

const COL_WIDTHS = {
  flag: 28,
  name: 80,
  stat: 28,
  pts: 32,
};

function StandingRow({
  standing,
  isQualified,
}: {
  standing: Standing;
  isQualified: boolean;
}) {
  const colors = useTheme();

  return (
    <View
      style={[
        styles.row,
        isQualified && {
          backgroundColor: colors.qualifiedHighlight,
          borderLeftWidth: 3,
          borderLeftColor: colors.qualifiedBorder,
        },
      ]}
    >
      <Text style={[styles.pos, { color: colors.textMuted }]}>
        {standing.position}
      </Text>
      <Text style={[styles.flag]}>{standing.team.flagEmoji}</Text>
      <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>
        {standing.team.nameZh}
      </Text>
      <Text style={[styles.stat, { color: colors.textSecondary }]}>{standing.played}</Text>
      <Text style={[styles.stat, { color: colors.textSecondary }]}>{standing.won}</Text>
      <Text style={[styles.stat, { color: colors.textSecondary }]}>{standing.drawn}</Text>
      <Text style={[styles.stat, { color: colors.textSecondary }]}>{standing.lost}</Text>
      <Text style={[styles.stat, { color: colors.textSecondary }]}>{standing.goalsFor}</Text>
      <Text style={[styles.stat, { color: colors.textSecondary }]}>{standing.goalsAgainst}</Text>
      <Text style={[styles.stat, { color: colors.textSecondary }]}>
        {standing.goalDiff >= 0 ? `+${standing.goalDiff}` : standing.goalDiff}
      </Text>
      <Text style={[styles.pts, { color: colors.text }]}>{standing.points}</Text>
    </View>
  );
}

export default function GroupTable({ group }: Props) {
  const colors = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      {/* Group header */}
      <View style={[styles.groupHeader, { backgroundColor: colors.primary }]}>
        <Text style={styles.groupHeaderText}>{group.name}</Text>
      </View>

      {/* Column headers */}
      <View style={[styles.row, styles.headerRow, { borderBottomColor: colors.border }]}>
        <Text style={[styles.pos, { color: colors.textMuted }]}>#</Text>
        <Text style={[styles.flag, { color: colors.textMuted }]}> </Text>
        <Text style={[styles.name, { color: colors.textMuted, fontWeight: '600' }]}>球队</Text>
        <Text style={[styles.stat, { color: colors.textMuted }]}>赛</Text>
        <Text style={[styles.stat, { color: colors.textMuted }]}>胜</Text>
        <Text style={[styles.stat, { color: colors.textMuted }]}>平</Text>
        <Text style={[styles.stat, { color: colors.textMuted }]}>负</Text>
        <Text style={[styles.stat, { color: colors.textMuted }]}>进</Text>
        <Text style={[styles.stat, { color: colors.textMuted }]}>失</Text>
        <Text style={[styles.stat, { color: colors.textMuted }]}>差</Text>
        <Text style={[styles.pts, { color: colors.textMuted, fontWeight: '700' }]}>分</Text>
      </View>

      {/* Team rows */}
      {group.standings.map((standing, index) => (
        <StandingRow
          key={standing.team.id}
          standing={standing}
          isQualified={index < 2}
        />
      ))}

      {/* Legend */}
      <View style={[styles.legend, { borderTopColor: colors.borderLight }]}>
        <View style={[styles.legendDot, { backgroundColor: colors.qualifiedBorder }]} />
        <Text style={[styles.legendText, { color: colors.textMuted }]}>
          小组前两名晋级32强
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  groupHeader: {
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  groupHeaderText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  headerRow: {
    borderBottomWidth: 1,
    paddingVertical: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  pos: {
    width: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  flag: {
    width: COL_WIDTHS.flag,
    fontSize: 18,
    textAlign: 'center',
  },
  name: {
    flex: 1,
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 4,
  },
  stat: {
    width: COL_WIDTHS.stat,
    fontSize: 12,
    textAlign: 'center',
  },
  pts: {
    width: COL_WIDTHS.pts,
    fontSize: 13,
    fontWeight: '800',
    textAlign: 'center',
  },
  legend: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderTopWidth: 1,
    gap: 6,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 10,
  },
});
