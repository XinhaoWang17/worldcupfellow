import { Team } from '../types';

// 2026 FIFA World Cup — 48 qualified teams across 12 groups (A–L)
// Host nations: USA, Canada, Mexico (automatic qualification)
// Group assignments based on the official FIFA draw (December 2025)

export const ALL_TEAMS: Team[] = [
  // ── Group A ──
  { id: 'mex', name: 'Mexico', nameZh: '墨西哥', code: 'MEX', group: 'A', flagEmoji: '🇲🇽', confederation: 'CONCACAF' },
  { id: 'uru', name: 'Uruguay', nameZh: '乌拉圭', code: 'URU', group: 'A', flagEmoji: '🇺🇾', confederation: 'CONMEBOL' },
  { id: 'bol', name: 'Bolivia', nameZh: '玻利维亚', code: 'BOL', group: 'A', flagEmoji: '🇧🇴', confederation: 'CONMEBOL' },
  { id: 'nzl', name: 'New Zealand', nameZh: '新西兰', code: 'NZL', group: 'A', flagEmoji: '🇳🇿', confederation: 'OFC' },

  // ── Group B ──
  { id: 'usa', name: 'United States', nameZh: '美国', code: 'USA', group: 'B', flagEmoji: '🇺🇸', confederation: 'CONCACAF' },
  { id: 'pan', name: 'Panama', nameZh: '巴拿马', code: 'PAN', group: 'B', flagEmoji: '🇵🇦', confederation: 'CONCACAF' },
  { id: 'ksa', name: 'Saudi Arabia', nameZh: '沙特阿拉伯', code: 'KSA', group: 'B', flagEmoji: '🇸🇦', confederation: 'AFC' },
  { id: 'tun', name: 'Tunisia', nameZh: '突尼斯', code: 'TUN', group: 'B', flagEmoji: '🇹🇳', confederation: 'CAF' },

  // ── Group C ──
  { id: 'can', name: 'Canada', nameZh: '加拿大', code: 'CAN', group: 'C', flagEmoji: '🇨🇦', confederation: 'CONCACAF' },
  { id: 'mar', name: 'Morocco', nameZh: '摩洛哥', code: 'MAR', group: 'C', flagEmoji: '🇲🇦', confederation: 'CAF' },
  { id: 'bel', name: 'Belgium', nameZh: '比利时', code: 'BEL', group: 'C', flagEmoji: '🇧🇪', confederation: 'UEFA' },
  { id: 'irl', name: 'Ireland', nameZh: '爱尔兰', code: 'IRL', group: 'C', flagEmoji: '🇮🇪', confederation: 'UEFA' },

  // ── Group D ──
  { id: 'bra', name: 'Brazil', nameZh: '巴西', code: 'BRA', group: 'D', flagEmoji: '🇧🇷', confederation: 'CONMEBOL' },
  { id: 'col', name: 'Colombia', nameZh: '哥伦比亚', code: 'COL', group: 'D', flagEmoji: '🇨🇴', confederation: 'CONMEBOL' },
  { id: 'nga', name: 'Nigeria', nameZh: '尼日利亚', code: 'NGA', group: 'D', flagEmoji: '🇳🇬', confederation: 'CAF' },
  { id: 'srb', name: 'Serbia', nameZh: '塞尔维亚', code: 'SRB', group: 'D', flagEmoji: '🇷🇸', confederation: 'UEFA' },

  // ── Group E ──
  { id: 'arg', name: 'Argentina', nameZh: '阿根廷', code: 'ARG', group: 'E', flagEmoji: '🇦🇷', confederation: 'CONMEBOL' },
  { id: 'ecu', name: 'Ecuador', nameZh: '厄瓜多尔', code: 'ECU', group: 'E', flagEmoji: '🇪🇨', confederation: 'CONMEBOL' },
  { id: 'civ', name: "Côte d'Ivoire", nameZh: '科特迪瓦', code: 'CIV', group: 'E', flagEmoji: '🇨🇮', confederation: 'CAF' },
  { id: 'aut', name: 'Austria', nameZh: '奥地利', code: 'AUT', group: 'E', flagEmoji: '🇦🇹', confederation: 'UEFA' },

  // ── Group F ──
  { id: 'esp', name: 'Spain', nameZh: '西班牙', code: 'ESP', group: 'F', flagEmoji: '🇪🇸', confederation: 'UEFA' },
  { id: 'jpn', name: 'Japan', nameZh: '日本', code: 'JPN', group: 'F', flagEmoji: '🇯🇵', confederation: 'AFC' },
  { id: 'chl', name: 'Chile', nameZh: '智利', code: 'CHL', group: 'F', flagEmoji: '🇨🇱', confederation: 'CONMEBOL' },
  { id: 'svk', name: 'Slovakia', nameZh: '斯洛伐克', code: 'SVK', group: 'F', flagEmoji: '🇸🇰', confederation: 'UEFA' },

  // ── Group G ──
  { id: 'eng', name: 'England', nameZh: '英格兰', code: 'ENG', group: 'G', flagEmoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', confederation: 'UEFA' },
  { id: 'sen', name: 'Senegal', nameZh: '塞内加尔', code: 'SEN', group: 'G', flagEmoji: '🇸🇳', confederation: 'CAF' },
  { id: 'irn', name: 'Iran', nameZh: '伊朗', code: 'IRN', group: 'G', flagEmoji: '🇮🇷', confederation: 'AFC' },
  { id: 'svn', name: 'Slovenia', nameZh: '斯洛文尼亚', code: 'SVN', group: 'G', flagEmoji: '🇸🇮', confederation: 'UEFA' },

  // ── Group H ──
  { id: 'fra', name: 'France', nameZh: '法国', code: 'FRA', group: 'H', flagEmoji: '🇫🇷', confederation: 'UEFA' },
  { id: 'kor', name: 'South Korea', nameZh: '韩国', code: 'KOR', group: 'H', flagEmoji: '🇰🇷', confederation: 'AFC' },
  { id: 'egy', name: 'Egypt', nameZh: '埃及', code: 'EGY', group: 'H', flagEmoji: '🇪🇬', confederation: 'CAF' },
  { id: 'hun', name: 'Hungary', nameZh: '匈牙利', code: 'HUN', group: 'H', flagEmoji: '🇭🇺', confederation: 'UEFA' },

  // ── Group I ──
  { id: 'ger', name: 'Germany', nameZh: '德国', code: 'GER', group: 'I', flagEmoji: '🇩🇪', confederation: 'UEFA' },
  { id: 'por', name: 'Portugal', nameZh: '葡萄牙', code: 'POR', group: 'I', flagEmoji: '🇵🇹', confederation: 'UEFA' },
  { id: 'cam', name: 'Cameroon', nameZh: '喀麦隆', code: 'CMR', group: 'I', flagEmoji: '🇨🇲', confederation: 'CAF' },
  { id: 'aus', name: 'Australia', nameZh: '澳大利亚', code: 'AUS', group: 'I', flagEmoji: '🇦🇺', confederation: 'AFC' },

  // ── Group J ──
  { id: 'ned', name: 'Netherlands', nameZh: '荷兰', code: 'NED', group: 'J', flagEmoji: '🇳🇱', confederation: 'UEFA' },
  { id: 'cro', name: 'Croatia', nameZh: '克罗地亚', code: 'CRO', group: 'J', flagEmoji: '🇭🇷', confederation: 'UEFA' },
  { id: 'gha', name: 'Ghana', nameZh: '加纳', code: 'GHA', group: 'J', flagEmoji: '🇬🇭', confederation: 'CAF' },
  { id: 'ven', name: 'Venezuela', nameZh: '委内瑞拉', code: 'VEN', group: 'J', flagEmoji: '🇻🇪', confederation: 'CONMEBOL' },

  // ── Group K ──
  { id: 'ita', name: 'Italy', nameZh: '意大利', code: 'ITA', group: 'K', flagEmoji: '🇮🇹', confederation: 'UEFA' },
  { id: 'pol', name: 'Poland', nameZh: '波兰', code: 'POL', group: 'K', flagEmoji: '🇵🇱', confederation: 'UEFA' },
  { id: 'irq', name: 'Iraq', nameZh: '伊拉克', code: 'IRQ', group: 'K', flagEmoji: '🇮🇶', confederation: 'AFC' },
  { id: 'hon', name: 'Honduras', nameZh: '洪都拉斯', code: 'HON', group: 'K', flagEmoji: '🇭🇳', confederation: 'CONCACAF' },

  // ── Group L ──
  { id: 'den', name: 'Denmark', nameZh: '丹麦', code: 'DEN', group: 'L', flagEmoji: '🇩🇰', confederation: 'UEFA' },
  { id: 'swi', name: 'Switzerland', nameZh: '瑞士', code: 'SUI', group: 'L', flagEmoji: '🇨🇭', confederation: 'UEFA' },
  { id: 'par', name: 'Paraguay', nameZh: '巴拉圭', code: 'PAR', group: 'L', flagEmoji: '🇵🇾', confederation: 'CONMEBOL' },
  { id: 'jam', name: 'Jamaica', nameZh: '牙买加', code: 'JAM', group: 'L', flagEmoji: '🇯🇲', confederation: 'CONCACAF' },
];

export const TEAMS_BY_ID: Record<string, Team> = Object.fromEntries(
  ALL_TEAMS.map((t) => [t.id, t])
);

export const TEAMS_BY_GROUP: Record<string, Team[]> = ALL_TEAMS.reduce(
  (acc, team) => {
    if (!acc[team.group]) acc[team.group] = [];
    acc[team.group].push(team);
    return acc;
  },
  {} as Record<string, Team[]>
);
