import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Match } from '../types';
import { useTheme } from '../hooks/useTheme';
import { FIFA_COLORS } from '../theme/colors';

interface Props {
  match: Match;
  style?: ViewStyle;
}

function formatMatchTime(isoDate: string): string {
  try {
    const d = new Date(isoDate);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '--:--';
  }
}

function ScoreOrTime({ match }: { match: Match }) {
  const colors = useTheme();

  if (match.status === 'live') {
    const homeScore = match.homeScore ?? 0;
    const awayScore = match.awayScore ?? 0;
    return (
      <View style={styles.scoreBox}>
        <View style={[styles.liveIndicator, { backgroundColor: colors.liveIndicator }]}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
        <Text style={[styles.score, { color: colors.accent }]}>
          {homeScore} – {awayScore}
        </Text>
      </View>
    );
  }

  if (match.status === 'finished') {
    const homeScore = match.homeScore ?? 0;
    const awayScore = match.awayScore ?? 0;
    return (
      <View style={styles.scoreBox}>
        <Text style={[styles.scoreFinal, { color: colors.text }]}>
          {homeScore} – {awayScore}
        </Text>
        <Text style={[styles.statusLabel, { color: colors.textMuted }]}>FT</Text>
      </View>
    );
  }

  return (
    <View style={styles.scoreBox}>
      <Text style={[styles.time, { color: colors.primary }]}>
        {formatMatchTime(match.date)}
      </Text>
    </View>
  );
}

export default function MatchCard({ match, style }: Props) {
  const colors = useTheme();

  const isLive = match.status === 'live';
  const cardBorderColor = isLive ? colors.accent : 'transparent';

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: cardBorderColor,
          borderWidth: isLive ? 1.5 : 0,
          shadowColor: colors.shadow,
        },
        style,
      ]}
    >
      {/* Group badge + venue row */}
      <View style={styles.metaRow}>
        {match.group ? (
          <View style={[styles.groupBadge, { backgroundColor: colors.groupBadge }]}>
            <Text style={[styles.groupBadgeText, { color: colors.groupBadgeText }]}>
              Group {match.group}
            </Text>
          </View>
        ) : (
          <View style={[styles.stageBadge, { borderColor: colors.border }]}>
            <Text style={[styles.stageBadgeText, { color: colors.textSecondary }]}>
              {match.stage}
            </Text>
          </View>
        )}
        <Text style={[styles.venue, { color: colors.textMuted }]} numberOfLines={1}>
          {match.city}
        </Text>
      </View>

      {/* Teams + Score row */}
      <View style={styles.matchRow}>
        {/* Home team */}
        <View style={styles.teamBlock}>
          <Text style={styles.flag}>{match.homeTeam.flagEmoji}</Text>
          <Text
            style={[styles.teamName, { color: colors.text }]}
            numberOfLines={2}
          >
            {match.homeTeam.nameZh}
          </Text>
        </View>

        {/* Score / Time */}
        <ScoreOrTime match={match} />

        {/* Away team */}
        <View style={[styles.teamBlock, styles.teamBlockRight]}>
          <Text style={styles.flag}>{match.awayTeam.flagEmoji}</Text>
          <Text
            style={[styles.teamName, { color: colors.text }]}
            numberOfLines={2}
          >
            {match.awayTeam.nameZh}
          </Text>
        </View>
      </View>

      {/* Venue name */}
      <Text style={[styles.venueDetail, { color: colors.textMuted }]} numberOfLines={1}>
        {match.venue}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginVertical: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  groupBadge: {
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  groupBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  stageBadge: {
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderWidth: 1,
  },
  stageBadgeText: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  venue: {
    fontSize: 11,
    flex: 1,
    textAlign: 'right',
  },
  matchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  teamBlock: {
    flex: 1,
    alignItems: 'center',
  },
  teamBlockRight: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 32,
    lineHeight: 40,
  },
  teamName: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 2,
  },
  scoreBox: {
    flex: 0,
    minWidth: 80,
    alignItems: 'center',
    gap: 2,
  },
  liveIndicator: {
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 1,
    marginBottom: 2,
  },
  liveText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },
  score: {
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 1,
  },
  scoreFinal: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
  },
  statusLabel: {
    fontSize: 10,
    fontWeight: '500',
  },
  time: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  venueDetail: {
    fontSize: 10,
    textAlign: 'center',
  },
});
