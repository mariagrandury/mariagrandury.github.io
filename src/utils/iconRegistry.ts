// Icon name converter for @iconify/vue
// Converts icon names from CSV format (i-mdi-newspaper) 
// to Iconify format (mdi:newspaper)

export function convertIconName(iconName: string): string | null {
  if (!iconName) return null;
  
  // Remove 'i-' prefix if present
  let name = iconName.startsWith('i-') ? iconName.slice(2) : iconName;
  
  // Convert format: mdi-newspaper -> mdi:newspaper
  // Handle different icon sets: mdi, fluent, carbon, whh, tabler, etc.
  const parts = name.split('-');
  
  if (parts.length < 2) return name;
  
  // Common icon set prefixes
  const iconSets: Record<string, string> = {
    'fluent': 'fluent',
    'mdi': 'mdi',
    'carbon': 'carbon',
    'whh': 'whh',
    'simple': 'simple-icons',
    'noto': 'noto',
    'uil': 'uil',
    'tabler': 'tabler',
  };
  
  // Find the icon set
  const iconSet = parts[0];
  const iconSetName = iconSets[iconSet] || iconSet;
  
  // Rest of the name (everything after the first part)
  const iconNamePart = parts.slice(1).join('-');
  
  return `${iconSetName}:${iconNamePart}`;
}
