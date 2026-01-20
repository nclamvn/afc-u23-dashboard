import { Position, ResultType } from '@/data/types';

export function getPlayerAvatar(name: string, size: number = 200): string {
  // Use DiceBear Avatars for more professional look
  const seed = encodeURIComponent(name);
  return `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=1e1e32&textColor=ffffff&fontSize=40&size=${size}`;
}

export function getPlayerPhoto(name: string): string {
  // Use DiceBear "lorelei" style for realistic-ish avatars
  const seed = encodeURIComponent(name);
  return `https://api.dicebear.com/7.x/lorelei/svg?seed=${seed}&backgroundColor=1e1e32`;
}

export function getImageWithFallback(image: string | undefined, name: string, size: number = 200): string {
  // Always return DiceBear avatar - more reliable than broken URLs
  const seed = encodeURIComponent(name);
  return `https://api.dicebear.com/7.x/lorelei/svg?seed=${seed}&backgroundColor=1e1e32&size=${size}`;
}

export function getPlayerAvatarDicebear(seed: string): string {
  return `https://api.dicebear.com/7.x/lorelei/svg?seed=${encodeURIComponent(seed)}&backgroundColor=1e1e32`;
}

export function getFlagUrl(countryCode: string): string {
  return `https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`;
}

export function getPositionColor(position: Position): string {
  const colors = {
    GK: 'badge-gk',
    DF: 'badge-df',
    MF: 'badge-mf',
    FW: 'badge-fw',
  };
  return colors[position] || 'badge-mf';
}

export function getResultColor(result: ResultType): string {
  const colors = {
    W: 'result-win',
    D: 'result-draw',
    L: 'result-loss',
  };
  return colors[result] || 'result-draw';
}

export function formatMarketValue(value: string): string {
  return value;
}

export function parseMarketValue(value: string): number {
  const match = value.match(/€([\d.]+)(k|m)?/i);
  if (!match) return 0;
  const num = parseFloat(match[1]);
  const unit = match[2]?.toLowerCase();
  if (unit === 'm') return num;
  if (unit === 'k') return num / 1000;
  return num;
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getVenueLabel(venue: 'H' | 'A' | 'N'): string {
  const labels = {
    H: 'Home',
    A: 'Away',
    N: 'Neutral',
  };
  return labels[venue] || venue;
}

export function calculateAge(dateOfBirth: string): number {
  const [day, month, year] = dateOfBirth.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
